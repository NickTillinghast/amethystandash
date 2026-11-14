import { timingSafeEqual } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";

// On AWS, CloudFront adds a secret header to every request it forwards. Anything without it
// came straight to the Lambda's own address, skipping CloudFront, and is turned away.
// Off when ORIGIN_VERIFY_SECRET isn't set (local development)
function fromCloudFront(request: NextRequest) {
  const secret = process.env.ORIGIN_VERIFY_SECRET;
  if (!secret) return true;
  // The Lambda Web Adapter checks this from inside the container before sending traffic
  if (request.nextUrl.pathname === "/api/health") return true;

  const sent = Buffer.from(request.headers.get("x-origin-verify") ?? "");
  const expected = Buffer.from(secret);
  return sent.length === expected.length && timingSafeEqual(sent, expected);
}

export function proxy(request: NextRequest) {
  if (!fromCloudFront(request)) {
    return new NextResponse("Forbidden", { status: 403 });
  }
  return NextResponse.next();
}

export const config = {
  // Every path, so the CloudFront check covers images and static files too
  matcher: ["/:path*"],
};
