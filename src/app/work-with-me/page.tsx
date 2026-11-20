import { pageMetadata } from "@/lib/seo";
import { FitSection, ProgramDetail, SingleSessionCard } from "@/components/content-blocks";
import { Eyebrow, PageHero, Section } from "@/components/ui";
import { programs } from "@/content/site";

export const metadata = pageMetadata({
  title: "Sobriety & Midlife Coaching for Women: Programs & Pricing",
  description:
    "Body-Led Sobriety: 12 weeks of 1:1 sobriety coaching for women. Midlife Neurosomatic Coaching: 3 months for perimenopause, burnout and anxiety. Or start with a single session.",
  keywords: [
    "1:1 sobriety coaching",
    "12 week sobriety program",
    "sobriety coaching program",
    "midlife coaching for women",
    "perimenopause coaching",
    "neurosomatic coaching",
  ],
  path: "/work-with-me",
});

export default function WorkWithMePage() {
  return (
    <>
      <PageHero eyebrow="Work with me" title="Ways to work together." />

      <Section>
        <div className="space-y-8">
          {programs.map((p) => (
            <ProgramDetail key={p.id} program={p} />
          ))}
          <SingleSessionCard />
        </div>
      </Section>

      <Section tone="ash">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Before you book</Eyebrow>
          <h2 className="mt-5 text-4xl sm:text-5xl">Is this the right fit?</h2>
        </div>
        <FitSection />
      </Section>
    </>
  );
}
