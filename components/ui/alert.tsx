"use client";

import * as React from "react";
import { cn } from "./utils";

type AlertVariant = "default" | "success" | "destructive";

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
}

const variantClasses: Record<AlertVariant, string> = {
  default:
    "border-slate-200 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50",
  success:
    "border-[#25B05033] bg-[#25B0500d] text-[#14552b] dark:border-[#25B05033] dark:bg-[#122417] dark:text-[#c4f3cf]",
  destructive:
    "border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-900/40 dark:text-red-50"
};

export function Alert({
  className,
  variant = "default",
  ...props
}: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        "w-full rounded-md border px-4 py-3 text-sm shadow-soft",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
