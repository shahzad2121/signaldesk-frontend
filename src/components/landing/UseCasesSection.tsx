import { User, Building, Building2 } from "lucide-react";

const useCases = [
  {
    icon: User,
    title: "For Freelancers & Solopreneurs",
    description:
      "Keep all your client resources, tools, and references organized in one place",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Building,
    title: "For Small Businesses",
    description:
      "Onboard new hires faster with standardized resource libraries by role",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Building2,
    title: "For Enterprises",
    description:
      "Empower department managers to curate and distribute resources to their teams",
    gradient: "from-secondary/20 to-secondary/5",
  },
];

export const UseCasesSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Teams of All Sizes
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're solo or scaling, SignalDesk adapts to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${useCase.gradient} border border-border overflow-hidden group hover:shadow-xl transition-shadow duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <useCase.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};