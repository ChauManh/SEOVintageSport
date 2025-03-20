import { notFound } from "next/navigation";
import mockBlog from "@/data/mockBlog";
import { Metadata } from "next";
import Image from "next/image";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = mockBlog.find((b) => b.slug === slug);

  if (!blog) {
    return { title: "Không tìm thấy bài viết" };
  }

  return {
    title: `${blog.title} - WTM Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://wtm.com/blog/${blog.slug}`,
      type: "article",
      images: [
        {
          url: blog.image,
          width: 600,
          height: 400,
          alt: blog.title,
        },
      ],
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
      <h1 className="text-4xl font-bold text-center">{blog.title}</h1>
      <Image
        src={blog.image}
        alt={blog.title}
        width={600}
        height={400}
        className="w-[600px] h-[400px] mx-auto mt-4 rounded-md"
      />
      <p className="text-gray-700 mt-4">{blog.excerpt}</p>
      <p className="mt-2 text-gray-500">Chi tiết nội dung bài viết ở đây...</p>
    </main>
  );
}
