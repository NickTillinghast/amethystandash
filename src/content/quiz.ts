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
  superpower: string;
  startWith: { pillar: string; body: string };
  /** Shown for results where stopping suddenly could be medically risky. */
  safetyNote?: string;
};

// DRAFT result copy, written from the brand guide. Have the client review before launch.
export const results: Record<ResultId, QuizResult> = {
  achiever: {
    id: "achiever",
    name: "The Achiever",
    headline: "You numb by doing.",
    pattern:
      "You're the one who gets it done. Busy isn't just your schedule, it's your safety. As long as you're moving, producing and checking things off, the feelings underneath can't catch up with you.",
    nervousSystem:
      "Your nervous system is stuck in “go.” The stress response built for short bursts of fight-or-flight has become your everyday setting. That's why your mind races, your jaw stays tight, and rest feels more like guilt than relief.",
    willpower:
      "You've probably tried to fix this the way you fix everything: with a plan and more discipline. But willpower runs on the same system that's already maxed out. You can't push your way into calm.",
    superpower:
      "Your drive, focus and follow-through are real gifts. Right now they're pointed at outrunning yourself. Redirected, they build a life you don't need to escape from.",
    startWith: {
      pillar: "L · Listen to the body",
      body: "Learn to notice your body's signals before you override them, so slowing down starts to feel safe instead of scary.",
    },
  },
  "escape-artist": {
    id: "escape-artist",
    name: "The Escape Artist",
    headline: "You numb by taking the edge off.",
    pattern:
      "The wine at 6pm. The joint after everyone's in bed. The sugar, the scroll, whatever changes how you feel fast. It started as relief, and it worked, until it became the thing you think about most.",
    nervousSystem:
      "Your system is looking for a fast way down. When stress builds and your body doesn't know another way to settle, a drink or a hit does it for you. The catch: every quick downshift is followed by a rebound, more anxious and more restless, so the next one feels even more necessary. That's the loop.",
    willpower:
      "Willpower asks the most stressed-out version of you to say no at the exact moment your body is screaming for relief. That's not a fair fight. What changes it is giving your nervous system other ways to settle, so the urge has somewhere else to go.",
    superpower:
      "You're wired to feel deeply and to go after relief, freedom and aliveness. Nothing wrong with that. When you learn to get there without the drink or the hit, that same hunger becomes your fuel.",
    startWith: {
      pillar: "I · Interrupt the pattern",
      body: "Name the loop, honor what it's done for you, and build your Instead Menu for the moments that used to send you reaching.",
    },
    safetyNote:
      "If you drink or use every day, please don't stop suddenly on your own. Withdrawal can be dangerous. Talk to a doctor first, and I'll be right here alongside it.",
  },
  caretaker: {
    id: "caretaker",
    name: "The Caretaker",
    headline: "You numb by taking care of everyone else.",
    pattern:
      "You know what everyone needs before they ask. You're the steady one, the fixer, the “I'm good, how are you?” And somewhere along the way, your own needs went quiet.",
    nervousSystem:
      "Your nervous system learned that safety comes from keeping everyone else okay. It's called the fawn response: scanning the room, smoothing things over, putting yourself last. It leaves you tense, depleted and quietly resentful, with no room to feel your own feelings.",
    willpower:
      "You can't willpower your way into self-care while your body believes your needs are a threat to the people you love. You don't need more discipline to put yourself first. You need your system to learn that it's safe to.",
    superpower:
      "Your empathy and attunement are rare. Turned toward yourself, they're what finally lets you know what you want, and ask for it.",
    startWith: {
      pillar: "H · Honor your design",
      body: "Self-compassion and human design help you understand your own wiring, so you stop overwriting who you are to keep everyone else comfortable.",
    },
  },
  shutdown: {
    id: "shutdown",
    name: "The Burnt-Out Shutdown",
    headline: "You've gone numb because you're running on empty.",
    pattern:
      "You're not lazy and you're not broken. You've been holding it together for so long that your body finally pulled the plug. Foggy, flat, tired in your bones, scrolling until it's somehow 10pm.",
    nervousSystem:
      "This is your nervous system's freeze response. After too long in overdrive, your body saves what little energy is left by turning things down: motivation, feeling, connection. It's protection, not failure.",
    willpower:
      "Willpower needs energy you don't have right now. Pushing harder from shutdown just digs the hole deeper. The way out is gentle: small doses of safety and energy that slowly bring your body back online.",
    superpower:
      "Underneath the flat is a woman who cared so much, for so long, that she ran out. That depth of care is still there, and it can come back.",
    startWith: {
      pillar: "G · Ground the whole body",
      body: "Look at what's quietly draining you: sleep, hormones, food, energy and daily rhythm. Small, steady changes your body can actually hold.",
    },
  },
};

export const quizTitle = "What's Your Numbing Pattern?";
