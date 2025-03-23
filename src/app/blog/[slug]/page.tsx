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
            src="/logo.png"
            alt="WTM Logo"
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
        {/* Nội dung chính */}
        <div className="lg:col-span-8 mx-auto p-5">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <Image
            src={blog.image}
            alt={blog.title}
            width={800} // Thay đổi tùy theo kích thước thực tế của ảnh
            height={500} // Thay đổi tùy theo kích thước thực tế của ảnh
            className="w-full h-64 object-cover rounded-lg mb-4 border-2 border-gray-900"
          />
          <div className="prose">
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
                    alt={section.alt || "Blog về áo quần bóng đá cổ điển"}
                    width={800} // Chỉnh kích thước phù hợp
                    height={500}
                    className="w-full rounded-lg my-4 border-2 border-gray-300"
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
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-300">
          <h3 className="text-xl font-semibold mb-4">Bài viết liên quan</h3>
          <ul className="space-y-3">
            {mockBlog
              .filter((b) => b.slug !== blog.slug)
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
    </main>
  );
}
