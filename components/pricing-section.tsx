 "use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const tiers = [
  {
    title: "Enkel statisk side",
    price: "6 500 – 12 000 kr",
    badge: "Best for små lokale bedrifter",
    description:
      "Én fokusert landingsside med alt kunden trenger for å kontakte deg.",
    items: [
      "Skreddersydd design i din profil",
      "Responsiv for mobil, nettbrett og desktop",
      "Kontaktseksjon med skjema og kart",
      "Grunnleggende søkemotoroptimalisering (SEO)"
    ]
  },
  {
    title: "Bedriftsnettside (flere sider)",
    price: "12 000 – 25 000 kr",
    badge: "Best for etablerte selskaper",
    description:
      "Flere sider for tjenester, om oss, referanser, artikler og mer.",
    items: [
      "Strukturert innhold og navigasjon",
      "Design av 4–8 nøkkelsider",
      "Mulighet for blogg / artikler",
      "Integrasjon mot analyseverktøy"
    ]
  },
  {
    title: "Nettbutikk",
    price: "20 000 – 45 000 kr",
    badge: "Best for mindre sortimenter",
    description:
      "For mindre butikker som vil teste salg på nett uten tunge systemer.",
    items: [
      "Produktkatalog og handlekurv",
      "Enkel administrasjon av produkter",
      "Klar for integrasjon mot betaling",
      "Tilpasset konvertering og trygghet"
    ]
  },
  {
    title: "Avansert nettbutikk",
    price: "80 000 – 300 000+ kr",
    badge: "For ambisiøse e‑commerce‑satsinger",
    description:
      "Større nettbutikkprosjekter med avanserte behov og integrasjoner.",
    items: [
      "Skreddersydd informasjonsarkitektur",
      "Integrasjon mot tredjepartssystemer",
      "Skalerbar løsning og ytelsesoptimalisering",
      "Løpende rådgivning og videreutvikling"
    ]
  }
];

export function PricingSection() {
  return (
    <div className="space-y-6">
      <div className="max-w-2xl space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-3xl">
          Forutsigbare priser – tilpasset nivået du trenger.
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-200 md:text-base">
          Prisene under er typiske intervaller. Etter en kort prat kan vi gi
          deg et konkret, uforpliktende tilbud.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card className="flex h-full flex-col">
              <CardHeader>
                <Badge className="mb-1 w-fit text-[10px] uppercase tracking-[0.18em]">
                  {tier.badge}
                </Badge>
                <CardTitle>{tier.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-slate-900 dark:text-slate-50">
                  {tier.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm text-slate-600 dark:text-slate-200">
                  {tier.description}
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-200">
                  {tier.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-md bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <div className="inline-flex w-full max-w-xl flex-col items-start gap-2 rounded-md border border-slate-100 bg-card/90 p-3 text-xs text-slate-700 shadow-soft dark:border-slate-800 dark:bg-[#202126] dark:text-slate-200 md:flex-row md:items-center md:justify-between">
          <Button asChild size="sm" className="w-full md:w-auto hover:bg-[#25B050] hover:text-white">
            <Link href="/contact">Få uforpliktende tilbud</Link>
          </Button>
          <p className="text-[11px] text-slate-600 dark:text-slate-200 md:text-[11px]">
            Ingen forpliktelser • Gratis konsultasjon • Svar innen 24 timer
          </p>
        </div>
      </div>
    </div>
  );
}
