import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import comingSoon from "@/assets/coming-soon.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "عشبتي | Oshbati — صحتك بالدنيا" },
      {
        name: "description",
        content:
          "عشبتي — الموقع تحت الإنشاء. سيتم تدشينه فور انتهاء المادة العلمية والتسويقية.",
      },
      { property: "og:title", content: "عشبتي | Oshbati — صحتك بالدنيا" },
      {
        property: "og:description",
        content: "الموقع تحت الإنشاء. شكراً لاهتمامك بعشبتي ومنتجاتها.",
      },
      { property: "og:image", content: "/oshbati-share.png" },
      { name: "twitter:image", content: "/oshbati-share.png" },
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

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} onToggleLang={() => setLang((l) => (l === "ar" ? "en" : "ar"))} />
      <main className="pt-20 min-h-screen flex items-center justify-center px-4 py-8">
        <img
          src={comingSoon}
          alt="عشبتي — الموقع تحت الإنشاء"
          className="max-w-full max-h-[calc(100vh-7rem)] w-auto h-auto object-contain rounded-2xl shadow-elegant"
        />
      </main>
    </div>
  );
}
