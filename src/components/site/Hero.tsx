import { Button } from "@/components/ui/button";
import { ArrowLeft, Leaf } from "lucide-react";
import heroImg from "@/assets/hero-tea.jpg";

export function Hero({ lang }: { lang: "ar" | "en" }) {
  const ar = {
    eyebrow: "حكمة الموروث • دقة العلم",
    title: "عشبتي.. حكمة الطبيعة في كيس واحد",
    sub: "خلطات عشبية مدروسة، مستلهمة من المعرفة التراثية ومدعومة بالدراسات الحديثة، لدعم نمط حياة صحي بطريقة عملية وسهلة.",
    cta: "اكتشف خلطاتنا",
    cta2: "تعرّف علينا",
    badge: "صحتك بالدنيا",
  };
  const en = {
    eyebrow: "Heritage Wisdom • Modern Science",
    title: "Oshbati — Nature's wisdom in a single bag",
    sub: "Thoughtful herbal blends inspired by traditional knowledge and supported by modern research, to nurture a healthy lifestyle simply and practically.",
    cta: "Discover Our Blends",
    cta2: "About Us",
    badge: "Your health, your world",
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
              <a href="#blends">
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

          <div className="mt-12 flex flex-wrap items-center gap-3 text-sm text-foreground/70">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-semibold text-primary">{t.badge}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
