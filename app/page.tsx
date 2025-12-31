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
    <div className="bg-gradient-to-b from-surface to-background min-h-screen">
      <div className="container py-16 space-y-16">
        <header className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-primary font-semibold">Powered by Perfect Team</p>
            <h1 className="text-4xl font-extrabold leading-tight">
              Ideal Agent — وكيلك الذكي لخدمة العملاء والأتمتة
            </h1>
            <p className="text-lg text-textSecondary">
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
            <div className="flex items-center gap-2 text-sm text-textSecondary">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>دعم واتساب وووكميرس جاهز الآن</span>
            </div>
          </div>
          <div className="card p-8 space-y-4">
            <p className="text-sm text-primary font-semibold">الوكلاء الذكيون</p>
            <p className="text-2xl font-bold">الوكيل المثالي لخدمة العملاء، المبيعات، والأتمتة</p>
            <ul className="space-y-2 text-textSecondary">
              <li>• مسارات أتمتة مبنية لأسواق السعودية</li>
              <li>• ردود جاهزة تدعم العربية والإنجليزية</li>
              <li>• تجربة بسيطة لأصحاب المتاجر بدون إعداد معقد</li>
            </ul>
            <div className="flex items-center gap-2 text-sm text-textSecondary">
              <span className="badge">متوافق مع WooCommerce</span>
              <span className="badge">تكامل واتساب</span>
            </div>
          </div>
        </header>

        <section id="features" className="space-y-8">
          <h2 className="text-2xl font-bold text-textPrimary">لماذا Ideal Agent؟</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card p-5 space-y-3">
                <feature.icon className="h-10 w-10 text-primary" />
                <p className="font-semibold text-lg">{feature.title}</p>
                <p className="text-sm text-textSecondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-textPrimary">كيف يعمل</h2>
          <div className="card p-6 grid md:grid-cols-3 gap-4 text-sm text-textSecondary">
            {steps.map((step, idx) => (
              <div key={step} className="space-y-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card p-6 space-y-4">
          <h3 className="text-xl font-bold text-textPrimary">التكاملات</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-muted">
              <p className="font-semibold">WooCommerce</p>
              <p className="text-sm text-textSecondary">مزامنة المنتجات والطلبات تلقائيًا</p>
            </div>
            <div className="p-4 rounded-xl bg-muted">
              <p className="font-semibold">WhatsApp</p>
              <p className="text-sm text-textSecondary">رسائل فورية وقوالب رسمية</p>
            </div>
          </div>
        </section>

        <section className="text-center space-y-4 card p-8">
          <h3 className="text-2xl font-bold text-textPrimary">جاهز للانطلاق؟</h3>
          <p className="text-textSecondary">ابدأ مع Ideal Agent خلال دقائق مع فريق Perfect Team</p>
          <Link href="/auth/register" className="btn-primary">
            ابدأ الآن
          </Link>
        </section>
      </div>
    </div>
  );
}
