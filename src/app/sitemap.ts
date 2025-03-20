import { MetadataRoute } from "next";
import mockProducts from "../data/mockProduct";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://seo-vintage-sport.vercel.app/",
      lastModified: new Date().toISOString(),
    },
    ...mockProducts.map((product) => ({
      url: `https://seo-vintage-sport.vercel.app/product/${product.slug}`,
      lastModified: new Date().toISOString(),
    })),
  ];
}
