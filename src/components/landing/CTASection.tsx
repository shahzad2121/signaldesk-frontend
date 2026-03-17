import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = forwardRef<HTMLElement>((_, ref) => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 bg-gradient-cta relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Organize Your Team's Resources?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join hundreds of teams who've simplified their workflow
          </p>

          <Button
            size="xl"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl hover:shadow-2xl group"
            asChild
          >
            <a
              href="https://app.signaldesk.us/auth?tab=signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Free Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="mt-6 text-primary-foreground/60 text-sm">
            No credit card required • Free forever plan available
          </p>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = "CTASection";
