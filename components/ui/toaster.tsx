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
          className={`rounded-xl border px-4 py-3 shadow-lg bg-white/95 backdrop-blur-md ${
            toast.variant === "success"
              ? "border-emerald-200 text-emerald-900"
              : toast.variant === "destructive"
              ? "border-rose-200 text-rose-900"
              : "border-slate-200 text-slate-900"
          }`}
        >
          {toast.title && <p className="font-semibold text-sm">{toast.title}</p>}
          {toast.description && <p className="text-xs text-slate-600 mt-1">{toast.description}</p>}
        </div>
      ))}
    </div>
  );
}
