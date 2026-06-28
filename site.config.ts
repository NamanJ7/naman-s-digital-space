// ---------------------------------------------------------------------------
// EDIT ME: this file is the single source of truth for everything personal on
// the site (name, socials, intro text, "currently up to" cards, quotes).
// Changing content here updates every page — you shouldn't need to touch the
// components. Projects live in content/projects.ts; blog posts in content/blog.
// ---------------------------------------------------------------------------

export type SocialPlatform = "email" | "linkedin" | "github" | "substack";

export type Social = {
  platform: SocialPlatform;
  label: string; // small uppercase label shown in the sidebar
  display: string; // the value shown beneath the label
  href: string;
};

export type CurrentItem = {
  emoji: string;
  title: string;
  body: string;
};

export type Quote = {
  text: string;
  author: string;
};

export const siteConfig = {
  name: "Your Name",
  role: "Software Engineer",
  tagline:
    "Engineer, researcher, and writer. I build software, explore ideas, and share what I learn.",

  // path under /public — drop in your own photo and point here (e.g. /profile.jpg)
  profileImage: "/profile.svg",

  // used as the contact-form fallback recipient and the email social link
  email: "pjain1976@gmail.com",

  // your Substack base URL (no trailing slash) — powers the subscribe box
  substackUrl: "https://yourname.substack.com",

  socials: [
    {
      platform: "email",
      label: "EMAIL",
      display: "pjain1976@gmail.com",
      href: "mailto:pjain1976@gmail.com",
    },
    {
      platform: "linkedin",
      label: "LINKEDIN",
      display: "Your Name",
      href: "https://www.linkedin.com/in/your-handle/",
    },
    {
      platform: "github",
      label: "GITHUB",
      display: "your-handle",
      href: "https://github.com/your-handle",
    },
    {
      platform: "substack",
      label: "SUBSTACK",
      display: "Your Newsletter",
      href: "https://yourname.substack.com",
    },
  ] satisfies Social[],

  // The intro paragraphs on the About page.
  // Wrap any phrase in ==double equals== to give it the animated gold highlight.
  intro: [
    "I'm a ==software engineer== who loves turning hard problems into things people can actually use. By day I build products; on the side I do ==research== and the occasional ==consulting== project.",
    "Apart from code, I spend an obnoxious amount of time reading, tinkering with side projects, and ==spreading joy==. I believe the best work happens at the intersection of curiosity and craft.",
    "This page is a high-level glimpse into what I'm up to — if you want the technical details, check out my portfolio.",
  ],

  currentlyUpTo: [
    {
      emoji: "💼",
      title: "Open to Work",
      body: "Exploring new roles in software & product. If you're hiring, let's talk.",
    },
    {
      emoji: "🔬",
      title: "Research",
      body: "Ongoing work at the intersection of machine learning and systems.",
    },
    {
      emoji: "🤝",
      title: "Consulting",
      body: "Helping early-stage teams ship faster and make sharper technical bets.",
    },
    {
      emoji: "✍️",
      title: "Writing",
      body: "Publishing essays and notes on engineering and ideas in my newsletter.",
    },
  ] satisfies CurrentItem[],

  quotes: [
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
    },
    {
      text: "Simplicity is a prerequisite for reliability.",
      author: "Edsger W. Dijkstra",
    },
    {
      text: "It is not enough to be busy; so are the ants. The question is: what are we busy about?",
      author: "Henry David Thoreau",
    },
  ] satisfies Quote[],
};

export type SiteConfig = typeof siteConfig;
