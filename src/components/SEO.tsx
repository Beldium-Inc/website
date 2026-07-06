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
  ogImage:
    "https://storage.googleapis.com/gpt-engineer-file-uploads/JSK156a0iGZCbaw2wcnWGBGFRNz1/social-images/social-1766516848374-5933974439210978262.jpg",
  siteUrl: "https://beldium.com",
};

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
    </Helmet>
  );
}
