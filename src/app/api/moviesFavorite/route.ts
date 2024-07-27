import { log } from "console";
import { NextResponse } from "next/server";
// import prismadb from "@/db/prismadb";

export async function POST(request: Request) {
  const res = await request.json();

  console.log(res);

  return NextResponse.json("movie favorites");
}
