import { ReactNode } from "react";
import Navigation from "./Navigation";
import ContactSection from "./ContactSection";
import MindsetMarquee from "./MindsetMarquee";

interface MainLayoutProps {
  children: ReactNode;
  showContactSection?: boolean;
}

const MainLayout = ({ children, showContactSection = true }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {children}
      </main>

      {/* Persistent Contact Section */}
      {showContactSection && <ContactSection />}

      {/* Animated Mindset Marquee */}
      <MindsetMarquee />
    </div>
  );
};

export default MainLayout;
