import { useState, useEffect } from "react";
import signaldeskLogo from "@/assets/signaldesk-logo.png";
import signaldeskLogoWhite from "@/assets/signaldesk-logo-white.png";

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

export const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [isDark] = useState(() => document.documentElement.classList.contains("dark"));
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade out after a brief delay
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 800);

    // Complete loading after fade animation
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onLoadComplete?.();
    }, 1200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-400 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <img
          src={isDark ? signaldeskLogoWhite : signaldeskLogo}
          alt="SignalDesk"
          className="h-16 w-auto animate-pulse"
        />
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
          <span className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
          <span className="h-2 w-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </div>
  );
};
