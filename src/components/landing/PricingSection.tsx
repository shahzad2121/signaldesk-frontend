import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  annualPricePerUser?: number;
  annualSavings?: string;
  seatPriceMonthly?: number;
  period: string;
  subtitle: string;
  features: PlanFeature[];
  cta: string;
  variant: "outline" | "hero" | "default" | "accent";
  popular: boolean;
}

const plans: Plan[] = [
  {
    name: "Free (forever)",
    monthlyPrice: 0,
    annualPrice: 0,
    period: "/month",
    subtitle: "Perfect for individuals",
    features: [
      { text: "Up to 5 FlowDesks", included: true },
      { text: "Unlimited categories & links", included: true },
      { text: "Drag & drop organization", included: true },
      { text: "Custom colors & icons", included: true },
      { text: "Access on all devices", included: true },
    ],
    cta: "Get Started Free",
    variant: "outline",
    popular: false,
  },
  {
    name: "Workspace Pro",
    monthlyPrice: 9,
    annualPrice: 90,
    annualSavings: "Save $18 annually",
    period: "/month",
    subtitle: "For power users",
    features: [
      { text: "Everything in Free", included: true },
      { text: "Unlimited FlowDesks", included: true },
      { text: "FlowDesk sharing", included: true },
      { text: "Email support", included: true },
      { text: "Early access to new features", included: true },
    ],
    cta: "Upgrade to Pro",
    variant: "hero",
    popular: true,
  },
  {
    name: "Teams Starter",
    monthlyPrice: 6,
    annualPrice: 6,
    annualPricePerUser: 60,
    seatPriceMonthly: 6,
    period: "/month base",
    subtitle: "For growing teams (min 3 users)",
    features: [
      { text: "Everything in Workspace Pro", included: true },
      { text: "Up to 25 team members", included: true },
      { text: "2 user levels (Admin & User)", included: true },
      { text: "FlowDesk assignments", included: true },
      { text: "Email invitations", included: true },
      { text: "Admin dashboard", included: true },
      { text: "Priority email support", included: true },
    ],
    cta: "Start a Team Workspace",
    variant: "default",
    popular: false,
  },
  {
    name: "Teams Pro",
    monthlyPrice: 10,
    annualPrice: 10,
    annualPricePerUser: 100,
    seatPriceMonthly: 10,
    period: "/month base",
    subtitle: "For large organizations (min 3 users)",
    features: [
      { text: "Everything in Teams Starter", included: true },
      { text: "Unlimited team members", included: true },
      { text: "3 user levels (Platform Admin, Manager, User)", included: true },
      { text: "Department-level management", included: true },
      { text: "Delegated administration", included: true },
      { text: "Custom onboarding", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "SSO integration (coming soon)", included: true },
    ],
    cta: "Upgrade to Teams Pro",
    variant: "accent",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the change takes effect at your next billing cycle.",
  },
  {
    question: "What happens when I add or remove seats?",
    answer:
      "Adding seats is instant and you'll be charged a prorated amount. Removing seats takes effect at your next billing cycle, and you'll receive a credit.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer:
      "Yes! Annual billing gives you 2 months free (equivalent to ~17% savings). Contact our sales team for custom enterprise pricing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual enterprise plans.",
  },
];

const PricingCard = ({ plan, isAnnual, index }: { plan: Plan; isAnnual: boolean; index: number }) => {
  const renderPrice = () => {
    if (isAnnual) {
      // Annual pricing display
      if (plan.name === "Free (forever)") {
        return (
          <>
            <span className="text-4xl font-bold text-foreground">$0</span>
            <span className="text-muted-foreground">/month</span>
          </>
        );
      } else if (plan.name === "Workspace Pro") {
        return (
          <>
            <span className="text-4xl font-bold text-foreground">$90</span>
            <span className="text-muted-foreground"> / year (2 months free)</span>
          </>
        );
      } else if (plan.name === "Teams Starter") {
        return (
          <>
            <span className="text-4xl font-bold text-foreground">$60</span>
            <span className="text-muted-foreground"> per user / year (2 months free)</span>
          </>
        );
      } else if (plan.name === "Teams Pro") {
        return (
          <>
            <span className="text-4xl font-bold text-foreground">$100</span>
            <span className="text-muted-foreground"> per user / year (2 months free)</span>
          </>
        );
      }
    } else {
      // Monthly pricing display
      return (
        <>
          <span className="text-4xl font-bold text-foreground">
            ${plan.monthlyPrice}
          </span>
          <span className="text-muted-foreground">
            {plan.period}
            {plan.seatPriceMonthly && ` + $${plan.seatPriceMonthly}/seat`}
          </span>
        </>
      );
    }
  };

  return (
    <div
      className={`relative p-6 lg:p-8 rounded-2xl border-2 transition-all duration-300 animate-fade-in-up ${
        plan.popular
          ? "bg-card border-accent shadow-xl shadow-accent/10 lg:scale-105"
          : "bg-card border-border hover:border-primary/50"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-accent-foreground text-sm font-bold px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {plan.name}
        </h3>
        <div className="flex items-baseline gap-1 flex-wrap">
          {renderPrice()}
        </div>
        {isAnnual && plan.annualSavings && (
          <p className="text-accent-foreground text-sm font-semibold mt-2">
            {plan.annualSavings}
          </p>
        )}
        <p className="text-muted-foreground mt-2">{plan.subtitle}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, featureIndex) => (
          <li
            key={featureIndex}
            className={`flex items-start gap-3 ${
              feature.included
                ? "text-foreground"
                : "text-muted-foreground line-through opacity-60"
            }`}
          >
            <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
              feature.included ? "text-accent-foreground" : "text-muted"
            }`} />
            <span className="text-sm">{feature.text}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={plan.variant}
        size="lg"
        className="w-full"
      >
        {plan.cta}
      </Button>
    </div>
  );
};

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start free, scale as you grow
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-accent"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-accent/20 text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isAnnual={isAnnual} index={index} />
          ))}
        </div>

        {/* Trust Statements */}
        <div className="text-center my-12 max-w-3xl mx-auto space-y-2">
          <p className="text-muted-foreground">No contracts. Cancel anytime.</p>
          <p className="text-muted-foreground">Upgrade or downgrade as your work changes.</p>
          <p className="text-muted-foreground">Your FlowDesks stay intact across plans.</p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
