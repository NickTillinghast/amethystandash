import { pageMetadata } from "@/lib/seo";
import { ButtonLink, Eyebrow, PageHero, Section, Todo } from "@/components/ui";
import { quiz } from "@/content/site";

export const metadata = pageMetadata({
  title: "Free Quiz: What's Your Numbing Pattern?",
  description: "Take the free quiz. Find out how you numb (wine, busyness, caretaking or shutdown), what's happening in your nervous system, and why willpower hasn't fixed it.",
  keywords: [
    "numbing pattern quiz",
    "am I drinking too much quiz",
    "burnout quiz",
    "nervous system quiz"
  ],
  path: "/quiz"
});

export default function QuizPage() {
  return (
    <>
      <PageHero eyebrow="Free quiz" title={quiz.title}>
        <p>
          A few honest questions about how you handle stress, what you reach for at the end of the
          day, and how your body feels. Find out what&apos;s been running your pattern, and why
          willpower alone hasn&apos;t fixed it.
        </p>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-3xl">
          {/*
            TODO: embed the quiz from ScoreApp / Interact here (they provide an
            iframe or script snippet), or point site.quiz.href straight at the
            hosted quiz URL.
          */}
          <div className="rounded-2xl border-2 border-dashed border-amethyst/40 bg-white p-10 text-center">
            <Todo>[Quiz embed goes here]</Todo>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="max-w-2xl">
          <Eyebrow>Four patterns</Eyebrow>
          <h2 className="mt-5 text-4xl sm:text-5xl">Which one sounds like you?</h2>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {quiz.results.map((r) => (
            <li key={r.name} className="rounded-2xl border border-ash p-8">
              <span aria-hidden className="block h-px w-10 bg-gold" />
              <h3 className="mt-6 text-3xl">{r.name}</h3>
              <p className="mt-3 leading-relaxed text-smoke-deep">{r.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-14 flex flex-col items-start gap-4">
          <p className="text-lg text-midnight/80">Already know? Skip the quiz.</p>
          <ButtonLink href="/contact" variant="midnight">
            Book a call
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
