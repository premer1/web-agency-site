import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Lato } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { ToastProvider } from "@/components/ui/use-toast";
import { ThemeProvider } from "@/components/theme-provider";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Kigent – Enkle, moderne nettsider for norske bedrifter",
  description:
    "Kigent bygger enkle, moderne nettsider og små nettbutikker for norske bedrifter – med fokus på resultater og konvertering.",
  icons: {
    icon: "/assets/Kigent_logo.png"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no">
      <body
        className={`${lato.className} min-h-screen bg-background text-slate-900 dark:text-slate-100`}
      >
        <ThemeProvider>
          <ToastProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
