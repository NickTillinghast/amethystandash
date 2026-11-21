"use client";

import Link from "next/link";
import { useActionState, type ReactNode } from "react";
import { submitContact, type FormState } from "@/app/actions";
import { offerings } from "@/content/site";

const initial: FormState = { status: "idle" };

function Field({
  label,
  name,
  error,
  hint,
  optional,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold">
        {label}
        {optional ? <span className="ml-2 font-normal text-smoke-deep">(optional)</span> : null}
      </label>
      {hint ? <p className="mt-1 text-sm text-smoke-deep">{hint}</p> : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm text-[#a33a3a]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function DisclaimerCheckbox({ error }: { error?: string }) {
  return (
    <div className="rounded-xl border border-ash bg-cream p-5">
      <label className="flex gap-3 text-sm leading-relaxed">
        <input
          type="checkbox"
          name="disclaimer"
          required
          aria-invalid={error ? true : undefined}
          className="mt-1 h-4 w-4 flex-none accent-[#6b55a3]"
        />
        <span>
          I&apos;ve read and agree to the{" "}
          <Link href="/disclaimer" target="_blank" className="font-semibold underline underline-offset-2">
            disclaimer
          </Link>
          . I understand this is coaching, not medical or mental health treatment, and that if I&apos;m
          physically dependent on alcohol or other substances I&apos;ll get medical support before
          stopping.
        </span>
      </label>
      {error ? <p className="mt-2 text-sm text-[#a33a3a]">{error}</p> : null}
    </div>
  );
}

function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px]">
      <label>
        Company
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

function Status({ state }: { state: FormState }) {
  if (state.status !== "error" || !state.message) return null;
  return (
    <p role="alert" className="text-sm text-[#a33a3a]">
      {state.message}
    </p>
  );
}

function Success({ title, message }: { title: string; message?: string }) {
  return (
    <div role="status" className="rounded-2xl bg-midnight p-10 text-cream">
      <h2 className="text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-relaxed text-cream/80">{message}</p>
    </div>
  );
}

function SubmitButton({ pending, children }: { pending: boolean; children: ReactNode }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-midnight px-8 py-4 text-sm font-semibold tracking-[0.12em] text-cream uppercase transition-colors hover:bg-midnight-soft disabled:opacity-60"
    >
      {pending ? "Sending…" : children}
    </button>
  );
}

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);
  const e = state.errors ?? {};

  if (state.status === "success") {
    return <Success title="You reached out. That counts." message={state.message} />;
  }

  return (
    <form action={action} noValidate className="relative space-y-6">
      <Honeypot />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" name="name" error={e.name}>
          <input id="name" name="name" autoComplete="name" className="field" required />
        </Field>
        <Field label="Email" name="email" error={e.email}>
          <input id="email" name="email" type="email" autoComplete="email" className="field" required />
        </Field>
      </div>

      <Field label="What are you interested in?" name="interest" error={e.interest}>
        <select id="interest" name="interest" className="field" required defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {offerings.map((o) => (
            <option key={o.id} value={o.id}>
              {o.name}
            </option>
          ))}
          <option value="not-sure">Not sure yet, let&apos;s talk</option>
        </select>
      </Field>

      <Field
        label="Where are you right now?"
        name="message"
        optional
        hint="Sober curious, newly sober, years in, or in the thick of midlife. Share as much or as little as you like."
      >
        <textarea id="message" name="message" rows={5} className="field" />
      </Field>

      <Field label="How did you find me?" name="source" optional>
        <input id="source" name="source" className="field" />
      </Field>

      <DisclaimerCheckbox error={e.disclaimer} />
      <Status state={state} />
      <SubmitButton pending={pending}>Send</SubmitButton>
    </form>
  );
}
