"use client";

import { useEffect, useState } from "react";

export type ToastMessage = {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "success" | "destructive";
};

type Listener = (toast: ToastMessage) => void;
const listeners = new Set<Listener>();

export function toast(toast: Omit<ToastMessage, "id">) {
  const id = crypto.randomUUID();
  const payload: ToastMessage = { id, ...toast };
  listeners.forEach((listener) => listener(payload));
}

export function useToastQueue() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const listener: Listener = (toast) => setToasts((prev) => [...prev, toast]);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  const remove = (id: string) => setToasts((prev) => prev.filter((t) => t.id !== id));

  return { toasts, remove };
}
