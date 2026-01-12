import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio-grid";

export const metadata: Metadata = {
  title: "Eksempler – Kigent",
  description:
    "Se et utvalg av prosjekter og løsninger Kigent kan levere."
};

export default function PortfolioPage() {
  return (
    <section className="section">
      <div className="container space-y-8">
        <div className="max-w-2xl space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl">
            Eksempler på hva vi kan bygge.
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-200 md:text-base">
            Vi er i ferd med å oppdatere eksempelsamlingen vår. Snart finner du
            nye, oppdaterte demoer og caser som viser hvordan vi designer og
            utvikler moderne løsninger for kundene våre.
          </p>
        </div>
        <PortfolioGrid />
      </div>
    </section>
  );
}
