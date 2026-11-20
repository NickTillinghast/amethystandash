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
  // TODO: set once the domain is confirmed.
  url: "https://amethystandash.com",
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
    short:
      "Accountability without hierarchy, a community that co-regulates, and a weekly live call.",
    body: "You need someone to answer to, minus the hierarchy. An accountability partner and a community that co-regulates and shows up weekly. Eventually, you become the woman who lights the way for the next one.",
    practices: "Accountability, community, co-regulation, the weekly live call.",
  },
];

export type Offer = {
  id: "one-to-one" | "circle" | "midlife";
  label: string;
  name: string;
  /** Price / length / frequency line. Still placeholders. */
  details: string[];
  forWho: string;
  summary: string;
  included: string[];
  cta: { href: string; label: string };
  tone: "lilac" | "gold" | "ash";
};

export const offers: Offer[] = [
  {
    id: "one-to-one",
    label: "For sobriety · Deep work",
    name: "Fully Lit 1:1 Coaching",
    details: ["[PRICE]", "[LENGTH, e.g. 3 months]", "[SESSION FREQUENCY]"],
    forWho:
      "For the woman who wants personal, deep work on the specific things that keep tormenting her.",
    summary:
      "Deep personal work across all five pillars, at a pace your body can handle, with the Circle included while we work together.",
    included: [
      "A whole-body intake: sleep, energy, hormones, food, stress and lifestyle, so we can see your blind spots",
      "Deep pattern work on your recurring loops: naming them, honoring what they did for you, and redirecting them into strengths",
      "Applied neurology tools matched to your nervous system, to build capacity at a pace your body can handle",
      "Somatic emotional processing in small, manageable doses",
      "Your personal Instead Menu for the moments you'd normally reach for a drink or a hit",
      "Human design insight to stop overwriting who you are",
      "Lifestyle and testing suggestions to bring to your doctor",
      "Accountability between sessions [HOW: e.g. weekly check-in message]",
      "Access to the Fully Lit Circle while we work together",
    ],
    cta: { href: "/contact", label: "Book a call" },
    tone: "lilac",
  },
  {
    id: "circle",
    label: "For sobriety · Membership",
    name: "The Fully Lit Circle",
    details: ["[PRICE] per month", "[WhatsApp or Telegram] community", "Cancel anytime"],
    forWho:
      "For the woman who wants ongoing support, practice and people who get it.",
    summary:
      "A community that co-regulates, a weekly live call, and an accountability partner. Two scholarship spots open every month.",
    included: [
      "A private community chat for real-time support and co-regulation",
      "One live group call each week, rotating through the five pillars",
      "An accountability partner from inside the Circle",
      "Short practices to keep your nervous system resourced between calls",
      "A place to celebrate milestones and, in time, light the way for newer members",
    ],
    cta: { href: "/contact", label: "Join the Circle" },
    tone: "gold",
  },
  {
    id: "midlife",
    label: "For midlife transition",
    name: "Fully Lit Midlife",
    details: ["Neurosomatic coaching", "[PRICE]", "[LENGTH]", "[SESSION FREQUENCY]"],
    forWho:
      "For women in midlife transition (perimenopause, burnout, anxiety, an identity that no longer fits) who want to stop being run by old patterns. No sobriety focus required.",
    summary:
      "Nervous system and somatic emotional work for perimenopause, burnout and anxiety. No sobriety focus required.",
    included: [
      "Nervous system education: understand your stress responses and why old patterns keep running",
      "Applied neurology and somatic tools to build capacity, so big feelings stop feeling like a tidal wave",
      "Somatic emotional processing in small, manageable doses",
      "Pattern work: naming the loops, honoring what they did for you, and turning them into strengths",
      "A whole-body look at hormones, sleep, energy and daily rhythm, with suggestions to bring to your doctor",
      "Human design insight for the next chapter of who you are",
      "Option to join the Fully Lit Circle for community and weekly calls",
    ],
    cta: { href: "/contact", label: "Book a call" },
    tone: "ash",
  },
];

export const howTheyWorkTogether = [
  "1:1 is the deep dive. The Circle is where the work keeps living.",
  "Clients finishing 1:1 move into the Circle so they don't lose momentum.",
  "Circle members can upgrade to 1:1 when they hit something they want to go deep on.",
  "Fully Lit Midlife uses the same method with the sobriety lens swapped for transition.",
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
    name: "Kari",
    quote:
      "Amber has taken the time to master the information on resetting and calming the nervous system. She is a patient teacher and is always open to questions. She guides you through the exercises with grace and makes sure you feel held and cared for. The knowledge she has really works and I have taken it with me and used the skills over and over again. These tools make me feel like I can care for my body in a different, more intrinsic way.",
  },
  {
    name: "Amber M.",
    quote:
      "Amber is incredibly knowledgeable and deeply attuned to the female nervous system. This course gave me practical tools to meet my changing body where it is and create more calm and regulation within my nervous system. I walked away feeling more connected to and understanding of my body, and I'm so grateful for her passion for supporting women on this journey.",
  },
];

export const scholarship = {
  spotsPerMonth: 2,
};
