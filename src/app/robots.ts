import { MetadataRoute } from "next";
import contentData from "@/data/content.json";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard/", "/admin/"],
    },
    sitemap: `${contentData.site.url}/sitemap.xml`,
  };
}
