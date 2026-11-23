# Hosting on AWS

The site runs on AWS for about $1 a month. Every push to `main` deploys it automatically, using [.github/workflows/deploy.yml](../.github/workflows/deploy.yml). It's the same setup as nickshouseofhorrors, minus the parts this site doesn't need (no API keys, no shared cache table).

```
Browser ─▶ CloudFront (amethystandashcoaching.com, www redirects to it)
             ├─ /_next/static   ─▶ S3
             └─ everything else ─▶ Lambda (Next.js server in a Docker image)
```

| Stack                      | File            | When it's deployed                      |
| -------------------------- | --------------- | --------------------------------------- |
| `amethystandash-bootstrap` | `bootstrap.yml` | Once, by you                            |
| `amethystandash-dns-zone`  | `dns-zone.yml`  | Once, by you                            |
| `amethystandash-dns-cert`  | `dns-cert.yml`  | Once, by you, after the Wix switch      |
| `amethystandash-app`       | `app.yml`       | Every push to `main`, by GitHub Actions |

The stack names matter, because the workflow looks them up by name.

## One-time setup

All commands run from the repo root, in **us-east-1**.

### 1. Sign in to AWS

The AWS CLI is already installed. Sign in with your SSO profile:

```bash
aws sso login
aws sts get-caller-identity   # should show your account
```

### 2. Bootstrap

This creates the GitHub deploy role, the Lambda role, the image repository and the static files bucket.

```bash
aws cloudformation deploy \
  --stack-name amethystandash-bootstrap \
  --template-file infra/bootstrap.yml \
  --capabilities CAPABILITY_NAMED_IAM
```

It reuses the GitHub sign-in provider that the nickshouseofhorrors setup already created in this account. If this is a different AWS account that never had one, add `--parameter-overrides GitHubOidcProviderExists=false`.

### 3. Move DNS from Wix to Route 53

The domain stays registered at Wix (renewals keep happening there). Only its DNS moves to AWS.

**Before switching**, in Wix:

- Copy down every DNS record, especially any **MX** records (email). Anything you don't recreate in Route 53 stops working.
- Turn off DNSSEC if it's on.

Then create the hosted zone and print its nameservers:

```bash
aws cloudformation deploy \
  --stack-name amethystandash-dns-zone \
  --template-file infra/dns-zone.yml

aws cloudformation describe-stacks --stack-name amethystandash-dns-zone \
  --query "Stacks[0].Outputs[?OutputKey=='NameServers'].OutputValue" --output text
```

1. In Wix, go to your domain's nameserver settings, click **Use custom nameservers**, and paste the 4 values.
2. If you had email or other records, add them in the AWS console under Route 53 → Hosted zones → amethystandashcoaching.com → Create record.

Nameserver changes usually take effect within an hour, but can take up to 48 hours. Check with:

```bash
dig NS amethystandashcoaching.com +short   # should list the awsdns servers from the output above
```

### 4. HTTPS certificate

Once `dig` shows the AWS nameservers:

```bash
aws cloudformation deploy \
  --stack-name amethystandash-dns-cert \
  --template-file infra/dns-cert.yml
```

This waits until AWS issues the certificate. That's usually a few minutes, but if it times out, just run it again.

### 5. Budget alert

If the nickshouseofhorrors $5 budget already covers the whole account, you're set. Otherwise: **Billing → Budgets → Create budget → Monthly cost budget**, $5, your email.

### 6. GitHub settings

Open the repo on GitHub and go to **Settings → Secrets and variables → Actions**.

**Secret** (Secrets tab):

| Name                   | Value                                       |
| ---------------------- | ------------------------------------------- |
| `ORIGIN_VERIFY_SECRET` | a new random string: `openssl rand -hex 32` |

Use a new one, not the nickshouseofhorrors value.

**Variable** (Variables tab):

| Name                  | Value                                                |
| --------------------- | ---------------------------------------------------- |
| `AWS_DEPLOY_ROLE_ARN` | the bootstrap output `DeployRoleArn` (command below) |

```bash
aws cloudformation describe-stacks --stack-name amethystandash-bootstrap \
  --query "Stacks[0].Outputs[?OutputKey=='DeployRoleArn'].OutputValue" --output text
```

Until this variable exists, pushes still run the checks but skip the deploy.

### 7. First deploy

Push to `main`, or click **Actions → Deploy → Run workflow**. The first run creates the app stack. CloudFront takes 5–15 minutes to set up the first time.

### 8. After it's live

- Check that it's locked down. Get the Lambda's own address:

  ```bash
  aws cloudformation describe-stacks --stack-name amethystandash-app \
    --query "Stacks[0].Outputs" --output table
  ```

  Opening `FunctionUrl` directly in a browser should show **Forbidden**.

- Add the site to **Google Search Console** (Domain property). Put the `google-site-verification=…` value it gives you into Route 53 by redeploying the zone stack:

  ```bash
  aws cloudformation deploy \
    --stack-name amethystandash-dns-zone \
    --template-file infra/dns-zone.yml \
    --parameter-overrides "GoogleSiteVerification=google-site-verification=..."
  ```

  Then submit `https://amethystandashcoaching.com/sitemap.xml` in Search Console.

### 9. Email alerts for new leads (Amazon SES)

Each contact message and quiz signup sends Amber a short email from
`notifications@amethystandashcoaching.com`, with Reply-To set to the visitor. Costs $0.10 per 1,000 emails.

1. Redeploy the bootstrap stack (step 2) so the site's Lambda role is allowed to send.
2. Deploy the email stack. It verifies the domain (adds the DKIM records itself) and the alert inbox:

   ```bash
   aws cloudformation deploy \
     --stack-name amethystandash-email \
     --template-file infra/email.yml \
     --parameter-overrides "NotifyEmail=<alert inbox>"
   ```

3. AWS emails the alert inbox a verification link. Click it once (expires after 24 hours).
4. GitHub → Settings → Secrets and variables → Actions → **Secrets**: add `NOTIFY_EMAIL` with the same inbox, then redeploy.
   A secret, not a variable: the repo is public, so are its Actions logs, and only secrets are hidden in them.

SES starts in a "sandbox": it can only send to verified addresses, 200 a day. That's all the alerts need,
so there's no need to request production access. If the inbox changes, redeploy step 2 with the new one,
click the new link, and update the secret.

## Everyday use

- **Deploy:** push to `main`. If lint, the type check, or the template check fails, nothing ships.
- **Logs:** CloudWatch → Log groups → `/aws/lambda/amethystandash-web`. Form submissions show up here until the forms are connected to email.
- **Change a secret:** update it in GitHub, then run the workflow from the Actions tab.
- **Roll back:**
  - Open an older successful run in the Actions tab and choose **Re-run all jobs**. That rebuilds and deploys that commit.
  - Or `git revert` the bad commit and push. The image repository keeps the last 10 images.

## When something goes wrong

- **The first deploy failed, and the stack shows `ROLLBACK_COMPLETE`.** It can't be updated. Delete it, then run the workflow again:
  ```bash
  aws cloudformation delete-stack --stack-name amethystandash-app
  ```
- **The stack shows `UPDATE_ROLLBACK_FAILED`.**
  ```bash
  aws cloudformation continue-update-rollback --stack-name amethystandash-app
  ```
- **The site shows "Forbidden" everywhere.** The `ORIGIN_VERIFY_SECRET` in GitHub and the deployed one don't match. Run the workflow again.
- **Error 403 straight from Lambda (not "Forbidden").** The function URL permissions are missing. Both `WebFunctionUrlPermission` and `WebFunctionInvokePermission` must exist in the stack.
- **The forms fail with an "invalid Server Actions request" error in the logs.** The domain isn't in `serverActions.allowedOrigins` in `next.config.ts`.

## Costs

| Item                           | About                     |
| ------------------------------ | ------------------------- |
| Lambda, CloudFront, CloudWatch | free tier at this traffic |
| Route 53 hosted zone           | $0.50/month               |
| Image repository (ECR)         | ~$0.10/month              |
| S3                             | pennies                   |

The first visit after the site has been idle for a while takes 1–3 seconds longer, while Lambda starts up.
