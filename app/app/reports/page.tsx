"use client";

import { useEffect, useState } from "react";
import { getReports, Report } from "@/lib/api";
import { KPIStatCard } from "@/components/shared/KPIStatCard";
import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "الأسبوع 1", value: 120 },
  { name: "الأسبوع 2", value: 180 },
  { name: "الأسبوع 3", value: 160 },
  { name: "الأسبوع 4", value: 220 },
];

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReports().then((data) => {
      setReports(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">ملخص الأداء</p>
          <h1 className="text-2xl font-bold">التقارير</h1>
        </div>
        <button className="btn-secondary">تصدير</button>
      </div>
      {loading ? (
        <LoadingSkeleton rows={6} />
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-4">
            {reports.map((report) => (
              <KPIStatCard key={report.id} label={report.name} value={report.value} helper={`التغير ${report.change}`} />
            ))}
          </div>
          <div className="card p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold">التفاعل الأسبوعي</p>
              <input type="date" className="text-sm" />
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#0F766E" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}
