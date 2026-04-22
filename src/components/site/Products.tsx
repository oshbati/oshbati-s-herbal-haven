import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

const products = {
  ar: [
    { img: p1, name: "خلطة توازن السكر", tag: "20 كيس شاي", price: 45, rating: 4.9 },
    { img: p2, name: "خلطة راحة القولون", tag: "20 كيس شاي", price: 42, rating: 4.8 },
    { img: p3, name: "خلطة الكركديه للضغط", tag: "20 كيس شاي", price: 40, rating: 4.9 },
    { img: p4, name: "خلطة البابونج للاسترخاء", tag: "20 كيس شاي", price: 38, rating: 5.0 },
  ],
  en: [
    { img: p1, name: "Sugar Balance Blend", tag: "20 tea bags", price: 45, rating: 4.9 },
    { img: p2, name: "Digestive Comfort Blend", tag: "20 tea bags", price: 42, rating: 4.8 },
    { img: p3, name: "Hibiscus Pressure Blend", tag: "20 tea bags", price: 40, rating: 4.9 },
    { img: p4, name: "Chamomile Calm Blend", tag: "20 tea bags", price: 38, rating: 5.0 },
  ],
};

export function Products({ lang }: { lang: "ar" | "en" }) {
  const list = products[lang];
  const currency = lang === "ar" ? "ر.س" : "SAR";
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {lang === "ar" ? "متجرنا" : "Our Shop"}
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground text-balance max-w-xl">
              {lang === "ar" ? "خلطات تستحق فنجانك" : "Blends worthy of your cup"}
            </h2>
          </div>
          <p className="text-foreground/65 max-w-md">
            {lang === "ar"
              ? "أكياس شاي طبيعية 100%، جاهزة للنقع، بنكهات أصيلة وفوائد مدعومة."
              : "100% natural tea bags, ready to brew, with authentic flavor and proven benefits."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((p, i) => (
            <article
              key={p.name}
              className="reveal group bg-card rounded-3xl overflow-hidden border border-border/50 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-secondary/40 relative">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                />
                <div className="absolute top-3 end-3 px-2.5 py-1 rounded-full bg-background/85 backdrop-blur-sm text-[11px] font-semibold text-primary flex items-center gap-1">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  {p.rating}
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-foreground/55 font-medium">{p.tag}</p>
                <h3 className="mt-1 font-bold text-foreground text-lg leading-snug">{p.name}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-primary font-extrabold text-xl">
                    {p.price}
                    <span className="text-xs font-medium text-foreground/60 ms-1">{currency}</span>
                  </div>
                  <Button
                    size="sm"
                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    {lang === "ar" ? "أضف" : "Add"}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
