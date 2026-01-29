import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <MainLayout>
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left - Newsletter info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                My blog; from 0 to 0.1
              </h1>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Here's where I share my essays, with monthly newsletters on 
                  what I've been up to.
                </p>

                <p className="italic">(and yeah it's a play on Thiel)</p>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="text-base"
                >
                  <a
                    href="https://substack.com/@namanjain"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit the newsletter
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>

              <div className="mt-12 space-y-6">
                <h2 className="text-xl font-semibold">What I write about:</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Building products and startups from scratch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Lessons from shipping fast and iterating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>AI, technology, and where things are headed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Mental models and first principles thinking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Monthly updates on projects and learnings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right - Visual/illustration area */}
            <div className="flex justify-center">
              <div className="relative bg-secondary rounded-2xl p-8 md:p-12 w-full max-w-md">
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    MY JOURNEY
                  </h3>
                  <h4 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                    FROM 0 TO 0.1
                  </h4>

                  {/* Simple visual representation */}
                  <div className="relative h-48 flex items-end justify-center">
                    {/* Growth line visualization */}
                    <svg
                      viewBox="0 0 200 100"
                      className="w-full h-full"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* The journey path */}
                      <path
                        d="M10 90 L40 70 L60 85 L90 50 L120 75 L150 35 L190 15"
                        stroke="hsl(158, 35%, 22%)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Start point */}
                      <circle cx="10" cy="90" r="6" fill="hsl(158, 35%, 22%)" />
                      {/* End point */}
                      <circle cx="190" cy="15" r="6" fill="hsl(158, 35%, 22%)" />
                      {/* Arrow at end */}
                      <polygon
                        points="185,10 195,15 185,20"
                        fill="hsl(158, 35%, 22%)"
                      />
                    </svg>
                  </div>

                  <p className="mt-4 text-muted-foreground text-sm">
                    The path is never straight, but always forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Newsletter;
