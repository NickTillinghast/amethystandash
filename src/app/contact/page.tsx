import { pageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms";
import { Eyebrow, PageHero, Section } from "@/components/ui";
import { site } from "@/content/site";

export const metadata = pageMetadata({
  title: "Book a Call",
  description: "Book a call with Amber, a sobriety and nervous system coach for women. Ask about Body-Led Sobriety, Midlife Neurosomatic Coaching, or a single session.",
  keywords: [
    "book a sobriety coach",
    "sober coach consultation"
  ],
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact & book a call" title="Let's talk.">
        <p>
          Tell me a little about where you are and what you&apos;re curious about. I&apos;ll get
          back to you to set up a time. No pressure, no pitch.
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="rounded-2xl bg-white p-6 sm:p-10">
            {/* TODO: once a booking tool is chosen, embed its scheduler here or redirect to it after submit. */}
            <ContactForm />
          </div>

          <aside className="space-y-8">
            <div>
              <Eyebrow>Prefer to DM?</Eyebrow>
              <p className="mt-3 leading-relaxed text-midnight/80">
                Find me on Instagram at{" "}
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-amethyst underline underline-offset-4"
                >
                  {site.instagram.handle}
                </a>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-lilac-wash p-6">
              <p className="font-semibold">Please don&apos;t detox alone.</p>
              <p className="mt-2 text-sm leading-relaxed">
                If you&apos;re physically dependent on alcohol or other substances, withdrawal can be
                dangerous. Get medical support first, and I&apos;ll be right here alongside it.
              </p>
            </div>

            <div className="rounded-2xl bg-midnight p-6 text-cream">
              <p className="font-semibold">In crisis right now?</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/80">
                Coaching isn&apos;t crisis support. Call or text{" "}
                <a href="tel:988" className="font-semibold text-gold underline underline-offset-2">
                  988
                </a>{" "}
                (Suicide &amp; Crisis Lifeline) or call{" "}
                <a href="tel:911" className="font-semibold text-gold underline underline-offset-2">
                  911
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
