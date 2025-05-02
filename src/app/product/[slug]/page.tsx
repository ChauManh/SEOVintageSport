import mockProducts from "@/data/mockProduct";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = mockProducts.find((p) => p.slug === slug);
  if (!product) return { title: "Không tìm thấy sản phẩm" };

  return {
    title: `${product.name} - Mua áo quần bóng đá cổ điển | WTM`,
    description: `Tìm ${product.name} - ${product.condition} giá ${product.price}. Cửa hàng WTM chuyên bán áo đấu cổ điển (vintage) CLB Châu Âu.`,
    keywords: [
      product.name.toLowerCase(),
      "mua áo bóng đá cổ điển",
      "áo đấu vintage",
      "WTM shop",
      "cửa hàng áo thể thao",
      "áo bóng đá CLB Châu Âu",
      `mua ${product.name} giá tốt`,
      `tìm ${product.name} chính hãng`,
    ],
  };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const product = mockProducts.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <main className="max-w-screen-xl mx-auto p-4">
      {/* Header */}
      <header className="flex items-center justify-between py-4 border-b bg-gray-700 mb-8 px-6 rounded-lg shadow-lg">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/asset/logo.png"
            alt="WTM Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-white">
            WTM Vintage Sport
          </span>
        </Link>
        <Link
          href="/"
          className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          🏠 Trang chủ
        </Link>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Product Details */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-white rounded-lg shadow p-6">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="rounded-lg mx-auto"
            />
            <h1 className="text-3xl font-bold mt-6 text-black">{product.name}</h1>
            <p className="text-xl text-green-600 mt-2">
              💰 Giá: {product.price}
            </p>
            <p className="text-gray-600 mt-1">
              📌 Tình trạng: {product.condition}
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Aggregate Rating */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              ⭐ Đánh giá tổng quát
            </h2>
            <div className="flex items-center space-x-3">
              <span className="text-yellow-500 text-2xl">
                {"★".repeat(
                  Math.floor(Number(product.aggregateRating.ratingValue))
                )}
                {"☆".repeat(
                  5 - Math.floor(Number(product.aggregateRating.ratingValue))
                )}
              </span>
              <span className="text-lg text-gray-700">
                {product.aggregateRating.ratingValue} (
                {product.aggregateRating.reviewCount} đánh giá)
              </span>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6 text-black">
              💬 Đánh giá chi tiết
            </h2>
            <div className="space-y-6">
              {product.review.map((rev, idx) => (
                <div key={idx} className="border-b pb-4">
                  <p className="font-semibold text-lg text-gray-700">
                    {rev.author?.name || "Ẩn danh"}
                  </p>
                  <p className="text-sm text-gray-500">{rev.datePublished}</p>
                  <p className="mt-2 text-gray-700">{rev.reviewBody}</p>
                  <div className="mt-2 text-yellow-500">
                    {"★".repeat(
                      Math.floor(Number(rev.reviewRating.ratingValue))
                    )}
                    {"☆".repeat(
                      5 - Math.floor(Number(rev.reviewRating.ratingValue))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="bg-gray-100 rounded-lg shadow p-6 h-fit">
          <h3 className="text-xl font-bold mb-4 text-black">📢 Sản phẩm liên quan</h3>
          <ul className="space-y-4">
            {mockProducts
              .filter((item) => item.slug !== product.slug)
              .slice(0, 5)
              .map((related) => (
                <li key={related.id} className="flex items-center space-x-4">
                  <Image
                    src={related.image}
                    alt={related.name}
                    width={60}
                    height={60}
                    className="rounded-md"
                  />
                  <Link
                    href={`/product/${related.slug}`}
                    className="text-blue-600 hover:underline text-lg flex-1"
                  >
                    {related.name}
                  </Link>
                </li>
              ))}
          </ul>
        </aside>
      </div>

      {/* Structured Data: Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: product.image,
            description: product.description,
            brand: {
              "@type": "Brand",
              name: "WTM Vintage Sport",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: product.aggregateRating.ratingValue,
              reviewCount: product.aggregateRating.reviewCount,
            },
            review: product.review.map((rev) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: rev.author.name,
              },
              datePublished: rev.datePublished,
              reviewBody: rev.reviewBody,
              reviewRating: {
                "@type": "Rating",
                ratingValue: rev.reviewRating.ratingValue,
                bestRating: "5",
                worstRating: "1",
              },
            })),
            offers: {
              "@type": "Offer",
              priceCurrency: "VND",
              priceValidUntil: "2025-12-31",
              price: product.price,
              availability: "https://schema.org/InStock",
              url: `https://wtm-vintage-sport.vercel.app/product/${product.slug}`,
            },
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: {
                "@type": "MonetaryAmount",
                value: "30000",
                currency: "VND",
              },
              shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: "VN",
              },
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                handlingTime: {
                  "@type": "QuantitativeValue",
                  minValue: 1,
                  maxValue: 2,
                  unitCode: "d",
                },
                transitTime: {
                  "@type": "QuantitativeValue",
                  minValue: 2,
                  maxValue: 4,
                  unitCode: "d",
                },
              },
            },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              applicableCountry: "VN",
              returnPolicyCategory:
                "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: 7,
              returnMethod: "https://schema.org/ReturnByMail",
              refundType: "https://schema.org/RefundMoney",
              returnFees: "https://schema.org/FreeReturn",
            },
          }),
        }}
      />
    </main>
  );
}
