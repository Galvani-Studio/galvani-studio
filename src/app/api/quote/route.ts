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
  const url = process.env.QUOTE_WEBHOOK_URL;
  if (!url)
    return NextResponse.json(
      {
        error:
          "O envio está temporariamente indisponível. Tente novamente mais tarde ou use os contatos desta página.",
      },
      { status: 503 },
    );
  try {
    if (new URL(url).protocol !== "https:") throw new Error("Invalid webhook");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.QUOTE_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.QUOTE_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(parsed.data),
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    });
    if (!response.ok) throw new Error("Delivery failed");
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
