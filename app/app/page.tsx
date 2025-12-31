"use client";

import { useEffect, useState } from "react";
import { getDashboardStats } from "@/lib/api";
import { KpiCard } from "@/components/ui/KpiCard";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
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
          <p className="text-sm text-textSecondary">نظرة عامة</p>
          <h1 className="text-2xl font-bold text-textPrimary">لوحة التحكم</h1>
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
              <KpiCard key={kpi.label} label={kpi.label} value={kpi.value} />
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-4 col-span-2">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-textPrimary">المحادثات حسب اليوم</p>
              </div>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={data.conversationsSeries}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="card p-4">
              <p className="font-semibold mb-2 text-textPrimary">القنوات</p>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie data={data.channels} dataKey="value" nameKey="name" fill="hsl(var(--primary))" label>
                    {data.channels.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={["hsl(var(--primary))", "hsl(var(--primary-light))", "hsl(var(--success))"][index % 3]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4 space-y-2">
              <p className="font-semibold text-textPrimary">آخر الأنشطة</p>
              <ul className="text-sm text-textSecondary space-y-2">
                {data.activity.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Conversation className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-4 space-y-3">
              <p className="font-semibold text-textPrimary">وضع التجربة</p>
              <p className="text-sm text-textSecondary">يتم استخدام بيانات تجريبية ويمكن ربط القنوات الحقيقية لاحقًا.</p>
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
