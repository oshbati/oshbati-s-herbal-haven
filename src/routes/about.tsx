import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import aboutImg from "@/assets/about-hero.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | عشبتي Oshbati" },
      {
        name: "description",
        content:
          "عشبتي مشروع متخصص في تطوير خلطات عشبية طبيعية تجمع بين المعرفة التراثية والدراسات العلمية الحديثة لدعم نمط حياة صحي.",
      },
      { property: "og:title", content: "من نحن | عشبتي Oshbati" },
      {
        property: "og:description",
        content:
          "تعرّف على عشبتي: خلطات عشبية مدروسة في أكياس شاي جاهزة لدعم توازن الجسم وصحته.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useEffect(() => {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  }, []);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <main className="pt-28 pb-20">
        <article className="container mx-auto px-4 md:px-8 max-w-4xl">
          <header className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              عشبتي
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              <span aria-hidden className="me-2">🌿</span>
              من نحن
            </h1>
            <div className="gold-divider w-24 mx-auto my-6 rounded-full" />
          </header>

          <figure className="relative mb-10">
            <img
              src={aboutImg}
              alt="عشبتي — صحتك بالدنيا"
              loading="lazy"
              className="w-full h-auto object-contain mx-auto max-w-2xl"
            />
          </figure>

          <div className="space-y-6 text-lg leading-loose text-foreground/85">
            <p>
              <strong className="text-primary">عشبتي</strong> هو مشروع متخصص في
              تطوير وتقديم خلطات عشبية طبيعية، يتم اختيار مكوناتها بعناية
              استنادًا إلى المعرفة العشبية التراثية المدعومة بما توفر من دراسات
              علمية حديثة، بهدف دعم نمط حياة صحي بطريقة عملية وسهلة التطبيق.
            </p>
            <p>
              يقوم المشروع على تبسيط استخدام الأعشاب من خلال إعداد خلطات مدروسة
              ومتوازنة، وتقديمها في صورة أكياس صحية جاهزة للاستخدام
              {" "}
              <span className="font-semibold">(Tea Bags)</span>، بما يتيح
              للمستخدم دمجها بسهولة ضمن روتينه اليومي دون تعقيد.
            </p>
            <p>
              ويركّز <span className="font-semibold text-primary">عشبتي</span>
              {" "}على تقديم خلطات تدعم التوازن الصحي للجسم، وتسهم في تحسين بعض
              المؤشرات الصحية المرتبطة بأمراض العصر، مثل اضطراب مستوى السكر
              التراكمي، وارتفاع ضغط الدم، وبعض الالتهابات المزمنة، واضطرابات
              الجهاز الهضمي، والتهابات القولون، وتضخم البروستاتا، وذلك في إطار
              دعم الجسم وتعزيز قدرته الطبيعية على التعافي.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
