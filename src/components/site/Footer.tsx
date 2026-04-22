import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";
import logo from "@/assets/oshbati-logo.png";

export function Footer({ lang }: { lang: "ar" | "en" }) {
  const ar = {
    tagline: "صحتك بالدنيا",
    desc: "مشروع متخصص في تطوير خلطات عشبية طبيعية، تجمع بين حكمة الموروث ودقة العلم.",
    nav: "روابط",
    navItems: [
      { l: "من نحن", h: "#about" },
      { l: "خلطاتنا", h: "#blends" },
      { l: "أعشابنا", h: "#herbs" },
      { l: "رؤيتنا", h: "#vision" },
    ],
    contact: "تواصل معنا",
    rights: "© 2025 عشبتي. جميع الحقوق محفوظة.",
    note: "هذا الموقع تعريفي وغير مخصص للبيع المباشر حالياً.",
  };
  const en = {
    tagline: "Your health, your world",
    desc: "A project dedicated to developing natural herbal blends — heritage wisdom meets modern science.",
    nav: "Explore",
    navItems: [
      { l: "About", h: "#about" },
      { l: "Our Blends", h: "#blends" },
      { l: "Herbs", h: "#herbs" },
      { l: "Vision", h: "#vision" },
    ],
    contact: "Contact",
    rights: "© 2025 Oshbati. All rights reserved.",
    note: "This is an informational website — not a direct sales channel for now.",
  };
  const t = lang === "ar" ? ar : en;

  return (
    <footer id="contact" className="bg-foreground text-background pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="Oshbati" className="h-16 w-auto bg-background/95 rounded-xl p-2" />
            <p className="mt-4 text-accent font-bold text-lg">{t.tagline}</p>
            <p className="mt-2 text-background/65 text-sm leading-relaxed max-w-sm">{t.desc}</p>
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
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                hello@oshbati.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                {lang === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia"}
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[Instagram, Facebook, Twitter].map((Ic, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="h-9 w-9 grid place-items-center rounded-full bg-background/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-divider mt-12 opacity-40" />
        <div className="mt-6 flex flex-col md:flex-row md:justify-between gap-2 text-xs text-background/55 text-center md:text-start">
          <p>{t.rights}</p>
          <p>{t.note}</p>
        </div>
      </div>
    </footer>
  );
}
