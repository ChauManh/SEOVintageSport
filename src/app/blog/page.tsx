import mockBlog from "@/data/mockBlog";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog WTM - Tất Cả Bài Viết",
  description:
    "Khám phá những bài viết hay nhất về áo quần thể thao cổ điển từ WTM Blog.",
  keywords: [
    "quần áo thể thao cổ điển",
    "thời trang vintage",
    "áo đấu bóng đá cũ",
    "blog thể thao",
    "WTM vintage sport",
  ],
  openGraph: {
    title: "Blog WTM - Tất Cả Bài Viết",
    description:
      "Khám phá những bài viết hay nhất về áo quần thể thao cổ điển từ WTM Blog.",
    url: "https://wtm-vintage-sport.vercel.app/blog",
    type: "website",
    images: [
      {
        url: "/asset/blog-thumbnail.jpg",
        width: 800,
        height: 500,
        alt: "WTM Blog",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <main className="max-w-screen-xl mx-auto p-4">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between py-4 mb-6 border-b border-gray-300 bg-gray-700 rounded-lg px-6">
        <Link href="/" className="flex items-center space-x-3 mb-4 md:mb-0">
          <Image
            src="/asset/logo.png"
            alt="WTM Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-white">WTM Blog</span>
        </Link>
        <Link
          href="/"
          className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-800 transition"
        >
          🏠 Trang chủ
        </Link>
      </header>

      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">
        Tất Cả Bài Viết
      </h1>

      {/* Grid bài viết */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBlog.map((blog) => (
          <article
            key={blog.id}
            className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transition border"
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
              />
            </div>
            <div className="p-4">
              <h2
                className="text-lg font-semibold mb-2 line-clamp-2 text-black"
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
                className="text-blue-500 hover:underline mt-3 inline-block font-medium"
                aria-label={`Đọc bài viết: ${blog.title}`}
                title={`Đọc bài viết: ${blog.title}`}
              >
                Đọc thêm →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* JSON-LD: Blog + Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Blog WTM",
              url: "https://wtm-vintage-sport.vercel.app/blog",
              description:
                "Khám phá những bài viết hay nhất về áo quần thể thao cổ điển từ WTM Blog.",
              blogPosts: mockBlog.map((blog) => ({
                "@type": "BlogPosting",
                headline: blog.title,
                image: blog.image,
                author: {
                  "@type": "Person",
                  name: "WTM Blog",
                },
                publisher: {
                  "@type": "Organization",
                  name: "WTM",
                  logo: {
                    "@type": "ImageObject",
                    url: "/asset/logo.png",
                  },
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://wtm-vintage-sport.vercel.app/blog/${blog.slug}`,
                },
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
                  item: "https://wtm-vintage-sport.vercel.app/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://wtm-vintage-sport.vercel.app/blog",
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
