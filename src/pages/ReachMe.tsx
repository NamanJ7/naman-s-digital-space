import MainLayout from "@/components/MainLayout";

const ReachMe = () => {
  return (
    <MainLayout showContactSection={true}>
      {/* The main content is empty since ContactSection is shown */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Connect
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you have a question, want to collaborate, or just want to say hi — 
            I'd love to hear from you. Fill out the form below or reach out through 
            any of my social channels.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default ReachMe;
