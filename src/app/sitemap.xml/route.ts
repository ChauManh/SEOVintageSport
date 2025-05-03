import { MetadataRoute } from "next";
import mockProducts from "@/data/mockProduct";
import mockBlog from "@/data/mockBlog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  return [
    {
      url: "https://www.aodaucodienwtm.com/",
      lastModified,
    },
    {
      url: "https://www.aodaucodienwtm.com/product",
      lastModified,
    },
    {
      url: "https://www.aodaucodienwtm.com/blog",
      lastModified,
    },
    ...mockProducts.map((product) => ({
      url: `https://www.aodaucodienwtm.com/product/${product.slug}`,
      lastModified,
    })),
    ...mockBlog.map((blog) => ({
      url: `https://www.aodaucodienwtm.com/blog/${blog.slug}`,
      lastModified,
    })),
  ];
}
