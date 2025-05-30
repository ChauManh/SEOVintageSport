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

  if (!blog) {
    return {
      title: "Không tìm thấy bài viết | WTM Blog",
      description: "Bài viết bạn tìm không tồn tại.",
    };
  }

  const url = `https://www.aodaucodienwtm.com/blog/${blog.slug}`;

  return {
    title: `${blog.title} – WTM Blog`,
    description: blog.excerpt,
    keywords: [
      "áo quần thể thao cổ điển",
      "thời trang vintage",
      "áo đấu bóng đá cổ điển",
      "WTM Blog",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url,
      type: "article",
      siteName: "WTM Blog",
      images: [
        {
          url: `https://www.aodaucodienwtm.com${blog.image}`,
          width: 800,
          height: 500,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [`https://www.aodaucodienwtm.com${blog.image}`],
    },
  };
}

export default async function BlogDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const blog = mockBlog.find((b) => b.slug === slug);
  if (!blog) return notFound();

  const pageUrl = `https://www.aodaucodienwtm.com/blog/${slug}`;

  return (
    <main className="max-w-screen-xl mx-auto p-4">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between bg-gray-800 text-white rounded-xl p-6 mb-6 shadow">
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
        <Link
          href="/"
          className="mt-4 md:mt-0 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          🏠 Trang chủ
        </Link>
      </header>

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
        <ol className="list-reset flex flex-wrap">
          <li>
            <Link href="/" className="hover:underline">
              Trang chủ
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="font-semibold">{blog.title}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Article */}
        <article
          itemScope
          itemType="https://schema.org/Article"
          className="lg:col-span-8 space-y-6 bg-white rounded-xl shadow-md p-6 border border-gray-200"
        >
          <h1 itemProp="headline" className="text-3xl font-bold text-gray-900">
            {blog.title}
          </h1>

          <div className="text-sm text-gray-500 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <span>🗓️ {blog.datePublished}</span>
            {blog.author && <span>✍️ {blog.author}</span>}
            {blog.readingTime && <span>⏱️ {blog.readingTime}</span>}
          </div>

          <Image
            src={blog.image}
            alt={`Ảnh bài viết: ${blog.title}`}
            width={800}
            height={500}
            className="w-full rounded-lg border"
            priority
            itemProp="image"
          />

          <section
            itemProp="articleBody"
            className="prose prose-lg max-w-none text-gray-800"
          >
            {blog.content.map((section, i) => {
              if (section.type === "text") {
                return (
                  <p
                    key={i}
                    className="whitespace-pre-line"
                    dangerouslySetInnerHTML={{  __html: section.value ?? "", }}
                  ></p>
                );
              }
              if (section.type === "image") {
                return (
                  <figure key={i} className="my-6">
                    <Image
                      src={section.src!}
                      alt={section.alt || ""}
                      width={800}
                      height={500}
                      className="rounded-md border"
                      loading="lazy"
                    />
                    {section.alt && (
                      <figcaption className="text-sm text-gray-500 text-center mt-2">
                        {section.alt}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (section.type === "list") {
                return (
                  <ul key={i} className="list-disc list-inside space-y-1">
                    {section.items!.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </section>

          {/* Signature */}
          <footer className="border-t pt-6 text-sm text-gray-500 mt-10">
            Viết bởi <strong>{blog.author}</strong> – Cảm ơn bạn đã đọc bài viết
            trên <span className="text-blue-600 font-semibold">WTM Blog</span>.
          </footer>
        </article>

        {/* Related posts */}
        <aside className="lg:col-span-4 bg-gray-50 rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            📖 Bài viết liên quan
          </h2>
          <ul className="space-y-3">
            {mockBlog
              .filter((b) => b.slug !== slug)
              .slice(0, 5)
              .map((rel) => (
                <li key={rel.id}>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {rel.title}
                  </Link>
                </li>
              ))}
          </ul>
        </aside>
      </div>

      {/* JSON-LD Schema */}
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
                  item: "https://www.aodaucodienwtm.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://www.aodaucodienwtm.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: blog.title,
                  item: pageUrl,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: blog.title,
              description: blog.excerpt,
              image: `https://www.aodaucodienwtm.com${blog.image}`,
              author: { "@type": "Organization", name: "WTM Blog" },
              publisher: {
                "@type": "Organization",
                name: "WTM Vintage Sport",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.aodaucodienwtm.com/asset/logo.png",
                },
              },
              datePublished: blog.datePublished,
              mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
            },
          ]),
        }}
      />
    </main>
  );
}
