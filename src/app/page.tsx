import Image from "next/image";
import { Metadata } from "next";
import mockProducts from "@/data/mockProduct";
import mockBlog from "@/data/mockBlog";
import Link from "next/link";

// Metadata SEO
export const metadata: Metadata = {
  title: "WTM - Cửa hàng áo quần bóng đá cũ",
  description: "Mua bán áo quần bóng đá cũ, hàng tuyển từ các CLB Châu Âu.",
  openGraph: {
    title: "WTM - Cửa hàng áo quần bóng đá cũ",
    description: "Mua bán áo quần bóng đá cũ, hàng tuyển từ các CLB Châu Âu.",
    url: "https://wtm.com",
    type: "website",
    images: [
      {
        url: "/logo.png", // Đường dẫn logo trong thư mục public
        width: 500,
        height: 500,
        alt: "WTM Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WTM - Cửa hàng áo quần bóng đá cũ",
    description: "Mua bán áo quần bóng đá cũ, hàng tuyển từ các CLB Châu Âu.",
    images: ["/logo.png"],
  },
};

// Trang Home
export default function Home() {
  return (
    <main className="container mx-auto p-4">
      {/* Header với logo */}
      <header className="flex justify-center items-center py-4">
        <Image
          src="/logo.png"
          alt="WTM Logo"
          width={300}
          height={300}
          priority={true}
        />
      </header>

      {/* Nội dung trang */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Chào mừng đến với WTM</h1>
        <p className="text-gray-600 mt-2">
          Cửa hàng áo bóng đá cũ - Hàng tuyển từ các CLB Châu Âu
        </p>
      </section>

      {/* Danh sách sản phẩm */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mb-6">
        {mockProducts.map((product) => (
          <div key={product.slug} className="border p-4 rounded-lg shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="mx-auto"
              loading="lazy"
            />
            <h2 className="text-xl font-bold mt-2">{product.name}</h2>
            <p className="text-gray-700 font-semibold">Giá: {product.price}</p>
            <p className="text-gray-500">Tình trạng: {product.condition}</p>
            <Link
              href={`/product/${product.slug}`}
              className="text-blue-500 mt-2 block"
            >
              Xem chi tiết
            </Link>
          </div>
        ))}
      </section>

      {/* Danh sách blog */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-center">Blog Mới Nhất</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {mockBlog.map((blog) => (
            <div key={blog.id} className="border p-4 rounded-lg shadow-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                width={300}
                height={400}
                className="w-full h-[400px] object-cover rounded-md"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
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
        {/* Nút xem tất cả bài blog */}
        <div className="text-center mt-6">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Xem tất cả bài viết
          </Link>
        </div>
      </section>
    </main>
  );
}
