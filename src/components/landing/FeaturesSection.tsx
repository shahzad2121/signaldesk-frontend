import {
  FolderKanban,
  Tags,
  ShieldCheck,
  GripVertical,
  Users,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: FolderKanban,
    title: "Project Workspaces",
    description:
      "Create unlimited project tabs to organize resources by team, department, or initiative",
  },
  {
    icon: Tags,
    title: "Smart Categories",
    description:
      "Group links into logical categories with custom icons and colors",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description:
      "Control who sees what with admin and user permission levels",
  },
  {
    icon: GripVertical,
    title: "Drag & Drop Organization",
    description: "Effortlessly reorder projects, categories, and links",
  },
  {
    icon: Users,
    title: "Team Sharing",
    description:
      "Invite team members via email and assign them to specific projects",
  },
  {
    icon: Palette,
    title: "Beautiful Link Cards",
    description:
      "Customizable link cards with colors and icons for quick visual recognition",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Organize Your Team's Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to streamline how your team discovers and
            shares knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};