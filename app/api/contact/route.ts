import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email?: string;
  phone?: string;
  message: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const hasValidName = typeof body?.name === "string";
    const hasValidMessage = typeof body?.message === "string";
    const hasEmail =
      typeof body?.email === "string" && body.email.trim().length > 0;
    const hasPhone =
      typeof body?.phone === "string" && body.phone.trim().length > 0;

    if (!hasValidName || !hasValidMessage || (!hasEmail && !hasPhone)) {
      return NextResponse.json(
        {
          success: false,
          error: "Ugyldig payload. Navn, melding og e‑post eller telefon må fylles ut."
        },
        { status: 400 }
      );
    }

    const name = body.name!;
    const email = hasEmail ? body.email! : "";
    const phone = hasPhone ? body.phone! : "";
    const message = body.message!;

    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("SLACK_WEBHOOK_URL mangler i miljøvariabler.");
      return NextResponse.json(
        {
          success: false,
          error: "SLACK_WEBHOOK_URL er ikke konfigurert på serveren."
        },
        { status: 500 }
      );
    }

    let text =
      "📩 Ny henvendelse fra kontaktskjema:\n" +
      `• Navn: ${name}\n`;

    if (email) {
      text += `• E-post: ${email}\n`;
    }
    if (phone) {
      text += `• Telefon: ${phone}\n`;
    }

    text += "• Melding:\n" + message;

    const slackRes = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    });

    if (!slackRes.ok) {
      const errorText = await slackRes.text().catch(() => "");
      console.error("Feil ved sending til Slack:", slackRes.status, errorText);
      return NextResponse.json(
        {
          success: false,
          error: "Kunne ikke sende meldingen til Slack."
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Uventet feil i kontakt-endepunkt:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Noe gikk galt ved behandling av forespørselen."
      },
      { status: 500 }
    );
  }
}
