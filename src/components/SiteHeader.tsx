"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/content/site";
import { LogoMark, Wordmark } from "./Logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  // Menu closes automatically whenever the route changes.
  const open = openPath === pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-midnight/95 text-cream backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Amethyst & Ash, home">
          <LogoMark className="h-9 w-auto" />
          <Wordmark className="text-sm sm:text-base" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide transition-colors hover:text-gold ${
                pathname === item.href ? "text-gold" : "text-cream/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-gold px-5 py-2 text-xs font-semibold tracking-[0.12em] text-midnight uppercase transition-colors hover:bg-[#ecc97f]"
          >
            Book a call
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-cream/10 px-4 pt-2 pb-6 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-3 font-serif text-2xl tracking-wide ${
                    pathname === item.href ? "text-gold" : "text-cream"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-gold px-6 py-3 text-xs font-semibold tracking-[0.12em] text-midnight uppercase"
          >
            Book a call
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
