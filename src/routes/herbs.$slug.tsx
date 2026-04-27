import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { getHerbBySlug, HERBS } from "@/data/herbs";

export const Route = createFileRoute("/herbs/$slug")({
  loader: ({ params }) => {
    const herb = getHerbBySlug(params.slug);
    if (!herb) throw notFound();
    return { herb };
  },
  head: ({ loaderData }) => {
    const herb = loaderData?.herb;
    if (!herb) {
      return { meta: [{ title: "العشبة غير موجودة | عشبتي" }] };
    }
    const title = `${herb.ar} — ${herb.en} | عشبتي`;
    const description = `تعرّف على ${herb.ar} (${herb.scientific}): مكوناتها الفعّالة وأوجه الاستشفاء بها.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-primary">
          العشبة غير موجودة
        </h1>
        <Link
          to="/herbs"
          className="mt-6 inline-block text-accent font-bold underline"
        >
          العودة إلى قائمة الأعشاب
        </Link>
      </main>
      <Footer />
    </div>
  ),
  component: HerbPage,
});

function HerbPage() {
  const { herb } = Route.useLoaderData();

  useEffect(() => {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  }, []);

  // related = 3 herbs after current in array (cycled)
  const idx = HERBS.findIndex((h) => h.slug === herb.slug);
  const related = [1, 2, 3].map((o) => HERBS[(idx + o) % HERBS.length]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* breadcrumb */}
        <div className="container mx-auto px-4 md:px-8">
          <nav className="text-sm text-foreground/60 mb-6">
            <Link to="/" className="hover:text-primary">الرئيسية</Link>
            <span className="mx-2">/</span>
            <Link to="/herbs" className="hover:text-primary">الأعشاب الرئيسة</Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-bold">{herb.ar}</span>
          </nav>
        </div>

        {/* HERO */}
        <section className="container mx-auto px-4 md:px-8">
          <div className="rounded-3xl bg-gradient-to-bl from-primary/10 via-accent/5 to-transparent border border-border/60 p-8 md:p-14 text-center">
            <div className="text-7xl md:text-8xl mb-4">{herb.emoji}</div>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-primary leading-tight">
              {herb.ar}
            </h1>
            <p className="mt-2 text-xl md:text-2xl text-accent font-semibold">
              {herb.en}
            </p>
            <p className="mt-3 italic text-foreground/60 font-serif">
              {herb.scientific}
            </p>
            <div className="mx-auto mt-6 h-1 w-24 bg-accent/70 rounded-full" />
            <p className="mx-auto mt-6 max-w-3xl text-foreground/80 leading-loose text-base md:text-lg">
              {herb.intro}
            </p>
          </div>
        </section>

        {/* COMPONENTS */}
        <section className="container mx-auto px-4 md:px-8 mt-12">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              المكونات
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-primary">
              المكونات الصحية الطبية
            </h2>
            <p className="mt-3 text-foreground/70">
              مركبات نشطة مدروسة علمياً
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {herb.components.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-border/60 bg-card p-5 hover:border-accent/40 hover:shadow-card transition-smooth"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary text-lg">{c.name}</h3>
                    <p className="mt-1.5 text-foreground/75 leading-relaxed text-sm">
                      {c.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="container mx-auto px-4 md:px-8 mt-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              الفوائد
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-primary">
              أوجه الاستشفاء بها
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {herb.benefits.map((b, i) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border/60 bg-card p-6 hover:shadow-card hover:border-accent/40 transition-smooth"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-primary text-lg">{b.title}</h3>
                </div>
                <ul className="space-y-2 ps-2">
                  {b.points.map((p) => (
                    <li
                      key={p}
                      className="text-foreground/75 leading-relaxed text-sm md:text-base flex gap-2"
                    >
                      <span className="text-accent mt-1.5">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="container mx-auto px-4 md:px-8 mt-12">
          <div className="rounded-3xl border-2 border-accent/40 bg-accent/5 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">⚠️</span>
              <h2 className="text-xl md:text-2xl font-bold text-primary">
                ملاحظة مهمة
              </h2>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              المعلومات المذكورة لأغراض تثقيفية فقط، ولا تُغني عن استشارة الطبيب
              المختص. يُنصح باستشارة الطبيب قبل استخدام الأعشاب للحوامل والمرضعات
              ومن يعانون من حالات صحية مزمنة أو يتناولون أدوية بشكل منتظم.
            </p>
          </div>
        </section>

        {/* RELATED */}
        <section className="container mx-auto px-4 md:px-8 mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary">
              أعشاب أخرى قد تهمّك
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((h) => (
              <Link
                key={h.slug}
                to="/herbs/$slug"
                params={{ slug: h.slug }}
                className="group rounded-2xl border border-border/60 bg-card p-5 hover:border-accent/50 hover:shadow-card transition-smooth text-right"
              >
                <div className="text-3xl mb-2">{h.emoji}</div>
                <h3 className="font-bold text-primary group-hover:text-accent transition-smooth">
                  {h.ar}
                </h3>
                <p className="mt-1 text-sm text-foreground/65 leading-relaxed line-clamp-2">
                  {h.short}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/herbs"
              className="inline-flex items-center gap-2 text-accent font-bold hover:underline"
            >
              عرض جميع الأعشاب <span aria-hidden>←</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
