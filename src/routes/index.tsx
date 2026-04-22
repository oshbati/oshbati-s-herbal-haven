import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Benefits } from "@/components/site/Benefits";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "عشبتي | Oshbati — صحتك بالدنيا" },
      {
        name: "description",
        content:
          "عشبتي: خلطات شاي طبيعية مدروسة لدعم توازنك الصحي. أكياس جاهزة، 100% طبيعية، مفحوصة مخبرياً.",
      },
      { property: "og:title", content: "عشبتي | Oshbati — صحتك بالدنيا" },
      {
        property: "og:description",
        content: "خلطات أعشاب طبيعية في أكياس شاي جاهزة. حكمة الموروث ودقة العلم.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} onToggleLang={() => setLang((l) => (l === "ar" ? "en" : "ar"))} />
      <main>
        <Hero lang={lang} />
        <Categories lang={lang} />
        <About lang={lang} />
        <Products lang={lang} />
        <Benefits lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
