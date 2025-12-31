"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/lib/providers/auth-provider";
import Link from "next/link";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const { login, loading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(phone);
    toast({ title: "تم تسجيل الدخول", variant: "success" });
    router.push("/app");
  };

  return (
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
    <div className="min-h-screen grid place-items-center bg-gradient-to-b from-surface to-background p-6">
      <div className="card p-8 w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-sm text-textSecondary">Ideal Agent</p>
          <h1 className="text-2xl font-bold text-textPrimary">تسجيل الدخول</h1>
          <p className="text-sm text-textSecondary">الوصول إلى لوحات التحكم والأتمتة</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-textSecondary">رقم الجوال</label>

    <div className="min-h-screen grid place-items-center bg-gradient-to-b from-white to-slate-50 p-6">
      <div className="card p-8 w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-sm text-slate-500">Ideal Agent</p>
          <h1 className="text-2xl font-bold">تسجيل الدخول</h1>
          <p className="text-sm text-slate-600">الوصول إلى لوحات التحكم والأتمتة</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-slate-600">رقم الجوال</label>
 main
            <input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+9665xxxxxxxx"
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
              className="w-full input"

              className="w-full"
 main
            />
          </div>
          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? "جارٍ الدخول..." : "دخول"}
          </button>
        </form>
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
        <p className="text-center text-sm text-textSecondary">
          جديد؟ <Link className="text-primary" href="/auth/register">إنشاء متجر جديد</Link>

        <p className="text-center text-sm text-slate-600">
          جديد؟ <Link className="text-brand" href="/auth/register">إنشاء متجر جديد</Link>
 main
        </p>
      </div>
    </div>
  );
}
