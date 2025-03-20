import mockBlog from "@/data/mockBlog";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center">Tất Cả Bài Viết</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {mockBlog.map((blog) => (
          <div key={blog.id} className="border p-4 rounded-lg shadow-lg">
            <Image
              src={blog.image}
              alt={blog.title}
              width={300}
              height={200}
              className="mx-auto rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.excerpt}</p>
            <Link
              href={`/blog/${blog.slug}`}
              className="text-blue-500 mt-2 block"
            >
              Đọc thêm
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
