"use server";

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
