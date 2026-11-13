import { pageMetadata } from "@/lib/seo";
import { ScholarshipForm } from "@/components/forms";
import { Eyebrow, PageHero, Section } from "@/components/ui";
import { scholarship } from "@/content/site";

export const metadata = pageMetadata({
  title: "Fully Lit Circle Scholarship",
  description: "Two free spots in the Fully Lit Circle sober community every month, so cost is never the reason a woman can't get support. No proof or paperwork needed.",
  keywords: [
    "free sober support for women",
    "sobriety scholarship",
    "free sober community"
  ],
  path: "/scholarship"
});

export default function ScholarshipPage() {
  return (
    <>
      <PageHero eyebrow="Fully Lit Circle scholarship" title="Cost should never be the reason.">
        <p>
          Every month, {scholarship.spotsPerMonth} spots in the Fully Lit Circle are free. If money
          is what&apos;s standing between you and support, this is for you.
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="space-y-8">
            <div>
              <Eyebrow>What you get</Eyebrow>
              <p className="mt-3 leading-relaxed text-midnight/80">
                Full Circle membership: the private community chat, the weekly live call, an
                accountability partner, and short practices to keep your nervous system resourced
                between calls.
              </p>
            </div>
            <div>
              <Eyebrow>How it works</Eyebrow>
              <ul className="mt-3 space-y-3 leading-relaxed text-midnight/80">
                <li>Fill out the short application. No proof of income, no paperwork.</li>
                <li>Spots are chosen at the start of each month. [Confirm timing]</li>
                <li>You&apos;ll hear back either way, and you can reapply the next month.</li>
              </ul>
            </div>
            <p className="text-sm leading-relaxed text-smoke-deep">
              What you share here stays between us.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 sm:p-10">
            <ScholarshipForm />
          </div>
        </div>
      </Section>
    </>
  );
}
