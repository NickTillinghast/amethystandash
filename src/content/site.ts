/**
 * All site copy that's likely to change lives here.
 * Anything in [BRACKETS] is still to be confirmed (prices, lengths, etc.).
 */

export const site = {
  name: "Amethyst & Ash",
  tagline: "Sober women, fully lit.",
  description:
    "Body-led sobriety and nervous system coaching for women ready to stop numbing out, quit drinking, and feel safe in their bodies again.",
  instagram: {
    handle: "@breakthefknpattern",
    url: "https://www.instagram.com/breakthefknpattern/",
  },
  quiz: {
    href: "/quiz",
  },
  // Cal.com booking page, used by every "Book a call" / "Book a session" button
  booking: {
    href: "https://app.cal.com/links/1cG3YXLB1aH5TGbHkaw8va",
  },
  url: "https://amethystandashcoaching.com",
};

export const nav = [
  { href: "/method", label: "The Method" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/midlife", label: "Midlife" },
  { href: "/about", label: "About" },
];

export const signatureLines = {
  superpowers:
    "Your patterns aren't flaws. They're superpowers pointed in the wrong direction.",
  surviving: "What kept you surviving can be what keeps you sober.",
  body: "Your body already knows the way out.",
  wholeWoman: "We look at the whole woman, not just the drink.",
};

export const differentiators = [
  {
    title: "Capacity, not willpower.",
    body: "You train your nervous system, not your discipline.",
  },
  {
    title: "Curiosity, not shame.",
    body: "Patterns are information, not proof something's wrong with you.",
  },
  {
    title: "Your beliefs, your call.",
    body: "Spiritual tools are there if you want them, never required.",
  },
  {
    title: "Accountability without hierarchy.",
    body: "Someone in your corner, not above you.",
  },
  {
    title: "Whole-body, whole-woman.",
    body: "Sleep, hormones, food and energy are part of sobriety.",
  },
];

export type Pillar = {
  letter: string;
  title: string;
  short: string;
  body: string;
  practices: string;
};

export const pillars: Pillar[] = [
  {
    letter: "L",
    title: "Listen to the body",
    short: "Learn your body's signals before they turn into cravings.",
    body: "When you stop drinking or using, feelings you haven't felt in years come back loud. We treat that as information, not an emergency. You learn your body's early signals before they turn into a craving.",
    practices: "Meditation, somatic check-ins, mapping your stress responses.",
  },
  {
    letter: "I",
    title: "Interrupt the pattern",
    short:
      "Name the loops, honor what they did for you, and turn them into superpowers that serve you.",
    body: "Every loop you're stuck in started as protection. We name the loops, honor what they did for you, and tell the truth about what they cost. Then we redirect that same energy, so what once kept you surviving becomes a superpower that actually serves you. Applied neurology tools resource your nervous system along the way, so feelings come as waves you can ride, not a tidal wave.",
    practices:
      "Naming the loops, truth-telling, reframing, applied neurology tools.",
  },
  {
    letter: "G",
    title: "Ground the whole body",
    short:
      "Hormones, sleep, food, energy and blind spots, plus somatic processing and your Instead Menu.",
    body: "Sobriety doesn't happen from the neck up. We look at what's quietly draining your system: hormones, food, sleep, energy, brain fog, daily rhythm, and find your blind spots. Big emotions are processed somatically in minimum effective doses, never more than your system can hold. You build your Instead Menu for the moments that used to send you reaching.",
    practices:
      "Lifestyle and hormone awareness, somatic processing, repatterning, gratitude, the Instead Menu.",
  },
  {
    letter: "H",
    title: "Honor your design",
    short: "Human design and self-compassion. Spirituality is optional.",
    body: "Stop overwriting who you are. Human design and self-compassion help you understand your wiring instead of fighting it, and stop comparing. Spirituality is optional: your \"something bigger\" can be your body, nature, your future self, or nothing at all.",
    practices:
      "Human design, self-compassion, releasing shame, visualizing your future self.",
  },
  {
    letter: "T",
    title: "Together",
    short: "An accountability partner who co-regulates with you and shows up every week.",
    body: "You will not do this alone. I will be an accountability partner that co-regulates with you and shows up weekly. You will begin to become the woman you have always wanted to be and more.",
    practices: "Accountability, community and co-regulation.",
  },
];

/** The multi-week 1:1 programs shown in full on Work With Me. */
export type Program = {
  id: "body-led-sobriety" | "midlife";
  label: string;
  name: string;
  /** Length and session schedule. */
  format: string;
  /** Short line for the homepage card. */
  summary: string;
  /** Price and length for the homepage card. */
  cardMeta: string;
  intro: string;
  included: string[];
  outcomesHeading: string;
  outcomes: string[];
  investment: { price: string; note: string };
  disclaimer?: string;
  tone: "lilac" | "white";
};

export const programs: Program[] = [
  {
    id: "body-led-sobriety",
    label: "For sobriety",
    name: "Body-Led Sobriety",
    format:
      "12 weeks of 1:1 coaching: a 90-minute kickoff, then one 60-minute session every week",
    summary:
      "12 weeks of 1:1 coaching for women who are done drinking or using, or trying to be. No shame, no labels, no white-knuckling.",
    cardMeta: "12 weeks · $1,500",
    intro:
      "You're done drinking or using, or you're trying to be. But no one told you what to do with everything that comes back once the numbing stops. This is where we figure that out together, with no shame, no labels and no white-knuckling.",
    included: [
      "A 90-minute kickoff where we map your patterns, triggers and goals",
      "11 weekly 60-minute sessions, in person or on video",
      "Voice or text support Monday through Friday, with replies within 24 hours",
      "Your personal “instead” menu of what to reach for when you'd normally drink or use",
      "Body-based tools for processing emotions, made for your nervous system",
      "A look at your sleep, food, energy and daily rhythm so your body can support your sobriety",
      "Pattern work that turns your old survival habits into strengths",
    ],
    outcomesHeading: "By the end of 12 weeks, you'll:",
    outcomes: [
      "Know what your cravings are really asking for",
      "Feel your feelings without needing to escape them",
      "Have tools you trust when life gets hard",
      "Feel prepared and confident staying sober",
      "Feel like yourself again, or maybe for the first time",
    ],
    investment: {
      price: "$1,500 paid in full, or 3 payments of $550",
      note: "Founding client pricing, limited to the first 5 women",
    },
    disclaimer:
      "This is coaching, not medical treatment. If you're drinking heavily, talk to your doctor before you stop, because withdrawal can be dangerous.",
    tone: "lilac",
  },
  {
    id: "midlife",
    label: "For midlife transition",
    name: "Midlife Neurosomatic Coaching",
    format:
      "3 months of 1:1 coaching: a 90-minute kickoff, then one 60-minute session per week for the first month and every other week after that (8 sessions in all)",
    summary:
      "3 months of 1:1 coaching for when midlife has you wired, numb, anxious or stuck, and the old coping just doesn't work anymore.",
    cardMeta: "3 months · $1,200",
    intro:
      "Midlife is a shift, and your body knows it before your brain catches up. Maybe you feel wired, numb, anxious or stuck, and the coping that used to work just doesn't anymore. This isn't something to push through. Your nervous system is asking for something different, and we're going to listen.",
    included: [
      "A 90-minute kickoff where we map your patterns, stress responses and goals",
      "7 sessions of 60 minutes each: weekly for the first month, then every other week",
      "Voice or text support 2 to 3 days a week",
      "Body-based tools for processing emotions, made for your nervous system",
      "A look at your sleep, energy, hormones and daily rhythm so your body can support you through the transition",
      "Pattern work that turns your old survival habits into strengths",
      "Space between sessions to practice, so the changes actually stick",
    ],
    outcomesHeading: "By the end of 3 months, you'll:",
    outcomes: [
      "Understand what your body is telling you",
      "Process emotions without being swallowed by them",
      "Have tools you trust for the hard days",
      "Feel steadier, clearer and more like yourself",
      "Walk into this next chapter confident and prepared",
    ],
    investment: {
      price: "$1,200 paid in full, or 3 payments of $450",
      note: "Founding client pricing, limited to the first 5 women",
    },
    tone: "white",
  },
];

export const singleSession = {
  id: "single-session",
  label: "Start here",
  name: "Single Session",
  price: "$97",
  length: "60-minute call",
  summary:
    "One 60-minute session: a first taste of working together, a tune-up, or support through a hard moment.",
  cardMeta: "60 minutes · $97",
  whatFor:
    "You want a first taste of working together, a tune-up after we've worked together, or support through a hard moment.",
  whatYouLearn: "Clarity on one pattern or struggle, plus a tool you can use right away.",
  how: "One 60-minute session, in person or on video.",
};

/** Everything someone can book, for the homepage cards and the contact form. */
export const offerings = [
  ...programs.map((p) => ({
    id: p.id,
    label: p.label,
    name: p.name,
    summary: p.summary,
    meta: p.cardMeta,
    href: p.id === "midlife" ? "/midlife" : `/work-with-me#${p.id}`,
  })),
  {
    id: singleSession.id,
    label: singleSession.label,
    name: singleSession.name,
    summary: singleSession.summary,
    meta: singleSession.cardMeta,
    href: `/work-with-me#${singleSession.id}`,
  },
];

export const fit = {
  forYou: [
    "You're a high-achieving, independent woman who has carried everything on her own for a long time, and you're tired of doing it alone.",
    "You're ready to quit drinking or using, or you've already stopped and want support staying sober in a way that feels like freedom, not white-knuckling.",
    "You're in a midlife transition and your body is changing in ways nobody prepared you for: hormones, sleep, energy, mood. You no longer feel like yourself.",
    "You're burnt out from hustling, performing, and holding it all together, and you can't keep running on empty.",
    "You've tried talk therapy. You understand your patterns, but understanding them hasn't changed them.",
    "You've used alcohol, substances, food, work, or busyness to numb what you didn't want to feel, and it's stopped working.",
    "You want more than information. You want to know exactly which tools to use, when to use them, and why, with someone guiding you through it.",
    "You want to be truly seen and supported, and you're ready to let yourself receive.",
    "You're exhausted by the life you've been living and ready for real, lasting change.",
  ],
  notForYou: [
    "You're looking for a quick fix or someone to do the work for you.",
    "You're not open to guidance, or not willing to try new tools and follow through between sessions.",
    "You're currently going through physical withdrawal from alcohol or drugs. Withdrawal can be medically serious, so please get support from a doctor or a detox program first. I'd love to support you once you're through it.",
    "You're currently in a psychiatric crisis or need a higher level of mental health care. This coaching works alongside clinical treatment, not in place of it. When you're stable and supported, I'm here.",
    "You want to stay comfortable more than you want to change.",
  ],
  closing:
    "If you're a woman who is willing to show up, be honest, and do the work, you're in the right place.",
};

export const coach = {
  name: "Amber",
  credentials: [
    "ICF-accredited coach",
    "Trauma-trained",
    "Certified neurosomatic coach",
    "Certified womb-centered somatic coach",
  ],
};

export const testimonials = [
  {
    name: "Kari L.",
    quote:
      "Amber has taken the time to master the information on resetting and calming the nervous system. She is a patient teacher and is always open to questions. She guides you through the exercises with grace and makes sure you feel held and cared for. The knowledge she has really works and I have taken it with me and used the skills over and over again. These tools make me feel like I can care for my body in a different, more intrinsic way.",
  },
  {
    name: "Amber M.",
    quote:
      "Amber is incredibly knowledgeable and deeply attuned to the female nervous system. This course gave me practical tools to meet my changing body where it is and create more calm and regulation within my nervous system. I walked away feeling more connected to and understanding of my body, and I'm so grateful for her passion for supporting women on this journey.",
  },
  {
    name: "Megan G.",
    stars: 5,
    quote:
      "Amber's space is so cozy and calming that I felt at ease the moment I walked in. She's incredibly knowledgeable, and the neurosomatic session was fascinating. She taught me some great tools I found really interesting and can use on my own. I left feeling more connected to my body and my nervous system felt noticeably calmer. Highly recommend if you're looking to slow down and reconnect with yourself.",
  },
];

