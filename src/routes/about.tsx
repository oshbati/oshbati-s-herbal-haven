import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import aboutImg from "@/assets/about-hero.png";

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
              تطوير الخلطات العشبية، قائم على الاستفادة من الأعشاب الطبيعية
              المعروفة عبر التاريخ وفي مختلف الثقافات؛ العربية، والآسيوية،
              والصينية، والأفريقية، والتي استخدمتها الشعوب عبر العصور لدعم الصحة
              العامة.
            </p>
            <p>
              نقوم في <span className="font-semibold text-primary">عشبتي</span>
              {" "}باختيار هذه الأعشاب بعناية، ودمجها في خلطات مدروسة تهدف إلى
              دعم الجسم والمساهمة في التخفيف من بعض مشكلات العصر الصحية، وذلك
              ضمن إطار علمي متوازن يجمع بين الخبرة التقليدية المتوارثة والدراسات
              الحديثة.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-primary pt-4">
              منهجنا في عشبتي
            </h2>
            <p>نعتمد في تطوير منتجاتنا على ثلاثة معايير أساسية:</p>

            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  1. الاعتماد على الأعشاب الموثوقة تاريخيًا
                </h3>
                <p>
                  نختار الأعشاب التي عُرفت باستخدامها في الثقافات المختلفة،
                  والتي ثبت حضورها في الموروث الصحي للشعوب.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  2. الاستناد إلى الأدلة العلمية
                </h3>
                <p>
                  نراجع الدراسات والأبحاث الحديثة التي تناولت الخصائص الصحية
                  لهذه الأعشاب، لضمان تقديم منتجات قائمة على أساس علمي قدر
                  الإمكان.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  3. صياغة خلطات دقيقة ومتوازنة
                </h3>
                <p>
                  نقوم بتركيب الخلطات بنسب مدروسة، تستهدف دعم وظائف الجسم
                  المختلفة، مع مراعاة التوازن بين الفعالية وسهولة الاستخدام.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-primary pt-4">
              طريقة التقديم
            </h2>
            <p>
              تُقدَّم خلطات <span className="font-semibold text-primary">عشبتي</span>
              {" "}في صورة أكياس شاي عملية وسهلة الاستخدام، صُممت بعناية لضمان:
            </p>
            <ul className="list-disc ps-6 space-y-2 marker:text-accent">
              <li>استخلاص الزيوت الفعالة والمركبات النباتية</li>
              <li>سهولة التحضير والاستخدام اليومي</li>
              <li>تحقيق أقصى استفادة ممكنة من المكونات</li>
            </ul>

            <div className="mt-8 p-6 rounded-xl border border-accent/30 bg-accent/5">
              <h3 className="text-xl font-bold text-primary mb-3">
                <span aria-hidden className="me-2">⚠️</span>تنبيه
              </h3>
              <p className="mb-3">
                منتجات <span className="font-semibold text-primary">عشبتي</span>
                {" "}تعتمد على مكونات عشبية طبيعية آمنة، وإذا لم تُحقق الفائدة
                المرجوة فهي — بإذن الله — لا تُسبب ضررًا.
              </p>
              <p>
                ولا تُعد بديلاً عن العلاج الطبي، ويُنصح دائمًا باستشارة الطبيب
                المختص قبل الاستخدام.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
