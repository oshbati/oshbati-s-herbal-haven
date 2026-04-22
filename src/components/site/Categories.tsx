import sugar from "@/assets/cat-sugar.jpg";
import digestive from "@/assets/cat-digestive.jpg";
import pressure from "@/assets/cat-pressure.jpg";
import wellness from "@/assets/cat-wellness.jpg";

const data = {
  ar: {
    title: "خلطات بحسب احتياجك الصحي",
    sub: "اختر فئتك المفضلة من تشكيلتنا المدروسة بعناية.",
    items: [
      { img: sugar, title: "دعم السكر", desc: "خلطات لتوازن مستويات السكر" },
      { img: digestive, title: "الجهاز الهضمي", desc: "للراحة والهضم الصحي" },
      { img: pressure, title: "ضغط الدم", desc: "لتعزيز توازن ضغط الدم" },
      { img: wellness, title: "العافية العامة", desc: "للاسترخاء والحيوية اليومية" },
    ],
  },
  en: {
    title: "Blends for every health need",
    sub: "Choose from our carefully crafted herbal collections.",
    items: [
      { img: sugar, title: "Blood Sugar Support", desc: "Blends to balance sugar levels" },
      { img: digestive, title: "Digestive Health", desc: "Comfort and healthy digestion" },
      { img: pressure, title: "Blood Pressure", desc: "Support a balanced pressure" },
      { img: wellness, title: "General Wellness", desc: "Daily calm and vitality" },
    ],
  },
};

export function Categories({ lang }: { lang: "ar" | "en" }) {
  const t = data[lang];
  return (
    <section id="categories" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {lang === "ar" ? "الفئات" : "Categories"}
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-foreground/70 leading-relaxed">{t.sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((it, i) => (
            <article
              key={it.title}
              className="reveal group relative rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-elegant transition-smooth cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 text-primary-foreground">
                <h3 className="text-xl font-bold">{it.title}</h3>
                <p className="text-sm text-primary-foreground/85 mt-1">{it.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                  {lang === "ar" ? "اكتشف" : "Explore"}
                  <span className="rtl:rotate-180">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
