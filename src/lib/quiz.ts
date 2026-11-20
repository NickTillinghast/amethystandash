import {
  LETTER_TO_RESULT,
  TIEBREAK_QUESTION,
  questions,
  type Letter,
  type ResultId,
} from "@/content/quiz";

const LETTERS: Letter[] = ["A", "B", "C", "D"];

/** Parses "ABCD..." into answers, or null if it isn't one valid answer per question. */
export function parseAnswers(value: unknown): Letter[] | null {
  if (typeof value !== "string" || value.length !== questions.length) return null;
  const answers = value.split("") as Letter[];
  return answers.every((a) => LETTERS.includes(a)) ? answers : null;
}

/**
 * The most-picked letter wins. On a tie, the answer to question 3 decides if it's one of
 * the tied letters; otherwise her most recent answer among the tied letters does.
 */
export function scoreQuiz(answers: Letter[]): ResultId {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  for (const a of answers) counts[a]++;

  const top = Math.max(...Object.values(counts));
  const tied = LETTERS.filter((l) => counts[l] === top);
  if (tied.length === 1) return LETTER_TO_RESULT[tied[0]];

  const tiebreak = answers[TIEBREAK_QUESTION];
  if (tied.includes(tiebreak)) return LETTER_TO_RESULT[tiebreak];

  const latest = [...answers].reverse().find((a) => tied.includes(a))!;
  return LETTER_TO_RESULT[latest];
}
