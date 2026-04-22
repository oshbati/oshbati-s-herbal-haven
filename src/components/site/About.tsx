import aboutImg from "@/assets/about-tea.jpg";
import { Microscope, Sprout, ShieldCheck, Sparkles } from "lucide-react";

export function About({ lang }: { lang: "ar" | "en" }) {
  const ar = {
    eyebrow: "من نحن",
    title: "حيث يلتقي الموروث بالعلم",
    p1: "عشبتي مشروع متخصص في تطوير خلطات عشبية طبيعية، يتم اختيار مكوناتها بعناية استنادًا إلى المعرفة العشبية التراثية المدعومة بما توفر من دراسات علمية حديثة، بهدف دعم نمط حياة صحي بطريقة عملية وسهلة التطبيق.",
    p2: "نقوم بتبسيط استخدام الأعشاب من خلال إعداد خلطات متوازنة، وتقديمها في أكياس صحية جاهزة للاستخدام (Tea Bags)، لتندمج بسهولة في روتينك اليومي دون تعقيد.",
    cards: [
      { icon: Sprout, t: "موروث أصيل", d: "وصفات منتقاة من معرفة عشبية متراكمة عبر الأجيال" },
      { icon: Microscope, t: "دعم علمي", d: "استئناس بالدراسات الحديثة في اختيار المكونات" },
      { icon: Sparkles, t: "بساطة في الاستخدام", d: "أكياس شاي جاهزة تندمج في روتينك بسهولة" },
      { icon: ShieldCheck, t: "شفافية والتزام", d: "وضوح في طبيعة المنتجات وحدود استخدامها" },
    ],
  };
  const en = {
    eyebrow: "About Us",
    title: "Where heritage meets science",
    p1: "Oshbati is a project dedicated to developing natural herbal blends, with ingredients carefully selected based on traditional herbal knowledge supported by available modern research — to nurture a healthy lifestyle in a practical, easy way.",
    p2: "We simplify the use of herbs by crafting balanced blends and presenting them in ready-to-use tea bags, so they fit seamlessly into your daily routine.",
    cards: [
      { icon: Sprout, t: "Authentic Heritage", d: "Recipes inspired by generations of herbal wisdom" },
      { icon: Microscope, t: "Scientific Support", d: "Modern research informs our ingredient choices" },
      { icon: Sparkles, t: "Simple to Use", d: "Ready tea bags that fit easily into your routine" },
      { icon: ShieldCheck, t: "Transparency", d: "Clarity on what our products are — and aren't" },
    ],
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
          <p className="text-foreground/75 text-base md:text-lg leading-relaxed">{t.p1}</p>
          <p className="mt-4 text-foreground/70 leading-relaxed">{t.p2}</p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {t.cards.map(({ icon: Icon, t: title, d }) => (
              <div key={title} className="p-5 rounded-2xl bg-background border border-border/60 shadow-card">
                <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center mb-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">{title}</h3>
                <p className="text-sm text-foreground/65 mt-1 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
