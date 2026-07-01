export type ProjectCategory = "software" | "research" | "consulting";

export type Project = {
  title: string;
  category: ProjectCategory;
  type: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Pore",
    category: "software",
    type: "AI Skincare App",
    description:
      "Pore makes skincare simple with personalized routines, product insights, and progress you can actually see.",
    image: "/pore-banner.png",
    imageAlt: "Pore — personalized skincare, simplified",
    link: "https://poreai.vercel.app/",
  },
  {
    title: "MapleLex",
    category: "software",
    type: "AI Legal Research Assistant",
    description:
      "MapleLex makes Ontario legal research easier with clear AI-assisted answers grounded in cited legislation and official sources.",
    image: "/maplelex.png",
    imageAlt: "MapleLex legal research assistant interface",
    link: "https://maplelex.vercel.app/",
  },
  {
    title: "HABGuard AI",
    category: "software",
    type: "Environmental ML",
    description:
      "ML detection for harmful algal blooms at UAE desalination plants, reaching 98% accuracy on NOAA and Sentinel-2 data.",
    image: "/habguard-ai.jpg",
    imageAlt: "A harmful algal bloom spreading across ocean water",
    link: "https://five-wool-7f5.notion.site/Water-Desalination-2a58dc64ada08001b01fde0a151e1308",
  },
  {
    title: "Frontline AI",
    category: "software",
    type: "Real-Time Translation",
    description:
      "A latency-free translation agent for crisis zones, using wafer-scale inference for near-instant multilingual coordination.",
    image: "/frontline-ai.jpg",
    imageAlt: "Frontline AI voice translation interface powered by Cerebras",
    imagePosition: "top",
    link: "https://app.notion.com/p/Frontline-AI-Latency-Free-Translation-for-Crisis-Zones-2fa10736d5d2801ca25acc28860fa39a",
  },
];
