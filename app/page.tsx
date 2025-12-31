import Link from "next/link";
import { CheckCircle, MessageCircle, Rocket, Shield } from "lucide-react";

const features = [
  {
    title: "ردود فورية",
    description: "ذكاء اصطناعي يفهم سياق العملاء ويرد بثقة",
    icon: MessageCircle,
  },
  {
    title: "أتمتة المبيعات",
    description: "مسارات جاهزة تذكّر وتغلق المبيعات دون تدخل",
    icon: Rocket,
  },
  {
    title: "موثوق وآمن",
    description: "بياناتك تحت الحماية مع Perfect Team",
    icon: Shield,
  },
];

const steps = ["اربط واتساب ومتجرك", "فعّل الردود الذكية", "تابع الأداء وطور الخدمة"];

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 min-h-screen">
      <div className="container py-16 space-y-16">
        <header className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-brand font-semibold">Powered by Perfect Team</p>
            <h1 className="text-4xl font-extrabold leading-tight">
              Ideal Agent — وكيلك الذكي لخدمة العملاء والأتمتة
            </h1>
            <p className="text-lg text-slate-600">
              ردود فورية، أتمتة ذكية، وتجربة عميل أفضل — بدون تعقيد
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/auth/register" className="btn-primary">
                ابدأ الآن
              </Link>
              <Link href="#features" className="btn-secondary">
                كيف يعمل
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span>دعم واتساب وووكميرس جاهز الآن</span>
            </div>
          </div>
          <div className="card p-8 space-y-4">
            <p className="text-sm text-brand font-semibold">الوكلاء الذكيون</p>
            <p className="text-2xl font-bold">الوكيل المثالي لخدمة العملاء، المبيعات، والأتمتة</p>
            <ul className="space-y-2 text-slate-600">
              <li>• مسارات أتمتة مبنية لأسواق السعودية</li>
              <li>• ردود جاهزة تدعم العربية والإنجليزية</li>
              <li>• تجربة بسيطة لأصحاب المتاجر بدون إعداد معقد</li>
            </ul>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="badge">متوافق مع WooCommerce</span>
              <span className="badge">تكامل واتساب</span>
            </div>
          </div>
        </header>

        <section id="features" className="space-y-8">
          <h2 className="text-2xl font-bold">لماذا Ideal Agent؟</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card p-5 space-y-3">
                <feature.icon className="h-10 w-10 text-brand" />
                <p className="font-semibold text-lg">{feature.title}</p>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">كيف يعمل</h2>
          <div className="card p-6 grid md:grid-cols-3 gap-4 text-sm text-slate-700">
            {steps.map((step, idx) => (
              <div key={step} className="space-y-2">
                <div className="h-10 w-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card p-6 space-y-4">
          <h3 className="text-xl font-bold">التكاملات</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50">
              <p className="font-semibold">WooCommerce</p>
              <p className="text-sm text-slate-600">مزامنة المنتجات والطلبات تلقائيًا</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50">
              <p className="font-semibold">WhatsApp</p>
              <p className="text-sm text-slate-600">رسائل فورية وقوالب رسمية</p>
            </div>
          </div>
        </section>

        <section className="text-center space-y-4 card p-8">
          <h3 className="text-2xl font-bold">جاهز للانطلاق؟</h3>
          <p className="text-slate-600">ابدأ مع Ideal Agent خلال دقائق مع فريق Perfect Team</p>
          <Link href="/auth/register" className="btn-primary">
            ابدأ الآن
          </Link>
        </section>
      </div>
    </div>
  );
}
