import { NextResponse } from "next/server";
import prismadb from "@/db/prismadb";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const movie = await prismadb.movie.findUnique({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(movie, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Something went wrong: ${error}` },
      { status: 500 }
    );
  }
}
