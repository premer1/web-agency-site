"use client";

import { useToast } from "./use-toast";
import { cn } from "./utils";

export function Toaster() {
  const { toasts, dismissToast } = useToast();

  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <button
          key={toast.id}
          onClick={() => dismissToast(toast.id)}
          className={cn(
            "min-w-[260px] rounded-md border px-4 py-3 text-left shadow-soft backdrop-blur-md",
            toast.variant === "destructive"
              ? "border-red-100 bg-red-50/90 text-red-900"
              : "border-slate-200 bg-white/90 text-slate-900"
          )}
        >
          {toast.title && (
            <p className="mb-0.5 text-sm font-semibold">{toast.title}</p>
          )}
          {toast.description && (
            <p className="text-xs text-slate-600 dark:text-slate-200">
              {toast.description}
            </p>
          )}
        </button>
      ))}
    </div>
  );
}
