 "use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-md bg-gradient-to-r from-slate-900 via-slate-900 to-teal-800 px-6 py-10 text-slate-50 shadow-soft md:px-10 md:py-12"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-200/80">
            Klar for neste steg?
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
            Fortell oss kort om bedriften din, så sender vi et uforpliktende
            forslag.
          </h2>
          <p className="max-w-xl text-sm text-slate-300 dark:text-slate-200">
            En enkel beskrivelse av hva du tilbyr, hva du ønsker å oppnå og
            hvilken type side du ser for deg, er nok til at vi kan gi en god
            anbefaling.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Button asChild size="lg" variant="subtle">
            <Link href="/contact">Få uforpliktende tilbud</Link>
          </Button>
          <p className="text-xs text-slate-300">
            Ingen binding. Typisk svar innen én arbeidsdag.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
