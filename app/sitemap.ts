
import type { MetadataRoute } from "next";
import { services } from "./context/services";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.athratech.com";

const staticPages: MetadataRoute.Sitemap = [
  { url: BASE_URL },
  { url: `${BASE_URL}/about-us` },
  { url: `${BASE_URL}/services` },
  { url: `${BASE_URL}/projects` },
  { url: `${BASE_URL}/blog` },
  { url: `${BASE_URL}/contact-us` },
  { url: `${BASE_URL}/privacy-policy` },
  { url: `${BASE_URL}/terms-conditions` },
];

const projectSlugs = [
  "markday",
  "fastresponse",
  "erp-system",
  "quick-cargo",
  "inventory-management",
] as const;

const blogSlugs = [
  "glassmorphism-in-2026",
  "ai-future-of-coding",
  "ai-marketers-2026",
  "seo-glassmorphism",
  "ads-glassmorphism",
  "uiux-glassmorphism",
] as const;

function createUrl(path = ""): string {
  const normalizedPath = path.replace(/^\/+|\/+$/g, "");

  return normalizedPath
    ? `${BASE_URL}/${normalizedPath}`
    : BASE_URL;
}

function uniqueSitemapEntries(
  entries: MetadataRoute.Sitemap
): MetadataRoute.Sitemap {
  const seen = new Set<string>();

  return entries.filter((entry) => {
    const normalizedUrl = entry.url.replace(/\/+$/, "") || BASE_URL;

    if (seen.has(normalizedUrl)) {
      return false;
    }

    seen.add(normalizedUrl);
    return true;
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages: MetadataRoute.Sitemap = services
    .filter((service) => Boolean(service.slug))
    .map((service) => ({
      url: createUrl(`services/${service.slug}`),
    }));

  const serviceSectionPages: MetadataRoute.Sitemap =
    services.flatMap((service) => {
      if (
        !service.slug ||
        !service.detailPage ||
        !Array.isArray(service.detailPage.sections)
      ) {
        return [];
      }

      return service.detailPage.sections
        .filter((section) => Boolean(section.slug))
        .map((section) => ({
          url: createUrl(
            `services/${service.slug}/${section.slug}`
          ),
        }));
    });

  const projectPages: MetadataRoute.Sitemap = projectSlugs.map(
    (slug) => ({
      url: createUrl(`projects/${slug}`),
    })
  );

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(
    (slug) => ({
      url: createUrl(`blog/${slug}`),
    })
  );

  return uniqueSitemapEntries([
    ...staticPages,
    ...servicePages,
    ...serviceSectionPages,
    ...projectPages,
    ...blogPages,
  ]);
}
