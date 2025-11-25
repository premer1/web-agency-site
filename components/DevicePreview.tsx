"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/components/ui/utils";

type DeviceMode = "desktop" | "mobile";

export type DevicePreviewProps = {
  children: ReactNode;
  className?: string;
};

export function DevicePreview({ children, className }: DevicePreviewProps) {
  const [mode, setMode] = useState<DeviceMode>("desktop");

  return (
    <div className={cn("w-full space-y-4", className)}>
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex rounded-md bg-slate-100 p-1 text-xs dark:bg-slate-800">
          <Button
            type="button"
            size="sm"
            variant={mode === "desktop" ? "default" : "ghost"}
            className={cn(
              "h-7 rounded-md px-3 text-xs",
              mode === "desktop"
                ? "shadow-sm"
                : "text-slate-600 dark:text-slate-300"
            )}
            onClick={() => setMode("desktop")}
          >
            Desktop
          </Button>
          <Button
            type="button"
            size="sm"
            variant={mode === "mobile" ? "default" : "ghost"}
            className={cn(
              "h-7 rounded-md px-3 text-xs",
              mode === "mobile"
                ? "shadow-sm"
                : "text-slate-600 dark:text-slate-300"
            )}
            onClick={() => setMode("mobile")}
          >
            Mobil
          </Button>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-slate-300">
          Interaktiv forhåndsvisning – endre mellom desktop og mobil.
        </p>
      </div>

      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "relative flex items-stretch justify-center",
              "w-full"
            )}
          >
            {mode === "desktop" ? (
              <div className="w-full max-w-5xl overflow-hidden rounded-md border border-slate-200 bg-background shadow-soft dark:border-slate-700">
                {children}
              </div>
            ) : (
              <div className="flex w-full justify-center">
                <div className="relative w-[320px] sm:w-[380px] max-w-full rounded-[2.5rem] border border-slate-300 bg-slate-100 pb-6 pt-4 shadow-soft dark:border-slate-600 dark:bg-slate-900">
                  <div className="mx-auto mb-3 h-1.5 w-16 rounded-md bg-slate-300 dark:bg-slate-500" />
                  <div className="max-h-[640px] overflow-y-auto rounded-[2rem] border border-slate-200 bg-background dark:border-slate-700">
                    <div className="origin-top scale-[0.9]">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
