import { SUPPORTED_LANGUAGES, type LanguageCode } from "@/lib/i18n";
import { fetchUpstreamHtml } from "@/repositories/upstreamHtml.repository";

type ProxyContentResult =
  | { ok: true; html: string }
  | { ok: false; status: number };

function normalizePath(path: string) {
  if (!path) return "";
  return path.startsWith("/") ? path.slice(1) : path;
}

function mapUpstreamHrefToLocal(href: string, lang: LanguageCode) {
  const normalized = href.replace(/^https?:\/\/molaholdings\.com\/jp\/?/, "");
  if (
    normalized.startsWith("wp/wp-content/") ||
    normalized.startsWith("wp/wp-includes/") ||
    normalized.startsWith("wp/wp-admin/") ||
    normalized.startsWith("wp/wp-json/") ||
    normalized.startsWith("wp/xmlrpc") ||
    normalized.startsWith("wp/")
  ) {
    return href;
  }

  const clean = normalizePath(normalized);
  if (!clean) return `/${lang}`;

  return `/${lang}/${clean}`;
}

function injectLanguageHeader(html: string, lang: LanguageCode, joinedPath: string) {
  const languageLinks = SUPPORTED_LANGUAGES.map((code) => {
    const href = joinedPath ? `/${code}/${joinedPath}` : `/${code}`;
    const activeClass = code === lang ? "is-active" : "";
    return `<a class="${activeClass}" href="${href}">${code.toUpperCase()}</a>`;
  }).join("");

  const snippet = `
  <style>
    .redhomes-lang-header {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 2147483647;
      display: flex;
      gap: 6px;
      background: rgba(34,34,34,0.88);
      padding: 8px;
      border-bottom-left-radius: 4px;
    }
    .redhomes-lang-header a {
      color: #fff;
      text-decoration: none;
      border: 1px solid rgba(255,255,255,0.6);
      font-size: 11px;
      line-height: 1;
      padding: 5px 6px;
    }
    .redhomes-lang-header a.is-active {
      background: rgba(255,255,255,0.2);
    }
  </style>
  <div class="redhomes-lang-header">${languageLinks}</div>
  `;

  if (html.includes("<body")) {
    return html.replace(/<body([^>]*)>/i, `<body$1>${snippet}`);
  }

  return `${snippet}${html}`;
}

function transformProxyHtml(html: string, lang: LanguageCode, joinedPath: string) {
  let transformed = html
    .replace(/MOLA Holdings/g, "redhomes")
    .replace(/MOLAについて/g, "redhomesについて")
    .replace(/Copyright\s*&copy;\s*MOLA Holdings/gi, "Copyright &copy; redhomes");

  transformed = transformed.replace(
    /https?:\/\/molaholdings\.com\/jp\/(?!wp\/wp-content\/|wp\/wp-includes\/|wp\/wp-admin\/|wp\/wp-json\/|wp\/xmlrpc\.php)([^"'\s]*)/g,
    (_match, path: string) => mapUpstreamHrefToLocal(`http://molaholdings.com/jp/${path}`, lang),
  );

  transformed = transformed.replace(
    /(["'])\/jp\/(?!wp\/)([^"'\s]*)\1/g,
    (_match, quote: string, path: string) => {
      const localHref = path ? `/${lang}/${path}` : `/${lang}`;
      return `${quote}${localHref}${quote}`;
    },
  );

  return injectLanguageHeader(transformed, lang, joinedPath);
}

export async function getProxyHtmlContent(slug: string[], lang: LanguageCode): Promise<ProxyContentResult> {
  const joinedPath = slug.join("/");
  const upstream = await fetchUpstreamHtml(joinedPath);

  if (!upstream.ok) {
    return { ok: false, status: upstream.status };
  }

  return {
    ok: true,
    html: transformProxyHtml(upstream.html, lang, joinedPath),
  };
}
