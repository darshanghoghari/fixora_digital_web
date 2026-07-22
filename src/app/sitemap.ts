import { MetadataRoute } from "next";
import contentData from "@/data/content.json";
import { targetCities, targetServices, blogPosts } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = contentData.site.url;

  // Static routes
  const staticRoutes = contentData.navigation.links.map((link) => ({
    url: `${baseUrl}${link.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: link.href === "/" ? 1 : 0.8,
  }));

  // Dynamic Cities
  const cityRoutes = targetCities.map((city) => ({
    url: `${baseUrl}/cities/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic Services
  const serviceRoutes = targetServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Blog Routes
  const blogIndexRoute = {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  };
  
  const postRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...cityRoutes, ...serviceRoutes, blogIndexRoute, ...postRoutes];
}

