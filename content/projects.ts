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
  {
    title: "AgriLanka",
    category: "software",
    type: "Climate-Resilient AgTech",
    description:
      "Offline-first agritech that gives smallholder farmers solar irrigation and biomass tools through a cooperative, pay-as-you-harvest model.",
    image: "/agrilanka-software.png",
    imageAlt: "A smallholder farmer tending crops in a rural field",
    link: "https://adorable-kitsune-d82568.netlify.app/",
  },
  {
    title: "Galaxy Focus",
    category: "pitch-decks",
    type: "Winning Samsung Pitch Deck",
    description:
      "The winning strategy behind an AI smartwatch ecosystem that helps neurodivergent users regulate sensory input and stay focused.",
    image: "/deck-samsung.png",
    imageAlt: "Samsung Galaxy Focus pitch deck cover",
    link: "https://drive.google.com/file/d/1AWHjAiEsUoUZLDAZ2xnkEPN93T0d42bg/view",
  },
  {
    title: "IKEA Recommerce",
    category: "pitch-decks",
    type: "Semi-Finalist IKEA Pitch Deck",
    description:
      "A recommerce strategy for winning Gen Z loyalty by making pre-loved IKEA furniture easier to buy and resell.",
    image: "/deck-ikea.png",
    imageAlt: "IKEA recommerce pitch deck cover",
    link: "https://drive.google.com/file/d/1WntEV-T-oqZyWzqobh4ImpsTFtU92c0r/view",
  },
  {
    title: "AgriLanka",
    category: "pitch-decks",
    type: "AgTech Venture Deck",
    description:
      "A stage-tested vision for affordable, climate-resilient farming, presented to more than 400 people at Toronto's Bluma Appel Theatre.",
    image: "/deck-agrilanka.png",
    imageAlt: "Farmers working together in a field",
    link: "https://drive.google.com/file/d/1uth8CFxPcegx8yBrps0ZwKoSfuM-M2sy/view",
  },
  {
    title: "AI Judicial Navigator",
    category: "pitch-decks",
    type: "Legal AI Pitch Deck",
    description:
      "A legal AI concept that reads complex documents, explains their meaning, and turns them into clear next steps for everyday users.",
    image: "/deck-judicial-navigator.png",
    imageAlt: "A judge's gavel resting on a computer keyboard",
    link: "https://drive.google.com/file/d/1g4m_KQT8lSijyyVBAZstoMjCn3JyKOUO/view",
  },
  {
    title: "MapleLex LLM",
    category: "pitch-decks",
    type: "Legal Research Pitch Deck",
    description:
      "An Ontario legal research assistant that delivers fast, cited answers grounded in legislation, presented to investors and technology leaders.",
    image: "/deck-maplelex.png",
    imageAlt: "Google, OpenAI, and legal gavel imagery for the MapleLex pitch",
    link: "https://docs.google.com/presentation/d/1D3Yg6iZZN5pSKE8OvsRtm3mKhBxUJLISUq35__Jx0tA/edit?usp=sharing",
  },
  {
    title: "Shell SAR Verification",
    category: "pitch-decks",
    type: "Climate Technology Pitch Deck",
    description:
      "An automated SAR verification system designed to protect Shell's Philippines rice project and unlock a $500M nature-based solutions portfolio.",
    image: "/deck-shell.png",
    imageAlt: "Shell SAR verification pitch deck cover",
    link: "https://drive.google.com/file/d/1Z_KYu2EVH5zCUIeFTzN3Jbu08HEnxh-w/view",
  },
  {
    title: "Childhood Trauma, Epigenetics & FTD",
    category: "research",
    type: "Neuroscience Research Proposal",
    description:
      "Investigating whether childhood trauma leaves epigenetic marks on HPA-axis genes that shape stress circuitry and vulnerability in frontotemporal dementia.",
    image: "/research-trauma-epigenetics.png",
    imageAlt: "Brain imaging and methylation data comparing clinical groups",
    link: "https://drive.google.com/file/d/1A1Flwfp1nBME12rhcATRlhkRusRe_E7g/view?usp=sharing",
  },
  {
    title: "From LiDAR to Autonomy",
    category: "research",
    type: "Autonomous Vehicle Research",
    description:
      "A practical look at lidar, perception, neural networks, and vehicle-to-everything systems, plus the limits still keeping drivers in the loop.",
    image: "/research-self-driving.png",
    imageAlt: "A self-driving vehicle interface visualizing the road ahead",
    link: "https://medium.com/@NamanJain7/shaping-our-future-self-driving-technologies-2ce10b7a6c4c",
  },
  {
    title: "The Latency of Language Is Costing Lives",
    category: "research",
    type: "Crisis Translation Research",
    description:
      "How Frontline replaces stop-and-wait translation with sub-200ms simultaneous interpretation, reclaiming critical minutes in crisis triage.",
    image: "/research-language-latency.png",
    imageAlt: "A clinician treating patients in a humanitarian crisis setting",
    link: "https://medium.com/@NamanJain7/the-latency-of-language-is-costing-lives-90f1f9b0eb73?postPublishedType=repub",
  },
  {
    title: "The Cachexia-Neurodegeneration Axis",
    category: "research",
    type: "Lewy Body Dementia Proposal",
    description:
      "Examining how systemic wasting and inflammatory mediators may accelerate neurodegeneration in Lewy body dementia.",
    image: "/research-cachexia-neurodegeneration.png",
    imageAlt: "Diagram of inflammatory pathways and neuronal damage in the brain",
    link: "https://drive.google.com/file/d/1T-voQrMsmIwok0K6cfG9hldLBag-4yvL/view?usp=sharing",
  },
  {
    title: "AI Navigators for Global Justice",
    category: "research",
    type: "Access-to-Justice Research",
    description:
      "A case for mobile-first legal AI that turns eviction notices and wage disputes into plain-language rights, deadlines, and next steps.",
    image: "/research-ai-justice.png",
    imageAlt: "A robotic hand beside scales of justice",
    link: "https://medium.com/@NamanJain7/ai-navigators-may-be-the-future-of-global-justice-dd9a40eeaf33",
  },
  {
    title: "AgriLanka's Masterplan",
    category: "research",
    type: "Agricultural Systems Strategy",
    description:
      "A blueprint for giving African smallholder farmers affordable tools, financing, and market access through cooperative infrastructure built to scale.",
    image: "/research-agrilanka-masterplan.png",
    imageAlt: "Two smallholder farmers tending a young tree",
    link: "https://medium.com/@NamanJain7/agrimalawis-masterplan-60b5036c842d",
  },
];
