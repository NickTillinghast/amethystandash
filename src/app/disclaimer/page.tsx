import { pageMetadata } from "@/lib/seo";
import { DisclaimerText } from "@/components/content-blocks";
import { PageHero, Section } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Disclaimer",
  description: "Coaching is not medical or mental health treatment. Please read this before working together, including important safety information about withdrawal.",
  keywords: [],
  path: "/disclaimer"
});

export default function DisclaimerPage() {
  return (
    <>
      <PageHero eyebrow="The fine print" title="Disclaimer">
        <p>The important stuff, in plain language. Please read it before we work together.</p>
      </PageHero>
      <Section>
        <div className="mx-auto max-w-3xl">
          <DisclaimerText />
        </div>
      </Section>
    </>
  );
}
