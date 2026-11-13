import type { Metadata } from "next";
import { coach, site } from "@/content/site";

/** Search terms the whole site is built around. */
export const baseKeywords = [
  "sobriety coach for women",
  "sober coach",
  "sobriety coaching",
  "women's sobriety coach",
  "body-led sobriety",
  "nervous system coaching",
  "somatic coaching",
  "neurosomatic coaching",
  "sober curious",
  "quit drinking",
  "alcohol-free women",
  "stop numbing",
  "break the pattern",
];

/**
 * Builds a page's metadata so every page gets its own title, description,
 * keywords, canonical URL and social-share text.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title?: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const shareTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
  return {
    ...(title ? { title } : {}),
    description,
    keywords: [...keywords, ...baseKeywords],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: shareTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
    },
  };
}

/** Structured data (JSON-LD) that tells Google who the business is. */
export function organizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        description: site.description,
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        slogan: site.tagline,
        url: site.url,
        logo: `${site.url}/apple-icon`,
        description: site.description,
        sameAs: [site.instagram.url],
        founder: { "@id": `${site.url}/#founder` },
        knowsAbout: [
          "Sobriety coaching",
          "Nervous system regulation",
          "Somatic coaching",
          "Neurosomatic coaching",
          "Perimenopause",
          "Burnout",
        ],
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#founder`,
        name: coach.name,
        jobTitle: "Sobriety and Nervous System Coach",
        description:
          "20 years sober. ICF-accredited, trauma-trained, and certified in neurosomatic and womb-centered somatic coaching.",
        url: `${site.url}/about`,
        worksFor: { "@id": `${site.url}/#organization` },
        sameAs: [site.instagram.url],
      },
    ],
  };
  // Escape "<" so the JSON can't break out of the script tag.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
