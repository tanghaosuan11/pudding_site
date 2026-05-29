import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/app/lib/site-content";

const fallbackTarget = siteConfig.downloadTargets.chrome;

export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const target = searchParams.get("target") || "chrome";
  const from = searchParams.get("from") || "unknown";
  const source = searchParams.get("source") || "website";

  let destination =
    siteConfig.downloadTargets[target as keyof typeof siteConfig.downloadTargets] ||
    fallbackTarget;

  if (target === "chrome") {
    const url = new URL(destination);
    url.searchParams.set("utm_source", source);
    url.searchParams.set("utm_medium", "website");
    url.searchParams.set("utm_campaign", from);
    destination = url.toString();
  }

  console.info(
    JSON.stringify({
      event: "download_redirect",
      target,
      from,
      source,
      destination,
      at: new Date().toISOString(),
    }),
  );

  return NextResponse.redirect(destination, { status: 307 });
}
