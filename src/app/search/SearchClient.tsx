// app/search/SearchClient.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import mockProducts from "@/data/mockProduct";
import Image from "next/image";
import Link from "next/link";

const suggestedKeywords = [
  "manchester united 1999",
  "real madrid 2002",
  "bayern munich 2013",
];

export default function SearchClient() {
  const params = useSearchParams();
  const router = useRouter();
  const query = params.get("query")?.toLowerCase() || "";

  const results = mockProducts.filter((p) =>
    p.name.toLowerCase().includes(query)
  );

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        🔍 Kết quả tìm kiếm cho:{" "}
        <span className="text-blue-600 italic">“{query}”</span>
      </h1>

      <div className="mb-6">
        <button
          onClick={() => router.push("/")}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
        >
          ⬅️ Quay lại Trang chủ
        </button>
      </div>

      {results.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-gray-500 text-lg mb-2">
            Không tìm thấy sản phẩm phù hợp.
          </p>
          <p className="text-sm mb-4">
            Hãy thử lại với từ khóa khác hoặc chọn một gợi ý bên dưới:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {suggestedKeywords.map((kw) => (
              <button
                key={kw}
                onClick={() =>
                  router.push(`/search?query=${encodeURIComponent(kw)}`)
                }
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition"
              >
                {kw}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product.slug}
              className="border rounded-lg shadow hover:shadow-lg transition bg-white"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={250}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Giá: ₫{product.price.toLocaleString()}
                </p>
                <p className="text-sm text-yellow-600">
                  ⭐ {product.aggregateRating.ratingValue} –{" "}
                  {product.aggregateRating.reviewCount} đánh giá
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
