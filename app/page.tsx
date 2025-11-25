import { Hero } from "@/components/hero";
import { PricingSection } from "@/components/pricing-section";
import { FeatureCards } from "@/components/feature-cards";
import { ProcessSection } from "@/components/process-section";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="what-we-do" className="section bg-background">
        <div className="container">
          <FeatureCards />
        </div>
      </section>
      <section id="pricing" className="section">
        <div className="container">
          <PricingSection />
        </div>
      </section>
      <section id="why-us" className="section bg-background">
        <div className="container">
          <ProcessSection />
        </div>
      </section>
      <section id="cta" className="section">
        <div className="container">
          <CTASection />
        </div>
      </section>
    </>
  );
}

