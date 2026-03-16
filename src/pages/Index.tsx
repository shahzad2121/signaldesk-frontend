import { useState, useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { AnimatedSection } from "@/components/landing/AnimatedSection";
import { LoadingScreen } from "@/components/landing/LoadingScreen";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      if (newValue) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newValue;
    });
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-background">
        <Navbar isDark={isDark} toggleDark={toggleDark} />
      <main>
        <HeroSection />
        <AnimatedSection>
          <ProblemSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <FeaturesSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <HowItWorksSection />
        </AnimatedSection>
        <AnimatedSection animation="fade-in">
          <UseCasesSection />
        </AnimatedSection>
        <AnimatedSection>
          <PricingSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <TestimonialsSection />
        </AnimatedSection>
        <AnimatedSection animation="scale-in">
          <CTASection />
        </AnimatedSection>
      </main>
      <Footer isDark={isDark} />
      </div>
    </>
  );
};

export default Index;