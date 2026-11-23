import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

// Amazon SES sends these. On Lambda the function's role signs the request, no keys needed.
// Off (logged only) when NOTIFY_EMAIL isn't set, e.g. local development
const FROM = "Amethyst & Ash website <notifications@amethystandashcoaching.com>";

let client: SESv2Client | undefined;

// No line breaks in a subject line, and keep it short
function oneLine(value: string, max = 120) {
  return value.replace(/[\r\n]+/g, " ").slice(0, max);
}

/**
 * Emails Amber (NOTIFY_EMAIL) about a new contact message or quiz signup.
 * Plain text only. Reply-To is the visitor, so hitting Reply answers them directly.
 * Never throws: a failed alert must not break the form for the visitor.
 */
export async function notifyAmber({
  subject,
  lines,
  replyTo,
}: {
  subject: string;
  lines: [label: string, value: string][];
  replyTo?: string;
}) {
  const to = process.env.NOTIFY_EMAIL;
  const body =
    lines
      .filter(([, value]) => value)
      .map(([label, value]) => (value.includes("\n") ? `${label}:\n${value}` : `${label}: ${value}`))
      .join("\n\n") + (replyTo ? "\n\n—\nHit Reply to answer them directly." : "");

  if (!to) {
    console.log("[notify] NOTIFY_EMAIL not set, not emailed:", subject);
    return;
  }

  try {
    client ??= new SESv2Client({ region: process.env.AWS_REGION ?? "us-east-1" });
    await client.send(
      new SendEmailCommand({
        FromEmailAddress: FROM,
        Destination: { ToAddresses: [to] },
        ReplyToAddresses: replyTo ? [replyTo] : undefined,
        Content: {
          Simple: {
            Subject: { Data: oneLine(subject), Charset: "UTF-8" },
            Body: { Text: { Data: body, Charset: "UTF-8" } },
          },
        },
      }),
      { abortSignal: AbortSignal.timeout(5000) },
    );
  } catch (err) {
    // The details are still here in the log (CloudWatch), nothing is lost
    console.error("[notify] email failed", {
      subject,
      body,
      error: err instanceof Error ? err.message : String(err),
    });
  }
}
