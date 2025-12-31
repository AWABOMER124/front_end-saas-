"use client";

import { useEffect, useState } from "react";
import { getDashboardStats } from "@/lib/api";
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
import { KpiCard } from "@/components/ui/KpiCard";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

import { KPIStatCard } from "@/components/shared/KPIStatCard";
import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";
 main
import { Conversation } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import Link from "next/link";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Awaited<ReturnType<typeof getDashboardStats>> | null>(null);

  useEffect(() => {
    getDashboardStats().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
          <p className="text-sm text-textSecondary">نظرة عامة</p>
          <h1 className="text-2xl font-bold text-textPrimary">لوحة التحكم</h1>

          <p className="text-sm text-slate-500">نظرة عامة</p>
          <h1 className="text-2xl font-bold">لوحة التحكم</h1>
 main
        </div>
        <Link href="/app/automations" className="btn-primary">
          إنشاء قاعدة ردود ذكية
        </Link>
      </div>

      {loading || !data ? (
        <LoadingSkeleton rows={8} />
      ) : (
        <>
          <div className="grid md:grid-cols-5 gap-4">
            {data.kpis.map((kpi) => (
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
              <KpiCard key={kpi.label} label={kpi.label} value={kpi.value} />

              <KPIStatCard key={kpi.label} label={kpi.label} value={kpi.value} />
main
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-4 col-span-2">
              <div className="flex items-center justify-between mb-2">
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
                <p className="font-semibold text-textPrimary">المحادثات حسب اليوم</p>

                <p className="font-semibold">المحادثات حسب اليوم</p>
 main
              </div>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={data.conversationsSeries}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
                  <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} />

                  <Line type="monotone" dataKey="value" stroke="#0F766E" strokeWidth={2} />
 main
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="card p-4">
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
              <p className="font-semibold mb-2 text-textPrimary">القنوات</p>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie data={data.channels} dataKey="value" nameKey="name" fill="hsl(var(--primary))" label>
                    {data.channels.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={["hsl(var(--primary))", "hsl(var(--primary-light))", "hsl(var(--success))"][index % 3]}
                      />

              <p className="font-semibold mb-2">القنوات</p>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie data={data.channels} dataKey="value" nameKey="name" fill="#0F766E" label>
                    {data.channels.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={["#0F766E", "#14B8A6", "#22C55E"][index % 3]} />
 main
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4 space-y-2">
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
              <p className="font-semibold text-textPrimary">آخر الأنشطة</p>
              <ul className="text-sm text-textSecondary space-y-2">
                {data.activity.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Conversation className="w-4 h-4 text-primary" />

              <p className="font-semibold">آخر الأنشطة</p>
              <ul className="text-sm text-slate-600 space-y-2">
                {data.activity.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Conversation className="w-4 h-4 text-brand" />
 main
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-4 space-y-3">
 codex/build-rtl-first-saas-dashboard-for-ideal-agent-25hvyg
              <p className="font-semibold text-textPrimary">وضع التجربة</p>
              <p className="text-sm text-textSecondary">يتم استخدام بيانات تجريبية ويمكن ربط القنوات الحقيقية لاحقًا.</p>

              <p className="font-semibold">وضع التجربة</p>
              <p className="text-sm text-slate-600">يتم استخدام بيانات تجريبية ويمكن ربط القنوات الحقيقية لاحقًا.</p>
 main
              <div className="flex gap-2">
                <Link href="/app/channels" className="btn-primary">ربط قناة واتساب</Link>
                <Link href="/app/settings" className="btn-secondary">إعدادات المتجر</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
