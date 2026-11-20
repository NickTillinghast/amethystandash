/**
 * "What's Your Numbing Pattern?" quiz content.
 * Every answer A/B/C/D counts toward one result type (see LETTER_TO_RESULT).
 * Scoring lives in src/lib/quiz.ts.
 */

export type Letter = "A" | "B" | "C" | "D";
export type ResultId = "achiever" | "escape-artist" | "caretaker" | "shutdown";

export const LETTER_TO_RESULT: Record<Letter, ResultId> = {
  A: "achiever",
  B: "escape-artist",
  C: "caretaker",
  D: "shutdown",
};

/** Ties go to the answer on this question (index 2 = question 3, "what do you reach for"). */
export const TIEBREAK_QUESTION = 2;

export type Question = { prompt: string; options: Record<Letter, string> };

export const questions: Question[] = [
  {
    prompt: "It's 6pm and the day was a lot. What do you do first?",
    options: {
      A: "Keep going. There's always one more thing to finish.",
      B: "Pour a glass, light up, or grab something to take the edge off.",
      C: "Start dinner, check on everyone, and handle what they need.",
      D: "Collapse on the couch and scroll until it's somehow 10pm.",
    },
  },
  {
    prompt: "When stress hits, your body usually feels…",
    options: {
      A: "Wired. Tight jaw, racing mind, can't sit still.",
      B: "Buzzy and restless, like you need to get out of your own skin.",
      C: "Tense in your shoulders and chest from holding everyone up.",
      D: "Heavy, foggy, numb. Like you're not really in there.",
    },
  },
  {
    prompt: "What do you reach for most when you need relief?",
    options: {
      A: "Your to-do list, your inbox, a new project.",
      B: "Wine, weed, sugar, or anything that changes how you feel fast.",
      C: "Someone else's problem to fix.",
      D: "Your phone, Netflix, or sleep. Anything that lets you check out.",
    },
  },
  {
    prompt: "How do you honestly feel when you wake up most mornings?",
    options: {
      A: "Already behind. Your brain is running before your feet hit the floor.",
      B: "Foggy, a little regretful, promising today will be different.",
      C: "Thinking about what everyone else needs from you today.",
      D: "Exhausted, even after a full night's sleep.",
    },
  },
  {
    prompt: "When a hard feeling comes up (anger, grief, loneliness), you…",
    options: {
      A: "Get busy so you don't have to feel it.",
      B: "Find a way to quiet it down quickly.",
      C: "Push it aside because someone else needs you more.",
      D: "Go flat. You don't feel much of anything anymore.",
    },
  },
  {
    prompt: "Someone asks, “How are you, really?” You say…",
    options: {
      A: "“Busy! But good.”",
      B: "“Fine,” and change the subject.",
      C: "“I'm good. How are you?”",
      D: "“Tired,” and you mean it in your bones.",
    },
  },
  {
    prompt: "What scares you most about slowing down?",
    options: {
      A: "Falling behind or losing what you've built.",
      B: "Having to feel everything without your go-to.",
      C: "Everything falling apart without you holding it together.",
      D: "Realizing how empty you actually feel.",
    },
  },
  {
    prompt: "How connected do you feel to your body these days?",
    options: {
      A: "It's more like a machine I push through the day.",
      B: "I notice it most when I'm craving something.",
      C: "I don't really think about it. I'm too focused on everyone else.",
      D: "Barely. Some days I feel like I'm watching my life from outside.",
    },
  },
  {
    prompt: "When you've tried to change your pattern before, what got in the way?",
    options: {
      A: "Life got busy and it slid down the list.",
      B: "The urge hit harder than my willpower.",
      C: "Someone needed me and I put myself last again.",
      D: "I didn't have the energy to even start.",
    },
  },
  {
    prompt: "If you could feel one thing again, what would it be?",
    options: {
      A: "Calm. Actually being able to rest without guilt.",
      B: "Free. Not needing anything to get through the day.",
      C: "Like myself. Knowing what I want for once.",
      D: "Alive. Energized, clear, and lit up from the inside.",
    },
  },
];

export type QuizResult = {
  id: ResultId;
  name: string;
  headline: string;
  pattern: string;
  nervousSystem: string;
  willpower: string;
  startWith: string;
  /** Safety note shown in a highlighted box, for results where it matters. */
  safetyNote?: string;
  /** The line shown with the Book a Call button. */
  callToAction: string;
};

// Result copy from Amber (Nov 20, 2026).
export const results: Record<ResultId, QuizResult> = {
  achiever: {
    id: "achiever",
    name: "The Achiever",
    headline: "You numb by doing.",
    pattern:
      "You're the one who gets it done. The business, the house, the calendar, the next goal. From the outside it looks like drive. On the inside, stopping feels unsafe.",
    nervousSystem:
      "Your nervous system is stuck in go mode. Busyness has become your way of staying one step ahead of what you don't want to feel. Every finished task gives you a tiny hit of relief, so your body keeps asking for more. Rest feels like guilt, and stillness feels like danger.",
    willpower:
      "You've tried to “just slow down.” But you can't think your way out of a pattern your body is running. Telling a revved-up nervous system to relax is like telling a car to stop while your foot is still on the gas.",
    startWith:
      "Practice stopping before you're “done.” Once a day, set a 5-minute timer, put your phone and your list down, and just sit. Notice what your body does when there's nothing to fix or finish. The restlessness that comes up isn't a sign you're wasting time. It's the pattern showing itself. That's your starting point, and it's exactly what we work with together: teaching your body it's safe to rest without having to earn it.",
    callToAction: "Let's talk about what slowing down could actually look like for you.",
  },
  "escape-artist": {
    id: "escape-artist",
    name: "The Escape Artist",
    headline: "You numb by taking the edge off.",
    pattern:
      "The glass of wine at 5pm. The joint after the kids are down. The sugar, the scroll, the anything. You know exactly what you reach for, and you've probably promised yourself more than once that tomorrow will be different.",
    nervousSystem:
      "Your nervous system is overloaded and looking for the fastest exit. Alcohol and weed work, for a while. They quiet the buzz, soften the edges, and give you a break from your own skin. But each time, your body learns that relief only comes from outside of you, so the urge comes back stronger.",
    willpower:
      "Nothing is wrong with you. You're not weak and you're not broken. You're fighting a survival pattern with white knuckles, and the urge is coming from a place deeper than willpower can reach.",
    startWith:
      "Get curious about the 10 minutes before you reach. Next time the urge hits, pause and ask: What's happening in my body right now? What do I actually need? Tired, lonely, wired, overwhelmed? You don't have to stop yet. Just notice. Cravings are signals, not commands, and learning to read them is the first step of Body-Led Sobriety.",
    safetyNote:
      "If you're drinking or using daily, please talk to a doctor before stopping. Withdrawal can be medically serious, and I want you safe.",
    callToAction: "Let's talk about what freedom could look like for you.",
  },
  caretaker: {
    id: "caretaker",
    name: "The Caretaker",
    headline: "You numb by taking care of everyone else.",
    pattern:
      "You're the one everybody leans on. You know what everyone needs before they ask. And somewhere along the way, you stopped asking what you need.",
    nervousSystem:
      "Your nervous system learned that you're safe when everyone else is okay. So your attention is always pointed outward. Holding everyone up keeps you so busy that your own feelings never get a turn. That tension in your shoulders and chest is your body carrying the weight.",
    willpower:
      "You've tried to put yourself first. Then someone needed you, and you went right back. That's not a lack of discipline. Your body treats your own needs as a threat to everyone's safety, and that runs deeper than any good intention.",
    startWith:
      "Ask yourself one question every day, before you ask anyone else: “What do I need right now?” Then put one hand on your chest and wait for the answer. It might be water, a nap, quiet, or a no. You don't have to act on it yet. Just let yourself hear it. Coming back to yourself starts with listening, and that's where our work together begins.",
    callToAction: "It's your turn. Let's talk about what you need.",
  },
  shutdown: {
    id: "shutdown",
    name: "The Burnt-Out Shutdown",
    headline: "You've been running on empty so long, your body hit the brakes.",
    pattern:
      "You're tired in a way sleep doesn't fix. Foggy. Flat. Some days it feels like you're watching your own life from the outside. You don't feel much of anything anymore, and that might scare you more than feeling too much ever did.",
    nervousSystem:
      "After pushing for too long, your nervous system shifted into shutdown to protect you. It's turned the volume down on everything: energy, motivation, joy, desire. It's not laziness. It's your body's last line of defense. And in midlife, hormone shifts can make it hit even harder.",
    willpower:
      "You can't push your way out of a state your body went into because you pushed too hard. Trying harder just drains what little you have left.",
    startWith:
      "Go gentle, not harder. Pick one small thing each day that brings a little life back into your body: stepping outside in the sun, a warm shower, a song you love, feeling your feet on the ground. No goals, no pushing. You're not trying to fix anything yet. You're showing your body it's safe to come back online, slowly. That's how we start, together.",
    safetyNote:
      "If the flatness feels heavy or hopeless, please also reach out to a doctor or therapist. Coaching works best alongside that support, not in place of it.",
    callToAction: "Let's talk about getting your spark back.",
  },
};

export const quizTitle = "What's Your Numbing Pattern?";
