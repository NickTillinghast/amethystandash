import Link from "next/link";
import { fit, testimonials, type Offer, type Pillar } from "@/content/site";

export function Testimonials() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {testimonials.map((t) => (
        <figure key={t.name} className="flex flex-col rounded-2xl bg-midnight-soft p-8 text-cream sm:p-10">
          <span aria-hidden className="font-serif text-6xl leading-none text-gold">
            &ldquo;
          </span>
          <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-cream/90">{t.quote}</blockquote>
          <figcaption className="eyebrow mt-8 text-lilac">{t.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
import { ButtonLink, Eyebrow } from "./ui";

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

const offerTone: Record<Offer["tone"], string> = {
  lilac: "bg-lilac-wash",
  gold: "bg-gold-wash",
  ash: "bg-white",
};

/** Compact offer card for the home page. */
export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className={`flex flex-col rounded-2xl p-8 ${offerTone[offer.tone]}`}>
      <p className="eyebrow text-amethyst">{offer.label}</p>
      <h3 className="mt-4 text-3xl">{offer.name}</h3>
      <p className="mt-4 flex-1 leading-relaxed text-midnight/80">{offer.summary}</p>
      <Link
        href={offer.id === "midlife" ? "/midlife" : `/work-with-me#${offer.id}`}
        className="mt-8 text-sm font-semibold tracking-[0.12em] text-midnight uppercase underline decoration-gold decoration-2 underline-offset-8 hover:text-amethyst"
      >
        Learn more
      </Link>
    </article>
  );
}

/** Full offer with everything that's included. */
export function OfferDetail({ offer, number }: { offer: Offer; number: number }) {
  return (
    <article id={offer.id} className={`scroll-mt-24 rounded-2xl p-8 sm:p-12 ${offerTone[offer.tone]}`}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow text-amethyst">
            Offer {number} · {offer.label}
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl">{offer.name}</h2>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Details">
            {offer.details.map((d) => (
              <li
                key={d}
                className="rounded-full border border-midnight/15 px-3 py-1 text-xs tracking-wide text-smoke-deep"
              >
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-serif text-xl leading-relaxed italic text-midnight/85">{offer.forWho}</p>
          <ButtonLink href={offer.cta.href} variant="midnight" className="mt-8">
            {offer.cta.label}
          </ButtonLink>
        </div>
        <div>
          <p className="eyebrow text-amethyst">What&apos;s included</p>
          <ul className="mt-5 space-y-4">
            {offer.included.map((item) => (
              <li key={item} className="flex gap-4 leading-relaxed">
                <span aria-hidden className="mt-2.5 h-1.5 w-1.5 flex-none rotate-45 bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
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
