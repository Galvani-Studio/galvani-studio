import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/quote";
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return NextResponse.json({ error: "Origem inválida." }, { status: 403 });
  let payload: unknown;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).length > 24000)
      return NextResponse.json({ error: "Solicitação muito extensa." }, { status: 413 });
    payload = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Solicitação inválida." }, { status: 400 });
  }
  const parsed = quoteSchema.safeParse(payload);
  if (!parsed.success)
    return NextResponse.json(
      { error: "Revise os campos indicados.", fields: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  const url = process.env.QUOTE_WEBHOOK_URL || "https://formspree.io/f/xvkzrgnp";
  try {
    if (new URL(url).protocol !== "https:") throw new Error("Invalid webhook");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(process.env.QUOTE_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.QUOTE_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        ...parsed.data,
        _subject: `Galvani Studio — ${parsed.data.service} — ${parsed.data.name}`,
      }),
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    });
    if (!response.ok) {
      const status = response.status === 429 ? 429 : 502;
      return NextResponse.json(
        {
          error:
            response.status === 429
              ? "O serviço atingiu o limite de envios. Aguarde e tente novamente ou fale conosco pelo email de contato."
              : "Não foi possível enviar sua solicitação. Seus dados foram preservados; tente novamente.",
        },
        { status },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Não foi possível enviar sua solicitação. Seus dados foram preservados; tente novamente.",
      },
      { status: 502 },
    );
  }
}
