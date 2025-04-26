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
    url: "https://wtm-vintage-sport.vercel.app/",
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
    <main className="container mx-auto p-4">
      {/* Header */}
      <header className="flex items-center justify-between py-4 border-b bg-gray-600 mb-6 px-6 rounded-lg">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/asset/logo.png"
            alt="WTM Logo - Blog về áo quần bóng đá cổ điển"
            width={160}
            height={160}
            className="rounded-full"
          />
          <span className="text-2xl font-semibold text-amber-50">WTM Blog</span>
        </Link>
        <Link
          href="/"
          className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          🏠 Quay lại Trang chủ
        </Link>
      </header>
      <h1 className="text-4xl font-bold text-center">Tất Cả Bài Viết</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {mockBlog.map((blog) => (
          <article
            key={blog.id}
            className="border p-4 rounded-lg shadow-lg"
            itemScope
            itemType="https://schema.org/BlogPosting"
          >
            <Image
              src={blog.image}
              alt={`Bài viết về áo quần thể thao: ${blog.title}`}
              width={300}
              height={200}
              className="mx-auto rounded-md"
              itemProp="image"
            />
            <h2 className="text-xl font-semibold mt-2" itemProp="headline">
              {blog.title}
            </h2>
            <p className="text-gray-600" itemProp="description">
              {blog.excerpt}
            </p>
            <Link href={`/blog/${blog.slug}`} legacyBehavior>
              <a
                className="text-blue-500 mt-2 block hover:underline"
                title={`Đọc bài: ${blog.title}`}
              >
                Đọc thêm
              </a>
            </Link>
          </article>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </main>
  );
}
