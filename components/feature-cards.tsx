 "use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Enkle statiske sider",
    badge: "For lokale virksomheter",
    description:
      "Perfekt for frisører, klinikker, håndverkere og andre lokale bedrifter som trenger en enkel, profesjonell tilstedeværelse.",
    points: [
      "Én side med alt du trenger",
      "Klart budskap og tydelig kontaktinfo",
      "Rask å lansere og enkel å drifte"
    ]
  },
  {
    title: "Fler-sides bedriftsnettsider",
    badge: "For etablerte bedrifter",
    description:
      "For bedrifter som trenger flere sider – for eksempel tjenester, om oss, referanser og artikler.",
    points: [
      "Strukturert innhold som bygger tillit",
      "Presentasjon av team, tjenester og caser",
      "Klar struktur for både mobil og desktop"
    ]
  },
  {
    title: "Nettbutikk / e‑commerce",
    badge: "For små nettbutikker",
    description:
      "Enkel nettbutikk-løsning for mindre sortimenter som vil teste salg på nett uten tunge systemer.",
    points: [
      "Produktkatalog og handlekurv",
      "Klar for integrasjon mot betaling",
      "Fokus på konvertering og enkel kjøpsprosess"
    ]
  }
];

export function FeatureCards() {
  return (
    <div className="space-y-6">
      <div className="max-w-2xl space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-3xl">
          Hva vi bygger for norske bedrifter.
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-200 md:text-base">
          Vi designer og utvikler nettsider som er enkle å forstå, raske å
          bruke og tilpasset norske kunder.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card className="h-full">
              <CardHeader>
                <Badge className="mb-1 w-fit">{feature.badge}</Badge>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-200">
                  {feature.description}
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-200">
                  {feature.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-md bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
