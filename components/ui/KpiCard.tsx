import { ReactNode } from "react";

interface KpiCardProps {
  label: string;
  value: string;
  icon?: ReactNode;
  helper?: string;
}

export function KpiCard({ label, value, icon, helper }: KpiCardProps) {
  return (
    <div className="card p-4 flex items-start justify-between gap-4">
      <div>
        <p className="text-sm text-textSecondary">{label}</p>
        <p className="text-2xl font-bold text-textPrimary mt-1">{value}</p>
        {helper && <p className="text-xs text-textSecondary mt-1">{helper}</p>}
      </div>
      {icon && (
        <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
      )}
    </div>
  );
}
