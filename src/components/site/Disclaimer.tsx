import { AlertTriangle } from "lucide-react";

export function Disclaimer({ lang }: { lang: "ar" | "en" }) {
  const ar = {
    title: "تنبيه مهم",
    body: "منتجات عشبتي هي مكملات عشبية طبيعية تُستخدم لدعم نمط حياة صحي، ولا تُعد بديلاً عن العلاج الطبي. يُنصح باستشارة الطبيب في حال وجود أمراض مزمنة، الحمل، الرضاعة، أو استخدام أدوية. النتائج قد تختلف من شخص لآخر.",
  };
  const en = {
    title: "Important Disclaimer",
    body: "Oshbati products are natural herbal supplements intended to support a healthy lifestyle and are not a substitute for medical treatment. Please consult a physician if you have a chronic condition, are pregnant, nursing, or using medication. Results may vary.",
  };
  const t = lang === "ar" ? ar : en;
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="reveal max-w-4xl mx-auto rounded-3xl border-2 border-accent/30 bg-accent/5 p-8 md:p-10">
          <div className="flex items-center gap-3 text-accent">
            <div className="h-12 w-12 rounded-2xl bg-accent/15 grid place-items-center">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold">{t.title}</h3>
          </div>
          <p className="mt-4 text-foreground/80 leading-relaxed text-base md:text-lg">{t.body}</p>
        </div>
      </div>
    </section>
  );
}
