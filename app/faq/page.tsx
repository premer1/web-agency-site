import type { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "FAQ – Kigent",
  description:
    "Ofte stilte spørsmål om priser, prosess, teknologi, eierskap og samarbeid med Kigent."
};

export default function FAQPage() {
  return (
    <section className="section">
      <div className="container space-y-8">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-700">
            Kigent – FAQ
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-3xl">
            Ofte stilte spørsmål.
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-200 md:text-base">
            Her finner du raske svar på de viktigste spørsmålene om pris,
            prosess og samarbeid med Kigent.
          </p>
        </header>

        <FaqSection />
      </div>
    </section>
  );
}
