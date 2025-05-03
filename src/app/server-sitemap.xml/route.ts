// src/app/server-sitemap.xml/route.ts
import { NextResponse } from "next/server";
import mockProducts from "@/data/mockProduct";
import mockBlog from "@/data/mockBlog";

export async function GET() {
  const baseUrl = "https://www.aodaucodienwtm.com";
  const lastMod = new Date().toISOString();

  const urls = [
    ...mockProducts.map(
      (p) => `
    <url>
      <loc>${baseUrl}/product/${p.slug}</loc>
      <lastmod>${lastMod}</lastmod>
    </url>`
    ),
    ...mockBlog.map(
      (b) => `
    <url>
      <loc>${baseUrl}/blog/${b.slug}</loc>
      <lastmod>${lastMod}</lastmod>
    </url>`
    ),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
