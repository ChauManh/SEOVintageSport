import Image from "next/image";
import { Metadata } from "next";
import mockProducts from "@/data/mockProduct";
import mockBlog from "@/data/mockBlog";
import Link from "next/link";

// Metadata SEO
export const metadata: Metadata = {
  title: "WTM - Cửa hàng áo bóng đá cổ điển, áo đấu vintage giá rẻ",
  description:
    "Mua áo bóng đá cổ điển, áo đấu vintage chính hãng từ các CLB Châu Âu với giá rẻ. Hàng tuyển, chất lượng tốt, giao hàng nhanh chóng.",
  keywords: [
    "áo bóng đá cổ điển",
    "áo đấu vintage",
    "WTM shop",
    "cửa hàng áo thể thao WTM",
    "WTM",
    "áo bóng đá CLB Châu Âu",
  ],
  openGraph: {
    title: "WTM - Cửa hàng áo quần bóng đá cổ điển",
    description: "Mua áo quần bóng đá cổ điển, hàng tuyển từ các CLB Châu Âu.",
    url: "https://wtm-vintage-sport.vercel.app/",
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
    title: "WTM - Cửa hàng áo quần bóng đá cổ điển",
    description:
      "Mua bán áo quần bóng đá cổ điển, hàng tuyển từ các CLB Châu Âu.",
    images: ["/logo.png"],
  },
};

// Trang Home
export default function Home() {
  return (
    <main className="container mx-auto p-4">
      {/* Header với logo */}
      <header className="flex justify-center items-center py-4 bg-gray-600 mb-1">
        <Image
          src="/logo.png"
          alt="WTM Logo - Cửa hàng áo quần thể thao cổ điển"
          width={300}
          height={300}
          priority={true}
        />
      </header>

      <nav className="text-sm text-gray-600">
        &gt;
        <Link href="/" className="hover:text-blue-500">
          Trang chủ
        </Link>{" "}
      </nav>

      {/* Nội dung trang */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">
          WTM - Mua Áo Bóng Đá Cổ Điển, Áo Đấu Vintage Giá Rẻ
        </h1>
        <p className="text-gray-600 mt-2">
          Chuyên cung cấp <strong>áo quần đấu cổ điển (vintage)</strong>, hàng
          tuyển từ các CLB Châu Âu.
        </p>
      </section>

      {/* Danh sách sản phẩm */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-center">🛒 Sản Phẩm Nổi Bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 mb-6">
          {mockProducts.map((product) => (
            <div key={product.slug} className="border p-4 rounded-lg shadow-lg">
              <Image
                src={product.image}
                alt={`Mẫu áo bóng đá cổ điển ${product.name} - Áo bóng đá cổ điển (vintage)`}
                width={300}
                height={300}
                className="mx-auto"
              />
              <h3 className="text-xl font-bold mt-2">{product.name}</h3>
              <p className="text-gray-700 font-semibold">
                Giá: {product.price}
              </p>
              <p className="text-gray-500">Tình trạng: {product.condition}</p>
              <Link
                href={`/product/${product.slug}`}
                className="text-blue-500 mt-2 inline-block"
              >
                Xem chi tiết {product.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Danh sách blog */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold mt-8">📝 Blog & Tin Tức Mới Nhất</h2>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "WTM Vintage Sport",
            url: "https://wtm-vintage-sport.vercel.app",
            description:
              "Cửa hàng chuyên cung cấp áo quần thể thao cổ điển từ các CLB châu Âu.",
            publisher: {
              "@type": "Organization",
              name: "WTM Vintage Sport",
              logo: {
                "@type": "ImageObject",
                url: "/asset/logo.png",
              },
            },
          }),
        }}
      />
    </main>
  );
}
