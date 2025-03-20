import mockProducts from "@/data/mockData";

export default function sitemap() {
  return Response.json({
    sitemap: [
      { loc: "https://yourwebsite.com/", lastmod: new Date().toISOString() },
      ...mockProducts.map((product) => ({
        loc: `https://yourwebsite.com/product/${product.slug}`,
        lastmod: new Date().toISOString(),
      })),
    ],
  });
}
