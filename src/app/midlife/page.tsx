import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink, Container, Eyebrow, PageHero, Section, SignatureLine } from "@/components/ui";
import { programs, signatureLines, site } from "@/content/site";

export const metadata = pageMetadata({
  title: "Midlife Neurosomatic Coaching: Perimenopause & Burnout",
  description: "Neurosomatic coaching for women in perimenopause, burnout and anxiety. Calm your nervous system and break old patterns. No sobriety focus required.",
  keywords: [
    "perimenopause coaching",
    "midlife coach for women",
    "burnout coaching for women",
    "anxiety and nervous system",
    "midlife transition",
    "perimenopause anxiety"
  ],
  path: "/midlife"
});

const midlife = programs.find((p) => p.id === "midlife")!;

const signs = [
  "Perimenopause/menopause has rewritten the rules, and nobody gave you the new ones.",
  "You're running on fumes and calling it normal.",
  "Anxiety shows up out of nowhere, in a body you used to trust.",
  "The life you built doesn't quite fit the woman living it anymore.",
];

export default function MidlifePage() {
  return (
    <>
      <PageHero eyebrow="Midlife Neurosomatic Coaching" title="Not broken. In transition.">
        <p>
          For women in perimenopause, burnout, anxiety, or the feeling of being a stranger
          to yourself, who want to stop being run by old patterns. No sobriety focus required.
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Sound familiar?</Eyebrow>
            <h2 className="mt-5 text-4xl sm:text-5xl">Midlife can feel like the ground shifted.</h2>
            <p className="mt-6 text-lg leading-relaxed text-midnight/80">
              Your hormones are changing, your nervous system is carrying decades of load, and the
              coping strategies that used to work have quietly stopped working. None of that means
              something&apos;s wrong with you. It means it&apos;s time for something new.
            </p>
          </div>
          <ul className="space-y-4">
            {signs.map((s) => (
              <li key={s} className="rounded-xl bg-white p-6 text-lg leading-relaxed">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section className="bg-midnight py-24 text-center sm:py-32">
        <Container className="max-w-4xl">
          <SignatureLine onDark>{signatureLines.superpowers}</SignatureLine>
        </Container>
      </section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Eyebrow>What we work on</Eyebrow>
            <h2 className="mt-5 text-4xl sm:text-5xl">Same method. Different lens.</h2>
            <p className="mt-6 text-lg leading-relaxed text-midnight/80">
              {midlife.intro}
            </p>
            <p className="mt-6 font-semibold leading-relaxed text-smoke-deep">{midlife.format}</p>
            <p className="mt-4 font-serif text-2xl">{midlife.investment.price}</p>
            <p className="mt-1 text-sm font-semibold text-amethyst">{midlife.investment.note}</p>
            <Link
              href="/work-with-me#midlife"
              className="mt-6 inline-block text-sm font-semibold tracking-[0.12em] uppercase underline decoration-gold decoration-2 underline-offset-8 hover:text-amethyst"
            >
              See the full program
            </Link>
          </div>
          <ul className="space-y-5">
            {midlife.included.map((item) => (
              <li key={item} className="flex gap-3 text-lg leading-relaxed">
                <span aria-hidden className="flex-none text-gold">
                  &#10022;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl">{signatureLines.body}</h2>
            <p className="mt-4 text-lg text-midnight/80">
              Let&apos;s talk about what this season is asking of you.
            </p>
          </div>
          <ButtonLink href={site.booking.href} variant="midnight">
            Book a call
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
