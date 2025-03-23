import { MetadataRoute } from "next";
import mockProducts from "../data/mockProduct";
import mockBlog from "@/data/mockBlog";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wtm-vintage-sport.vercel.app/",
      lastModified: new Date().toISOString(),
    },
    ...mockProducts.map((product) => ({
      url: `https://wtm-vintage-sport.vercel.app/product/${product.slug}`,
      lastModified: new Date().toISOString(),
    })),
    ...mockBlog.map((blog) => ({
      url: `https://wtm-vintage-sport.vercel.app/product/${blog.slug}`,
      lastModified: new Date().toISOString(),
    })),
  ];
}
