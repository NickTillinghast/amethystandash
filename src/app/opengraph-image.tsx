import { ImageResponse } from "next/og";

// The preview card shown when the site is shared on social media or in messages.
export const alt = "Amethyst & Ash: Sober women, fully lit.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1B1F3B",
          color: "#F7F2EC",
          fontFamily: "Georgia, serif",
        }}
      >
        <svg width="180" height="195" viewBox="0 0 120 130">
          <circle cx="60" cy="58" r="40" fill="#E3B964" />
          <path d="M60 4 L73 26 V94 H47 V26 Z" fill="#B9A3E3" />
          <path d="M47 26 L60 35 L73 26 M60 4 V94" fill="none" stroke="#1B1F3B" strokeWidth="1.2" />
          <line x1="26" y1="104" x2="94" y2="104" stroke="#8C8792" strokeWidth="2" />
          <line x1="39" y1="112" x2="81" y2="112" stroke="#8C8792" strokeWidth="1.5" />
        </svg>
        <div style={{ marginTop: 40, fontSize: 76, letterSpacing: 22 }}>AMETHYST &amp; ASH</div>
        <div style={{ marginTop: 20, fontSize: 28, letterSpacing: 10, color: "#B9A3E3" }}>
          SOBER WOMEN, FULLY LIT
        </div>
      </div>
    ),
    size,
  );
}
