import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as Record<string, string> | null;
  if (!body || !body.name || !body.email || !body.message || body.consent !== "accepted") {
    return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
  }
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ sent: false, configured: false }, { status: 200 });
  const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...body, source: "solamentecree.com", submittedAt: new Date().toISOString() }) });
  if (!response.ok) return NextResponse.json({ error: "No se pudo procesar el formulario" }, { status: 502 });
  return NextResponse.json({ sent: true, configured: true });
}
