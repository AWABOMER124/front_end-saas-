"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/lib/providers/auth-provider";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [store, setStore] = useState("");
  const { register, loading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(name, store);
    toast({ title: "تم إنشاء الحساب", description: "حساب المتجر جاهز" });
    router.push("/app");
  };

  return (
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
    <div className="min-h-screen grid place-items-center bg-gradient-to-b from-surface to-background p-6">
      <div className="card p-8 w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-sm text-textSecondary">Perfect Team</p>
          <h1 className="text-2xl font-bold text-textPrimary">إنشاء متجر جديد</h1>
          <p className="text-sm text-textSecondary">متجر + حساب مالك</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-textSecondary">اسمك</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full input" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-textSecondary">اسم المتجر</label>
            <input required value={store} onChange={(e) => setStore(e.target.value)} className="w-full input" />

    <div className="min-h-screen grid place-items-center bg-gradient-to-b from-white to-slate-50 p-6">
      <div className="card p-8 w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-sm text-slate-500">Perfect Team</p>
          <h1 className="text-2xl font-bold">إنشاء متجر جديد</h1>
          <p className="text-sm text-slate-600">متجر + حساب مالك</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-slate-600">اسمك</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">اسم المتجر</label>
            <input required value={store} onChange={(e) => setStore(e.target.value)} className="w-full" />
 main
          </div>
          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? "جارٍ الإنشاء..." : "إنشاء المتجر"}
          </button>
        </form>
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
        <p className="text-center text-sm text-textSecondary">
          لديك حساب؟ <Link className="text-primary" href="/auth/login">تسجيل الدخول</Link>

        <p className="text-center text-sm text-slate-600">
          لديك حساب؟ <Link className="text-brand" href="/auth/login">تسجيل الدخول</Link>
 main
        </p>
      </div>
    </div>
  );
}
