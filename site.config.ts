export type SocialPlatform = "email" | "linkedin" | "github" | "substack" | "medium" | "twitter";

export type Social = {
  platform: SocialPlatform;
  label: string;
  display: string;
  href: string;
};

export type CurrentItem = { emoji: string; title: string; body: string };
export type Quote = { text: string; author: string };

export const siteConfig = {
  name: "Naman Jain",
  role: "AI Builder & Software Engineer",
  tagline: "Building AI products, writing in public, and turning early ideas into useful software.",
  profileImage: "/naman-pfp.jpg",
  email: "mail.namanjain7@gmail.com",
  substackUrl: "https://namanjain7.substack.com",

  socials: [
    { platform: "email", label: "EMAIL", display: "mail.namanjain7@gmail.com", href: "mailto:mail.namanjain7@gmail.com" },
    { platform: "linkedin", label: "LINKEDIN", display: "Naman Jain", href: "https://www.linkedin.com/in/naman-jain-jain7/" },
    { platform: "github", label: "GITHUB", display: "Naman Jain", href: "https://github.com/NamanJ7" },
    { platform: "substack", label: "SUBSTACK", display: "Naman's Process", href: "https://namanjain7.substack.com/" },
    { platform: "medium", label: "MEDIUM", display: "Naman Jain", href: "https://medium.com/@NamanJain7" },
    { platform: "twitter", label: "X / TWITTER", display: "Naman Jain", href: "https://x.com/NamanJ_7" },
  ] satisfies Social[],

  // Wrap any phrase in ==double equals== to apply the animated highlight.
  intro: [
    "Great to e-meet you. I've been building since I could code, obsessed with using ==AI to solve problems that actually matter==.",
    "I'm currently building Pore, an AI skincare app that starts with a guided photo of your face, then builds a personalized routine around your products, goals, and progress.",
    "Before this, I built AgriLanka, an agritech startup that received numerous grants, and it taught me what it actually takes to take an idea from zero to something real.",
    "I spend my days shipping software, writing about what I learn, and figuring out how to make an outsized impact. I believe in ==first principles thinking==, compounding efforts, and the power of just getting started. Done is better than perfect.",
  ],

  currentlyUpTo: [
    {
      emoji: "01",
      title: "Building Pore",
      body: "An AI skincare app that turns guided face photos, goals, and product context into personalized routines.",
    },
    {
      emoji: "02",
      title: "Side Projects",
      body: "I’m always tinkering with side projects to keep sharpening my skills. Check out more of them in my portfolio.",
    },
    {
      emoji: "03",
      title: "Writing in Public",
      body: "Publishing notes on building, AI, startups, learning loops, and the process behind the process.",
    },
    {
      emoji: "04",
      title: "Compounding Output",
      body: "Shipping fast, learning faster, and stacking small wins into work that can actually matter.",
    },
  ] satisfies CurrentItem[],

  quotes: [
    { text: "Start before it feels ready.", author: "Operating principle" },
    { text: "Think from first principles, then ship the scrappy version.", author: "Build philosophy" },
    { text: "Done is better than perfect.", author: "Reminder" },
  ] satisfies Quote[],
};

export type SiteConfig = typeof siteConfig;
