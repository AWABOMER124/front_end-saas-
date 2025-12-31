"use client";

import { useEffect, useState } from "react";
import { getWorkflows, type Workflow } from "@/lib/api";
import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";
import Link from "next/link";

export default function AutomationsPage() {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWorkflows().then((data) => {
      setWorkflows(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">قواعد التشغيل</p>
          <h1 className="text-2xl font-bold">الأتمتة</h1>
        </div>
        <Link href="#" className="btn-primary">
          إضافة أتمتة جديدة
        </Link>
      </div>
      {loading ? (
        <LoadingSkeleton rows={6} />
      ) : (
        <div className="space-y-3">
          {workflows.map((wf) => (
            <div key={wf.id} className="card p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold">{wf.name}</p>
                <p className="text-sm text-slate-500">القناة: {wf.channel} • آخر تشغيل: {wf.lastRun}</p>
                <p className="text-xs text-slate-500 mt-1">Webhook → Normalize → Ideal Agent → Send Reply</p>
              </div>
              <span className="badge">{wf.status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
