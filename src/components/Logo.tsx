type MarkProps = { className?: string; title?: string };

/** The Crystal Moon mark: a slim amethyst crystal in front of a gold moon, with ash lines below. */
export function LogoMark({ className, title }: MarkProps) {
  return (
    <svg
      viewBox="0 0 120 130"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <circle cx="60" cy="58" r="40" fill="#E3B964" />
      <path d="M60 4 L73 26 V94 H47 V26 Z" fill="#B9A3E3" />
      <path
        d="M47 26 L60 35 L73 26 M60 4 V94"
        fill="none"
        stroke="#1B1F3B"
        strokeWidth="1.2"
      />
      <line x1="26" y1="104" x2="94" y2="104" stroke="#8C8792" strokeWidth="2" />
      <line x1="39" y1="112" x2="81" y2="112" stroke="#8C8792" strokeWidth="1.5" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return <span className={`wordmark ${className}`}>Amethyst &amp; Ash</span>;
}
