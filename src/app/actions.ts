"use server";

import type { ResultId } from "@/content/quiz";
import { parseAnswers, scoreQuiz } from "@/lib/quiz";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

function text(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function validate(formData: FormData, required: string[]) {
  const errors: Record<string, string> = {};
  for (const key of required) {
    if (!text(formData, key)) errors[key] = "This one's needed.";
  }
  const email = text(formData, "email");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "That email doesn't look quite right.";
  }
  // The disclaimer checkbox is required on every intake form, and re-checked here on the server.
  if (formData.get("disclaimer") !== "on") {
    errors.disclaimer = "Please read and agree to the disclaimer to continue.";
  }
  return errors;
}

/**
 * TODO: connect these to the real tools once chosen (e.g. send an email with
 * Resend, add to a CRM, or forward to the booking tool). Right now submissions
 * are only logged on the server.
 */
async function deliver(kind: string, formData: FormData) {
  const entry = Object.fromEntries(
    [...formData.entries()].filter(([k]) => !k.startsWith("$") && k !== "company"),
  );
  console.log(`[${kind}] new submission`, entry);
}

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: real people never see or fill this field.
  if (text(formData, "company")) return { status: "success" };

  const errors = validate(formData, ["name", "email", "interest"]);
  if (Object.keys(errors).length) {
    return { status: "error", errors, message: "A couple of things need a look." };
  }
  await deliver("contact", formData);
  return {
    status: "success",
    message: "Got it. I'll be in touch within [X business days] to find a time that works.",
  };
}

export type QuizLeadState = FormState & { resultId?: ResultId };

/**
 * Captures her email, then reveals her result. The result is worked out again here
 * from her answers, so the tag sent to the email platform can't be faked by the browser.
 */
export async function submitQuizLead(
  _prev: QuizLeadState,
  formData: FormData,
): Promise<QuizLeadState> {
  const answers = parseAnswers(formData.get("answers"));
  if (!answers) {
    return { status: "error", message: "Something went wrong with your answers. Please retake the quiz." };
  }
  const resultId = scoreQuiz(answers);

  // Honeypot: pretend it worked so bots move on
  if (text(formData, "company")) return { status: "success", resultId };

  const email = text(formData, "email");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", errors: { email: "Please enter a valid email so I can send your result." } };
  }

  // TODO: add her to the email platform (Kit, MailerLite, Flodesk) tagged with resultId,
  // which starts the email sequence for her type. For now it's only logged.
  console.log("[quiz] new lead", {
    email,
    firstName: text(formData, "firstName"),
    result: resultId,
    answers: answers.join(""),
  });

  return { status: "success", resultId };
}

export async function submitScholarship(_prev: FormState, formData: FormData): Promise<FormState> {
  if (text(formData, "company")) return { status: "success" };

  const errors = validate(formData, ["name", "email", "whereYouAre", "whySupport"]);
  if (Object.keys(errors).length) {
    return { status: "error", errors, message: "A couple of things need a look." };
  }
  await deliver("scholarship", formData);
  return {
    status: "success",
    message:
      "Your application is in. Thank you for trusting me with it. Scholarship spots are chosen at the start of each month, and you'll hear back either way.",
  };
}
