import mockBlog from "@/data/mockBlog";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog WTM - Tất Cả Bài Viết",
  description:
    "Khám phá những bài viết hay nhất về áo quần thể thao cổ điển từ WTM Blog.",
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
      <h1 className="text-4xl font-bold text-center">Tất Cả Bài Viết</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {mockBlog.map((blog) => (
          <div key={blog.id} className="border p-4 rounded-lg shadow-lg">
            <Image
              src={blog.image}
              alt={`Hình ảnh bài viết: ${blog.title}`}
              width={300}
              height={200}
              className="mx-auto rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.excerpt}</p>
            <Link
              href={`/blog/${blog.slug}`}
              className="text-blue-500 mt-2 block hover:underline"
            >
              Đọc thêm
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
