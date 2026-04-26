import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Vision } from "@/components/site/Vision";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "الرسالة والأهداف والرؤية | عشبتي Oshbati" },
      {
        name: "description",
        content:
          "تعرّف على رسالة عشبتي وأهدافها ورؤيتها في تقديم خلطات عشبية طبيعية مدروسة لدعم نمط حياة صحي.",
      },
      { property: "og:title", content: "الرسالة والأهداف والرؤية | عشبتي Oshbati" },
      {
        property: "og:description",
        content:
          "رسالتنا، أهدافنا، ورؤيتنا في عشبتي — أسس منهجية وعلميّة لتقديم خلطات عشبية موثوقة.",
      },
    ],
  }),
  component: VisionPage,
});

function VisionPage() {
  useEffect(() => {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  }, []);
  useReveal();

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <main className="pt-28">
        <Vision lang="ar" />
      </main>
    </div>
  );
}
