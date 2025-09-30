import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacypolicy", changeFrequency: "yearly", priority: 0.5 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/blog/ai-powered-kyc-verification-fraud-prevention", changeFrequency: "weekly", priority: 0.8 },
  ];

  return pages.map((p) => ({
    url: `${SITE.url}${p.path === "/" ? "" : p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: p.priority,
  }));
}
