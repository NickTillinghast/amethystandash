import { pageMetadata } from "@/lib/seo";
import { FitSection, OfferDetail } from "@/components/content-blocks";
import { ButtonLink, Eyebrow, PageHero, Section } from "@/components/ui";
import { howTheyWorkTogether, offers, scholarship } from "@/content/site";

export const metadata = pageMetadata({
  title: "Sobriety Coaching for Women: 1:1, Circle & Midlife",
  description: "Work with a sober coach for women: Fully Lit 1:1 Coaching, the Fully Lit Circle sober community with weekly live calls, and Fully Lit Midlife.",
  keywords: [
    "1:1 sobriety coaching",
    "online sober community for women",
    "sober women membership",
    "sobriety accountability partner",
    "sobriety coaching program"
  ],
  path: "/work-with-me"
});

export default function WorkWithMePage() {
  return (
    <>
      <PageHero eyebrow="Work with me" title="Three ways in.">
        <p>
          Two paths for sobriety and one for midlife. One-on-one goes deep. The membership keeps
          the light on between sessions and after.
        </p>
      </PageHero>

      <Section>
        <div className="space-y-8">
          {offers.map((o, i) => (
            <OfferDetail key={o.id} offer={o} number={i + 1} />
          ))}
        </div>
      </Section>

      <Section tone="ash">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Before you book</Eyebrow>
          <h2 className="mt-5 text-4xl sm:text-5xl">Is this the right fit?</h2>
        </div>
        <FitSection />
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>How they work together</Eyebrow>
            <h2 className="mt-5 text-4xl sm:text-5xl">The deep dive, and the place the work keeps living.</h2>
          </div>
          <ul className="space-y-5 text-lg leading-relaxed">
            {howTheyWorkTogether.map((line) => (
              <li key={line} className="flex gap-4">
                <span aria-hidden className="mt-3 h-1.5 w-1.5 flex-none rotate-45 bg-gold" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section className="bg-midnight py-20 text-cream sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1.5fr_1fr]">
          <div>
            <Eyebrow onDark>Circle scholarships</Eyebrow>
            <h2 className="mt-5 text-4xl sm:text-5xl">Cost should never be the reason.</h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">
              Every month, {scholarship.spotsPerMonth} spots in the Fully Lit Circle go to women who
              can&apos;t swing the cost right now. No proof, no paperwork, no shame. Just a short
              application.
            </p>
          </div>
          <div className="md:text-right">
            <ButtonLink href="/scholarship">Apply for a scholarship</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
