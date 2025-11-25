# Kigent – Marketing Site

Dette er en enkel markedsføringsnettside for byrået **Kigent**, bygget med moderne frontend‑verktøy.

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS
- Egendefinerte shadcn/ui‑inspirerte komponenter
- Framer Motion for subtile animasjoner

## Kom i gang

Installer avhengigheter:

```bash
npm install
```

Start utviklingsserver:

```bash
npm run dev
```

Åpne i nettleser:

- http://localhost:3000

## Strukturen i prosjektet

Viktige mapper og filer:

- `app/layout.tsx` – global layout, navbar, footer og toast‑provider
- `app/page.tsx` – forside (hero, hva vi gjør, priser, prosess, CTA)
- `app/portfolio/page.tsx` – eldre oversikt over eksempler
- `app/demos/frisor/page.tsx` – demo: enkel statisk side for frisør
- `app/demos/konsulent/page.tsx` – demo: fler‑seksjons bedriftsnettside
- `app/demos/nettbutikk/page.tsx` – demo: liten nettbutikk med demo‑handlekurv
- `app/contact/page.tsx` – kontaktskjema og FAQ
- `app/api/contact/route.ts` – enkel API‑route som mottar kontaktskjemaet

Shared komponenter:

- `components/navbar.tsx` – top‑nav med logo og lenker
- `components/footer.tsx` – footer med copyright
- `components/hero.tsx` – hero‑seksjon på forsiden
- `components/feature-cards.tsx` – «Hva vi gjør»‑kort
- `components/pricing-section.tsx` – prisoversikt som kort
- `components/process-section.tsx` – stegvis prosess
- `components/cta-section.tsx` – tydelig call‑to‑action nederst
- `components/portfolio-grid.tsx` – grid med demoprosjekter
- `components/DevicePreview.tsx` – enhet‑preview for demosidene
- `components/DemoHeader.tsx` – felles header for demo‑sider
- `components/DemoProductCard.tsx` – produktkort til nettbutikk‑demo
- `components/DemoCartSheet.tsx` – handlekurv i `Sheet`‑komponent
- `components/DemoMobileToolbar.tsx` – enkel mobil‑toolbar til demoer

UI‑primitiver (shadcn‑stil):

- `components/ui/button.tsx`
- `components/ui/card.tsx`
- `components/ui/input.tsx`
- `components/ui/textarea.tsx`
- `components/ui/select.tsx`
- `components/ui/badge.tsx`
- `components/ui/sheet.tsx` (mobilmeny)
- `components/ui/use-toast.tsx` og `components/ui/toaster.tsx` (enkelt toast‑system)

Tailwind og konfig:

- `tailwind.config.ts`
- `postcss.config.mjs`
- `app/globals.css`

## Eksempler / demos under `/eksempler`

I tillegg til de første demoene under `/portfolio` og `/demos`, finnes en mer moderne «Eksempler»‑seksjon planlagt under:

- `app/eksempler/page.tsx` – hovedside med cards for demoer
- `app/eksempler/nettbutikk/page.tsx` – interaktiv «Mini Nettbutikk» med `DevicePreview`
- `app/eksempler/bedrift/page.tsx` – statisk bedriftside‑demo
- `app/eksempler/landingpage/page.tsx` – statisk landing‑page‑demo

> Merk: Hvis mappene `app/eksempler/**` ikke eksisterer i prosjektet ditt enda, kan du opprette dem selv og lime inn kodene fra dokumentasjonen eller fra agentens forslag.

### Slik fungerer `DevicePreview`

`components/DevicePreview.tsx` pakker inn en demo‑side og lar deg veksle mellom:

- **Desktop** – bred forhåndsvisning (opptil ca. 1200px)
- **Mobil** – smal, avrundet forhåndsvisning med «telefon»-ramme og skygge

Internt bruker den Framer Motion for små overgangsanimasjoner når du bytter mellom desktop og mobil, og den er laget som en ren klientkomponent med `children` som eneste obligatoriske prop.

### Hvordan kjøre eksemplene

1. Start utviklingsserver som vanlig:

   ```bash
   npm run dev
   ```

2. Åpne følgende i nettleser:

   - Forside: `http://localhost:3000/`
   - Eldre eksempelside: `http://localhost:3000/portfolio`
   - Demo‑eksempler (når `/eksempler`‑rute er opprettet):
     - `http://localhost:3000/eksempler`
     - `http://localhost:3000/eksempler/nettbutikk`
     - `http://localhost:3000/eksempler/bedrift`
     - `http://localhost:3000/eksempler/landingpage`

### Legge til nye demo‑sider

- Opprett en ny undermappe under `app/eksempler/` (f.eks. `app/eksempler/ny-demo/page.tsx`).
- Pakk inn innholdet i `DevicePreview` for å få samme desktop/mobil‑opplevelse.
- Bruk eksisterende komponenter som `DemoHeader`, `DemoProductCard`, `DemoCartSheet` og `DemoMobileToolbar` der det er naturlig, eller lag egne komponenter i `components/`.

## Redigere innhold

### Priser

Prisnivåer og tekster for pakkene ligger i:

- `components/pricing-section.tsx`

Endre titler, prisintervaller og bullet‑punkter direkte i `tiers`‑arrayen.

### Demoprosjekter

Kortene på porteføljesiden (`/portfolio`) defineres i:

- `components/portfolio-grid.tsx`

Her kan du endre navn, beskrivelse, type og badge‑tekst per prosjekt.

Innholdet for hver demo ligger i:

- `app/demos/frisor/page.tsx`
- `app/demos/konsulent/page.tsx`
- `app/demos/nettbutikk/page.tsx`

Justér tekster, seksjoner og eventuelle dummy‑data direkte i disse filene.

### Forside‑tekst

Hero, «Hva vi gjør», prosess og CTA har tekstinnhold i:

- `components/hero.tsx`
- `components/feature-cards.tsx`
- `components/process-section.tsx`
- `components/cta-section.tsx`

### Kontaktskjema

Felter, valg og hjelpetekster for kontaktskjemaet ligger i:

- `app/contact/page.tsx`

FAQ‑innholdet nederst på kontaktsiden ligger i samme fil.

Backend‑delen for skjemaet er en enkel mock:

- `app/api/contact/route.ts`

Den logger innsendt data i server‑konsollen og returnerer en JSON‑respons. Her kan du eventuelt koble på ekte e‑post‑utsending eller integrasjon senere.

## Annet

- Animajoner håndteres via Framer Motion i blant annet `components/hero.tsx`, `components/feature-cards.tsx`, `components/pricing-section.tsx`, `components/process-section.tsx` og `components/cta-section.tsx`.
- Designet bruker en lys, nordisk stil med mye luft, avrundede hjørner og myke skygger definert i `tailwind.config.ts` og `app/globals.css`.
