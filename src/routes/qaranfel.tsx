import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import cloveHero from "@/assets/clove-hero.jpeg";

export const Route = createFileRoute("/qaranfel")({
  head: () => ({
    meta: [
      { title: "القرنفل | عشبتي — كنز طبيعي لصحة أفضل" },
      {
        name: "description",
        content:
          "تعرّف على القرنفل: فوائده الطبية والعلمية، مكوناته الفعّالة، وخلطات عشبية مع القرنفل لتعزيز الصحة.",
      },
      { property: "og:title", content: "القرنفل | عشبتي" },
      {
        property: "og:description",
        content: "كنز طبيعي لصحة أفضل — فوائد القرنفل وخلطاته العشبية.",
      },
      { property: "og:image", content: "/oshbati-share.png" },
      { name: "twitter:image", content: "/oshbati-share.png" },
    ],
  }),
  component: QaranfelPage,
});

const benefits = [
  {
    icon: "🦷",
    title: "صحة الفم والأسنان",
    text: "يحتوي على الأوجينول الذي يعمل كمطهر ومسكن طبيعي، يساعد في تخفيف ألم الأسنان، يعالج رائحة الفم الكريهة، ويقاوم البكتيريا المسببة للتسوس والتهابات اللثة.",
  },
  {
    icon: "🌿",
    title: "تعزيز الهضم",
    text: "يساعد في تحفيز إفراز الإنزيمات الهاضمة، يخفف من الانتفاخ والغازات، ويقلل من عسر الهضم والغثيان.",
  },
  {
    icon: "🛡️",
    title: "مضاد للأكسدة والالتهابات",
    text: "يحتوي على مركبات مضادة للأكسدة تحارب الجذور الحرة، تقلل من الالتهابات، وتعزز المناعة.",
  },
  {
    icon: "🦠",
    title: "مضاد للبكتيريا والفطريات",
    text: "أثبتت الدراسات أن القرنفل فعّال ضد العديد من البكتيريا والفطريات الضارة، ويساعد في الوقاية من العدوى.",
  },
  {
    icon: "💧",
    title: "تنظيم السكر في الدم",
    text: "يساعد في تحسين حساسية الأنسولين وتنظيم مستويات السكر في الدم، مما يفيد مرضى السكري.",
  },
  {
    icon: "🧠",
    title: "تحسين صحة الدماغ",
    text: "يعزز من تدفق الدم إلى الدماغ، يحسن الذاكرة والتركيز، ويقلل من التوتر والقلق بفضل خصائصه المهدّئة.",
  },
  {
    icon: "🍃",
    title: "دعم صحة الكبد",
    text: "يساعد في إزالة السموم من الكبد وحمايته من التلف بفضل خصائصه المضادة للأكسدة.",
  },
];

const components = [
  { name: "الأوجينول (Eugenol)", text: "مضاد للبكتيريا ومسكن طبيعي." },
  { name: "الفلافونويدات", text: "مضادة للأكسدة ومضادة للالتهاب." },
  { name: "التانينات", text: "تساعد في التئام الجروح ومضادة للميكروبات." },
  { name: "الزيوت الطيارة", text: "تمنح القرنفل رائحته وفوائده العلاجية." },
];

const blends = [
  {
    title: "خلطة الهضم والانتفاخ",
    items: ["3 حبات قرنفل", "ملعقة صغيرة شمر", "أوراق نعناع"],
    how: "تُغلى المكونات في كوب ماء لمدة 10 دقائق، تُشرب دافئة بعد الأكل.",
    benefit: "تحسين الهضم، تقليل الغازات والانتفاخ.",
  },
  {
    title: "خلطة المناعة والبرد",
    items: ["3 حبات قرنفل", "قطعة زنجبيل", "عود قرفة", "عسل طبيعي"],
    how: "تُغلى المكونات في كوب ماء لمدة 10 دقائق، تُصفّى ويُضاف لها العسل، يُشرب دافئاً.",
    benefit: "تقوية المناعة، تقي من نزلات البرد والسعال.",
  },
  {
    title: "خلطة صحة الفم",
    items: ["2 قرنفل", "كوب ماء", "رشة ملح (اختياري)"],
    how: "تُغلى القرنفل في الماء، تُترك حتى تبرد، تُستخدم كمضمضة للفم مرتين يومياً.",
    benefit: "تقضي على البكتيريا، تخفف ألم الأسنان ورائحة الفم.",
  },
  {
    title: "خلطة الاسترخاء والنوم",
    items: ["2 حبة قرنفل", "ملعقة صغيرة بابونج", "ملعقة صغيرة لافندر"],
    how: "تُغلى المكونات في كوب ماء لمدة 10 دقائق، تُشرب قبل النوم.",
    benefit: "تهدئ الأعصاب، تحسين النوم وتقلل التوتر.",
  },
];

function QaranfelPage() {
  useEffect(() => {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* HERO */}
        <section className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 text-right">
              <h1 className="font-display text-5xl md:text-7xl font-extrabold text-primary leading-tight">
                القرنفل
              </h1>
              <p className="mt-3 text-xl md:text-2xl text-accent font-semibold">
                كنز طبيعي لصحة أفضل
              </p>
              <div className="mt-6 h-1 w-24 bg-accent/70 rounded-full ms-auto" />
              <p className="mt-6 text-foreground/80 leading-loose text-base md:text-lg">
                القرنفل هو براعم زهرية مجفّفة لشجرة دائمة الخضرة، تُعرف علمياً
                باسم <em className="font-serif text-primary">Syzygium aromaticum</em>.
                يتميز برائحته العطرية القوية وطعمه الحار اللاذع، ويُستخدم منذ
                آلاف السنين في الطب التقليدي والعلاجات الطبيعية.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={cloveHero}
                alt="القرنفل — كنز طبيعي"
                className="w-full h-auto rounded-3xl shadow-elegant object-cover"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* WHAT IS / COMPONENTS */}
        <section className="container mx-auto px-4 md:px-8 mt-16 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 shadow-soft">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              ما هو القرنفل؟
            </h2>
            <p className="text-foreground/80 leading-loose">
              القرنفل هو البراعم الزهرية المجفّفة لشجرة القرنفل، يحتوي على زيوت
              طيّارة ومركبات فعّالة مثل: الأوجينول، الفلافونويدات، والتانينات،
              وهذه المركبات هي سرّ فوائده الطبية المذهلة.
            </p>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 shadow-soft">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              المكونات الفعّالة في القرنفل
            </h2>
            <ul className="space-y-3">
              {components.map((c) => (
                <li key={c.name} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <p className="text-foreground/80 leading-relaxed">
                    <span className="font-bold text-primary">{c.name}:</span>{" "}
                    {c.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="container mx-auto px-4 md:px-8 mt-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              الفوائد
            </span>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-primary">
              الفوائد الطبية والعلمية للقرنفل
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5 md:p-6 hover:shadow-card hover:border-accent/40 transition-smooth"
              >
                <div className="shrink-0 h-12 w-12 rounded-full bg-primary/10 text-primary text-2xl flex items-center justify-center">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">
                    {i + 1}. {b.title}
                  </h3>
                  <p className="mt-1.5 text-foreground/75 leading-relaxed text-sm md:text-base">
                    {b.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IMPORTANT NOTES */}
        <section className="container mx-auto px-4 md:px-8 mt-12">
          <div className="rounded-3xl border-2 border-accent/40 bg-accent/5 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚠️</span>
              <h2 className="text-xl md:text-2xl font-bold text-primary">
                ملاحظات هامة
              </h2>
            </div>
            <ul className="space-y-2 text-foreground/80 leading-relaxed">
              <li>• يُستخدم القرنفل بكميات معتدلة.</li>
              <li>• لا يُنصح باستخدام زيت القرنفل المركّز مباشرة على الجلد.</li>
              <li>
                • يُفضل استشارة الطبيب للحامل والمرضعة ومرضى الضغط المنخفض قبل
                الاستخدام.
              </li>
            </ul>
          </div>
        </section>

        {/* BLENDS */}
        <section className="container mx-auto px-4 md:px-8 mt-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              الخلطات
            </span>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-primary">
              خلطات عشبية بالقرنفل
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {blends.map((b, i) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border/60 bg-card overflow-hidden flex flex-col hover:shadow-card transition-smooth"
              >
                <div className="bg-primary/5 px-5 py-4 border-b border-border/60">
                  <h3 className="font-bold text-primary text-lg">
                    {i + 1}. {b.title}
                  </h3>
                </div>
                <div className="p-5 flex-1 flex flex-col gap-4 text-sm">
                  <div>
                    <p className="font-bold text-foreground mb-2">المكونات:</p>
                    <ul className="space-y-1 text-foreground/75">
                      {b.items.map((it) => (
                        <li key={it}>• {it}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">
                      طريقة الاستخدام:
                    </p>
                    <p className="text-foreground/75 leading-relaxed">{b.how}</p>
                  </div>
                  <div className="mt-auto rounded-xl bg-sage/20 border border-sage/40 px-3 py-2 text-foreground/85">
                    <span className="font-bold text-primary">الفائدة: </span>
                    {b.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER QUOTE */}
        <section className="container mx-auto px-4 md:px-8 mt-16">
          <div className="text-center rounded-3xl bg-primary text-primary-foreground py-8 px-6">
            <p className="text-xl md:text-2xl font-bold">
              🌿 الطبيعة تمنحنا الشفاء... فلنحسن استخدامها 🌿
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
