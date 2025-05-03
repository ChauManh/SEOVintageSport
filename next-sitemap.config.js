/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.aodaucodienwtm.com",
  generateRobotsTxt: true, // Tự tạo robots.txt
  generateIndexSitemap: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://www.aodaucodienwtm.com/server-sitemap.xml"],
  },
};
