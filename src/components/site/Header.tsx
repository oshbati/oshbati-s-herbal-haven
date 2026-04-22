import { useEffect, useState } from "react";
import { ShoppingCart, Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/oshbati-logo.png";

const navAr = [
  { label: "الرئيسية", href: "#home" },
  { label: "الفئات", href: "#categories" },
  { label: "منتجاتنا", href: "#products" },
  { label: "من نحن", href: "#about" },
  { label: "تواصل", href: "#contact" },
];
const navEn = [
  { label: "Home", href: "#home" },
  { label: "Categories", href: "#categories" },
  { label: "Shop", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header({
  lang,
  onToggleLang,
}: {
  lang: "ar" | "en";
  onToggleLang: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = lang === "ar" ? navAr : navEn;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-soft border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="عشبتي Oshbati" className="h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth relative group"
            >
              {it.label}
              <span className="absolute -bottom-1 right-0 left-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-smooth origin-center" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleLang}
            className="gap-1.5 text-foreground/80 hover:text-primary"
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs font-semibold">{lang === "ar" ? "EN" : "AR"}</span>
          </Button>
          <Button variant="ghost" size="icon" className="relative text-foreground/80 hover:text-primary">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-0.5 -end-0.5 h-4 w-4 rounded-full bg-accent text-[10px] font-bold text-accent-foreground grid place-items-center">
              0
            </span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/85 hover:text-primary font-medium"
              >
                {it.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
