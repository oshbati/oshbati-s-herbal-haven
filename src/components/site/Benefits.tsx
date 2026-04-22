import { Leaf, FlaskConical, Coffee, Truck } from "lucide-react";

export function Benefits({ lang }: { lang: "ar" | "en" }) {
  const items =
    lang === "ar"
      ? [
          { icon: Leaf, t: "100% طبيعي", d: "بدون مواد حافظة" },
          { icon: FlaskConical, t: "مفحوص مخبرياً", d: "نقاء وفعالية مضمونة" },
          { icon: Coffee, t: "أكياس جاهزة", d: "سهل التحضير في دقائق" },
          { icon: Truck, t: "توصيل سريع", d: "خلال 24-72 ساعة" },
        ]
      : [
          { icon: Leaf, t: "100% Natural", d: "No preservatives" },
          { icon: FlaskConical, t: "Lab Tested", d: "Purity & potency verified" },
          { icon: Coffee, t: "Ready Tea Bags", d: "Brew in minutes" },
          { icon: Truck, t: "Fast Delivery", d: "Within 24-72 hours" },
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
                <p className="text-sm text-primary-foreground/70 mt-0.5">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
