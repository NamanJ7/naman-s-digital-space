export type ProjectCategory = "software" | "research" | "pitch-decks";

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
  {
    title: "CalmFocus",
    category: "software",
    type: "Samsung Competition Winner",
    description:
      "A Samsung One UI companion that predicts focus windows, fatigue, and stress, winning a global consulting competition.",
    image: "/samsung-calm-focus.png",
    imageAlt: "CalmFocus dashboard showing predicted focus, fatigue, and stress windows",
    imagePosition: "top",
    link: "https://calmfocus-helper.vercel.app/",
  },
  {
    title: "IKEA Marketplace",
    category: "software",
    type: "IKEA Competition Semi-Finalist",
    description:
      "A circular marketplace for buying and reselling pre-loved IKEA furniture, selected from more than 1,000 submissions.",
    image: "/ikea-marketplace.png",
    imageAlt: "IKEA marketplace for buying and selling pre-loved furniture",
    imagePosition: "top",
    link: "https://ikeaprototype-2wwbbtss5-noahcom-stars-projects.vercel.app/",
  },
  {
    title: "AutoPilot GPT",
    category: "software",
    type: "AI Navigation",
    description:
      "An AI navigation app that adapts routes for traffic, accidents, and weather, with smarter toll-free alternatives.",
    image: "/autopilot-gpt.png",
    imageAlt: "Navigation screen mounted on a car dashboard",
    link: "https://github.com/NamanJ7/AutoPilot-GPT",
  },
  {
    title: "Mini Autonomous Vehicle",
    category: "software",
    type: "Robotics & Computer Vision",
    description:
      "A Python-and-Arduino vehicle that reacts to traffic lights, avoids obstacles, and mirrors real-world self-driving logic.",
    image: "/mini-autonomous-vehicle.png",
    imageAlt: "Autonomous vehicle sensing cars and pedestrians in a city",
    link: "https://www.youtube.com/watch?v=lLfGyPakYnU",
  },
  {
    title: "Self-Driving Simulation",
    category: "software",
    type: "Autonomous Systems",
    description:
      "A 2D simulation that models lidar-like sensing, perception, and decision-making to navigate around obstacles.",
    image: "/self-driving-simulation.png",
    imageAlt: "Top-down environment from a self-driving car simulation",
    link: "https://github.com/NamanJ7/self-driving_car-automation",
  },
];
