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
    "WTM sản phẩm",
    "danh sách áo đấu",
  ],
  openGraph: {
    title: "Danh sách sản phẩm | WTM Vintage Sport",
    description:
      "Khám phá các mẫu áo bóng đá cổ điển đến từ những CLB hàng đầu Châu Âu.",
    url: "https://wtm-vintage-sport.vercel.app/product",
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
    title: "Sản phẩm áo bóng đá cổ điển | WTM",
    description: "Xem toàn bộ sản phẩm áo đấu vintage chính hãng từ WTM.",
    images: ["/asset/logo.png"],
  },
};

export default function ProductPage() {
  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Tất Cả Sản Phẩm
      </h1>

      {/* Lưới sản phẩm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <article
            key={product.slug}
            className="border rounded-lg shadow hover:shadow-lg transition bg-white"
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
              <h2 className="text-lg font-semibold text-black" itemProp="name">
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
                className="text-blue-600 hover:underline inline-block mt-2"
                aria-label={`Xem chi tiết ${product.name}`}
              >
                Xem chi tiết →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Danh sách sản phẩm | WTM Vintage Sport",
            url: "https://wtm-vintage-sport.vercel.app/product",
            mainEntity: mockProducts.map((product) => ({
              "@type": "Product",
              name: product.name,
              image: product.image,
              description: product.description,
              brand: {
                "@type": "Brand",
                name: product.brand,
              },
              offers: {
                "@type": "Offer",
                priceCurrency: product.priceCurrency,
                price: product.price,
                availability: `https://schema.org/${product.availability}`,
                url: `https://wtm-vintage-sport.vercel.app/product/${product.slug}`,
              },
              aggregateRating: product.aggregateRating,
            })),
          }),
        }}
      />
    </main>
  );
}
