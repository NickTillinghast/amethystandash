import { pageMetadata } from "@/lib/seo";
import { Testimonials } from "@/components/content-blocks";
import { ButtonLink, Container, Eyebrow, PageHero, Section, SignatureLine } from "@/components/ui";
import { coach, signatureLines, site } from "@/content/site";

export const metadata = pageMetadata({
  title: "About Amber: Sober Coach, 20 Years Sober",
  description: "Meet Amber: 20 years sober, ICF-accredited, trauma-trained, and certified in neurosomatic and womb-centered somatic coaching for women.",
  keywords: [
    "Amber sobriety coach",
    "ICF accredited coach",
    "trauma-informed coach",
    "womb-centered somatic coaching"
  ],
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Twenty years sober. I've been where you are.">
        <p>Hi, I&apos;m {coach.name}.</p>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            {/* TODO: swap for a real photo, e.g. <Image src="/about.jpg" ... /> */}
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-ash text-sm text-smoke-deep">
              Photo goes here
            </div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-midnight/85">
            <Eyebrow>My story</Eyebrow>
            <p className="font-serif text-3xl leading-snug text-midnight">
              I got sober 20 years ago, back when I had no idea who I was without something to numb
              me.
            </p>
            <p>
              Though I had a lot of guidance, nobody taught me how to actually feel. I didn&apos;t find the resources  until way later.I realized after almost two decades sober after hitting menopause naturally at age 40 that my body was trying to tell me something.That is when I realized that my nervous system spending a lifetime in survival mode had finally caught up with me .I got curious amidst my shock and grief at the end of an era I had not expected.
              When I found guidance through neurosomatic work , I felt a sense of hope for emotionally growing in a way I had never experienced.
  
            </p>
            <p>
              Since then I have learned to thrive through feeling my emotions and gaining a level of maturity I never knew I wanted.I have learned to stop abandoning myself and being afraid to speak my authentic truth regardless of who it might make uncomfortable.  I have shown myself that no matter what difficult situations arise, I can get persevere confidently. I&apos;ve built a life I don&apos;t want to escape from, and a decade of
              businesses that crossed six figures more than once. I&apos;ve sat in and led many
              circles with women through learning to become the experts of their own nervous systems, led workshops, and walked many clients one-on-one through the
              messy, beautiful work of coming back into their bodies.
            </p>
            <p>
              I&apos;m ICF-accredited, trauma-trained, and certified in neurosomatic and
              female nervous system centered somatic coaching. But truly, the real credential is that I&apos;ve been
              where you are. I know what it&apos;s like when the feelings you&apos;ve been numbing
              for years come flooding back, and I know how to help your nervous system handle them
              without reaching for the old, familiar coping tools.
            </p>
            <p>
              With me guiding you, you won&apos;t be wandering aimlessly, hoping sobriety will
              stick or suffering throught the physiological and biological changes you are experincing in midlife. You&apos;ll learn to finally feel safe in your own skin, with a clear road map
              to follow confidently on your journey.
            </p>
            <ul className="flex flex-wrap gap-2 pt-4" aria-label="Credentials">
              {coach.credentials.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-amethyst/30 bg-lilac-wash px-4 py-1.5 text-sm text-amethyst"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="bg-midnight py-24 text-center sm:py-32">
        <Container className="max-w-4xl">
          <SignatureLine onDark>{signatureLines.surviving}</SignatureLine>
        </Container>
      </section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Why the purple elephant?</Eyebrow>
            <h2 className="mt-5 text-4xl sm:text-5xl">The one thing that breaks the pattern.</h2>
          </div>
          <p className="text-lg leading-relaxed text-midnight/85">
            In a room full of gray, she&apos;s the one you can&apos;t miss. That&apos;s the point.
            Breaking the pattern means being willing to stand out, to do it differently, and to
            stop blending into a life that was slowly dimming you.
          </p>
        </div>
      </Section>

      <Section tone="midnight">
        <div className="mb-12 max-w-2xl">
          <Eyebrow onDark>Kind words</Eyebrow>
          <h2 className="mt-5 text-4xl sm:text-5xl">From women I&apos;ve worked with.</h2>
        </div>
        <Testimonials />
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-4xl sm:text-5xl">Want to talk about where you are?</h2>
          <ButtonLink href={site.booking.href} variant="midnight">
            Book a call
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
