import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HERBS } from "@/data/herbs";

export const Route = createFileRoute("/herbs")({
  head: () => ({
    meta: [
      { title: "الأعشاب الرئيسة | عشبتي" },
      {
        name: "description",
        content:
          "قائمة بالأعشاب الرئيسة المستخدمة في خلطات عشبتي مع معلومات تفصيلية وأوجه التشافي بها.",
      },
      { property: "og:title", content: "الأعشاب الرئيسة | عشبتي" },
      {
        property: "og:description",
        content: "تعرّف على الأعشاب الرئيسة وفوائدها العلمية والطبية.",
      },
    ],
  }),
  component: HerbsPage,
});

function HerbsPage() {
  useEffect(() => {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        {/* HERO */}
        <section className="container mx-auto px-4 md:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
            عشبتي
          </span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold text-primary">
            الأعشاب الرئيسة
          </h1>
          <div className="mx-auto mt-5 h-1 w-24 bg-accent/70 rounded-full" />
          <p className="mx-auto mt-6 max-w-2xl text-foreground/75 leading-loose text-base md:text-lg">
            قائمة بالأعشاب الرئيسة المستخدمة في خلطاتنا، وتشمل معلومات تفصيلية
            عن العشبة وأوجه التشافي بها.
          </p>
          <p className="mt-4 italic text-foreground/60">
            «الطبيعة هي أفضل صيدلية.»
          </p>
        </section>

        {/* GRID */}
        <section className="container mx-auto px-4 md:px-8 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {HERBS.map((h) => (
              <Link
                key={h.slug}
                to="/herbs/$slug"
                params={{ slug: h.slug }}
                className="group relative rounded-2xl border border-border/60 bg-card p-6 hover:border-accent/50 hover:shadow-card transition-smooth flex flex-col text-right"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-4xl group-hover:scale-110 transition-smooth">
                    {h.emoji}
                  </span>
                  <span className="text-xs font-mono text-foreground/50">
                    {h.en}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-primary group-hover:text-accent transition-smooth">
                  {h.ar}
                </h2>
                <p className="mt-1 text-xs italic text-foreground/55 font-serif">
                  {h.scientific}
                </p>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed flex-1">
                  {h.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-accent">
                  اقرأ المزيد
                  <span aria-hidden>←</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
