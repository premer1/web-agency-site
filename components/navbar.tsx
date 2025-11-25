"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/" as const, label: "Hjem" },
  // { href: "/eksempler" as const, label: "Eksempler" },
  { href: { pathname: "/", hash: "pricing" } as const, label: "Priser" },
  { href: "/faq" as const, label: "FAQ" },
  { href: "/contact" as const, label: "Kontakt" }
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/70 backdrop-blur-lg dark:border-slate-700 dark:bg-[#2e2f36]/90">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/Kigent_logo.png"
            alt="Kigent logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-md"
          />
          <span className="rounded-md bg-slate-900 px-3 py-1 text-sm font-semibold tracking-tight text-white">
            Kigent
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => {
            const hrefPath =
              typeof link.href === "string"
                ? link.href.replace(/#.*$/, "")
                : link.href.pathname;
            const active =
              hrefPath === "/"
                ? pathname === "/"
                : pathname.startsWith(hrefPath);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={
                  active
                    ? "text-slate-900 dark:text-slate-50"
                    : "text-slate-900 transition-colors hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-50"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <Link href="/contact">Få uforpliktende tilbud</Link>
          </Button>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Åpne meny">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent title="Navigasjonsmeny">
              <div className="flex h-full flex-col">
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-sm font-semibold tracking-tight">Kigent</div>
                </div>
                <nav className="flex flex-1 flex-col gap-4 text-sm font-medium text-slate-700">
                  {links.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.href}
                        className="rounded-md px-2 py-1 hover:bg-slate-100"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose asChild>
                  <Button className="mt-4 w-full" size="sm" asChild>
                    <Link href="/contact">Få tilbud</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
