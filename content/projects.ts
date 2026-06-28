// ---------------------------------------------------------------------------
// EDIT ME: your portfolio projects. `category` drives the filter tabs on the
// /portfolio page (all / software / research / consulting). `emoji` + `bgColor`
// make the colored thumbnail. `link` is optional (omit for no link).
// ---------------------------------------------------------------------------

export type ProjectCategory = "software" | "research" | "consulting";

export type Project = {
  title: string;
  category: ProjectCategory;
  type: string; // small label under the title, e.g. "Personal Software Project"
  description: string;
  emoji: string;
  bgColor: string; // any CSS color — used as the thumbnail background
  link?: string;
};

export const projects: Project[] = [
  {
    title: "SmartSwitch",
    category: "software",
    type: "Personal Software Project",
    description:
      "A home-automation hub that learns your routines and switches things on and off for you.",
    emoji: "🧠",
    bgColor: "#f9c5d1",
    link: "https://github.com/your-handle",
  },
  {
    title: "Reservoir Control System",
    category: "software",
    type: "Course Project",
    description:
      "Real-time control software for a simulated reservoir, balancing inflow and demand.",
    emoji: "🌊",
    bgColor: "#bfe3f2",
  },
  {
    title: "CognitiveHarmony",
    category: "research",
    type: "Research Project",
    description:
      "Exploring how multimodal models align audio and visual representations.",
    emoji: "🎵",
    bgColor: "#d6ccf9",
  },
  {
    title: "ParkSafe",
    category: "software",
    type: "Personal Software Project",
    description:
      "A computer-vision app that finds open parking spots from live camera feeds.",
    emoji: "🚗",
    bgColor: "#ffffff",
  },
  {
    title: "Vision & Image Processing",
    category: "research",
    type: "Undergraduate Research",
    description:
      "Image segmentation and enhancement techniques developed in a university lab.",
    emoji: "🖼️",
    bgColor: "#ffffff",
  },
  {
    title: "Go-to-Market Teardown",
    category: "consulting",
    type: "Consulting Engagement",
    description:
      "Helped an early-stage startup sharpen its technical roadmap and launch strategy.",
    emoji: "📈",
    bgColor: "#c9f5d9",
  },
  {
    title: "FaceSwap",
    category: "software",
    type: "Personal Software Project",
    description:
      "A lightweight, privacy-first face-swapping tool that runs entirely on-device.",
    emoji: "🔁",
    bgColor: "#bcd7f0",
  },
  {
    title: "Controls, Learning & Logic",
    category: "research",
    type: "Undergraduate Research",
    description:
      "Reinforcement-learning approaches to classic control problems.",
    emoji: "🤖",
    bgColor: "#f6d9b0",
  },
];
