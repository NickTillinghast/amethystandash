import Link from "next/link";
import { FitSection, OfferCard, Testimonials } from "@/components/content-blocks";
import { LogoMark } from "@/components/Logo";
import { ButtonLink, Container, Eyebrow, Section, SignatureLine } from "@/components/ui";
import { differentiators, offerings, pillars, signatureLines, site } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight text-cream">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
        />
        <Container className="relative flex flex-col items-center py-20 text-center sm:py-28">
          <LogoMark className="h-24 w-auto sm:h-28" />
          <p className="wordmark mt-8 text-2xl sm:text-3xl">Amethyst &amp; Ash</p>
          <p className="eyebrow mt-3 text-lilac">{site.tagline}</p>
          <h1 className="mt-12 max-w-4xl text-5xl sm:text-6xl md:text-7xl">
            You&apos;ve been holding it all together.{" "}
            <span className="text-gold italic">Your body is done pretending.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/85 sm:text-xl">
            Body-led sobriety and nervous system coaching for high-achieving women who are ready to
            stop numbing out, break the pattern, and actually feel safe in their bodies again.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={site.quiz.href}>Take the free quiz</ButtonLink>
            <ButtonLink href="/method" variant="outline-light">
              Explore the method
            </ButtonLink>
          </div>
          <Link
            href="/midlife"
            className="mt-12 text-sm text-cream/70 underline decoration-lilac/60 underline-offset-4 hover:text-lilac"
          >
            Here for midlife, not the drink? There&apos;s a path for you too &rarr;
          </Link>
        </Container>
      </section>

      {/* Does this sound like you? */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Does this sound like you?</Eyebrow>
          <h2 className="mt-5 text-4xl sm:text-5xl">From the outside, you&apos;ve got it handled.</h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-midnight/85 sm:text-xl">
            <p>The business, the family, the to-do list, everyone else&apos;s needs.</p>
            <p>
              You make sure your entire week is overscheduled, so the
              too-hard-to-be-present-with emotions won&apos;t catch up with you.
            </p>
            <p>
              You pride yourself on being &ldquo;chill&rdquo; and &ldquo;easygoing,&rdquo; but
              really, you just don&apos;t want to upset anyone because&hellip; emotions.
            </p>
            <p>
              But at the end of the day, you reach for the wine. Or the joint. Or your phone, or the
              pantry, or one more task. Anything to take the edge off.
            </p>
            <p>
              You&apos;re tired in a way sleep doesn&apos;t fix. Your body feels different and you
              don&apos;t fully recognize yourself anymore. You keep promising yourself that tomorrow
              will be different, and then it isn&apos;t.
            </p>
            <p>
              You&apos;ve read the books. Made the vision boards. Manifested. Maybe you&apos;ve done
              the talk therapy. You know why you do it and you&apos;re aware of all your patterns,
              including your attachment style and your Enneagram.{" "}
              <strong className="font-semibold text-midnight">
                Knowing just hasn&apos;t changed a damn thing.
              </strong>
            </p>
          </div>

          <div className="mt-14 border-l-2 border-gold pl-6 sm:pl-8">
            <p className="font-serif text-3xl leading-snug sm:text-4xl">
              Here&apos;s the truth: nothing is wrong with you.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-midnight/85 sm:text-xl">
              You&apos;re running on old patterns your body learned to survive. Patterns can change,
              not through more willpower, but by working with your nervous system instead of
              against it.
            </p>
          </div>

          <p className="mt-14 font-serif text-2xl italic text-amethyst sm:text-3xl">
            You don&apos;t have to keep doing this alone.
          </p>
          <div className="mt-8">
            <ButtonLink href={site.quiz.href} variant="midnight">
              Find out what&apos;s running your pattern &rarr;
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Name story */}
      <Section tone="white">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <Eyebrow>The name</Eyebrow>
            <h2 className="mt-5 text-4xl sm:text-5xl">
              Walked through the fire. Came out clear.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-midnight/85">
            <p>
              <span className="font-serif text-2xl text-amethyst">Amethyst</span> comes from the
              Greek <em>amethystos</em>, &ldquo;not intoxicated.&rdquo; It&apos;s been a stone of
              sobriety for over 2,000 years.
            </p>
            <p>
              <span className="font-serif text-2xl text-smoke-deep">Ash</span> is what&apos;s left
              after you burn down the old pattern, and what new things grow from.
            </p>
            <p>
              Together, they&apos;re the woman who walked through the fire and came out clear.
              Maybe that&apos;s you already. Maybe you&apos;re still standing in the smoke. Either
              way, you&apos;re in the right place.
            </p>
          </div>
        </div>
      </Section>

      {/* Signature line */}
      <section className="bg-midnight py-24 text-center sm:py-32">
        <Container className="max-w-4xl">
          <SignatureLine onDark>{signatureLines.superpowers}</SignatureLine>
        </Container>
      </section>

      {/* Method preview */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>The Fully Lit Method</Eyebrow>
          <h2 className="mt-5 text-4xl sm:text-5xl">Body-led sobriety, in five pillars.</h2>
          <p className="mt-6 text-lg leading-relaxed text-midnight/80">
            Not steps you march through and check off. Pillars that hold each other up, each one
            building capacity in your nervous system so sobriety feels steady and chosen, not
            forced.
          </p>
        </div>
        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-ash sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p) => (
            <li key={p.letter} className="bg-white p-8">
              <span aria-hidden className="font-serif text-6xl text-gold">
                {p.letter}
              </span>
              <h3 className="mt-4 text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke-deep">{p.short}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <ButtonLink href="/method" variant="outline-dark">
            See the full method
          </ButtonLink>
        </div>
      </Section>

      {/* Differentiators */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Why this is different</Eyebrow>
            <h2 className="mt-5 text-4xl sm:text-5xl">{signatureLines.wholeWoman}</h2>
            <p className="mt-6 text-lg leading-relaxed text-midnight/80">
              If willpower alone worked, you&apos;d already be done. This isn&apos;t about trying
              harder. It&apos;s about giving your body what it needs to stop fighting you.
            </p>
          </div>
          <ul className="divide-y divide-ash">
            {differentiators.map((d) => (
              <li key={d.title} className="py-6 first:pt-0">
                <h3 className="text-2xl">{d.title}</h3>
                <p className="mt-2 leading-relaxed text-smoke-deep">{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Who it's for */}
      <Section tone="ash">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Is this you?</Eyebrow>
          <h2 className="mt-5 text-4xl sm:text-5xl">Let&apos;s be honest about fit.</h2>
        </div>
        <FitSection />
      </Section>

      {/* Testimonials */}
      <Section tone="midnight">
        <div className="mb-12 max-w-2xl">
          <Eyebrow onDark>Kind words</Eyebrow>
          <h2 className="mt-5 text-4xl sm:text-5xl">Held, not handled.</h2>
        </div>
        <Testimonials />
      </Section>

      {/* Offers */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Work with me</Eyebrow>
          <h2 className="mt-5 text-4xl sm:text-5xl">Three ways in.</h2>
          <p className="mt-6 text-lg leading-relaxed text-midnight/80">
            A 12-week path for sobriety, a 3-month path for midlife, or a single session to start.
            All one-on-one, all built around your body.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {offerings.map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      </Section>

      {/* Midlife door */}
      <section className="bg-lilac-wash py-20 sm:py-24">
        <Container className="grid items-center gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <Eyebrow>Midlife Neurosomatic Coaching</Eyebrow>
            <h2 className="mt-5 text-4xl sm:text-5xl">A stranger to yourself lately?</h2>
            <p className="mt-6 text-lg leading-relaxed text-midnight/80">
              Perimenopause, burnout, anxiety, an identity that doesn&apos;t fit anymore. The same
              LIGHT Method, with the sobriety lens swapped for transition. No sobriety focus required.
            </p>
          </div>
          <div className="md:text-right">
            <ButtonLink href="/midlife" variant="midnight">
              Explore midlife coaching
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="bg-midnight py-24 text-center text-cream sm:py-32">
        <Container className="flex max-w-3xl flex-col items-center">
          <SignatureLine onDark>{signatureLines.body}</SignatureLine>
          <p className="mt-8 text-lg text-cream/80">
            Let&apos;s talk about where you are and what would actually help. No pressure, no
            pitch-slapping.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={site.booking.href}>Book a call</ButtonLink>
            <ButtonLink href={site.instagram.url} variant="outline-light">
              {site.instagram.handle}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
