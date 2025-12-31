import { ReactNode } from "react";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface EmptyStateAction extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "success";
}

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  actions?: EmptyStateAction[];
  className?: string;
}

export function EmptyState({ icon, title, description, actions = [], className }: EmptyStateProps) {
  return (
    <div className={cn("card p-6 text-center space-y-3", className)}>
      <div className="mx-auto h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-textPrimary">{title}</h3>
      {description && <p className="text-sm text-textSecondary">{description}</p>}
      {actions.length > 0 && (
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {actions.map((action) => (
            <button
              key={action.label}
              {...action}
              className={cn(
                "btn",
                action.variant === "secondary"
                  ? "btn-secondary"
                  : action.variant === "success"
                  ? "btn-success"
                  : "btn-primary",
                action.className,
              )}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
