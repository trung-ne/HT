const UPSTREAM_ORIGIN = "http://molaholdings.com";
const UPSTREAM_PREFIX = "/jp";
const UPSTREAM_USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

type UpstreamHtmlResult = {
  ok: boolean;
  status: number;
  html: string;
};

export async function fetchUpstreamHtml(joinedPath: string): Promise<UpstreamHtmlResult> {
  const upstreamPath = joinedPath ? `/${joinedPath}${joinedPath.endsWith("/") ? "" : "/"}` : "/";
  const sourceUrl = `${UPSTREAM_ORIGIN}${UPSTREAM_PREFIX}${upstreamPath}`;

  const response = await fetch(sourceUrl, {
    cache: "no-store",
    headers: {
      "user-agent": UPSTREAM_USER_AGENT,
    },
  });

  const html = await response.text();

  return {
    ok: response.ok,
    status: response.status,
    html,
  };
}
