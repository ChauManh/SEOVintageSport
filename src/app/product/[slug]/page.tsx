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
  const { slug } = await params; // Sử dụng await để giải quyết Promise

  const product = mockProducts.find((p) => p.slug === slug);
  if (!product) return { title: "Không tìm thấy sản phẩm" };

  return {
    title: `${product.name} - Cửa hàng áo quần bóng đá cũ`,
    description: `Mua ${product.name} với giá ${product.price}. ${product.condition}`,
    openGraph: {
      title: `${product.name} - Cửa hàng áo quần bóng đá cũ`,
      description: `Mua ${product.name} với giá ${product.price}. ${product.condition}`,
      url: `https://wtm-vintage-sport.vercel.app/product/${product.slug}`,
      type: "website",
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - WTM | Áo quần bóng đá cũ`,
      description: `Áo đấu vintage ${product.name} - Giá ${product.price}. Tình trạng ${product.condition}.`,
      images: [product.image],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params; // Giải quyết Promise

  const product = mockProducts.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <main className="container mx-auto p-4">
      {/* Header */}
      <header className="flex items-center justify-between py-4 border-b bg-gray-600 mb-6 px-6 rounded-lg">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="WTM Logo"
            width={160}
            height={160}
            className="rounded-full"
          />
          <span className="text-2xl font-semibold text-amber-50">WTM Blog</span>
        </Link>
        <Link
          href="/"
          className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          🏠 Quay lại Trang chủ
        </Link>
      </header>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sản phẩm chính */}
        <div className="lg:col-span-2 bg-white p-6 shadow-md rounded-lg border">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="mx-auto rounded-lg shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
          <p className="text-gray-700 text-xl font-semibold mt-2">
            💰 Giá: {product.price}
          </p>
          <p className="text-gray-500 mt-1">
            📌 Tình trạng: {product.condition}
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Sidebar: Bài viết liên quan */}
        <aside className="bg-gray-100 p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">📌Sản phẩm liên quan</h3>
          <ul className="space-y-3">
            {mockProducts
              .filter((b) => b.slug !== product.slug)
              .map((related) => (
                <li
                  key={related.id}
                  className="flex items-center space-x-4 bg-white p-3 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                >
                  <Image
                    src={related.image}
                    alt={related.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <Link
                    href={`/blog/${related.slug}`}
                    className="text-blue-600 hover:underline flex-1"
                  >
                    {related.name}
                  </Link>
                </li>
              ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
