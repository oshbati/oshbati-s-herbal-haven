import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/oshbati-logo.png";

export function Header({
  lang,
  onToggleLang,
}: {
  lang: "ar" | "en";
  onToggleLang: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-soft border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="عشبتي Oshbati" className="h-12 w-auto" />
        </a>

        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleLang}
          className="gap-1.5 text-foreground/80 hover:text-primary"
        >
          <Globe className="h-4 w-4" />
          <span className="text-xs font-semibold">{lang === "ar" ? "EN" : "AR"}</span>
        </Button>
      </div>
    </header>
  );
}
