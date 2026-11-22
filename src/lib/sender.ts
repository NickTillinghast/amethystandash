import type { ResultId } from "@/content/quiz";

const API = "https://api.sender.net/v2";

/**
 * The Sender.net group for each quiz result. Joining a group starts that group's
 * automation in Sender (the email series for her result). Ids aren't secret.
 */
export const RESULT_GROUPS: Record<ResultId, string> = {
  achiever: "bklxr6",
  "escape-artist": "elmy2M",
  caretaker: "bmnzYG",
  shutdown: "enoAg7",
};

async function sender(method: "POST" | "DELETE", path: string, body: unknown) {
  const token = process.env.SENDER_API_TOKEN;
  if (!token) throw new Error("SENDER_API_TOKEN is not set");

  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
    // Don't keep her waiting on her result if Sender is slow
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) {
    throw new Error(`Sender ${method} ${path}: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`);
  }
}

/**
 * Adds her to the group for her result (Sender updates her if she's already a subscriber),
 * then takes her out of the other quiz groups, so a retake means one email series, not two.
 */
export async function addQuizSubscriber({
  email,
  firstName,
  resultId,
}: {
  email: string;
  firstName: string;
  resultId: ResultId;
}) {
  const group = RESULT_GROUPS[resultId];
  await sender("POST", "/subscribers", {
    email,
    // Left out when blank, so a retake without a name keeps the one she gave before
    firstname: firstName || undefined,
    groups: [group],
    trigger_automation: true,
  });

  const others = Object.values(RESULT_GROUPS).filter((g) => g !== group);
  await Promise.all(
    others.map((g) => sender("DELETE", `/subscribers/groups/${g}`, { subscribers: [email] })),
  );
}
