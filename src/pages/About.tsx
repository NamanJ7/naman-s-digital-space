import MainLayout from "@/components/MainLayout";
import namanPortrait from "@/assets/naman-portrait.jpg";
const About = () => {
  return <MainLayout>
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left - Portrait */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <img src={namanPortrait} alt="Naman Jain" className="w-56 md:w-64 lg:w-72 h-auto rounded-2xl object-cover shadow-lg" />
                {/* Subtle decorative element */}
                <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl border-2 border-primary/20" />
              </div>
            </div>

            {/* Right - Intro */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                I'm Naman, great to e-meet you.
              </h1>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I've been building since I could code—obsessed with using AI to solve problems that actually matter.
                </p>
                
                <p>
                  I've worked on everything from ML models detecting harmful algal blooms for water plants in the UAE, to latency-free translation systems for crisis zones with Cerebras chips. Saw firsthand how the right tech can save lives and industries.
                </p>
                
                <p>
                  Right now, I'm interning @ <a href="https://equintel.de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Equintel</a> working on AI-powered ESG automation, and founding a stealth AI startup that's going to change how we work (more on that soon).
                </p>

                <p>
                  I am all about first principles thinking, compounding efforts, and the power of just getting started.
                </p>

                <p>
                  When I'm not grinding on the startup, I'm tinkering with vertical AI tools, exploring new problem spaces, and figuring out where AI can create the most impact.
                </p>
              </div>

              {/* Quick stats or highlights */}
              
            </div>
          </div>
        </div>
      </section>
    </MainLayout>;
};
export default About;