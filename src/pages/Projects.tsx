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
    title: "What I'm Working On Right Now",
    projects: [
      {
        title: "Product Manager @ Clover Labs",
        description:
          "PM @ Clover via acquisition. Clover is one of the fastest growing startups, building verticalized AI growth agents. Working on product strategy and execution.",
        link: "https://cloverlabs.ai",
        linkLabel: "Clover Labs",
      },
      {
        title: "Building AI Software",
        description:
          "Currently building AI-powered tools and exploring the intersection of machine learning and practical product applications. Focused on shipping fast and iterating.",
      },
    ],
  },
  {
    title: "What I've Done in the Past",
    projects: [
      {
        title: "Co-founder @ Antifragility (acquired)",
        description:
          "My first startup. Bootstrapped and scaled to six-figure ARR before getting acquired. Helped brands rank on AI, working with notable companies and YC startups.",
        link: "https://antifragility.ai",
        linkLabel: "Antifragility",
      },
      {
        title: "AI Growth Consultant @ Hypesonic",
        description:
          "Worked with one of the coolest AI startups backed by top-tier VCs. Helped build growth strategies and implement AI-driven marketing solutions.",
        link: "https://hypesonic.ai",
        linkLabel: "Hypesonic",
      },
      {
        title: "Habguard AI",
        description:
          "Working on ML models to help detect harmful algal blooms for water desalination plants. Applied machine learning for environmental impact.",
      },
      {
        title: "Intern @ Armilla AI",
        description:
          "Worked at a YC-backed AI insurance startup. Performed SEO optimization and helped with growth initiatives.",
        link: "https://armilla.ai",
        linkLabel: "Armilla AI",
      },
      {
        title: "Movitlative",
        description:
          "Charity I launched for a meaningful cause. Proud to have built something that makes a real difference in the community.",
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
        </div>
      </section>
    </MainLayout>
  );
};

export default Projects;
