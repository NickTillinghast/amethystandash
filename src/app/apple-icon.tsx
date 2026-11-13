import { ImageResponse } from "next/og";

// iPhone/iPad home-screen icon (Apple devices don't use the SVG favicon).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1B1F3B",
        }}
      >
        <svg width="130" height="140" viewBox="0 0 120 130">
          <circle cx="60" cy="58" r="40" fill="#E3B964" />
          <path d="M60 4 L73 26 V94 H47 V26 Z" fill="#B9A3E3" />
          <path d="M47 26 L60 35 L73 26 M60 4 V94" fill="none" stroke="#1B1F3B" strokeWidth="1.5" />
          <line x1="26" y1="104" x2="94" y2="104" stroke="#8C8792" strokeWidth="3" />
        </svg>
      </div>
    ),
    size,
  );
}
