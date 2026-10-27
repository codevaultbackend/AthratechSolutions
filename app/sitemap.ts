
import type { MetadataRoute } from "next";

import { services } from "@/app/context/services";
import { projectsData } from "@/app/context/projects";
import { blogsData } from "@/app/context/blogs";

const SITE_ORIGIN = "https://www.athratech.com";
const SITE_HOST = new URL(SITE_ORIGIN).hostname;

type ChangeFrequency =
  MetadataRoute.Sitemap[number]["changeFrequency"];

type SitemapEntry = MetadataRoute.Sitemap[number];

type DatedRecord = {
  updatedAt?: unknown;
  lastModified?: unknown;
};

const STATIC_PAGES: Array<{
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.7 },
  {
    path: "/privacy-policy",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/terms-conditions",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

function getValidDate(value: unknown): Date | undefined {
  if (typeof value !== "string" && !(value instanceof Date)) {
    return undefined;
  }

  if (typeof value === "string" && !value.trim()) {
    return undefined;
  }

  const date = value instanceof Date ? value : new Date(value);

  if (!Number.isFinite(date.getTime())) {
    return undefined;
  }

  // Do not publish dates that are implausibly in the future.
  if (date.getTime() > Date.now()) {
    return undefined;
  }

  return date;
}

function getLastModified(
  record?: DatedRecord
): Date | undefined {
  return getValidDate(
    record?.updatedAt ?? record?.lastModified
  );
}

function isValidSlug(slug: unknown): slug is string {
  return (
    typeof slug === "string" &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
  );
}

function createEntry(
  path: string,
  options: {
    lastModified?: Date;
    changeFrequency?: ChangeFrequency;
    priority?: number;
  } = {}
): SitemapEntry | null {
  // Accept internal paths only, never arbitrary external URLs.
  if (
    !path.startsWith("/") ||
    path.startsWith("//") ||
    path.includes("?") ||
    path.includes("#") ||
    path.includes("\\")
  ) {
    return null;
  }

  const url = new URL(path, `${SITE_ORIGIN}/`);

  if (
    url.protocol !== "https:" ||
    url.hostname !== SITE_HOST ||
    url.pathname.includes("//")
  ) {
    return null;
  }

  const entry: SitemapEntry = {
    url: url.toString(),
  };

  if (options.lastModified) {
    entry.lastModified = options.lastModified;
  }

  if (options.changeFrequency) {
    entry.changeFrequency = options.changeFrequency;
  }

  if (options.priority !== undefined) {
    entry.priority = options.priority;
  }

  return entry;
}

function deduplicate(
  entries: Array<SitemapEntry | null>
): MetadataRoute.Sitemap {
  const unique = new Map<string, SitemapEntry>();

  for (const entry of entries) {
    if (!entry) continue;

    const url = new URL(entry.url);
    url.pathname =
      url.pathname === "/"
        ? "/"
        : url.pathname.replace(/\/+$/, "");

    const key = url.toString();
    const existing = unique.get(key);

    if (!existing) {
      unique.set(key, { ...entry, url: key });
      continue;
    }

    // Keep the newest genuine modification date available.
    const oldDate = getValidDate(existing.lastModified);
    const newDate = getValidDate(entry.lastModified);

    if (newDate && (!oldDate || newDate > oldDate)) {
      unique.set(key, {
        ...existing,
        ...entry,
        url: key,
      });
    }
  }

  return [...unique.values()].sort((a, b) =>
    a.url.localeCompare(b.url)
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Array<SitemapEntry | null> = [];

  // 1. Stable, manually defined website pages.
  for (const page of STATIC_PAGES) {
    entries.push(
      createEntry(page.path, {
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      })
    );
  }

  // 2. Service detail pages and nested service-section pages.
  for (const service of services) {
    if (!isValidSlug(service.slug)) continue;

    const serviceRecord = service as typeof service & DatedRecord;

    entries.push(
      createEntry(`/services/${service.slug}`, {
        lastModified: getLastModified(serviceRecord),
        changeFrequency: "monthly",
        priority: 0.8,
      })
    );

    for (const section of service.detailPage.sections) {
      if (!isValidSlug(section.slug)) continue;

      const sectionRecord = section as typeof section & DatedRecord;

      entries.push(
        createEntry(
          `/services/${service.slug}/${section.slug}`,
          {
            lastModified: getLastModified(sectionRecord),
            changeFrequency: "monthly",
            priority: 0.7,
          }
        )
      );
    }
  }

  // 3. Only project detail pages that the route can render.
  for (const project of projectsData) {
    if (
      !project.hasCaseStudy ||
      !project.caseStudy ||
      !isValidSlug(project.slug)
    ) {
      continue;
    }

    const projectRecord = project as typeof project & DatedRecord;

    entries.push(
      createEntry(`/projects/${project.slug}`, {
        lastModified: getLastModified(projectRecord),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    );
  }

  // 4. Blog pages from the shared blog content source.
  for (const blog of blogsData) {
    if (!isValidSlug(blog.slug)) continue;

    const blogRecord = blog as typeof blog & DatedRecord;

    entries.push(
      createEntry(`/blog/${blog.slug}`, {
        lastModified: getLastModified(blogRecord),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    );
  }

  return deduplicate(entries);
}
