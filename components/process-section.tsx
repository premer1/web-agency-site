 "use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const steps = [
  {
    step: "1. Uforpliktende prat",
    description:
      "Vi starter med en uforpliktende prat der du beskriver behovene dine og vi avklarer mål, omfang og budsjett."
  },
  {
    step: "2. Design",
    description:
      "Vi lager et enkelt, moderne design og struktur på siden – og du får gi tilbakemelding før vi går videre."
  },
  {
    step: "3. Utvikling",
    description:
      "Vi utvikler nettsiden i moderne teknologi, tester underveis og sikrer god ytelse, responsivt design og SEO."
  },
  {
    step: "4. Testing & lansering",
    description:
      "Vi kvalitetssikrer løsningen, hjelper deg med lansering og tilbyr videre support og eventuelle månedsavtaler."
  }
];

export function ProcessSection() {
  return (
    <div className="space-y-6" id="process">
      <div className="max-w-2xl space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-3xl">
          En enkel og forutsigbar prosess.
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-200 md:text-base">
          Vi gjør det enkelt å komme i gang – uten teknisk prat og lange
          prosjekter.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-sm text-slate-900 dark:text-slate-50">
                  {step.step}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600 dark:text-slate-200">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
