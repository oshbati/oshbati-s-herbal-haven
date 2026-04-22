import sugar from "@/assets/cat-sugar.jpg";
import digestive from "@/assets/cat-digestive.jpg";
import pressure from "@/assets/cat-pressure.jpg";
import wellness from "@/assets/cat-wellness.jpg";

const data = {
  ar: {
    eyebrow: "خلطاتنا",
    title: "خلطات مدروسة لاحتياجات صحية شائعة",
    sub: "نطوّر خلطاتنا استنادًا إلى المعرفة العشبية التراثية وما توفر من دراسات حديثة، لدعم توازن الجسم وتعزيز قدرته الطبيعية على التعافي.",
    items: [
      {
        img: sugar,
        title: "دعم توازن السكر",
        desc: "خلطات تساند الجسم في الحفاظ على مستويات سكر متوازنة ضمن نمط حياة صحي.",
      },
      {
        img: digestive,
        title: "الجهاز الهضمي والقولون",
        desc: "خلطات لتهدئة الجهاز الهضمي ودعم راحة القولون بشكل طبيعي.",
      },
      {
        img: pressure,
        title: "ضغط الدم والالتهابات",
        desc: "تركيبات تساهم في دعم توازن الضغط وتخفيف الالتهابات المزمنة الخفيفة.",
      },
      {
        img: wellness,
        title: "العافية العامة والبروستاتا",
        desc: "خلطات داعمة للصحة العامة وصحة البروستاتا ضمن روتين يومي صحي.",
      },
    ],
    note: "* جميع الخلطات داعمة لنمط حياة صحي وليست بديلاً عن العلاج الطبي.",
  },
  en: {
    eyebrow: "Our Blends",
    title: "Thoughtful blends for common health needs",
    sub: "We craft our blends from heritage herbal knowledge and modern research, to support the body's natural balance and capacity for recovery.",
    items: [
      {
        img: sugar,
        title: "Sugar Balance Support",
        desc: "Blends that support the body in maintaining balanced sugar levels within a healthy lifestyle.",
      },
      {
        img: digestive,
        title: "Digestive & Colon Comfort",
        desc: "Blends to soothe digestion and support natural colon comfort.",
      },
      {
        img: pressure,
        title: "Blood Pressure & Inflammation",
        desc: "Formulas that contribute to balanced pressure and ease mild chronic inflammation.",
      },
      {
        img: wellness,
        title: "General Wellness & Prostate",
        desc: "Blends supporting general wellbeing and prostate health as part of a daily routine.",
      },
    ],
    note: "* All blends are intended to support a healthy lifestyle and are not a substitute for medical treatment.",
  },
};

export function Categories({ lang }: { lang: "ar" | "en" }) {
  const t = data[lang];
  return (
    <section id="blends" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {t.eyebrow}
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
              className="reveal group relative rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-elegant transition-smooth"
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
                <p className="text-sm text-primary-foreground/85 mt-1 leading-relaxed">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-foreground/55 max-w-2xl mx-auto leading-relaxed">
          {t.note}
        </p>
      </div>
    </section>
  );
}
