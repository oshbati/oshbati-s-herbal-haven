import { Leaf, FlaskConical, Coffee, ShieldCheck } from "lucide-react";

export function Benefits({ lang }: { lang: "ar" | "en" }) {
  const items =
    lang === "ar"
      ? [
          { icon: Leaf, t: "100% طبيعي", d: "مكونات عشبية منتقاة بعناية" },
          { icon: FlaskConical, t: "مدعوم بالعلم", d: "اختيار مبني على دراسات حديثة" },
          { icon: Coffee, t: "أكياس جاهزة", d: "سهل الاستخدام في روتينك اليومي" },
          { icon: ShieldCheck, t: "شفافية كاملة", d: "وضوح في حدود استخدام كل خلطة" },
        ]
      : [
          { icon: Leaf, t: "100% Natural", d: "Carefully selected herbal ingredients" },
          { icon: FlaskConical, t: "Science-Informed", d: "Choices guided by modern research" },
          { icon: Coffee, t: "Ready Tea Bags", d: "Easy to fit into your daily routine" },
          { icon: ShieldCheck, t: "Full Transparency", d: "Clear about each blend's proper use" },
        ];
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map(({ icon: Icon, t, d }, i) => (
            <div
              key={t}
              className="reveal flex items-start gap-4"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="h-12 w-12 shrink-0 rounded-2xl bg-accent/20 grid place-items-center">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{t}</h3>
                <p className="text-sm text-primary-foreground/70 mt-0.5 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
