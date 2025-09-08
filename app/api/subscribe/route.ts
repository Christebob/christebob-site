import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ ok:false, error:"Email required" }, { status: 400 });

    const FORM_ID = process.env.CONVERTKIT_FORM_ID;
    const API_KEY = process.env.CONVERTKIT_API_KEY;
    if (!FORM_ID || !API_KEY) return NextResponse.json({ ok:false, error:"Missing server config" }, { status: 500 });

    const res = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: API_KEY, email }),
    });
    if (!res.ok) {
      const txt = await res.text();
      return NextResponse.json({ ok:false, error:"Provider error", detail: txt }, { status: 500 });
    }
    return NextResponse.json({ ok:true });
  } catch (e:any) {
    return NextResponse.json({ ok:false, error:e?.message || "Unknown error" }, { status: 500 });
  }
}
