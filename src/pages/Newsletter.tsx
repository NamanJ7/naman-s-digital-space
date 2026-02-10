import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import newsletterCover from "@/assets/newsletter-cover.png";

const Newsletter = () => {
  return (
    <MainLayout>
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left - Newsletter info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                My blog; Naman's Process: Ctrl+Alt+Reflect
              </h1>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Here's where I share my essays, with monthly newsletters on
                  what I've been up to.
                </p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="text-base">
                  <a
                    href="https://namanjain7.substack.com/"
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

            {/* Right - Newsletter cover image */}
            <div className="flex justify-center">
              <img
                src={newsletterCover}
                alt="Naman's Process: Ctrl+Alt+Reflect"
                className="w-full max-w-md rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Newsletter;
