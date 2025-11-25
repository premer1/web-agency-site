import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt – Kigent",
  description:
    "Ta kontakt for et uforpliktende forslag til nettside eller nettbutikk."
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container flex justify-center">
        <ContactForm />
      </div>
    </section>
  );
}
