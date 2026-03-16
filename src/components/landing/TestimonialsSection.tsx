import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "SignalDesk cut our onboarding time in half. New hires now have instant access to everything they need.",
    author: "Sarah M.",
    title: "HR Director",
    company: "TechForward Inc.",
  },
  {
    quote:
      "Finally, a simple way to share curated resources with my team without the chaos of shared bookmarks.",
    author: "James T.",
    title: "Team Lead",
    company: "DesignStudio Co.",
  },
  {
    quote:
      "The role-based access is a game-changer for managing what each department can see.",
    author: "Lisa K.",
    title: "Operations Manager",
    company: "ScaleUp Labs",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by Teams Everywhere
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};