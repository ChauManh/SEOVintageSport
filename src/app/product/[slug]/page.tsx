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
          url: product.image,
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
      images: [product.image],
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
          <article className="bg-white rounded-lg shadow p-6">
            <Image
              src={product.image}
              alt={`${product.name} – áo bóng đá cổ điển`}
              width={600}
              height={600}
              className="rounded-lg mx-auto"
            />
            <h1 className="text-3xl font-bold mt-6 text-gray-900">
              {product.name}
            </h1>
            <p className="text-xl text-green-600 mt-2">
              💰 Giá: {product.price} VND
            </p>
            <p className="text-gray-700 mt-1">
              📌 Tình trạng: {product.condition}
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              {product.description}
            </p>
          </article>

          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              ⭐ Đánh giá tổng quát
            </h2>
            <div className="flex items-center space-x-3">
              <span className="text-yellow-500 text-2xl">
                {"★".repeat(Math.floor(+product.aggregateRating.ratingValue))}
                {"☆".repeat(
                  5 - Math.floor(+product.aggregateRating.ratingValue)
                )}
              </span>
              <span className="text-gray-700">
                {product.aggregateRating.ratingValue} (
                {product.aggregateRating.reviewCount} đánh giá)
              </span>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              💬 Đánh giá chi tiết
            </h2>
            <div className="space-y-6">
              {product.review.map((rev, i) => (
                <div key={i} className="border-b pb-4">
                  <p className="font-semibold text-gray-800">
                    {rev.author?.name || "Ẩn danh"}
                  </p>
                  <p className="text-sm text-gray-500">{rev.datePublished}</p>
                  <p className="mt-2 text-gray-800">{rev.reviewBody}</p>
                  <div className="mt-2 text-yellow-500">
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
            image: [product.image],
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
            },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              applicableCountry: "VN",
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
