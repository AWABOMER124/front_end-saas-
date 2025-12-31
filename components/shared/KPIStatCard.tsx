import { ReactNode } from "react";

interface KPIStatCardProps {
  label: string;
  value: string;
  icon?: ReactNode;
  helper?: string;
}

export function KPIStatCard({ label, value, icon, helper }: KPIStatCardProps) {
  return (
    <div className="card p-4 flex items-start justify-between gap-4">
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
        {helper && <p className="text-xs text-slate-500 mt-1">{helper}</p>}
      </div>
      {icon && <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">{icon}</div>}
    </div>
  );
}
