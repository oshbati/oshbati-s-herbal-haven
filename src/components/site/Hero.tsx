import { Button } from "@/components/ui/button";
import { ArrowLeft, Leaf } from "lucide-react";
import heroImg from "@/assets/hero-tea.jpg";

export function Hero({ lang }: { lang: "ar" | "en" }) {
  const ar = {
    eyebrow: "حكمة الطبيعة • صحة بلا مساومة",
    title: "عشبتي.. حكمة الطبيعة في كيس واحد",
    sub: "خلطات طبيعية مدروسة لدعم توازنك الصحي، بمذاق أصيل وجودة مخبرية.",
    cta: "تسوق الآن",
    cta2: "تعرّف علينا",
    badge: "100% طبيعي",
  };
  const en = {
    eyebrow: "Nature's Wisdom • Uncompromised Health",
    title: "Oshbati — Nature's wisdom in a single bag",
    sub: "Carefully crafted herbal blends to support your wellness balance, with authentic taste and lab-tested quality.",
    cta: "Shop Now",
    cta2: "About Us",
    badge: "100% Natural",
  };
  const t = lang === "ar" ? ar : en;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Premium herbal tea"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="max-w-2xl reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Leaf className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary tracking-wide">{t.eyebrow}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-foreground text-balance">
            {t.title}
          </h1>

          <div className="gold-divider w-32 my-6 rounded-full" />

          <p className="text-lg md:text-xl text-foreground/75 leading-relaxed max-w-xl">
            {t.sub}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base font-semibold shadow-elegant group"
              asChild
            >
              <a href="#products">
                {t.cta}
                <ArrowLeft className="h-4 w-4 ms-1 group-hover:-translate-x-1 transition-smooth rtl:rotate-180" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 text-base font-semibold border-primary/30 text-primary hover:bg-primary/5"
              asChild
            >
              <a href="#about">{t.cta2}</a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-foreground/70">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-medium">{t.badge}</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span>Lab Tested · Ready-to-use</span>
          </div>
        </div>
      </div>
    </section>
  );
}
