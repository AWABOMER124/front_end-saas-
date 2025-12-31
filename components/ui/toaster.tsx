"use client";

import { useEffect } from "react";
import { useToastQueue } from "./use-toast";

export function Toaster() {
  const { toasts, remove } = useToastQueue();

  useEffect(() => {
    const timers = toasts.map((toast) => setTimeout(() => remove(toast.id), 3000));
    return () => timers.forEach(clearTimeout);
  }, [toasts, remove]);

  return (
    <div className="fixed left-4 bottom-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-xl border px-4 py-3 shadow-lg bg-surface/95 backdrop-blur-md ${
            toast.variant === "success"
              ? "border-success/40 text-success"
              : toast.variant === "destructive"
              ? "border-primary text-textPrimary"
              : "border-border text-textPrimary"
          }`}
        >
          {toast.title && <p className="font-semibold text-sm">{toast.title}</p>}
          {toast.description && <p className="text-xs text-textSecondary mt-1">{toast.description}</p>}
        </div>
      ))}
    </div>
  );
}
