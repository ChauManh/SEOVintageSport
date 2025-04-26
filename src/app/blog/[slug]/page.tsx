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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Nội dung bài viết */}
        <article className="lg:col-span-8 mx-auto p-5">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-500 italic mb-4">
            Đăng ngày: {blog.datePublished}
          </p>

          <Image
            src={blog.image}
            alt={`Ảnh bài viết - ${blog.title}`}
            width={800}
            height={500}
            className="w-full h-64 object-cover rounded-lg mb-4 border-2 border-gray-900"
            priority
          />

          <section className="prose">
            {blog.content.map((section, index) => {
              if (section.type === "text") {
                return (
                  <p key={index} className="mb-4 font-bold text-lg">
                    {section.value}
                  </p>
                );
              }
              if (section.type === "image") {
                return (
                  <Image
                    key={index}
                    src={section.src || "/asset/defaultimage.jpg"}
                    alt={section.alt || `Hình ảnh minh họa - ${blog.title}`}
                    width={800}
                    height={500}
                    className="w-full rounded-lg my-4 border-2 border-gray-300"
                    loading="lazy"
                  />
                );
              }
              if (section.type === "list" && Array.isArray(section.items)) {
                return (
                  <ul key={index} className="list-disc ml-5">
                    {section.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </section>
        </article>

        {/* Sidebar - Bài viết liên quan */}
        <aside className="lg:col-span-4 bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-xl font-semibold mb-4">📖 Bài viết liên quan</h2>
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

      {/* Schema JSON-LD cho SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </main>
  );
}
