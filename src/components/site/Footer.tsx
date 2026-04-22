import { Facebook, Instagram, Twitter, AlertTriangle } from "lucide-react";
import logo from "@/assets/oshbati-logo.png";

export function Footer({ lang }: { lang: "ar" | "en" }) {
  const ar = {
    tagline: "صحتك بالدنيا",
    desc: "خلطات شاي طبيعية بحكمة الموروث ودقة العلم.",
    nav: "روابط سريعة",
    navItems: [
      { l: "الرئيسية", h: "#home" },
      { l: "منتجاتنا", h: "#products" },
      { l: "من نحن", h: "#about" },
      { l: "تواصل", h: "#contact" },
    ],
    contact: "تواصل معنا",
    disc: "إخلاء مسؤولية صحية",
    discBody:
      "منتجات عشبتي مكمّل غذائي طبيعي ولا تُعتبر بديلاً عن العلاج الطبي. يُرجى استشارة الطبيب قبل الاستخدام في حال الحمل، الرضاعة، تناول أدوية مزمنة، أو وجود حالة صحية. النتائج تختلف من شخص لآخر.",
    rights: "© 2025 عشبتي. جميع الحقوق محفوظة.",
  };
  const en = {
    tagline: "Your health is your world",
    desc: "Natural tea blends with the wisdom of heritage and the precision of science.",
    nav: "Quick Links",
    navItems: [
      { l: "Home", h: "#home" },
      { l: "Shop", h: "#products" },
      { l: "About", h: "#about" },
      { l: "Contact", h: "#contact" },
    ],
    contact: "Contact",
    disc: "Health Disclaimer",
    discBody:
      "Oshbati products are natural dietary supplements and are not a substitute for medical treatment. Please consult your physician before use if pregnant, nursing, on chronic medication, or with any medical condition. Results may vary.",
    rights: "© 2025 Oshbati. All rights reserved.",
  };
  const t = lang === "ar" ? ar : en;

  return (
    <footer id="contact" className="bg-foreground text-background pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img src={logo} alt="Oshbati" className="h-16 w-auto bg-background/95 rounded-xl p-2" />
            <p className="mt-4 text-accent font-bold text-lg">{t.tagline}</p>
            <p className="mt-2 text-background/65 text-sm leading-relaxed">{t.desc}</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.nav}</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              {t.navItems.map((n) => (
                <li key={n.h}>
                  <a href={n.h} className="hover:text-accent transition-smooth">
                    {n.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.contact}</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>hello@oshbati.com</li>
              <li>+966 50 000 0000</li>
              <li>{lang === "ar" ? "الرياض، السعودية" : "Riyadh, KSA"}</li>
            </ul>
            <div className="flex gap-3 mt-4">
              {[Instagram, Facebook, Twitter].map((Ic, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 grid place-items-center rounded-full bg-background/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
              <div className="flex items-center gap-2 text-accent font-bold">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-sm">{t.disc}</span>
              </div>
              <p className="mt-2 text-xs text-background/70 leading-relaxed">{t.discBody}</p>
            </div>
          </div>
        </div>

        <div className="gold-divider mt-12 opacity-40" />
        <p className="text-center text-xs text-background/55 mt-6">{t.rights}</p>
      </div>
    </footer>
  );
}
