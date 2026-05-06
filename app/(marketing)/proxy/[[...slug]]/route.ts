import { type NextRequest } from "next/server";
import { isSupportedLanguage } from "@/lib/i18n";
import { getProxyHtmlContent } from "@/services/proxyContent.service";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug = [] } = await params;
  const langRaw = request.nextUrl.searchParams.get("lang") ?? "ja";
  const lang = isSupportedLanguage(langRaw) ? langRaw : "ja";
  const result = await getProxyHtmlContent(slug, lang);

  if (!result.ok) {
    return new Response("Not Found", { status: result.status });
  }

  return new Response(result.html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}
