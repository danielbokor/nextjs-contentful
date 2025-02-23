import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const secret = searchParams.get("secret");

  console.log("secret", secret);
  console.log(
    "CONTENTFUL_PREVIEW_SECRET",
    process.env.CONTENTFUL_PREVIEW_SECRET
  );

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }

  draftMode().enable();

  redirect("/");
}
