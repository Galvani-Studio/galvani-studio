import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/quote";
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const requestUrl = new URL(request.url);
  const host = request.headers.get("host");
  if (host) requestUrl.host = host;
  if (origin && origin !== requestUrl.origin)
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
  if (parsed.data.website) return NextResponse.json({ ok: true });
  if (!parsed.data.requestId)
    return NextResponse.json({ error: "Identificador inválido." }, { status: 422 });
  const url = process.env.QUOTE_WEBHOOK_URL;
  const token = process.env.QUOTE_WEBHOOK_TOKEN;
  if (!url || !token)
    return NextResponse.json(
      {
        error:
          "O formulário está temporariamente indisponível. Fale conosco pelo e-mail de contato.",
      },
      { status: 503 },
    );
  try {
    const endpoint = new URL(url);
    const local = ["localhost", "127.0.0.1", "[::1]"].includes(endpoint.hostname);
    if (
      endpoint.protocol !== "https:" &&
      !(process.env.NODE_ENV !== "production" && local && endpoint.protocol === "http:")
    )
      throw new Error("Invalid webhook");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "X-Galvani-Client":
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown",
      },
      body: JSON.stringify({
        ...parsed.data,
        email: parsed.data.contact.includes("@") ? parsed.data.contact : parsed.data.email,
        phone: parsed.data.contact.includes("@") ? parsed.data.phone : parsed.data.contact,
        requestId: parsed.data.requestId,
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
    const result = await response.json();
    if (result.ok !== true) throw new Error("Storage not confirmed");
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
