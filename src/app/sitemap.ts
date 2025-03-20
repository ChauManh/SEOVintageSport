import { MetadataRoute } from "next";
import mockProducts from "../data/mockProduct";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yourwebsite.com/",
      lastModified: new Date().toISOString(),
    },
    ...mockProducts.map((product) => ({
      url: `https://yourwebsite.com/product/${product.slug}`,
      lastModified: new Date().toISOString(),
    })),
  ];
}
