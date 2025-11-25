export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white/70 dark:border-slate-700 dark:bg-[#2e2f36]">
      <div className="container grid gap-10 py-10 text-xs text-slate-500 dark:text-slate-200 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,0.9fr))] md:items-start">
        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Kigent
          </p>
          <p className="max-w-sm text-xs text-slate-600 dark:text-slate-200">
            Enkle, moderne nettsider og små nettbutikker – skreddersydd for
            norske bedrifter som vil ha resultater, ikke bare et fint design.
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-300">
            Basert i Norge · Spesialisert på React/Next.js, Tailwind CSS og
            konverteringsvennlige landingssider.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Sider
          </p>
          <ul className="flex flex-wrap gap-3 text-xs">
            <li>
              <a
                href="/"
                className="text-slate-900 hover:text-slate-900 dark:text-white dark:hover:text-white"
              >
                Hjem
              </a>
            </li>
            {/* <li>
              <a
                href="/eksempler"
                className="text-slate-900 hover:text-slate-900 dark:text-white dark:hover:text-white"
              >
                Eksempler
              </a>
            </li> */}
            <li>
              <a
                href="/#pricing"
                className="text-slate-900 hover:text-slate-900 dark:text-white dark:hover:text-white"
              >
                Priser
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="text-slate-900 hover:text-slate-900 dark:text-white dark:hover:text-white"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-slate-900 hover:text-slate-900 dark:text-white dark:hover:text-white"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Kontakt
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-200">
            Har du spørsmål om pris, prosess eller et konkret prosjekt? Send oss
            en melding, så svarer vi så raskt vi kan.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#25B050] px-4 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-[#1f8d44]"
          >
            Gå til kontaktskjema
          </a>
          <p className="text-[11px] text-slate-500 dark:text-slate-300">
            Typisk svar innen 1–2 virkedager.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-100/60 dark:border-slate-700/60">
        <div className="container flex flex-col items-center justify-between gap-3 py-4 text-[11px] text-slate-500 dark:text-slate-300 md:flex-row">
          <span>
            © {new Date().getFullYear()} Kigent. Alle rettigheter reservert.
          </span>
          <span>Design & utvikling av Kigent.</span>
        </div>
      </div>
    </footer>
  );
}
