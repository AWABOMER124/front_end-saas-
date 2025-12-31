"use client";

import { useAuth } from "@/lib/providers/auth-provider";

export default function SettingsPage() {
  const { tenant } = useAuth();

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-textSecondary">تهيئة المتجر</p>
        <h1 className="text-2xl font-bold text-textPrimary">الإعدادات</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-4 space-y-3">
          <p className="font-semibold">ملف المتجر</p>
          <div className="space-y-2 text-sm text-textSecondary">
            <p>اسم المتجر: {tenant?.name ?? "متجر مثالي"}</p>
            <p>المنطقة الزمنية: Asia/Riyadh</p>
            <button className="btn-secondary">تحديث</button>
          </div>
        </div>
        <div className="card p-4 space-y-3">
          <p className="font-semibold">الفريق</p>
          <ul className="text-sm text-textSecondary space-y-1">
            <li>سارة المالكي — Owner</li>
            <li>أحمد الشهري — Agent</li>
          </ul>
          <button className="btn-secondary">إضافة مستخدم</button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-4 space-y-3">
          <p className="font-semibold">التكاملات</p>
          <div className="text-sm text-textSecondary space-y-1">
            <p>WooCommerce API: ••••••</p>
            <p>n8n Webhook: https://hooks.n8n.io/ideal-agent</p>
            <p>Evolution API Key: ••••••</p>
          </div>
          <div className="flex gap-2">
            <button className="btn-secondary">نسخ رابط الويب هوك</button>
            <button className="btn-primary">حفظ</button>
          </div>
        </div>
        <div className="card p-4 space-y-3">
          <p className="font-semibold">الأمان</p>
          <p className="text-sm text-textSecondary">تغيير كلمة المرور وإدارة الوصول</p>
          <button className="btn-secondary">تغيير كلمة المرور</button>
        </div>
      </div>
    </div>
  );
}
