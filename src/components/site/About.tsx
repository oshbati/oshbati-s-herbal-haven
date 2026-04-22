import aboutImg from "@/assets/about-tea.jpg";
import { Microscope, Sprout } from "lucide-react";

export function About({ lang }: { lang: "ar" | "en" }) {
  const ar = {
    eyebrow: "من نحن",
    title: "حيث يلتقي الموروث بالعلم",
    p: "في عشبتي، نعيد إحياء وصفات الطب التقليدي ونصقلها بمعايير علمية دقيقة. كل خلطة تمر بمراحل اختيار، تنقية، وفحص مخبري لضمان نقائها وفعاليتها — لتصلك بكيس شاي جاهز بذوق يحاكي الأصالة وسهولة الحاضر.",
    a: "موروث أصيل",
    aDesc: "وصفات منتقاة من حكمة الأجداد",
    b: "علم حديث",
    bDesc: "فحوص مخبرية على كل دفعة",
  };
  const en = {
    eyebrow: "About Us",
    title: "Where heritage meets science",
    p: "At Oshbati we revive traditional remedies and refine them with rigorous standards. Every blend is sourced, purified, and lab-tested for purity and potency — delivered in a ready-to-use tea bag that honors the past with the convenience of today.",
    a: "Authentic Heritage",
    aDesc: "Recipes inspired by ancestral wisdom",
    b: "Modern Science",
    bDesc: "Lab-tested every single batch",
  };
  const t = lang === "ar" ? ar : en;

  return (
    <section id="about" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/20 to-primary/10 -z-10 blur-2xl" />
          <img
            src={aboutImg}
            alt="Oshbati premium tea"
            loading="lazy"
            width={1280}
            height={1280}
            className="rounded-[2rem] shadow-elegant w-full object-cover aspect-square"
          />
        </div>

        <div className="reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {t.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-primary text-balance leading-tight">
            {t.title}
          </h2>
          <div className="gold-divider w-24 my-6 rounded-full" />
          <p className="text-foreground/75 text-lg leading-relaxed">{t.p}</p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl bg-background border border-border/60 shadow-card">
              <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center mb-3">
                <Sprout className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground">{t.a}</h3>
              <p className="text-sm text-foreground/65 mt-1">{t.aDesc}</p>
            </div>
            <div className="p-5 rounded-2xl bg-background border border-border/60 shadow-card">
              <div className="h-10 w-10 rounded-xl bg-accent/15 grid place-items-center mb-3">
                <Microscope className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{t.b}</h3>
              <p className="text-sm text-foreground/65 mt-1">{t.bDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
