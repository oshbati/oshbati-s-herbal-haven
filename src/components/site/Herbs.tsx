const herbsAr = [
  { n: "البابونج", d: "يدعم الاسترخاء وراحة الجهاز الهضمي.", e: "🌼" },
  { n: "النعناع", d: "منعش ومهدئ للهضم والقولون.", e: "🌿" },
  { n: "الزنجبيل", d: "داعم للهضم ومضاد للالتهاب الخفيف.", e: "🫚" },
  { n: "الكركديه", d: "مرتبط بدعم توازن ضغط الدم.", e: "🌺" },
  { n: "القرفة", d: "تساهم في دعم استقلاب السكر.", e: "🪵" },
  { n: "إكليل الجبل", d: "منشّط ومضاد للأكسدة.", e: "🌱" },
  { n: "اليانسون", d: "مهدئ للأمعاء وطارد للغازات.", e: "✨" },
  { n: "الميرمية", d: "تعرف بفوائدها للجهاز الهضمي والمناعة.", e: "🍃" },
];
const herbsEn = [
  { n: "Chamomile", d: "Supports relaxation and digestive ease.", e: "🌼" },
  { n: "Mint", d: "Refreshing, soothes digestion and colon.", e: "🌿" },
  { n: "Ginger", d: "Aids digestion, mild anti-inflammatory.", e: "🫚" },
  { n: "Hibiscus", d: "Linked with supporting balanced pressure.", e: "🌺" },
  { n: "Cinnamon", d: "Contributes to sugar metabolism support.", e: "🪵" },
  { n: "Rosemary", d: "Energizing, rich in antioxidants.", e: "🌱" },
  { n: "Anise", d: "Calms the gut and eases bloating.", e: "✨" },
  { n: "Sage", d: "Known for digestive and immune benefits.", e: "🍃" },
];

export function Herbs({ lang }: { lang: "ar" | "en" }) {
  const ar = {
    eyebrow: "أعشابنا",
    title: "تعرّف على الأعشاب الرئيسة في خلطاتنا",
    sub: "نؤمن بأهمية التعريف بالأعشاب وقيمتها الغذائية والدوائية، ضمن إطار من الشفافية ووضوح حدود الاستخدام.",
  };
  const en = {
    eyebrow: "Our Herbs",
    title: "Meet the key herbs in our blends",
    sub: "We believe in introducing herbs and their nutritional and medicinal value transparently, with clarity on their proper use.",
  };
  const t = lang === "ar" ? ar : en;
  const list = lang === "ar" ? herbsAr : herbsEn;

  return (
    <section id="herbs" className="py-24 bg-secondary/40">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {list.map((h, i) => (
            <a
              key={h.n}
              href="/herbs"
              className="reveal group p-6 rounded-2xl bg-background border border-border/60 hover:border-accent/40 hover:shadow-card transition-smooth block text-right"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-smooth origin-start">
                {h.e}
              </div>
              <h3 className="font-bold text-primary group-hover:text-accent transition-smooth">{h.n}</h3>
              <p className="mt-1.5 text-sm text-foreground/65 leading-relaxed">{h.d}</p>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/herbs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-smooth"
          >
            {lang === "ar" ? "عرض جميع الأعشاب" : "View all herbs"} <span aria-hidden>←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
