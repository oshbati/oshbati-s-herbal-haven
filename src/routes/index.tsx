import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { About } from "@/components/site/About";
import { Vision } from "@/components/site/Vision";
import { Herbs } from "@/components/site/Herbs";
import { Benefits } from "@/components/site/Benefits";
import { Disclaimer } from "@/components/site/Disclaimer";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "عشبتي | Oshbati — صحتك بالدنيا" },
      {
        name: "description",
        content:
          "عشبتي مشروع متخصص في تطوير خلطات عشبية طبيعية تجمع بين حكمة الموروث ودقة العلم، لدعم نمط حياة صحي بطريقة عملية وسهلة.",
      },
      { property: "og:title", content: "عشبتي | Oshbati — صحتك بالدنيا" },
      {
        property: "og:description",
        content: "خلطات أعشاب طبيعية في أكياس جاهزة. تعريف بمشروع عشبتي ورؤيته ورسالته.",
      },
      { property: "og:image", content: "/oshbati-logo.png" },
      { name: "twitter:image", content: "/oshbati-logo.png" },
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
        <About lang={lang} />
        <Categories lang={lang} />
        <Benefits lang={lang} />
        <Herbs lang={lang} />
        <Vision lang={lang} />
        <Disclaimer lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
