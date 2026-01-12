"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";

const contactSchema = z
  .object({
    name: z.string().min(2, "Navn må være minst 2 tegn."),
    email: z
      .union([
        z.string().email("Skriv inn en gyldig e‑postadresse."),
        z.literal("")
      ])
      .optional(),
    phone: z
      .union([
        z.string().min(4, "Telefonnummer må være minst 4 tegn."),
        z.literal("")
      ])
      .optional(),
    message: z.string().min(10, "Meldingen må være minst 10 tegn.")
  })
  .refine(
    (data) =>
      (data.email && data.email.trim().length > 0) ||
      (data.phone && data.phone.trim().length > 0),
    {
      message: "Skriv inn e‑post eller telefonnummer.",
      path: ["email"]
    }
  );

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const msg =
          data && typeof data.error === "string"
            ? data.error
            : "Noe gikk galt. Prøv igjen senere.";
        setStatus("error");
        setErrorMessage(msg);
        return;
      }

      setStatus("success");
      reset();
    } catch (error) {
      console.error("Kontaktforespørsel feilet:", error);
      setStatus("error");
      setErrorMessage("Kunne ikke sende meldingen. Sjekk nettverket og prøv igjen.");
    }
  }

  return (
    <div className="w-full max-w-lg rounded-md bg-white p-6 shadow-soft ring-1 ring-slate-100 dark:bg-[#2e2f36] dark:ring-slate-800">
      <header className="mb-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-[#25B050]">
          Kontakt
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          La oss høre om prosjektet ditt.
        </h1>
        <p className="text-xs text-slate-600 dark:text-slate-200">
          Fyll inn feltene under, så får du svar med et uforpliktende forslag
          til løsning og pris.
        </p>
      </header>

      {status === "success" && (
        <div className="mb-4">
          <Alert variant="success">
            <p className="text-sm font-medium">Takk for meldingen!</p>
            <p className="mt-1 text-xs">
              Vi har mottatt henvendelsen din og kommer tilbake til deg så
              snart vi kan.
            </p>
          </Alert>
        </div>
      )}

      {status === "error" && (
        <div className="mb-4">
          <Alert variant="destructive">
            <p className="text-sm font-medium">Noe gikk galt.</p>
            <p className="mt-1 text-xs">
              {errorMessage ??
                "Vi klarte ikke å sende meldingen nå. Prøv igjen om litt."}
            </p>
          </Alert>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="text-xs font-medium text-slate-700 dark:text-slate-200"
          >
            Navn
          </label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Ditt navn"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-xs font-medium text-slate-700 dark:text-slate-200"
          >
            E‑post
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="din@bedrift.no"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="phone"
            className="text-xs font-medium text-slate-700 dark:text-slate-200"
          >
            Telefon (valgfritt)
          </label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="Ditt telefonnummer"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="text-xs font-medium text-slate-700 dark:text-slate-200"
          >
            Melding
          </label>
          <Textarea
            id="message"
            rows={4}
            {...register("message")}
            placeholder="Fortell kort om bedriften og hva du trenger hjelp til."
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-xs text-red-600">{errors.message.message}</p>
          )}
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#25B050] text-white hover:bg-[#1f8d44]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sender..." : "Send melding"}
          </Button>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-300">
            Vi bruker informasjonen kun til å følge opp henvendelsen din.
          </p>
        </div>
      </form>
    </div>
  );
}
