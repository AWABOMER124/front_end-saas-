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
            <input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+9665xxxxxxxx"
              className="w-full input"
            />
          </div>
          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? "جارٍ الدخول..." : "دخول"}
          </button>
        </form>
        <p className="text-center text-sm text-textSecondary">
          جديد؟ <Link className="text-primary" href="/auth/register">إنشاء متجر جديد</Link>
        </p>
      </div>
    </div>
  );
}
