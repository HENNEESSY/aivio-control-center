import { Navbar } from "@/components/aivio/Navbar";
import { Hero } from "@/components/aivio/Hero";
import { Problem } from "@/components/aivio/Problem";
import { Solution } from "@/components/aivio/Solution";
import { HowItWorks } from "@/components/aivio/HowItWorks";
import { ProductDemo } from "@/components/aivio/ProductDemo";
import { AIWorkers } from "@/components/aivio/AIWorkers";
import { FinanceRadar } from "@/components/aivio/FinanceRadar";
import { Integrations } from "@/components/aivio/Integrations";
import { CTASection } from "@/components/aivio/CTASection";
import { Footer } from "@/components/aivio/Footer";
import { AssistantButton } from "@/components/aivio/AssistantButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <ProductDemo />
        <AIWorkers />
        <FinanceRadar />
        <Integrations />
        <CTASection />
      </main>
      <Footer />
      <AssistantButton />
    </div>
  );
};

export default Index;
