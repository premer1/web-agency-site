 "use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PortfolioGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="flex h-full flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-lg text-slate-900 dark:text-slate-50">
            Nye eksempler kommer snart
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-200">
            Vi oppdaterer porteføljen vår og legger inn ferske kunde‑eksempler
            og demoer som matcher dagens design og løsninger.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
