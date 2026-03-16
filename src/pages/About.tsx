import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import signaldeskLogo from "@/assets/signaldesk-logo.png";
import signaldeskLogoWhite from "@/assets/signaldesk-logo-white.png";

const About = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    
    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img 
              src={isDark ? signaldeskLogoWhite : signaldeskLogo} 
              alt="SignalDesk"
              className="h-10 w-auto"
            />
          </Link>
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">SignalDesk</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your team's knowledge hub, simplified.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              SignalDesk is a workspace designed to replace the daily chaos of browser tabs, 
              scattered bookmarks, and buried links to websites, documents, images, etc., with 
              a simple, persistent place where the resources people use to do their work actually 
              live. Instead of reopening the same tabs every morning or searching through emails 
              and chat threads to find important links, users create focused spaces called FlowDesks 
              that hold the tools, documents, dashboards, and research tied to a project, role, or 
              responsibility. Each time they return to that work, everything they need is already 
              organized and ready.
            </p>

            <p className="text-lg leading-relaxed">
              For individuals, SignalDesk becomes the place they start their day, helping them 
              move between projects without rebuilding context or losing important resources. For 
              teams, it becomes a shared home for critical links, allowing managers to distribute 
              and update resources so everyone always has access to the right information. In daily 
              use, people save links as they discover them, open FlowDesks to begin working, and 
              stop relying on memory, bookmarks, or long lists of open tabs. The result is a calmer, 
              more focused workflow where starting work takes seconds instead of minutes and 
              important resources never get lost in the noise.
            </p>
          </div>

          {/* Company Info */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground font-medium mb-2">
              SignalDesk (a MoveWorth company)
            </p>
            <address className="text-muted-foreground not-italic space-y-1">
              <p>911 Washington Ave, Suite 329</p>
              <p>St. Louis, MO 63101, USA</p>
              <p>
                <a 
                  href="mailto:info@signaldesk.us" 
                  className="text-primary hover:underline"
                >
                  info@signaldesk.us
                </a>
              </p>
            </address>
          </div>
        </article>
      </section>
    </div>
  );
};

export default About;
