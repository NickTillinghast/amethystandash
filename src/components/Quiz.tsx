"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { submitQuizLead, type QuizLeadState } from "@/app/actions";
import { questions, quizTitle, results, type Letter, type QuizResult } from "@/content/quiz";

const LETTERS: Letter[] = ["A", "B", "C", "D"];
const INTRO = -1;
const EMAIL = questions.length;

/** Remounting on "Retake" clears both the answers and the form's result. */
export function Quiz() {
  const [round, setRound] = useState(0);
  return <QuizFlow key={round} onRetake={() => setRound((r) => r + 1)} />;
}

function QuizFlow({ onRetake }: { onRetake: () => void }) {
  const [step, setStep] = useState(INTRO);
  const [answers, setAnswers] = useState<(Letter | undefined)[]>(() => questions.map(() => undefined));
  const [state, action, pending] = useActionState<QuizLeadState, FormData>(submitQuizLead, {
    status: "idle",
  });
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const result = state.status === "success" && state.resultId ? results[state.resultId] : null;
  const view = result ? "result" : step;

  // Move focus to each new screen's heading, so keyboard and screen-reader users follow along
  useEffect(() => {
    if (view === INTRO) return;
    headingRef.current?.focus({ preventScroll: true });
    const top = cardRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [view]);

  function choose(letter: Letter) {
    setAnswers((prev) => prev.map((a, i) => (i === step ? letter : a)));
    setStep((s) => s + 1);
  }

  return (
    <div ref={cardRef} className="scroll-mt-24 rounded-3xl bg-cream p-6 text-midnight shadow-2xl sm:p-12">
      {result ? (
        <ResultView result={result} headingRef={headingRef} onRetake={onRetake} />
      ) : step === INTRO ? (
        <Intro onStart={() => setStep(0)} />
      ) : step === EMAIL ? (
        <form action={action} noValidate className="relative">
          <Progress current={questions.length} />
          <p className="eyebrow mt-10 text-amethyst">Your result is ready</p>
          <h2 ref={headingRef} tabIndex={-1} className="mt-4 text-4xl outline-none sm:text-5xl">
            Where should I send it?
          </h2>
          <p className="mt-4 leading-relaxed text-midnight/80">
            Enter your email to see your pattern. You&apos;ll also get a few short emails over the
            next week, written for your result. Unsubscribe anytime.
          </p>

          <input type="hidden" name="answers" value={answers.join("")} />
          <div aria-hidden className="absolute -left-[9999px]">
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold">
                First name <span className="font-normal text-smoke-deep">(optional)</span>
              </label>
              <input id="firstName" name="firstName" autoComplete="given-name" className="field mt-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={state.errors?.email ? true : undefined}
                aria-describedby={state.errors?.email ? "email-error" : undefined}
                className="field mt-2"
              />
            </div>
          </div>
          {state.errors?.email ? (
            <p id="email-error" className="mt-2 text-sm text-[#a33a3a]">
              {state.errors.email}
            </p>
          ) : null}
          {state.status === "error" && state.message ? (
            <p role="alert" className="mt-2 text-sm text-[#a33a3a]">
              {state.message}
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button
              type="submit"
              disabled={pending}
              className="inline-flex items-center justify-center rounded-full bg-midnight px-8 py-4 text-sm font-semibold tracking-[0.12em] text-cream uppercase transition-colors hover:bg-midnight-soft disabled:opacity-60"
            >
              {pending ? "One sec…" : "Show my result"}
            </button>
            <BackButton onClick={() => setStep(EMAIL - 1)} />
          </div>
          <p className="mt-8 text-xs leading-relaxed text-smoke-deep">
            This quiz is for self-reflection, not a diagnosis. See the{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </form>
      ) : (
        <fieldset>
          <Progress current={step} />
          <legend className="sr-only">
            Question {step + 1} of {questions.length}
          </legend>
          <p className="eyebrow mt-10 text-amethyst">
            Question {step + 1} of {questions.length}
          </p>
          <h2 ref={headingRef} tabIndex={-1} className="mt-4 text-3xl outline-none sm:text-4xl">
            {questions[step].prompt}
          </h2>
          <ul className="mt-8 space-y-3">
            {LETTERS.map((letter) => {
              const selected = answers[step] === letter;
              return (
                <li key={letter}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => choose(letter)}
                    className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left leading-relaxed transition-colors sm:p-5 ${
                      selected
                        ? "border-amethyst bg-lilac-wash"
                        : "border-ash bg-white hover:border-amethyst/60 hover:bg-lilac-wash/50"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border text-xs font-semibold ${
                        selected ? "border-amethyst bg-amethyst text-cream" : "border-smoke/50 text-smoke-deep"
                      }`}
                    >
                      {letter}
                    </span>
                    <span>{questions[step].options[letter]}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          {step > 0 ? (
            <div className="mt-8">
              <BackButton onClick={() => setStep(step - 1)} />
            </div>
          ) : null}
        </fieldset>
      )}
    </div>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center">
      <p className="eyebrow text-amethyst">Free quiz · 2 minutes</p>
      <h1 className="mt-5 text-4xl sm:text-6xl">{quizTitle}</h1>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-midnight/80">
        Ten honest questions about how you handle stress, what you reach for at the end of the day,
        and how your body feels. Find out what&apos;s been running your pattern, and why willpower
        alone hasn&apos;t fixed it.
      </p>
      <button
        type="button"
        onClick={onStart}
        className="mt-10 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-[0.12em] text-midnight uppercase transition-colors hover:bg-[#ecc97f]"
      >
        Start the quiz
      </button>
      <p className="mt-6 text-sm text-smoke-deep">No right answers. Go with your gut.</p>
    </div>
  );
}

function Progress({ current }: { current: number }) {
  const pct = Math.round((current / questions.length) * 100);
  return (
    <div
      role="progressbar"
      aria-label="Quiz progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      className="h-1.5 w-full overflow-hidden rounded-full bg-ash"
    >
      <div className="h-full rounded-full bg-gold transition-[width] duration-300" style={{ width: `${pct}%` }} />
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sm font-semibold tracking-wide text-smoke-deep underline-offset-4 hover:text-amethyst hover:underline"
    >
      &larr; Back
    </button>
  );
}

function ResultView({
  result,
  headingRef,
  onRetake,
}: {
  result: QuizResult;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  onRetake: () => void;
}) {
  const sections = [
    { title: "What's happening in your body", body: result.nervousSystem },
    { title: "Why willpower hasn't fixed it", body: result.willpower },
  ];
  return (
    <div>
      <p className="eyebrow text-amethyst">Your numbing pattern</p>
      <h2 ref={headingRef} tabIndex={-1} className="mt-4 text-5xl outline-none sm:text-6xl">
        {result.name}
      </h2>
      <p className="mt-4 font-serif text-2xl italic text-amethyst sm:text-3xl">{result.headline}</p>
      <p className="mt-8 text-lg leading-relaxed text-midnight/85">{result.pattern}</p>

      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <section key={s.title} className="border-l-2 border-gold pl-5 sm:pl-6">
            <h3 className="text-2xl sm:text-3xl">{s.title}</h3>
            <p className="mt-3 text-lg leading-relaxed text-midnight/85">{s.body}</p>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-2xl bg-midnight p-6 text-cream sm:p-8">
        <h3 className="eyebrow text-gold">Where to start</h3>
        <p className="mt-4 text-lg leading-relaxed text-cream/90">{result.startWith}</p>
      </section>

      {result.safetyNote ? (
        <p className="mt-6 rounded-xl bg-lilac-wash p-5 leading-relaxed">{result.safetyNote}</p>
      ) : null}

      <div className="mt-12 flex flex-col items-center gap-6 text-center">
        <p className="max-w-lg font-serif text-2xl leading-snug sm:text-3xl">
          {result.callToAction}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-[0.12em] text-midnight uppercase transition-colors hover:bg-[#ecc97f]"
        >
          Book a call
        </Link>
        <button
          type="button"
          onClick={onRetake}
          className="text-sm text-smoke-deep underline underline-offset-4 hover:text-amethyst"
        >
          Retake the quiz
        </button>
      </div>
    </div>
  );
}
