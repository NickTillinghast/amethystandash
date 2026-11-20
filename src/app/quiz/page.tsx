import { Quiz } from "@/components/Quiz";
import { Container } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Free Quiz: What's Your Numbing Pattern?",
  description:
    "Take the free quiz. Find out how you numb (wine, busyness, caretaking or shutdown), what's happening in your nervous system, and why willpower hasn't fixed it.",
  keywords: [
    "numbing pattern quiz",
    "am I drinking too much quiz",
    "burnout quiz",
    "nervous system quiz",
  ],
  path: "/quiz",
});

export default function QuizPage() {
  return (
    <section className="relative overflow-hidden bg-midnight py-12 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <Container className="relative max-w-3xl">
        <Quiz />
      </Container>
    </section>
  );
}
