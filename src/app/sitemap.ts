import { MetadataRoute } from "next";
import { NAV_LINKS } from "@/constants/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://providerapp.com";

  const routes = NAV_LINKS.map((link) => ({
    url: `${baseUrl}${link.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: link.href === "/" ? 1 : 0.8,
  }));

  return routes;
}

