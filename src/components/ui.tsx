import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

type Tone = "cream" | "midnight" | "white" | "ash";

const toneClasses: Record<Tone, string> = {
  cream: "bg-cream text-midnight",
  midnight: "bg-midnight text-cream",
  white: "bg-white text-midnight",
  ash: "bg-ash/50 text-midnight",
};

export function Section({
  children,
  tone = "cream",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${toneClasses[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  children,
  onDark = false,
  className = "",
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p className={`eyebrow ${onDark ? "text-lilac" : "text-amethyst"} ${className}`}>
      {children}
    </p>
  );
}

type ButtonVariant = "gold" | "outline-light" | "outline-dark" | "midnight";

const buttonClasses: Record<ButtonVariant, string> = {
  gold: "bg-gold text-midnight hover:bg-[#ecc97f]",
  midnight: "bg-midnight text-cream hover:bg-midnight-soft",
  "outline-light": "border border-cream/40 text-cream hover:border-gold hover:text-gold",
  "outline-dark": "border border-midnight/30 text-midnight hover:border-amethyst hover:text-amethyst",
};

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-[0.12em] uppercase transition-colors ${buttonClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function SignatureLine({
  children,
  onDark = false,
  className = "",
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <blockquote
      className={`font-serif text-3xl leading-snug italic sm:text-4xl md:text-5xl ${
        onDark ? "text-cream" : "text-midnight"
      } ${className}`}
    >
      <span aria-hidden className="text-gold">
        &ldquo;
      </span>
      {children}
      <span aria-hidden className="text-gold">
        &rdquo;
      </span>
    </blockquote>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-midnight pt-16 pb-20 text-cream sm:pt-24 sm:pb-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow onDark>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-5xl sm:text-6xl md:text-7xl">{title}</h1>
          {children ? (
            <div className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">{children}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/** Visible marker for copy that still needs to be written. Remove before launch. */
export function Todo({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-dashed border-amethyst/60 bg-lilac-wash px-2 py-0.5 text-sm text-amethyst">
      {children}
    </span>
  );
}
