// app/blog/page.tsx
import mockBlog from "@/data/mockBlog";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog WTM – Tất Cả Bài Viết",
  description:
    "Khám phá những bài viết hay nhất về áo quần thể thao cổ điển từ WTM Blog.",
  keywords: [
    "quần áo thể thao cổ điển",
    "thời trang vintage",
    "áo đấu bóng đá cổ điển",
    "blog thể thao vintage",
    "WTM Blog",
  ],
  metadataBase: new URL("https://www.aodaucodienwtm.com"),
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog WTM – Tất Cả Bài Viết",
    description:
      "Khám phá những bài viết hay nhất về áo quần thể thao cổ điển từ WTM Blog.",
    url: "https://www.aodaucodienwtm.com/blog",
    type: "website",
    siteName: "WTM Blog",
    images: [
      {
        url: "https://www.aodaucodienwtm.com/asset/blog-thumbnail.jpg",
        width: 800,
        height: 500,
        alt: "WTM Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog WTM – Tất Cả Bài Viết",
    description:
      "Khám phá những bài viết hay nhất về áo quần thể thao cổ điển từ WTM Blog.",
    images: ["https://www.aodaucodienwtm.com/asset/blog-thumbnail.jpg"],
  },
};

export default function BlogPage() {
  return (
    <main className="max-w-screen-xl mx-auto p-4">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between bg-gray-800 text-white rounded-lg p-6 mb-8">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/asset/logo.png"
            alt="WTM Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">WTM Blog</span>
        </Link>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Trang chủ
          </Link>
          <Link
            href="/product"
            className="hover:text-blue-400 transition-colors"
          >
            Sản phẩm
          </Link>
          <Link href="/blog" className="underline">
            Blog
          </Link>
        </nav>
      </header>

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
        <ol className="list-reset flex">
          <li>
            <Link href="/" className="hover:underline">
              Trang chủ
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="font-semibold">Blog</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Tất Cả Bài Viết
      </h1>

      {/* Grid bài viết */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockBlog.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            itemScope
            itemType="https://schema.org/BlogPosting"
          >
            <div className="aspect-video relative">
              <Image
                src={blog.image}
                alt={`Ảnh minh họa: ${blog.title}`}
                fill
                className="object-cover"
                itemProp="image"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h2
                className="text-xl font-semibold mb-2 line-clamp-2 text-gray-900"
                itemProp="headline"
              >
                {blog.title}
              </h2>
              <p
                className="text-gray-600 text-sm line-clamp-3"
                itemProp="description"
              >
                {blog.excerpt}
              </p>
              <Link
                href={`/blog/${blog.slug}`}
                className="inline-block mt-4 text-blue-600 hover:underline font-medium"
                aria-label={`Đọc bài viết: ${blog.title}`}
              >
                Đọc thêm →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* JSON-LD: Blog + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "WTM Blog",
              url: "https://www.aodaucodienwtm.com/blog",
              description:
                "Khám phá những bài viết hay nhất về áo quần thể thao cổ điển từ WTM Blog.",
              blogPosts: mockBlog.map((b) => ({
                "@type": "BlogPosting",
                headline: b.title,
                image: `https://www.aodaucodienwtm.com${b.image}`,
                author: {
                  "@type": "Person",
                  name: "WTM Blog",
                },
                publisher: {
                  "@type": "Organization",
                  name: "WTM",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.aodaucodienwtm.com/asset/logo.png",
                  },
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://www.aodaucodienwtm.com/blog/${b.slug}`,
                },
                datePublished: b.datePublished,
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Trang chủ",
                  item: "https://www.aodaucodienwtm.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://www.aodaucodienwtm.com/blog",
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
