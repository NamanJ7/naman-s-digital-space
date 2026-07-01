export type ProjectCategory = "software" | "research" | "consulting";

export type Project = {
  title: string;
  category: ProjectCategory;
  type: string;
  description: string;
  image: string;
  imageAlt: string;
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
  },
];
