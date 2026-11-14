# syntax=docker/dockerfile:1.7
# The site as an AWS Lambda container image: the Next.js standalone server, run by
# AWS Lambda Web Adapter. Built and pushed by .github/workflows/deploy.yml

# ---- Build ----
FROM --platform=linux/amd64 node:24-bookworm-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# The git commit: version skew protection, so tabs left open across a deploy reload cleanly
ARG NEXT_DEPLOYMENT_ID
ENV NEXT_TELEMETRY_DISABLED=1

# public/ can be empty, and git doesn't keep empty folders
RUN mkdir -p public && npm run build

# ---- Runtime ----
FROM --platform=linux/amd64 node:24-bookworm-slim
WORKDIR /app

# Runs the normal Node server inside Lambda and streams its responses
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:1.1.0 /lambda-adapter /opt/extensions/lambda-adapter

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    AWS_LWA_INVOKE_MODE=response_stream \
    AWS_LWA_READINESS_CHECK_PATH=/api/health

COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public

# Lambda's disk is read-only except /tmp, so Next's cache lives there
RUN rm -rf ./.next/cache && ln -s /tmp/cache ./.next/cache

USER node
EXPOSE 3000
# /tmp starts empty on every new Lambda copy, so create the cache folder first
CMD ["sh", "-c", "mkdir -p /tmp/cache && exec node server.js"]
