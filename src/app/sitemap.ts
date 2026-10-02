import type { MetadataRoute } from "next";
import { publishedProjects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...publishedProjects.map((project) => ({
      url: new URL(`/work/${project.slug}`, siteConfig.url).toString(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
