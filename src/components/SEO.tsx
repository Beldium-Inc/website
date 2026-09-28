import { Helmet } from "react-helmet-async";

type JsonLd = Record<string, unknown>;

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  keywords?: string;
  /** One or more JSON-LD objects injected into the page head. */
  jsonLd?: JsonLd | JsonLd[];
  /** Optional article metadata (used when ogType is "article"). */
  publishedTime?: string;
  modifiedTime?: string;
}

export const SITE_URL = "https://beldium.com";

const DEFAULTS = {
  title: "Beldium | Critical Minerals Intelligence, Nigeria & Africa",
  description:
    "Nigeria-based critical minerals intelligence and mining infrastructure company connecting verified miners, buyers and regulators from mine to market.",
  ogImage:
    "https://storage.googleapis.com/gpt-engineer-file-uploads/JSK156a0iGZCbaw2wcnWGBGFRNz1/social-images/social-1766516848374-5933974439210978262.jpg",
};

export function SEO({
  title,
  description = DEFAULTS.description,
  canonical,
  ogImage = DEFAULTS.ogImage,
  ogType = "website",
  noindex = false,
  keywords,
  jsonLd,
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const fullTitle = title ? `${title} | Beldium` : DEFAULTS.title;
  const url = canonical ? `${SITE_URL}${canonical === "/" ? "/" : canonical}` : undefined;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {url && <link rel="canonical" href={url} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {url && <meta property="og:url" content={url} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Beldium" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
