import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Play, ArrowRight, X } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

export const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <p className="text-primary font-semibold mb-4">SignalDesk</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                The focused workspace for{" "}
                <span className="text-gradient">individuals and teams</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Stop juggling dozens of browser tabs. SignalDesk organizes your
                work links into clear, intentional spaces—so you always see the
                signal, never the noise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button variant="hero" size="xl" className="group" asChild>
                  <a
                    href="https://app.signaldesk.us/auth?tab=signup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="group"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <Play className="w-5 h-5" />
                  See How It Works
                </Button>
              </div>

              {/* Trust badges */}
              <div className="animate-fade-in animation-delay-300">
                <p className="text-sm text-muted-foreground mb-4">
                  Trusted by 500+ teams worldwide
                </p>
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center opacity-60">
                  {[
                    "TechCorp",
                    "StartupHQ",
                    "DesignLab",
                    "CloudBase",
                    "DataFlow",
                  ].map((company) => (
                    <div
                      key={company}
                      className="text-sm font-semibold text-muted-foreground"
                    >
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right content - Hero image */}
            <div className="relative animate-fade-in animation-delay-200">
              <div className="relative z-10">
                <img
                  src={heroDashboard}
                  alt="SignalDesk workspace dashboard showing project tabs, categories, and organized link cards"
                  className="w-full rounded-2xl shadow-2xl animate-float hue-rotate-[180deg] saturate-150 brightness-105"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-background">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="text-foreground">Product Demo</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-muted flex items-center justify-center">
            {/* Replace the placeholder below with your actual video embed */}
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Play className="w-10 h-10 text-primary" />
              </div>
              <p className="text-muted-foreground mb-2">
                Video demo coming soon
              </p>
              <p className="text-sm text-muted-foreground/70">
                Replace this placeholder with a YouTube or Vimeo embed
              </p>
            </div>
            {/* Example YouTube embed (uncomment and replace VIDEO_ID):
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
              title="Product Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            */}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
