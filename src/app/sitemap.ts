import { MetadataRoute } from "next";
import contentData from "@/data/content.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = contentData.site.url;

  const routes = contentData.navigation.links.map((link) => ({
    url: `${baseUrl}${link.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: link.href === "/" ? 1 : 0.8,
  }));

  return routes;
}

