import Link from "next/link";
import {
  fit,
  pillars,
  singleSession,
  testimonials,
  type offerings,
  type Pillar,
  type Program,
} from "@/content/site";
import { ButtonLink, Eyebrow } from "./ui";

type Offering = (typeof offerings)[number];

export function Testimonials() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((t) => (
        <figure key={t.name} className="flex flex-col rounded-2xl bg-midnight-soft p-8 text-cream sm:p-10">
          {"stars" in t && t.stars ? (
            <p className="text-xl tracking-[0.2em] text-gold">
              <span aria-hidden>{"★".repeat(t.stars)}</span>
              <span className="sr-only">{t.stars} out of 5 stars</span>
            </p>
          ) : (
            <span aria-hidden className="font-serif text-6xl leading-none text-gold">
              &ldquo;
            </span>
          )}
          <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-cream/90">{t.quote}</blockquote>
          <figcaption className="eyebrow mt-8 text-lilac">{t.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/** "This is for you if… / This is not for you if…" */
export function FitSection() {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl bg-white p-8 sm:p-10">
          <Eyebrow>This is for you if&hellip;</Eyebrow>
          <ul className="mt-6 space-y-5">
            {fit.forYou.map((item) => (
              <li key={item} className="flex gap-4 leading-relaxed">
                <svg aria-hidden viewBox="0 0 20 20" className="mt-1 h-5 w-5 flex-none text-amethyst" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 10.5l4 4 8-9" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-ash p-8 sm:p-10">
          <p className="eyebrow text-smoke-deep">This is not for you if&hellip;</p>
          <ul className="mt-6 space-y-5">
            {fit.notForYou.map((item) => (
              <li key={item} className="flex gap-4 leading-relaxed text-midnight/80">
                <svg aria-hidden viewBox="0 0 20 20" className="mt-1 h-5 w-5 flex-none text-smoke" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 5l10 10M15 5L5 15" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-3xl text-center font-serif text-3xl leading-snug sm:text-4xl">
        {fit.closing}
      </p>
    </div>
  );
}

const programTone: Record<Program["tone"], string> = {
  lilac: "bg-lilac-wash",
  white: "bg-white",
};

function Sparkle() {
  return (
    <span aria-hidden className="mt-0.5 flex-none text-gold">
      &#10022;
    </span>
  );
}

/** Compact card for the homepage. */
export function OfferCard({ offer }: { offer: Offering }) {
  return (
    <article className="flex flex-col rounded-2xl bg-white p-8">
      <p className="eyebrow text-amethyst">{offer.label}</p>
      <h3 className="mt-4 text-3xl">{offer.name}</h3>
      <p className="mt-2 text-sm font-semibold tracking-wide text-smoke-deep">{offer.meta}</p>
      <p className="mt-4 flex-1 leading-relaxed text-midnight/80">{offer.summary}</p>
      <Link
        href={offer.href}
        className="mt-8 text-sm font-semibold tracking-[0.12em] text-midnight uppercase underline decoration-gold decoration-2 underline-offset-8 hover:text-amethyst"
      >
        Learn more
      </Link>
    </article>
  );
}

/** A full 1:1 program: intro, its LIGHT Method, what's included, outcomes and price. */
export function ProgramDetail({ program }: { program: Program }) {
  return (
    <article id={program.id} className={`scroll-mt-24 rounded-3xl p-6 sm:p-12 ${programTone[program.tone]}`}>
      <header className="max-w-3xl">
        <p className="eyebrow text-amethyst">{program.label}</p>
        <h2 className="mt-4 text-4xl sm:text-6xl">{program.name}</h2>
        <p className="mt-4 font-semibold leading-relaxed text-smoke-deep">{program.format}</p>
        <p className="mt-6 text-lg leading-relaxed text-midnight/85 sm:text-xl">{program.intro}</p>
      </header>

      <section className="mt-12">
        <h3 className="eyebrow text-amethyst">The LIGHT Method</h3>
        <ol className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {pillars.map((step) => (
            <li key={step.letter} className="flex gap-5">
              <span aria-hidden className="w-8 flex-none font-serif text-5xl leading-none text-gold">
                {step.letter}
              </span>
              <div>
                <h4 className="font-serif text-2xl">
                  <span className="sr-only">{step.letter}: </span>
                  {step.title}
                </h4>
                <p className="mt-2 leading-relaxed text-midnight/80">{step.body}</p>
                <p className="mt-2 text-sm tracking-wide text-smoke-deep">{step.practices}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-12 grid gap-10 border-t border-midnight/10 pt-10 lg:grid-cols-2">
        <section>
          <h3 className="eyebrow text-amethyst">What&apos;s included</h3>
          <ul className="mt-5 space-y-3">
            {program.included.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed">
                <Sparkle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="eyebrow text-amethyst">{program.outcomesHeading}</h3>
          <ul className="mt-5 space-y-3">
            {program.outcomes.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed">
                <Sparkle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-12 flex flex-col gap-6 rounded-2xl bg-midnight p-6 text-cream sm:p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="eyebrow text-lilac">Investment</h3>
          <p className="mt-3 font-serif text-2xl sm:text-3xl">{program.investment.price}</p>
          <p className="mt-2 text-sm font-semibold tracking-wide text-gold">{program.investment.note}</p>
        </div>
        <ButtonLink href="/contact" className="flex-none">
          Book a call
        </ButtonLink>
      </section>

      {program.disclaimer ? (
        <p className="mt-6 text-sm leading-relaxed text-smoke-deep">{program.disclaimer}</p>
      ) : null}
    </article>
  );
}

export function SingleSessionCard() {
  const s = singleSession;
  const rows = [
    { title: "What it's for", body: s.whatFor },
    { title: "What you'll learn", body: s.whatYouLearn },
    { title: "How", body: s.how },
  ];
  return (
    <article id={s.id} className="scroll-mt-24 rounded-3xl bg-gold-wash p-6 sm:p-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow text-amethyst">{s.label}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">{s.name}</h2>
          <p className="mt-4 font-serif text-3xl">
            {s.price} <span className="text-xl text-smoke-deep">· {s.length}</span>
          </p>
          <ButtonLink href="/contact" variant="midnight" className="mt-8">
            Book a session
          </ButtonLink>
        </div>
        <dl className="space-y-6">
          {rows.map((r) => (
            <div key={r.title} className="border-l-2 border-gold pl-5">
              <dt className="eyebrow text-amethyst">{r.title}</dt>
              <dd className="mt-2 text-lg leading-relaxed">{r.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

export function PillarRow({ pillar }: { pillar: Pillar }) {
  return (
    <div className="grid gap-4 border-b border-ash py-10 first:pt-0 last:border-0 sm:grid-cols-[6rem_1fr] sm:gap-8">
      <span aria-hidden className="font-serif text-7xl leading-none text-gold sm:text-8xl">
        {pillar.letter}
      </span>
      <div>
        <h3 className="text-3xl sm:text-4xl">
          <span className="sr-only">{pillar.letter}: </span>
          {pillar.title}
        </h3>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-midnight/85">{pillar.body}</p>
        <p className="mt-4 text-sm tracking-wide text-smoke-deep">{pillar.practices}</p>
      </div>
    </div>
  );
}

export function DisclaimerText() {
  return (
    <div className="space-y-5 text-lg leading-relaxed">
      <p>
        I&apos;m a sobriety and wellness coach, not a doctor, therapist, nutritionist or medical
        provider. Our work together is coaching, not medical or mental health treatment.
      </p>
      <p>
        I may share suggestions about lifestyle, nutrition, sleep, hormones or lab tests you might
        want to ask about. These are ideas to explore with your doctor, never diagnoses or
        prescriptions. Always talk with a qualified healthcare provider before you change your diet
        or supplements, or anything about your medications or medical care.
      </p>
      <div className="rounded-xl bg-lilac-wash p-6">
        <p className="font-semibold">
          If you&apos;re physically dependent on alcohol or other substances, please don&apos;t
          detox alone.
        </p>
        <p className="mt-2">
          Withdrawal from alcohol, benzodiazepines and some other substances can be dangerous and
          even life-threatening. Get medical support first, and I&apos;ll be right here alongside
          it.
        </p>
      </div>
      <p>
        Coaching is not a substitute for therapy, psychiatric care or crisis support. If you&apos;re
        in crisis or thinking about harming yourself, call or text{" "}
        <a href="tel:988" className="font-semibold underline underline-offset-2">
          988
        </a>{" "}
        (Suicide &amp; Crisis Lifeline) or call{" "}
        <a href="tel:911" className="font-semibold underline underline-offset-2">
          911
        </a>
        .
      </p>
      <p>
        You are responsible for your own choices, actions and results during and after our work
        together. By working with me, you agree that I&apos;m not liable for any outcomes related to
        your health, sobriety, or decisions you make based on our sessions.
      </p>
    </div>
  );
}
