import MainLayout from "@/components/MainLayout";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

interface ProjectSection {
  title: string;
  projects: Project[];
}

const projectSections: ProjectSection[] = [
  {
    title: "Currently Working On",
    projects: [
      {
        title: "Intern @ Equintel",
        description:
          "Automating ESG materiality assessments with AI, helping organizations streamline sustainability reporting and governance at scale.",
        link: "https://equintel.de/",
        linkLabel: "Equintel",
      },
      {
        title: "Founder @ Stealth AI Startup",
        description:
          "Building a revolutionary AI tool that's changing the way we work. More coming soon.",
      },
      {
        title: "Alumni @ The Knowledge Society",
        description:
          "Part of a global community of young innovators accelerating human progress through exponential technologies and entrepreneurship.",
        link: "https://tks.world",
        linkLabel: "TKS",
      },
    ],
  },
  {
    title: "What I've Done",
    projects: [
      {
        title: "Co-founder @ AgriLanka",
        description:
          "Led agricultural innovation in Sri Lanka, combining IoT and data analytics to optimize crop yields and empower smallholder farmers.",
        link: "https://adorable-kitsune-d82568.netlify.app/",
        linkLabel: "AgriLanka",
      },
      {
        title: "Intern @ BYCIG",
        description:
          "Contributed to tech and finance innovation at a rising digital asset company.",
        link: "https://bycig.org/",
        linkLabel: "BYCIG",
      },
      {
        title: "Habguard AI",
        description:
          "Developed ML models for early detection of harmful algal blooms, protecting water desalination infrastructure and public health.",
        link: "https://www.notion.so/HABGuard-AI-2a58dc64ada08001b01fde0a151e1308?pvs=32",
        linkLabel: "Habguard AI",
      },
      {
        title: "Frontline AI",
        description:
          "Built latency-free translation systems for crisis zones in cooperation with Cerebras wafer-scale chips, enabling real-time communication where it matters most.",
        link: "https://www.notion.so/Frontline-AI-Latency-Free-Translation-for-Crisis-Zones-2fa10736d5d2801ca25acc28860fa39a?source=copy_link",
        linkLabel: "Frontline AI",
      },
      {
        title: "Intern @ AuraPatch",
        description:
          "Worked on wearable health technology, developing AI-powered solutions for continuous patient monitoring.",
        link: "https://www.linkedin.com/company/aurapatch",
        linkLabel: "AuraPatch",
      },
      {
        title: "Summer Fellow @ The Cansbridge Fellowship",
        description:
          "Selected for a highly renowned fellowship program connecting top high school students with entrepreneurship, innovation, and leadership development.",
        link: "https://cansbridgefellowship.com/",
        linkLabel: "Cansbridge Fellowship",
      },
    ],
  },
];

const Projects = () => {
  return (
    <MainLayout>
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Projects</h1>

          <div className="space-y-16">
            {projectSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                  {section.title}
                </h2>

                <div className="space-y-8">
                  {section.projects.map((project) => (
                    <div
                      key={project.title}
                      className="border-l-2 border-primary/20 pl-6 hover:border-primary transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline inline-flex items-center gap-2"
                          >
                            {project.title}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Separator between sections */}
                <div className="mt-12 border-b border-border" />
              </div>
            ))}
          </div>

          {/* Explore more link */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              These are just a few highlights, click{" "}
              <a
                href="https://www.notion.so/Hey-I-m-Naman-Here-s-what-I-ve-Built-2f4f0fd5745f81229639f20bc15800e8?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:underline"
              >
                here
              </a>{" "}
              to explore more projects in depth.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Projects;
