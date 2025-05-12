// app/product/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import mockProducts from "@/data/mockProduct";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = mockProducts.find((p) => p.slug === slug);
  if (!product) return { title: "Không tìm thấy sản phẩm" };

  const productUrl = `https://www.aodaucodienwtm.com/product/${slug}`;

  return {
    title: `${product.name} – Mua áo bóng đá cổ điển | WTM Vintage Sport`,
    description: `${product.name} – ${product.condition}, giá ${product.price} VND. WTM Vintage Sport chuyên bán áo đấu cổ điển, vintage chính hãng từ các CLB châu Âu.`,
    keywords: [
      product.name.toLowerCase(),
      "mua áo bóng đá cổ điển",
      "áo đấu vintage",
      "WTM Vintage Sport",
      `mua ${product.name} giá tốt`,
      `áo ${product.name} chính hãng`,
      `áo ${product.name} giá rẻ`,
      `mua ${product.name} online`,
      `mua áo bóng đá ${product.name}`,
      `áo bóng đá cổ điển ${product.name}`,
      `áo đấu ${product.name}`,
      `áo đấu vintage ${product.name}`,
      `áo bóng đá cổ điển giá rẻ`,
      `áo bóng đá cổ điển chính hãng`,
      `áo bóng đá cổ điển đẹp`,
      `áo bóng đá cổ điển chất lượng`,
    ],
    alternates: { canonical: productUrl },
    openGraph: {
      title: product.name,
      description: product.description,
      url: productUrl,
      siteName: "WTM Vintage Sport",
      type: "website",
      images: [
        {
          url: `https://www.aodaucodienwtm.com${product.image}`,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [`https://www.aodaucodienwtm.com${product.image}`],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const product = mockProducts.find((p) => p.slug === slug);
  if (!product) return notFound();

  const productUrl = `https://www.aodaucodienwtm.com/product/${slug}`;

  return (
    <main className="max-w-screen-xl mx-auto p-4">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between bg-gray-800 text-white rounded-lg p-6 mb-8">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/asset/logo.png"
            alt="WTM Vintage Sport Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">WTM Vintage Sport</span>
        </Link>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/" className="hover:text-blue-400">
            Trang chủ
          </Link>
          <Link href="/product" className="hover:text-blue-400">
            Sản phẩm
          </Link>
          <Link href="/blog" className="hover:text-blue-400">
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
          <li>
            <Link href="/product" className="hover:underline">
              Sản phẩm
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="font-semibold">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Product Details */}
        <section className="lg:col-span-3 space-y-8">
          <article className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <Image
                src={product.image}
                alt={`${product.name} – áo bóng đá cổ điển`}
                width={600}
                height={600}
                className="rounded-xl w-full max-w-md mx-auto"
                loading="lazy"
              />
              <div className="flex-1 space-y-4">
                <h1 className="text-4xl font-extrabold text-gray-900">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-700">
                  🏷️ {product.brand} • 📆 Năm: {product.year || "Đang cập nhật"}
                </p>
                <p className="text-2xl text-green-600 font-semibold">
                  💰 Giá: {product.price.toLocaleString()} VND
                </p>
                <p className="text-gray-700">
                  📦 Tình trạng: {product.condition}
                </p>
                <p className="text-gray-800 leading-relaxed border-t pt-4">
                  {product.description}
                </p>
                <div className="text-sm mt-4 text-gray-500">
                  🚚 Phí vận chuyển:{" "}
                  {product.shippingDetails.rate.toLocaleString()} VND • Chính
                  sách đổi trả trong {product.returnPolicy.days} ngày
                </div>
              </div>
            </div>
          </article>

          <section className="bg-yellow-50 rounded-xl shadow p-6 border border-yellow-100">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              ⭐ Đánh giá tổng quát
            </h2>
            <div className="flex items-center space-x-3">
              <div className="text-yellow-500 text-2xl">
                {"★".repeat(Math.floor(+product.aggregateRating.ratingValue))}
                {"☆".repeat(
                  5 - Math.floor(+product.aggregateRating.ratingValue)
                )}
              </div>
              <div className="text-gray-800 text-base">
                {product.aggregateRating.ratingValue} điểm •{" "}
                {product.aggregateRating.reviewCount} đánh giá
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              💬 Đánh giá chi tiết
            </h2>
            <div className="space-y-6">
              {product.review.map((rev, i) => (
                <div key={i} className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-800">
                      {rev.author?.name || "Ẩn danh"}
                    </p>
                    <span className="text-sm text-gray-500">
                      {rev.datePublished}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-800">{rev.reviewBody}</p>
                  <div className="text-yellow-500 mt-1">
                    {"★".repeat(Math.floor(+rev.reviewRating.ratingValue))}
                    {"☆".repeat(5 - Math.floor(+rev.reviewRating.ratingValue))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* Related Products */}
        <aside className="bg-gray-100 rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-900">
            📢 Sản phẩm liên quan
          </h3>
          <ul className="space-y-4">
            {mockProducts
              .filter((p) => p.slug !== product.slug)
              .slice(0, 5)
              .map((rel) => (
                <li key={rel.slug} className="flex items-center space-x-4">
                  <Image
                    src={rel.image}
                    alt={`${rel.name} thumbnail`}
                    width={60}
                    height={60}
                    className="rounded-md"
                    loading="lazy"
                  />
                  <Link
                    href={`/product/${rel.slug}`}
                    className="text-blue-600 hover:underline flex-1"
                  >
                    {rel.name}
                  </Link>
                </li>
              ))}
          </ul>
        </aside>
      </div>

      {/* JSON-LD for BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Trang chủ",
                item: "https://www.aodaucodienwtm.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Sản phẩm",
                item: "https://www.aodaucodienwtm.com/product",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: productUrl,
              },
            ],
          }),
        }}
      />

      {/* JSON-LD for Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: [`https://www.aodaucodienwtm.com${product.image}`],
            description: product.description,
            sku: product.slug,
            brand: { "@type": "Brand", name: "WTM Vintage Sport" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: product.aggregateRating.ratingValue,
              reviewCount: product.aggregateRating.reviewCount,
            },
            review: product.review.map((rev) => ({
              "@type": "Review",
              author: { "@type": "Person", name: rev.author.name },
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
              url: productUrl,
              priceCurrency: "VND",
              price: product.price,
              priceValidUntil: "2025-12-31",
              availability: "https://schema.org/InStock",
              shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingRate: {
                  "@type": "MonetaryAmount",
                  value: 30000,
                  currency: "VND",
                },
                shippingDestination: {
                  "@type": "DefinedRegion",
                  addressCountry: "VN",
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
            },
          }),
        }}
      />
    </main>
  );
}
