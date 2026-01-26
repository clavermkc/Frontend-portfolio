import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const path = url.searchParams.get("path");

  if (!path) {
    return NextResponse.json({ error: "Missing path" }, { status: 400 });
  }

  const backendUrl = `${process.env.BACKEND_API_URL}/${path}`;

  const res = await fetch(backendUrl);

  const data = await res.json();
  return NextResponse.json(data);
}

/*
Phase 2 :
- Ajouter headers d'auth
- Gérer POST / PUT / DELETE
*/

