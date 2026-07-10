import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  keywords?: string;
}

const DEFAULTS = {
  title: "Beldium - Africa's Trusted Lithium Supply Chain Infrastructure",
  description:
    "Digitizing mining, trade, compliance & logistics for Africa's mineral future. Connecting miners, buyers, and regulators through transparent infrastructure.",
  ogImage: "https://beldium.com/og/social-share.jpg",
  siteUrl: "https://beldium.com",
};

// Human-readable labels for breadcrumb segments that aren't obvious from the slug.
const BREADCRUMB_LABELS: Record<string, string> = {
  miners: "For Miners",
  buyers: "For Buyers",
  regulators: "For Regulators",
  "data-architecture": "Data Architecture",
  resources: "Resources",
  "lithium-supply-chain": "Lithium Supply Chain",
  "mining-data-intelligence": "Mining Data Intelligence",
  "data-sovereignty": "Data Sovereignty",
  "infrastructure-gaps": "Infrastructure Gaps",
  "lithium-in-nigeria": "Lithium in Nigeria",
  "business-development-brief": "Business Development Brief",
};

function buildBreadcrumbList(canonical?: string) {
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: `${DEFAULTS.siteUrl}/` }];

  if (canonical && canonical !== "/") {
    const segments = canonical.split("/").filter(Boolean);
    let path = "";
    segments.forEach((segment, index) => {
      path += `/${segment}`;
      const name =
        BREADCRUMB_LABELS[segment] ??
        segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      items.push({
        "@type": "ListItem",
        position: index + 2,
        name,
        item: `${DEFAULTS.siteUrl}${path}`,
      });
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function SEO({
  title,
  description = DEFAULTS.description,
  canonical,
  ogImage = DEFAULTS.ogImage,
  ogType = "website",
  noindex = false,
  keywords,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | Beldium`
    : DEFAULTS.title;

  const breadcrumbJsonLd = buildBreadcrumbList(canonical);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={`${DEFAULTS.siteUrl}${canonical}`} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={`${DEFAULTS.siteUrl}${canonical}`} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Beldium" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Per-page breadcrumb structured data (overrides the static one in index.html) */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
    </Helmet>
  );
}
