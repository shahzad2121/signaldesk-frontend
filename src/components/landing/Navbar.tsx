import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import signaldeskLogo from "@/assets/signaldesk-logo.png";
import signaldeskLogoWhite from "@/assets/signaldesk-logo-white.png";

const APP_URL = "https://app.signaldesk.us";

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

export const Navbar = ({ isDark, toggleDark }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={isDark ? signaldeskLogoWhite : signaldeskLogo}
              alt="SignalDesk"
              className="h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/about"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              About
            </Link>
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Pricing
            </button>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
            <Button variant="ghost" className="text-muted-foreground" asChild>
              <a href={`${APP_URL}/auth`} target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
            <Button variant="accent" asChild>
              <a href={`${APP_URL}/auth?tab=signup`} target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/about"
                className="text-left py-2 text-foreground font-medium"
              >
                About
              </Link>
              <button
                onClick={() => scrollToSection("features")}
                className="text-left py-2 text-foreground font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left py-2 text-foreground font-medium"
              >
                Pricing
              </button>
              <Link
                to="/contact"
                className="text-left py-2 text-foreground font-medium"
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start" asChild>
                  <a href={`${APP_URL}/auth`} target="_blank" rel="noopener noreferrer">
                    Login
                  </a>
                </Button>
                <Button variant="accent" asChild>
                  <a href={`${APP_URL}/auth?tab=signup`} target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};