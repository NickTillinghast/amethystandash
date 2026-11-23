"use server";

import { results, type ResultId } from "@/content/quiz";
import { offerings } from "@/content/site";
import { notifyAmber } from "@/lib/notify";
import { parseAnswers, scoreQuiz } from "@/lib/quiz";
import { addQuizSubscriber } from "@/lib/sender";

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

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: real people never see or fill this field.
  if (text(formData, "company")) return { status: "success" };

  const errors = validate(formData, ["name", "email", "interest"]);
  if (Object.keys(errors).length) {
    return { status: "error", errors, message: "A couple of things need a look." };
  }

  const name = text(formData, "name");
  const email = text(formData, "email");
  const interest = text(formData, "interest");
  const interestName =
    offerings.find((o) => o.id === interest)?.name ??
    (interest === "not-sure" ? "Not sure yet, let's talk" : interest);
  console.log("[contact] new submission", { interest });
  await notifyAmber({
    subject: `New message from ${name}`,
    replyTo: email,
    lines: [
      ["Name", name],
      ["Email", email],
      ["Interested in", interestName],
      ["Message", text(formData, "message")],
      ["How they found you", text(formData, "source")],
    ],
  });
  return {
    status: "success",
    message: "Got it. I'll be in touch within 24 hours to find a time that works.",
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

  const firstName = text(formData, "firstName");
  try {
    // Joins the Sender.net group for her result, which starts that result's email series
    await addQuizSubscriber({ email, firstName, resultId });
    console.log("[quiz] added to Sender", { result: resultId });
  } catch (err) {
    // She still sees her result. The lead is kept here (CloudWatch logs) to add by hand
    console.error("[quiz] Sender failed, lead kept in this log", {
      email,
      firstName,
      result: resultId,
      answers: answers.join(""),
      error: err instanceof Error ? err.message : String(err),
    });
  }

  const resultName = results[resultId].name;
  await notifyAmber({
    subject: `${firstName || email} took the quiz: ${resultName}`,
    replyTo: email,
    lines: [
      ["Name", firstName || "(not given)"],
      ["Email", email],
      ["Result", resultName],
      ["Email series", `Started in Sender (${resultName} group)`],
    ],
  });

  return { status: "success", resultId };
}
