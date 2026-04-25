import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/oshbati-logo.png";

const navItems = [
  { label: "الرسالة والأهداف والرؤية", href: "#vision" },
  { label: "من نحن", href: "#about" },
  { label: "الأعشاب الرئيسة", href: "#herbs" },
  { label: "خلطاتنا", href: "#blends" },
  { label: "خلطتك الخاصة", href: "#custom-blend" },
  { label: "أسئلة متوقعة", href: "#faq" },
  { label: "آلية الشراء والتوصيل", href: "#shipping" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-md shadow-soft border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="عشبتي Oshbati" className="h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
          aria-label="القائمة"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <ul className="container mx-auto px-4 md:px-8 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-foreground/90 hover:text-primary transition-smooth"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
