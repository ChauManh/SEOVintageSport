/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://wtm-vintage-sport.vercel.app", // Đổi thành domain thật nếu có
  generateRobotsTxt: true, // Tự tạo robots.txt
  generateIndexSitemap: true, // Sitemap tổng (khi nhiều sitemap con)
  changefreq: "daily", // Gợi ý tần suất cập nhật
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://wtm-vintage-sport.vercel.app/server-sitemap.xml",
    ],
  },
};
