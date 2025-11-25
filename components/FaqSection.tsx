"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Hva koster en nettside?",
    answer:
      "Kigent tilbyr faste og transparente priser. Enkle sider 6 500–12 000 kr, bedriftsider 12 000–25 000 kr, nettbutikker 20 000–45 000 kr."
  },
  {
    question: "Hvordan fungerer prosessen?",
    answer:
      "Oppstartsmøte → design → utvikling → testing → lansering. Fast pris og ingen skjulte kostnader."
  },
  {
    question: "Hvor lang tid tar det?",
    answer:
      "Enkle sider 3–5 dager, bedriftsider 5–10 dager, nettbutikk 7–14 dager."
  },
  {
    question: "Hjelper dere med domene og webhosting?",
    answer:
      "Ja, vi hjelper med domene, DNS, SSL og hosting via Vercel/Netlify/Shopify/WordPress."
  },
  {
    question: "Eier jeg nettsiden selv?",
    answer:
      "Ja, du får full tilgang til kode, repo, hosting og alle filer. 100% eierskap."
  },
  {
    question: "Tilbyr dere support etter lansering?",
    answer:
      "Ja, vi tilbyr både månedlige driftsavtaler og support på timebasis."
  },
  {
    question: "Kan jeg selv oppdatere nettsiden?",
    answer:
      "Ja. Du får opplæring. Du kan også velge at vi gjør oppdateringene for deg."
  },
  {
    question: "Tilbyr dere SEO-optimalisering?",
    answer:
      "Ja, alle sider leveres med teknisk SEO, hastighetsoptimalisering og god struktur."
  },
  {
    question: "Hva er inkludert i prisen?",
    answer:
      "Design, utvikling, responsivt design, tilpasning, testing og lansering."
  },
  {
    question: "Hvordan foregår betaling?",
    answer:
      "30% ved oppstart, 70% ved levering. Faktura eller Vipps Bedrift."
  }
];

export function FaqSection() {
  return (
    <section className="w-full">
      <Accordion
        type="single"
        collapsible
        className="w-full divide-y divide-slate-200 rounded-md bg-white/80 px-2 py-1 dark:divide-slate-700 dark:bg-[#23242b]"
      >
        {faqs.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index + 1}`}>
            <AccordionTrigger className="px-2 py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-2">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
