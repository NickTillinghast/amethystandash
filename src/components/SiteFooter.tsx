import Link from "next/link";
import { nav, site } from "@/content/site";
import { LogoMark, Wordmark } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-midnight text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-12 w-auto" />
              <div>
                <Wordmark className="block text-lg" />
                <p className="eyebrow mt-1 text-lilac">{site.tagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              Body-led sobriety coaching for women, and neurosomatic coaching for women in midlife
              transition.
            </p>
          </div>

          <div>
            <p className="eyebrow text-gold">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/80 hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/scholarship" className="text-cream/80 hover:text-gold">
                  Circle Scholarship
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/80 hover:text-gold">
                  Contact &amp; Book a Call
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold">Follow</p>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-cream/80 hover:text-gold"
            >
              Instagram {site.instagram.handle}
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-8 text-xs leading-relaxed text-cream/60">
          <p>
            Coaching is not medical or mental health treatment. If you&apos;re physically dependent on
            alcohol or other substances, please don&apos;t detox alone. In crisis? Call or text{" "}
            <a href="tel:988" className="text-cream underline underline-offset-2">
              988
            </a>{" "}
            or call 911.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              &copy; 2026 {site.name}
            </span>
            <Link href="/disclaimer" className="text-cream/80 underline underline-offset-2 hover:text-gold">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
