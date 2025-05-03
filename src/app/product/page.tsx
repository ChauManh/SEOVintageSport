// app/product/page.tsx
import mockProducts from "@/data/mockProduct";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách sản phẩm | WTM Vintage Sport",
  description:
    "Khám phá các mẫu áo bóng đá cổ điển, áo đấu vintage đến từ những CLB hàng đầu Châu Âu. Hàng chất lượng, giá tốt.",
  keywords: [
    "áo bóng đá cổ điển",
    "áo đấu vintage",
    "mua áo bóng đá CLB Châu Âu",
    "WTM Vintage Sport",
    "danh sách áo đấu",
  ],
  metadataBase: new URL("https://www.aodaucodienwtm.com"),
  alternates: { canonical: "/product" },
  openGraph: {
    title: "Danh sách sản phẩm | WTM Vintage Sport",
    description:
      "Khám phá các mẫu áo bóng đá cổ điển đến từ những CLB hàng đầu Châu Âu.",
    url: "https://www.aodaucodienwtm.com/product",
    siteName: "WTM Vintage Sport",
    type: "website",
    images: [
      {
        url: "/asset/logo.png",
        width: 500,
        height: 500,
        alt: "WTM Vintage Sport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sản phẩm áo bóng đá cổ điển | WTM Vintage Sport",
    description: "Xem toàn bộ sản phẩm áo đấu vintage chính hãng từ WTM.",
    images: ["https://www.aodaucodienwtm.com/asset/logo.png"],
  },
};

export default function ProductPage() {
  return (
    <main className="max-w-screen-xl mx-auto p-4">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between bg-gray-800 text-white rounded-lg p-6 mb-8">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/asset/logo.png"
            alt="WTM Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">WTM Vintage Sport</span>
        </Link>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Trang chủ
          </Link>
          <Link href="/product" className="underline">
            Sản phẩm
          </Link>
          <Link href="/blog" className="hover:text-blue-400 transition-colors">
            Blog
          </Link>
        </nav>
      </header>

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
        <ol className="list-reset flex">
          <li>
            <Link href="/" className="hover:underline">
              Trang chủ
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="font-semibold">Sản phẩm</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Tất Cả Sản Phẩm
      </h1>

      {/* Grid sản phẩm */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <article
            key={product.slug}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            itemScope
            itemType="https://schema.org/Product"
          >
            <Image
              src={product.image}
              alt={`Áo đấu ${product.name}`}
              width={400}
              height={300}
              className="w-full h-[250px] object-cover"
              itemProp="image"
            />
            <div className="p-4">
              <h2
                className="text-lg font-semibold text-gray-900"
                itemProp="name"
              >
                {product.name}
              </h2>
              <p className="text-green-600 font-medium">
                Giá:{" "}
                <span
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <meta itemProp="priceCurrency" content="VND" />
                  <span itemProp="price">{product.price}</span>
                </span>
              </p>
              <p className="text-gray-500 text-sm">
                Tình trạng: {product.condition}
              </p>
              <Link
                href={`/product/${product.slug}`}
                className="inline-block mt-2 text-blue-600 hover:underline"
                aria-label={`Xem chi tiết ${product.name}`}
              >
                Xem chi tiết →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Danh sách sản phẩm | WTM Vintage Sport",
            url: "https://www.aodaucodienwtm.com/product",
            mainEntity: mockProducts.map((p) => ({
              "@type": "Product",
              name: p.name,
              image: p.image,
              description: p.description,
              brand: { "@type": "Brand", name: p.brand || "WTM Vintage Sport" },
              offers: {
                "@type": "Offer",
                priceCurrency: p.priceCurrency || "VND",
                price: p.price,
                availability: `https://schema.org/${
                  p.availability || "InStock"
                }`,
                url: `https://www.aodaucodienwtm.com/product/${p.slug}`,
              },
              aggregateRating: p.aggregateRating,
            })),
          }),
        }}
      />
    </main>
  );
}
