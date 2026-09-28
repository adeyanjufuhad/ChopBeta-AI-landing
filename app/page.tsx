import { FeaturesSection } from "@/components/FeaturesSection";
import { FooterSection } from "@/components/FooterSection";
import { HealthHalalSection } from "@/components/HealthHalalSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { MarketSection } from "@/components/MarketSection";
import { MealShowcaseSection } from "@/components/MealShowcaseSection";
import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { ScrollProgress } from "@/components/ScrollEffects";
import { WaitlistSection } from "@/components/WaitlistSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <HealthHalalSection />
        <FeaturesSection />
        <MarketSection />
        <MealShowcaseSection />
        <WaitlistSection />
      </main>
      <FooterSection />
    </>
  );
}
