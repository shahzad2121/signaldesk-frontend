import { Bookmark, UserX, Shield } from "lucide-react";

const painPoints = [
  {
    icon: Bookmark,
    title: "Scattered bookmarks across browsers and devices",
  },
  {
    icon: UserX,
    title: "New hires struggle to find essential resources",
  },
  {
    icon: Shield,
    title: "No way to standardize resource access by role",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Stop Wasting Time Hunting for Links
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <point.icon className="w-7 h-7 text-destructive" />
                </div>
                <p className="text-foreground font-medium">{point.title}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-cta rounded-2xl p-8 md:p-12">
            <p className="text-xl md:text-2xl text-primary-foreground font-medium">
              SignalDesk centralizes your team's essential links into organized,
              shareable project workspaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};