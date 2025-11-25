"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="section bg-gradient-to-b from-slate-50 to-background dark:from-[#2e2f36] dark:to-[#2e2f36]">
      <div className="container grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <Badge>Enkle, moderne nettsider for norske bedrifter.</Badge>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl lg:text-5xl">
            Nettsider som faktisk gir deg flere kunder.
          </h1>
          <p className="max-w-xl text-sm text-slate-600 dark:text-slate-200 md:text-base">
            Kigent er en moderne webutviklingstjeneste som leverer komplette
            nettsider til bedrifter og gründere – med fokus på raske
            leveringstider, moderne design og ren, vedlikeholdbar kode.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {/* <Button asChild size="lg">
              <Link href="/portfolio">Se eksempler</Link>
            </Button> */}
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Få uforpliktende tilbud</Link>
            </Button>
            <p className="text-xs text-slate-500 dark:text-slate-200">
              Enkle sider 3–5 dager, bedriftsider 5–10 dager, nettbutikk 7–14 dager.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-md bg-white p-4 shadow-soft">
            <div className="mb-3 flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded-md bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-md bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-md bg-emerald-400" />
            </div>
            <div className="space-y-3 rounded-md bg-slate-900 px-4 py-6 text-slate-50">
              <p className="text-xs uppercase tracking-[0.18em] text-teal-200/80">
                Live forhåndsvisning
              </p>
              <p className="text-sm font-medium">
                Se designet før vi bygger – og gi tilbakemelding underveis.
              </p>
              <div className="grid gap-3 rounded-md bg-slate-800/60 p-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Enkel statisk side</span>
                  <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300">
                    6 500–12 000 kr
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Bedriftsnettside</span>
                  <span className="rounded-md bg-sky-500/10 px-2 py-0.5 text-[11px] text-sky-300">
                    12 000–25 000 kr
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Liten nettbutikk</span>
                  <span className="rounded-md bg-teal-500/10 px-2 py-0.5 text-[11px] text-teal-200">
                    20 000–45 000 kr
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
