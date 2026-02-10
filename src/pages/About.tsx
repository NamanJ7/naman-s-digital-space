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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Hey, I'm Naman!</h1>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>Great to e-meet you.
I've been building since I could code, obsessed with using AI to solve problems that actually matter.</p>
                
                <p>
                  Currently working at the intersection of AI and product, I spend my days 
                  shipping software, writing about what I learn, and figuring out how to 
                  make an outsized impact.
                </p>
                
                <p>
                  I believe in first principles thinking, compounding efforts, and the power 
                  of just getting started. Most importantly, I believe that done is better 
                  than perfect.
                </p>

                <p>
                  When I'm not building, you'll find me reading, exploring new ideas, or 
                  working on the next thing.
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