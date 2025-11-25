import * as React from "react";
import { cn } from "./utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md bg-background px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 dark:text-slate-100 dark:ring-slate-700",
        className
      )}
      {...props}
    />
  );
}
