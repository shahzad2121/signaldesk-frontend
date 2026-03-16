import { FolderPlus, ListTree, Share2 } from "lucide-react";

const steps = [
  {
    icon: FolderPlus,
    number: "01",
    title: "Create",
    description:
      "Set up your workspace and create project tabs for your team's needs",
  },
  {
    icon: ListTree,
    number: "02",
    title: "Organize",
    description: "Add categories and curate essential links with custom styling",
  },
  {
    icon: Share2,
    number: "03",
    title: "Share",
    description:
      "Invite your team and assign them to the projects they need access to",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            From chaos to clarity in minutes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-card border-2 border-border flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <span className="text-sm font-bold text-accent-foreground bg-accent px-3 py-1 rounded-full mb-4">
                  Step {step.number}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};