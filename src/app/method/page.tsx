import { pageMetadata } from "@/lib/seo";
import { PillarRow } from "@/components/content-blocks";
import { ButtonLink, Container, Eyebrow, PageHero, Section, SignatureLine } from "@/components/ui";
import { differentiators, pillars, signatureLines, site } from "@/content/site";

export const metadata = pageMetadata({
  title: "The Fully Lit Method: Body-Led Sobriety for Women",
  description: "A body-led approach to sobriety for women. Five pillars that build nervous system capacity, not willpower: Listen, Interrupt, Ground, Honor, Together.",
  keywords: [
    "Fully Lit Method",
    "body-led sobriety",
    "nervous system and sobriety",
    "somatic tools for cravings",
    "sobriety without willpower",
    "human design"
  ],
  path: "/method"
});

export default function MethodPage() {
  return (
    <>
      <PageHero eyebrow="The Fully Lit Method · Body-Led Sobriety" title="Five pillars. One whole woman.">
        <p>
          Five pillars, not steps. Each one builds capacity in your nervous system so sobriety feels
          steady and accessible, not forced.
        </p>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl">
          {pillars.map((p) => (
            <PillarRow key={p.letter} pillar={p} />
          ))}
        </div>
      </Section>

      <section className="bg-midnight py-24 text-center sm:py-32">
        <Container className="max-w-4xl">
          <SignatureLine onDark>{signatureLines.surviving}</SignatureLine>
        </Container>
      </section>

      <Section tone="white">
        <div className="max-w-2xl">
          <Eyebrow>What makes it different</Eyebrow>
          <h2 className="mt-5 text-4xl sm:text-5xl">This isn&apos;t about trying harder.</h2>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d) => (
            <li key={d.title} className="rounded-2xl border border-ash p-8">
              <span aria-hidden className="block h-px w-10 bg-gold" />
              <h3 className="mt-6 text-2xl">{d.title}</h3>
              <p className="mt-3 leading-relaxed text-smoke-deep">{d.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl">Ready to work the pillars?</h2>
            <p className="mt-4 text-lg text-midnight/80">
              Work through all five, one-on-one, at a pace your body can handle.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/work-with-me" variant="midnight">
              See the offers
            </ButtonLink>
            <ButtonLink href={site.booking.href} variant="outline-dark">
              Book a call
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
