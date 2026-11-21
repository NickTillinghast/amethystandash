import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = [
  "",
  "/method",
  "/work-with-me",
  "/midlife",
  "/about",
  "/quiz",
  "/contact",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    priority: path === "" ? 1 : 0.7,
  }));
}
