type ProxyClonePageProps = {
  lang: string;
  slug: string[];
};

export default function ProxyClonePage({ lang, slug }: ProxyClonePageProps) {
  const joinedPath = slug.join("/");
  const proxyUrl = joinedPath ? `/proxy/${joinedPath}?lang=${lang}` : `/proxy?lang=${lang}`;

  return (
    <main className="clone-page-wrap">
      <iframe
        key={`${lang}-${joinedPath}`}
        src={proxyUrl}
        className="clone-page-frame"
        title={`redhomes clone ${lang} ${joinedPath}`}
      />
    </main>
  );
}
