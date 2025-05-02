import { notFound } from "next/navigation";
import mockBlog from "@/data/mockBlog";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = mockBlog.find((b) => b.slug === slug);
  if (!blog) return { title: "Không tìm thấy bài viết" };

  return {
    title: `${blog.title} - WTM Blog`,
    description: blog.excerpt,
    keywords: "bóng đá cổ điển, áo đấu vintage, WTM Blog",
    alternates: {
      canonical: `https://wtm-vintage-sport.vercel.app/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://wtm-vintage-sport.vercel.app/blog/${blog.slug}`,
      type: "article",
      images: [{ url: blog.image, width: 800, height: 500, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export default async function BlogDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const blog = mockBlog.find((b) => b.slug === slug);
  if (!blog) return notFound();

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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Bài viết */}
        <article
          itemScope
          itemType="https://schema.org/Article"
          className="lg:col-span-8"
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-4"
            itemProp="headline"
          >
            {blog.title}
          </h1>
          <p className="text-gray-500 italic mb-4" itemProp="datePublished">
            Đăng ngày: {blog.datePublished}
          </p>

          <Image
            src={blog.image}
            alt={`Ảnh bài viết - ${blog.title}`}
            width={800}
            height={500}
            className="w-full rounded-lg mb-6 border"
            priority
            itemProp="image"
          />

          <section className="prose prose-lg max-w-none" itemProp="articleBody">
            {blog.content.map((section, index) => {
              if (section.type === "text") {
                return (
                  <p key={index} className="mb-4 whitespace-pre-line">
                    {section.value}
                  </p>
                );
              }
              if (section.type === "image") {
                return (
                  <div key={index} className="my-6">
                    <Image
                      src={section.src || "/asset/defaultimage.jpg"}
                      alt={section.alt || `Hình ảnh minh họa - ${blog.title}`}
                      width={800}
                      height={500}
                      className="rounded-md border"
                      loading="lazy"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      {section.alt}
                    </p>
                  </div>
                );
              }
              if (section.type === "list") {
                return (
                  <ul key={index} className="list-disc list-inside my-4">
                    {section?.items?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </section>
        </article>

        {/* Bài viết liên quan */}
        <aside className="lg:col-span-4 bg-gray-50 p-6 rounded-lg shadow border">
          <h2 className="text-xl font-semibold mb-4 text-black">
            📖 Bài viết liên quan
          </h2>
          <ul className="space-y-3">
            {mockBlog
              .filter((b) => b.slug !== blog.slug)
              .slice(0, 5)
              .map((related) => (
                <li key={related.id}>
                  <Link href={`/blog/${related.slug}`}>
                    <span className="text-blue-600 hover:underline">
                      {related.title}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </aside>
      </div>

      {/* Breadcrumb & Schema Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
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
                {
                  "@type": "ListItem",
                  position: 3,
                  name: blog.title,
                  item: `https://wtm-vintage-sport.vercel.app/blog/${blog.slug}`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: blog.title,
              description: blog.excerpt,
              image: blog.image,
              author: {
                "@type": "Organization",
                name: "WTM Blog",
                url: "https://wtm-vintage-sport.vercel.app",
              },
              publisher: {
                "@type": "Organization",
                name: "WTM",
                logo: {
                  "@type": "ImageObject",
                  url: "https://wtm-vintage-sport.vercel.app/logo.png",
                },
              },
              datePublished: blog.datePublished,
              dateModified: blog.datePublished,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://wtm-vintage-sport.vercel.app/blog/${blog.slug}`,
              },
            },
          ]),
        }}
      />
    </main>
  );
}
