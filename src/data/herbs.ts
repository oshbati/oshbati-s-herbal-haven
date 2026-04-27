// بيانات الأعشاب الرئيسية — المحتوى مستخرج من صفحة Notion الخاصة بمشروع عشبتي
// لكل عشبة: المعرّف (slug) للمسار، الاسم العربي، الاسم الإنجليزي، الاسم العلمي،
// الأيقونة (emoji)، نبذة قصيرة، المكونات الفعّالة، وأوجه الاستشفاء بها.

export type HerbBenefit = {
  title: string;
  points: string[];
};

export type HerbComponent = {
  name: string;
  description: string;
};

export type Herb = {
  slug: string;
  ar: string;
  en: string;
  scientific: string;
  emoji: string;
  short: string;
  intro: string;
  components: HerbComponent[];
  benefits: HerbBenefit[];
};

export const HERBS: Herb[] = [
  {
    slug: "helba",
    ar: "الحلبة",
    en: "Fenugreek",
    scientific: "Trigonella foenum-graecum",
    emoji: "🌾",
    short: "نبات بقولي يُستخدم منذ آلاف السنين في الغذاء والطب التقليدي.",
    intro:
      "الحلبة نبات عشبي سنوي ينتمي إلى الفصيلة البقولية (Fabaceae)، تُستخدم بذورها وأوراقها في الغذاء والطب التقليدي منذ آلاف السنين، خصوصاً في مناطق البحر الأبيض المتوسط وآسيا. تحتوي بذور الحلبة على مركبات نشطة حيوياً مسؤولة عن تأثيراتها الصحية المتعددة.",
    components: [
      { name: "القلويدات (Alkaloids)", description: "مركبات نشطة ذات تأثيرات بيولوجية متنوعة." },
      { name: "الصابونينات الستيرويدية (Saponins)", description: "تساعد في خفض الكوليسترول ودعم الهرمونات." },
      { name: "الألياف الذائبة (Soluble fiber)", description: "تنظم امتصاص السكر وتدعم الهضم." },
      { name: "4-Hydroxyisoleucine", description: "مركب فريد يساعد في تنظيم سكر الدم." },
    ],
    benefits: [
      { title: "تنظيم سكر الدم", points: ["تحسين استقلاب الجلوكوز وتحفيز إفراز الإنسولين.", "خفض السكر التراكمي وسكر الدم الصائم وفق دراسات حديثة."] },
      { title: "خفض الكوليسترول والدهون", points: ["تقليل امتصاص الدهون والكوليسترول الضار.", "تأثير hypocholesterolemic مثبت علمياً."] },
      { title: "دعم الجهاز الهضمي", points: ["تحفّز الهضم وتقلل الانتفاخ.", "تساعد في تخفيف اضطرابات المعدة."] },
      { title: "دعم المناعة العامة", points: ["مضادات أكسدة قوية.", "تساعد الجسم في مقاومة الأمراض."] },
    ],
  },
  {
    slug: "kuzbara",
    ar: "الكزبرة",
    en: "Coriander",
    scientific: "Coriandrum sativum",
    emoji: "🌿",
    short: "عشبة عطرية غنية بالزيوت الطيّارة ومضادات الأكسدة.",
    intro:
      "الكزبرة عشبة عطرية تُستخدم في المطبخ والطب التقليدي. تحتوي على زيوت طيّارة أبرزها Linalool ومضادات أكسدة وفلافونويدات تمنحها خصائص مهدئة ومضادة للبكتيريا.",
    components: [
      { name: "الزيوت الطيّارة", description: "Linalool — خصائص مضادة للبكتيريا ومهدئة." },
      { name: "الفلافونويدات", description: "تحمي الخلايا من الإجهاد التأكسدي." },
      { name: "الألياف الغذائية", description: "تحسن الهضم وتنظم امتصاص السكر." },
      { name: "فيتامينات ومعادن", description: "فيتامين C، فيتامين K، البوتاسيوم." },
    ],
    benefits: [
      { title: "دعم الجهاز الهضمي", points: ["تقلل الانتفاخ والغازات.", "تحفّز العصارات الهضمية."] },
      { title: "تنظيم سكر الدم", points: ["تحسن استقلاب الجلوكوز.", "قد تساهم في خفض السكر."] },
      { title: "خفض الكوليسترول", points: ["تقلل LDL.", "تدعم صحة القلب."] },
      { title: "مضاد للبكتيريا والالتهابات", points: ["فعالة ضد بعض البكتيريا.", "تقلل الالتهابات."] },
    ],
  },
  {
    slug: "kammoun",
    ar: "الكمون",
    en: "Cumin",
    scientific: "Cuminum cyminum",
    emoji: "🌱",
    short: "بذور عطرية محفّزة للهضم وغنية بالحديد.",
    intro:
      "الكمون من أقدم التوابل، يحتوي على Cuminaldehyde كزيت طيّار رئيسي يمنحه نكهته المميزة وفوائده الهضمية. غني بالحديد والمغنيسيوم.",
    components: [
      { name: "الزيوت الطيّارة", description: "Cuminaldehyde — مضاد للبكتيريا ومحفّز للهضم." },
      { name: "الفلافونويدات", description: "حماية من الإجهاد التأكسدي." },
      { name: "الألياف الغذائية", description: "تدعم الهضم وتنظيم السكر." },
      { name: "معادن", description: "حديد، مغنيسيوم، بوتاسيوم." },
    ],
    benefits: [
      { title: "دعم الجهاز الهضمي", points: ["تقلل الغازات.", "تحفّز العصارات الهضمية."] },
      { title: "تنظيم سكر الدم", points: ["تحسن استقلاب الجلوكوز.", "تساعد في استقرار السكر."] },
      { title: "خفض الكوليسترول", points: ["تقلل LDL.", "تدعم صحة القلب."] },
      { title: "دعم إزالة السموم", points: ["تساعد الكبد على تنقية الجسم.", "غنية بمضادات الأكسدة."] },
    ],
  },
  {
    slug: "qirfa",
    ar: "القرفة",
    en: "Cinnamon",
    scientific: "Cinnamomum verum",
    emoji: "🪵",
    short: "لحاء عطري داعم لتنظيم السكر وصحة القلب.",
    intro:
      "القرفة من أشهر التوابل العالمية، تحتوي على Cinnamaldehyde كمركب فعّال رئيسي يعطيها خصائص مضادة للبكتيريا ومنظِّمة للسكر.",
    components: [
      { name: "الزيوت الطيّارة", description: "Cinnamaldehyde — تنظيم السكر ومضاد للبكتيريا." },
      { name: "مضادات الأكسدة", description: "حماية الخلايا من التلف." },
      { name: "الألياف الغذائية", description: "دعم الهضم." },
      { name: "معادن", description: "كالسيوم، حديد، منغنيز." },
    ],
    benefits: [
      { title: "تنظيم سكر الدم", points: ["تحسين استجابة الجسم للأنسولين.", "خفض مستويات السكر."] },
      { title: "دعم الجهاز الهضمي", points: ["تقليل الانتفاخ.", "تحفيز الهضم."] },
      { title: "خفض الكوليسترول", points: ["تقليل LDL.", "دعم القلب."] },
      { title: "دعم الدورة الدموية", points: ["تحفيز تدفق الدم.", "دعم القلب."] },
      { title: "دعم المناعة", points: ["تعزيز الجهاز المناعي.", "مقاومة الأمراض."] },
    ],
  },
  {
    slug: "qaranful",
    ar: "القرنفل",
    en: "Clove",
    scientific: "Syzygium aromaticum",
    emoji: "🌰",
    short: "براعم زهرية مجفّفة، كنز طبيعي لصحة الفم والمناعة.",
    intro:
      "القرنفل هو البراعم الزهرية المجفّفة لشجرة القرنفل، يحتوي على Eugenol كمركب نشط رئيسي يمنحه خصائصه القوية المضادة للبكتيريا والمسكنة للألم.",
    components: [
      { name: "الزيوت الطيّارة", description: "Eugenol — مضاد قوي للبكتيريا ومسكن." },
      { name: "مضادات الأكسدة", description: "حماية من التلف الخلوي." },
      { name: "فيتامينات ومعادن", description: "فيتامين C، فيتامين K، منغنيز." },
      { name: "المركبات الفينولية", description: "خصائص مضادة للالتهاب." },
    ],
    benefits: [
      { title: "دعم صحة الفم والأسنان", points: ["تخفيف ألم الأسنان.", "مضاد للبكتيريا الفموية."] },
      { title: "دعم الجهاز الهضمي", points: ["تقليل الانتفاخ.", "تحسين الهضم."] },
      { title: "مضاد للبكتيريا والالتهابات", points: ["فعال ضد عدة بكتيريا.", "تقليل الالتهاب."] },
      { title: "تنظيم سكر الدم", points: ["تحسين استجابة الأنسولين.", "استقرار السكر."] },
      { title: "دعم صحة الكبد", points: ["حماية خلايا الكبد.", "دعم وظائفه."] },
    ],
  },
  {
    slug: "bardaqoosh",
    ar: "البردقوش",
    en: "Marjoram",
    scientific: "Origanum majorana",
    emoji: "🌿",
    short: "عشبة عطرية مهدئة وداعمة لتوازن الهرمونات.",
    intro:
      "البردقوش عشبة عطرية تنتمي إلى عائلة النعناعيات، تحتوي على Terpinen-4-ol وSabinene بخصائص مهدئة ومضادة للبكتيريا.",
    components: [
      { name: "الزيوت الطيّارة", description: "Terpinen-4-ol وSabinene." },
      { name: "الفلافونويدات", description: "حماية من الإجهاد التأكسدي." },
      { name: "الألياف الغذائية", description: "دعم الهضم." },
      { name: "فيتامينات ومعادن", description: "فيتامين A، C، حديد." },
    ],
    benefits: [
      { title: "دعم الجهاز الهضمي", points: ["تقليل الغازات.", "تحفيز الإفرازات الهضمية."] },
      { title: "تنظيم الهرمونات", points: ["دعم توازن الهرمونات.", "تخفيف اضطرابات الدورة."] },
      { title: "خفض الكوليسترول", points: ["تقليل LDL."] },
      { title: "تهدئة الجهاز العصبي", points: ["تقليل التوتر.", "تحسين النوم."] },
      { title: "دعم المناعة", points: ["تعزيز المناعة العامة."] },
    ],
  },
  {
    slug: "rosemary",
    ar: "إكليل الجبل",
    en: "Rosemary",
    scientific: "Rosmarinus officinalis",
    emoji: "🌲",
    short: "عشبة منشّطة للذاكرة والدورة الدموية.",
    intro:
      "إكليل الجبل عشبة عطرية معروفة بفوائدها للذاكرة والدورة الدموية، تحتوي على 1,8-Cineole وحمض الروزمارينيك.",
    components: [
      { name: "الزيوت الطيّارة", description: "1,8-Cineole وCamphor." },
      { name: "حمض الروزمارينيك", description: "مضاد قوي للأكسدة والالتهاب." },
      { name: "الألياف الغذائية", description: "دعم الهضم." },
      { name: "فيتامينات ومعادن", description: "فيتامين A، C، حديد." },
    ],
    benefits: [
      { title: "دعم الجهاز الهضمي", points: ["تقليل الغازات.", "تحفيز العصارات."] },
      { title: "تحسين الذاكرة والتركيز", points: ["تنشيط الدماغ.", "تحسين الانتباه."] },
      { title: "دعم الدورة الدموية", points: ["تحفيز تدفق الدم.", "دعم القلب."] },
      { title: "تهدئة الجهاز العصبي", points: ["تقليل التوتر.", "تحسين المزاج."] },
      { title: "دعم المناعة", points: ["مقاومة الأمراض."] },
    ],
  },
  {
    slug: "green-tea",
    ar: "الشاي الأخضر",
    en: "Green Tea",
    scientific: "Camellia sinensis",
    emoji: "🍵",
    short: "غنّي بالكاتيكينات (EGCG) وداعم لحرق الدهون.",
    intro:
      "الشاي الأخضر من أكثر المشروبات الصحية في العالم، يحتوي على EGCG (Epigallocatechin gallate) ومضادات أكسدة قوية وL-theanine.",
    components: [
      { name: "الكاتيكينات", description: "EGCG — مضاد أكسدة قوي وداعم للأيض." },
      { name: "الكافيين", description: "تنشيط الجهاز العصبي وزيادة التركيز." },
      { name: "L-theanine", description: "استرخاء وتركيز." },
      { name: "فيتامينات ومعادن", description: "فيتامين C، B2، البوتاسيوم." },
    ],
    benefits: [
      { title: "دعم حرق الدهون", points: ["زيادة معدل الأيض.", "دعم حرق الدهون."] },
      { title: "تحسين التركيز والذاكرة", points: ["تنشيط الدماغ.", "تحسين الانتباه."] },
      { title: "دعم صحة القلب", points: ["خفض الكوليسترول.", "دعم الأوعية الدموية."] },
      { title: "مضاد للأكسدة والالتهابات", points: ["حماية الخلايا.", "تقليل الالتهابات."] },
    ],
  },
  {
    slug: "naana",
    ar: "النعناع الناشف",
    en: "Dried Mint",
    scientific: "Mentha spicata",
    emoji: "🌿",
    short: "منعش ومهدئ للجهاز الهضمي والعصبي.",
    intro:
      "النعناع الناشف عشبة منعشة تحتوي على Menthol وCarvone بخصائص مهدئة ومضادة للتشنج.",
    components: [
      { name: "الزيوت الطيّارة", description: "Menthol وCarvone." },
      { name: "مضادات الأكسدة", description: "حماية الخلايا." },
      { name: "الألياف الغذائية", description: "دعم الهضم." },
      { name: "فيتامينات ومعادن", description: "فيتامين A، C، حديد." },
    ],
    benefits: [
      { title: "دعم الجهاز الهضمي", points: ["تقليل الانتفاخ.", "تخفيف تقلصات المعدة."] },
      { title: "تهدئة الجهاز العصبي", points: ["تقليل التوتر.", "تحسين الاسترخاء."] },
      { title: "دعم الجهاز التنفسي", points: ["فتح المجاري التنفسية.", "تخفيف الاحتقان."] },
      { title: "تحسين رائحة الفم", points: ["إنعاش الفم.", "تقليل بكتيريا الرائحة."] },
      { title: "دعم المناعة", points: ["تعزيز المناعة."] },
    ],
  },
  {
    slug: "bay-leaves",
    ar: "ورق الغار",
    en: "Bay Leaves",
    scientific: "Laurus nobilis",
    emoji: "🍃",
    short: "أوراق عطرية داعمة للهضم وتنظيم السكر.",
    intro:
      "ورق الغار من التوابل العطرية المهمة، يحتوي على Eucalyptol وEugenol بخصائص مضادة للبكتيريا وداعمة للهضم.",
    components: [
      { name: "الزيوت الطيّارة", description: "Eucalyptol وEugenol." },
      { name: "مضادات الأكسدة", description: "حماية الخلايا." },
      { name: "الألياف الغذائية", description: "دعم الهضم." },
      { name: "فيتامينات ومعادن", description: "فيتامين A، C، حديد." },
    ],
    benefits: [
      { title: "دعم الجهاز الهضمي", points: ["تقليل الانتفاخ.", "تحسين الهضم."] },
      { title: "تنظيم سكر الدم", points: ["تحسين استجابة الأنسولين.", "استقرار السكر."] },
      { title: "خفض الكوليسترول", points: ["تقليل LDL.", "دعم القلب."] },
      { title: "دعم الجهاز التنفسي", points: ["تخفيف الاحتقان."] },
      { title: "دعم المناعة", points: ["مقاومة الأمراض."] },
    ],
  },
  {
    slug: "olive-leaves",
    ar: "ورق الزيتون",
    en: "Olive Leaves",
    scientific: "Olea europaea",
    emoji: "🫒",
    short: "غني بالـ Oleuropein، داعم للقلب والمناعة.",
    intro:
      "ورق الزيتون يحتوي على Oleuropein كمركب فعّال رئيسي يمنحه خصائص قوية مضادة للأكسدة والبكتيريا والفيروسات.",
    components: [
      { name: "Oleuropein", description: "مضاد قوي للأكسدة والبكتيريا." },
      { name: "مضادات الأكسدة", description: "حماية الخلايا." },
      { name: "الفلافونويدات", description: "تقليل الالتهاب ودعم القلب." },
      { name: "فيتامينات ومعادن", description: "فيتامين C، حديد، بوتاسيوم." },
    ],
    benefits: [
      { title: "تنظيم سكر الدم", points: ["تحسين استجابة الأنسولين.", "خفض السكر."] },
      { title: "خفض ضغط الدم", points: ["توسيع الأوعية الدموية.", "دعم القلب."] },
      { title: "مضاد للبكتيريا والفيروسات", points: ["تقليل العدوى."] },
      { title: "دعم صحة القلب", points: ["تقليل LDL.", "تحسين الدورة الدموية."] },
      { title: "دعم المناعة", points: ["مقاومة الأمراض."] },
    ],
  },
  {
    slug: "zanjabil",
    ar: "الزنجبيل",
    en: "Ginger",
    scientific: "Zingiber officinale",
    emoji: "🫚",
    short: "جذور حارة مضادة للالتهاب وداعمة للهضم.",
    intro:
      "الزنجبيل جذور حارة تحتوي على Gingerol وShogaol بخصائص قوية مضادة للالتهاب وداعمة للهضم.",
    components: [
      { name: "Gingerol وShogaol", description: "مضادات قوية للالتهاب." },
      { name: "مضادات الأكسدة", description: "حماية الخلايا." },
      { name: "الألياف الغذائية", description: "دعم الهضم." },
      { name: "فيتامينات ومعادن", description: "فيتامين C، مغنيسيوم، بوتاسيوم." },
    ],
    benefits: [
      { title: "دعم الجهاز الهضمي", points: ["تقليل الغثيان.", "تحسين الهضم."] },
      { title: "مضاد للالتهابات", points: ["تقليل التهابات الجسم.", "مفيد لآلام المفاصل."] },
      { title: "تنظيم سكر الدم", points: ["تحسين استجابة الأنسولين."] },
      { title: "دعم الدورة الدموية", points: ["تحسين تدفق الدم."] },
      { title: "دعم حرق الدهون", points: ["زيادة معدل الأيض."] },
    ],
  },
  {
    slug: "karkadeh",
    ar: "الكركديه",
    en: "Hibiscus",
    scientific: "Hibiscus sabdariffa",
    emoji: "🌺",
    short: "أزهار حمراء داعمة لضغط الدم وصحة القلب.",
    intro:
      "الكركديه أزهار حمراء تحتوي على Anthocyanins وأحماض عضوية تمنحها خصائص قوية مضادة للأكسدة وداعمة لصحة القلب.",
    components: [
      { name: "Anthocyanins", description: "مضاد أكسدة قوي." },
      { name: "الأحماض العضوية", description: "Hibiscus acid — دعم الهضم وضغط الدم." },
      { name: "مضادات الأكسدة", description: "حماية الخلايا." },
      { name: "فيتامينات ومعادن", description: "فيتامين C، كالسيوم، حديد." },
    ],
    benefits: [
      { title: "خفض ضغط الدم", points: ["توسيع الأوعية.", "استقرار الضغط."] },
      { title: "دعم صحة القلب", points: ["خفض الكوليسترول.", "تحسين الأوعية."] },
      { title: "مضاد للأكسدة والالتهابات", points: ["حماية الخلايا."] },
      { title: "دعم الكبد", points: ["حماية خلايا الكبد."] },
      { title: "دعم المناعة", points: ["مقاومة الأمراض."] },
    ],
  },
  {
    slug: "lavender",
    ar: "الخزامى",
    en: "Lavender",
    scientific: "Lavandula angustifolia",
    emoji: "💜",
    short: "أزهار عطرية مهدئة وداعمة للنوم.",
    intro:
      "الخزامى أزهار عطرية معروفة بخصائصها المهدئة، تحتوي على Linalool وLinalyl acetate بخصائص مضادة للقلق.",
    components: [
      { name: "الزيوت الطيّارة", description: "Linalool وLinalyl acetate." },
      { name: "مضادات الأكسدة", description: "حماية الخلايا." },
      { name: "المركبات الفينولية", description: "مضادة للالتهاب." },
      { name: "فيتامينات ومعادن", description: "فيتامين A، C، كالسيوم." },
    ],
    benefits: [
      { title: "تهدئة الجهاز العصبي", points: ["تقليل التوتر والقلق.", "تحسين الاسترخاء."] },
      { title: "تحسين النوم", points: ["علاج الأرق.", "تعزيز جودة النوم."] },
      { title: "مضاد للبكتيريا والالتهابات", points: ["تقليل الالتهابات."] },
      { title: "دعم صحة الجلد", points: ["تهدئة البشرة."] },
      { title: "دعم الجهاز التنفسي", points: ["تخفيف الاحتقان."] },
    ],
  },
  {
    slug: "chamomile",
    ar: "البابونج",
    en: "Chamomile",
    scientific: "Matricaria chamomilla",
    emoji: "🌼",
    short: "أزهار مهدئة للأعصاب والمعدة.",
    intro:
      "البابونج أزهار مهدئة تحتوي على Apigenin وBisabolol بخصائص مضادة للقلق ومضادة للالتهاب.",
    components: [
      { name: "Apigenin", description: "مهدئ ومضاد للقلق." },
      { name: "Bisabolol", description: "مضاد للالتهاب ومهدئ." },
      { name: "مضادات الأكسدة", description: "حماية الخلايا." },
      { name: "فيتامينات ومعادن", description: "فيتامين A، C، كالسيوم." },
    ],
    benefits: [
      { title: "تهدئة الجهاز العصبي", points: ["تقليل التوتر.", "تحسين الاسترخاء."] },
      { title: "تحسين النوم", points: ["علاج الأرق.", "جودة نوم أفضل."] },
      { title: "دعم الجهاز الهضمي", points: ["تقليل الانتفاخ.", "تهدئة المعدة."] },
      { title: "دعم صحة الجلد", points: ["تهدئة البشرة."] },
      { title: "دعم المناعة", points: ["مقاومة الأمراض."] },
    ],
  },
  {
    slug: "berberine",
    ar: "البربرين",
    en: "Berberine",
    scientific: "Berberis vulgaris",
    emoji: "🌾",
    short: "قلويد قوي لتنظيم السكر والدهون.",
    intro:
      "البربرين قلويد طبيعي يُستخرج من نبات البرباريس، له خصائص قوية في تنظيم سكر الدم والدهون.",
    components: [
      { name: "Berberine (قلويد)", description: "تنظيم السكر ومضاد للبكتيريا." },
      { name: "مضادات الأكسدة", description: "حماية الخلايا." },
      { name: "مركبات نشطة", description: "تحسين الأيض وتنظيم الدهون." },
      { name: "معادن", description: "حديد، زنك، مغنيسيوم." },
    ],
    benefits: [
      { title: "تنظيم سكر الدم", points: ["تحسين استجابة الأنسولين.", "خفض السكر."] },
      { title: "دعم حرق الدهون", points: ["تحسين الأيض."] },
      { title: "خفض الكوليسترول", points: ["تقليل LDL."] },
      { title: "مضاد للبكتيريا والالتهابات", points: ["فعال ضد عدة بكتيريا."] },
      { title: "دعم صحة الكبد", points: ["دعم وظائف الكبد وإزالة السموم."] },
    ],
  },
  {
    slug: "sage",
    ar: "الميرمية",
    en: "Sage",
    scientific: "Salvia officinalis",
    emoji: "🍃",
    short: "عشبة محفّزة للذاكرة وداعمة للهرمونات.",
    intro:
      "الميرمية عشبة عطرية تحتوي على Thujone وCineole، معروفة بخصائصها الداعمة للذاكرة والهرمونات.",
    components: [
      { name: "الزيوت الطيّارة", description: "Thujone وCineole." },
      { name: "مضادات الأكسدة", description: "حماية الخلايا." },
      { name: "Rosmarinic acid", description: "مضاد للالتهاب." },
      { name: "فيتامينات ومعادن", description: "فيتامين K، A، مغنيسيوم." },
    ],
    benefits: [
      { title: "تحسين الذاكرة والتركيز", points: ["تنشيط الدماغ."] },
      { title: "تنظيم الهرمونات", points: ["تخفيف أعراض انقطاع الطمث."] },
      { title: "دعم الجهاز الهضمي", points: ["تقليل الانتفاخ."] },
      { title: "دعم صحة الفم", points: ["تقليل التهابات اللثة."] },
      { title: "دعم المناعة", points: ["مقاومة الأمراض."] },
    ],
  },
  {
    slug: "hayl",
    ar: "الهيل",
    en: "Cardamom",
    scientific: "Elettaria cardamomum",
    emoji: "🫛",
    short: "بذور عطرية داعمة للهضم والقلب.",
    intro:
      "الهيل من أرقى التوابل، يحتوي على 1,8-Cineole وTerpinyl acetate بخصائص مضادة للبكتيريا ومحفّزة للهضم.",
    components: [
      { name: "الزيوت الطيّارة", description: "1,8-Cineole وTerpinyl acetate." },
      { name: "مضادات الأكسدة", description: "حماية الخلايا." },
      { name: "الألياف الغذائية", description: "دعم الهضم." },
      { name: "معادن", description: "بوتاسيوم، مغنيسيوم، حديد." },
    ],
    benefits: [
      { title: "دعم الجهاز الهضمي", points: ["تقليل الانتفاخ.", "تحسين الهضم."] },
      { title: "دعم صحة الفم", points: ["إنعاش النفس."] },
      { title: "خفض ضغط الدم", points: ["تحسين تدفق الدم."] },
      { title: "دعم الجهاز التنفسي", points: ["تخفيف الاحتقان."] },
      { title: "دعم المناعة", points: ["مقاومة الأمراض."] },
    ],
  },
  {
    slug: "yansoon",
    ar: "اليانسون",
    en: "Anise",
    scientific: "Pimpinella anisum",
    emoji: "✨",
    short: "بذور عطرية مهدئة للأمعاء والجهاز التنفسي.",
    intro:
      "اليانسون بذور عطرية تحتوي على Anethole كزيت طيّار رئيسي يمنحه خصائص مضادة للتشنج ومهدئة.",
    components: [
      { name: "الزيوت الطيّارة", description: "Anethole — مهدئ ومضاد للتشنج." },
      { name: "مضادات الأكسدة", description: "حماية الخلايا." },
      { name: "الألياف الغذائية", description: "دعم الهضم." },
      { name: "فيتامينات ومعادن", description: "فيتامين C، كالسيوم، حديد." },
    ],
    benefits: [
      { title: "دعم الجهاز الهضمي", points: ["تقليل الانتفاخ.", "تخفيف التقلصات."] },
      { title: "تهدئة الجهاز العصبي", points: ["تقليل التوتر."] },
      { title: "دعم الجهاز التنفسي", points: ["تخفيف السعال."] },
      { title: "دعم صحة الهرمونات", points: ["توازن الهرمونات."] },
      { title: "دعم المناعة", points: ["مقاومة الأمراض."] },
    ],
  },
  {
    slug: "moringa",
    ar: "المورينقا",
    en: "Moringa",
    scientific: "Moringa oleifera",
    emoji: "🌳",
    short: "شجرة المعجزة الغنية بالعناصر الغذائية.",
    intro:
      "المورينقا شجرة استوائية تُعرف بشجرة المعجزة لغناها بالعناصر الغذائية، تحتوي على Isothiocyanates وQuercetin.",
    components: [
      { name: "Isothiocyanates", description: "مضاد للالتهاب وداعم للسكر." },
      { name: "Quercetin وChlorogenic acid", description: "مضادات أكسدة قوية." },
      { name: "الألياف الغذائية", description: "دعم الهضم." },
      { name: "فيتامينات ومعادن", description: "فيتامين A، C، كالسيوم، حديد." },
    ],
    benefits: [
      { title: "تنظيم سكر الدم", points: ["تحسين استجابة الأنسولين."] },
      { title: "دعم صحة القلب", points: ["خفض الكوليسترول."] },
      { title: "مضاد للأكسدة والالتهابات", points: ["حماية الخلايا."] },
      { title: "دعم الجهاز الهضمي", points: ["تحسين الهضم."] },
      { title: "دعم الطاقة العامة", points: ["تقليل التعب والإجهاد."] },
    ],
  },
  {
    slug: "nettle",
    ar: "القراص",
    en: "Nettle",
    scientific: "Urtica dioica",
    emoji: "🌿",
    short: "نبات بري داعم للمفاصل والجهاز البولي.",
    intro:
      "القراص نبات بري له تاريخ طويل في الطب التقليدي، يحتوي على Quercetin وKaempferol بخصائص مضادة للالتهاب والحساسية.",
    components: [
      { name: "Quercetin وKaempferol", description: "مضادان للالتهاب والحساسية." },
      { name: "مضادات الأكسدة", description: "حماية الخلايا." },
      { name: "الألياف الغذائية", description: "دعم الهضم." },
      { name: "فيتامينات ومعادن", description: "فيتامين C، حديد، كالسيوم." },
    ],
    benefits: [
      { title: "دعم صحة المفاصل", points: ["تقليل الالتهابات."] },
      { title: "دعم الجهاز البولي", points: ["دعم وظائف الكلى."] },
      { title: "تنظيم سكر الدم", points: ["تحسين استجابة الأنسولين."] },
      { title: "دعم صحة الدم", points: ["غني بالحديد."] },
      { title: "مضاد للحساسية", points: ["تخفيف أعراض الحساسية."] },
    ],
  },
  {
    slug: "pomegranate-peel",
    ar: "قشر الرمان",
    en: "Pomegranate Peel",
    scientific: "Punica granatum",
    emoji: "🍎",
    short: "قشور غنية بالـ Punicalagins، داعمة للهضم والقلب.",
    intro:
      "قشر الرمان غني بالـ Ellagic acid وPunicalagins بخصائص قوية مضادة للأكسدة والبكتيريا.",
    components: [
      { name: "Ellagic acid وPunicalagins", description: "مضادات أكسدة قوية." },
      { name: "التانينات", description: "تأثير قابض للجهاز الهضمي." },
      { name: "الألياف الغذائية", description: "دعم الهضم." },
      { name: "فيتامينات ومعادن", description: "فيتامين C، بوتاسيوم، كالسيوم." },
    ],
    benefits: [
      { title: "دعم الجهاز الهضمي", points: ["تقليل الإسهال.", "تحسين صحة الأمعاء."] },
      { title: "مضاد للبكتيريا والالتهابات", points: ["تقليل الالتهاب."] },
      { title: "دعم صحة الفم", points: ["تقليل التهابات اللثة."] },
      { title: "مضاد للأكسدة", points: ["الوقاية من الأمراض المزمنة."] },
      { title: "دعم صحة القلب", points: ["خفض الكوليسترول."] },
    ],
  },
  {
    slug: "nettle-leaves",
    ar: "ورق القراص",
    en: "Nettle Leaves",
    scientific: "Urtica dioica",
    emoji: "🍃",
    short: "أوراق القراص — غذاء ودواء للمفاصل والدم.",
    intro:
      "ورق القراص غني بالعناصر الغذائية ومركبات Quercetin وKaempferol المضادة للالتهاب والحساسية.",
    components: [
      { name: "Quercetin وKaempferol", description: "مضادان للالتهاب والحساسية." },
      { name: "مضادات الأكسدة", description: "حماية الخلايا." },
      { name: "الألياف الغذائية", description: "دعم الهضم." },
      { name: "فيتامينات ومعادن", description: "فيتامين C، حديد، كالسيوم." },
    ],
    benefits: [
      { title: "دعم صحة المفاصل", points: ["تقليل الالتهابات."] },
      { title: "دعم الجهاز البولي", points: ["دعم وظائف الكلى."] },
      { title: "تنظيم سكر الدم", points: ["تحسين استجابة الأنسولين."] },
      { title: "دعم صحة الدم", points: ["غني بالحديد."] },
      { title: "مضاد للحساسية", points: ["تخفيف أعراض الحساسية."] },
    ],
  },
];

export function getHerbBySlug(slug: string): Herb | undefined {
  return HERBS.find((h) => h.slug === slug);
}
