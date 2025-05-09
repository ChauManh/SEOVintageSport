import Image from "next/image";
import { Metadata } from "next";
import mockProducts from "@/data/mockProduct";
import mockBlog from "@/data/mockBlog";
import Link from "next/link";

// SEO Metadata
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
    url: "https://www.aodaucodienwtm.com/",
    type: "website",
    images: [
      {
        url: "/asset/logo.png",
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
    images: ["/asset/logo.png"],
  },
};

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto p-4">
      {/* Header */}
      <header className="flex justify-center items-center py-6 bg-gray-700 mb-4 rounded-lg">
        <Image
          src="/asset/logo.png"
          alt="WTM Logo - Cửa hàng áo quần thể thao cổ điển"
          width={240}
          height={240}
          className="rounded-full"
          priority
        />
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-6 my-6 text-lg font-medium text-white border border-white rounded-lg p-4 bg-gray-700">
        <Link href="/" className="hover:text-blue-600">
          Trang chủ
        </Link>
        <Link href="/product" className="hover:text-blue-600">
          Sản phẩm
        </Link>
        <Link href="/blog" className="hover:text-blue-600">
          Blog
        </Link>
      </nav>

      {/* Introduction */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-50">
          WTM - Áo Bóng Đá Cổ Điển Chính Hãng, Giá Tốt
        </h1>
        <p className="text-gray-50 mt-2 text-lg">
          Chuyên cung cấp <strong>áo đấu vintage</strong> từ các CLB Châu Âu nổi
          tiếng. Hàng đẹp, chất lượng, giao nhanh toàn quốc.
        </p>
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          🛒 Sản Phẩm Nổi Bật
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <article
              key={product.slug}
              className="border rounded-lg shadow hover:shadow-lg transition bg-white overflow-hidden"
              itemScope
              itemType="https://schema.org/Product"
            >
              <Image
                src={product.image}
                alt={`Áo đấu ${product.name}`}
                width={400}
                height={300}
                className="w-full h-[250px] object-cover"
                loading="lazy"
                itemProp="image"
              />
              <div className="p-4">
                <h3
                  className="text-lg font-semibold text-black"
                  itemProp="name"
                >
                  {product.name}
                </h3>
                <p className="text-gray-600 font-medium">
                  Giá:{" "}
                  <span
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    <span itemProp="priceCurrency" content="VND">
                      ₫
                    </span>
                    <span itemProp="price">{product.price}</span>
                  </span>
                </p>
                <p className="text-gray-500 text-sm">
                  Tình trạng: {product.condition}
                </p>
                <Link
                  href={`/product/${product.slug}`}
                  className="text-blue-600 hover:underline mt-2 inline-block"
                  aria-label={`Xem chi tiết ${product.name}`}
                >
                  Xem chi tiết →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          📝 Tin Tức Mới Nhất
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockBlog.map((blog) => (
            <article
              key={blog.id}
              className="border rounded-lg shadow hover:shadow-lg transition bg-white overflow-hidden"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <Image
                src={blog.image}
                alt={`Ảnh blog: ${blog.title}`}
                width={600}
                height={400}
                className="w-full h-[250px] object-cover"
                loading="lazy"
                itemProp="image"
              />
              <div className="p-4">
                <h3
                  className="text-lg text-black font-semibold mb-1"
                  itemProp="headline"
                >
                  {blog.title}
                </h3>
                <p
                  className="text-gray-600 text-sm mb-2"
                  itemProp="description"
                >
                  {blog.excerpt}
                </p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-blue-600 hover:underline inline-block"
                  aria-label={`Đọc thêm: ${blog.title}`}
                >
                  Đọc thêm →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Xem tất cả bài viết
          </Link>
        </div>
      </section>

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "WTM Vintage Sport",
            url: "https://www.aodaucodienwtm.com",
            description:
              "Cửa hàng chuyên cung cấp áo quần thể thao cổ điển, áo đấu vintage từ các CLB châu Âu. Hàng tuyển, chất lượng cao, giá tốt.",
            publisher: {
              "@type": "Organization",
              name: "WTM Vintage Sport",
              url: "https://www.aodaucodienwtm.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.aodaucodienwtm.com/asset/logo.png",
                width: 500,
                height: 500,
              },
            },
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.aodaucodienwtm.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </main>
  );
}
