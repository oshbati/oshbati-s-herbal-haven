import { Eye, Send, Target } from "lucide-react";

export function Vision({ lang }: { lang: "ar" | "en" }) {
  const ar = {
    eyebrow: "رؤيتنا ورسالتنا وأهدافنا",
    title: "نمط حياة صحي.. مستوحى من الأرض",
    intro:
      "أخي الزائر الكريم، تعرّف على رسالتنا وأهدافنا ورؤيتنا حتى تبني ثقتك بنا على أسس منهجية وعلميّة مدروسة.",
    vision: {
      t: "رؤية المشروع",
      d: "أن يكون عشبتي الخيار الأول في مجال التداوي بالأعشاب الطبيعية.",
    },
    mission: {
      t: "رسالة المشروع",
      d: "نسعى في عشبتي إلى تمكين الأفراد من تبنّي أسلوب حياة صحي من خلال تقديم خلطات عشبية طبيعية عالية الجودة، سهلة الاستخدام، مبنية على أسس علمية وتراثية، بما يسهم في دعم الصحة العامة وتحسين جودة الحياة بطريقة آمنة ومستدامة.",
    },
    goalsTitle: "أهداف المشروع",
    goals: [
      "تقديم منتجات عشبية طبيعية موثوقة ذات جودة عالية ومعايير تصنيع صحية.",
      "تبسيط استخدام خلطات الأعشاب وجعلها متاحة للجميع.",
      "رفع الوعي بأهمية الاستشفاء بالأعشاب الطبيعية الموثوقة.",
      "تطوير خلطات متخصصة تستهدف المساعدة على الاستشفاء من أمراض العصر المزمنة ودعم الصحة العامة للجسم.",
      "بناء علامة تجارية موثوقة في مجال المنتجات العشبية على المستوى المحلي والإقليمي.",
      "المساهمة في دعم الوظائف الحيوية للجسم، بما في ذلك وظائف الكبد والكلى، باعتبارهما من الأعضاء الرئيسة المسؤولة عن عمليات الاستقلاب (Metabolism) والإطراح (Excretion) لمختلف المركبات داخل الجسم، بما فيها المركبات الدوائية، وذلك من خلال تقديم خلطات عشبية طبيعية قد تساعد في تعزيز التوازن الفسيولوجي العام ضمن نمط حياة صحي ومتوازن.",
      "التعريف بالأعشاب الطبيعية الرئيسة في التداوي وبيان قيمتها الغذائية والدوائية.",
    ],
  };
  const en = {
    eyebrow: "Vision, Mission & Goals",
    title: "A healthy lifestyle, inspired by the earth",
    intro:
      "Dear visitor, learn about our mission, goals, and vision so your trust in us is built on a thoughtful, methodical, and scientific foundation.",
    vision: {
      t: "Vision",
      d: "For Oshbati to become the first choice in herbal remedies that have proven their value across the ages.",
    },
    mission: {
      t: "Mission",
      d: "Empower people to adopt a healthy lifestyle through high-quality, easy-to-use natural herbal blends, grounded in scientific and traditional foundations — safely and sustainably.",
    },
    goalsTitle: "Our Goals",
    goals: [
      "Trustworthy herbal products with healthy manufacturing standards.",
      "Simplify herbs as part of the daily routine.",
      "Raise awareness of natural and preventive medicine.",
      "Develop specialized blends for common health needs.",
      "Build a trusted brand locally and regionally.",
      "Stay transparent about our products and their limits.",
      "Introduce key herbs and their nutritional and medicinal value.",
    ],
  };
  const t = lang === "ar" ? ar : en;

  return (
    <section id="vision" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {t.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground text-balance">
            {t.title}
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-foreground/75 leading-relaxed text-base md:text-lg">
            {t.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="reveal p-8 rounded-3xl bg-primary text-primary-foreground shadow-elegant">
            <div className="h-12 w-12 rounded-2xl bg-accent/20 grid place-items-center mb-5">
              <Eye className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">{t.vision.t}</h3>
            <p className="mt-3 text-primary-foreground/85 leading-relaxed text-lg">
              {t.vision.d}
            </p>
          </div>
          <div className="reveal p-8 rounded-3xl bg-secondary border border-border/60 shadow-card">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 grid place-items-center mb-5">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary">{t.mission.t}</h3>
            <p className="mt-3 text-foreground/75 leading-relaxed text-lg">{t.mission.d}</p>
          </div>
        </div>

        <div className="reveal rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-accent/15 grid place-items-center">
              <Target className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">{t.goalsTitle}</h3>
          </div>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {t.goals.map((g, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
