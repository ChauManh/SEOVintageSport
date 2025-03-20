import mockProducts from "@/data/mockProduct";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const product = mockProducts.find((p) => p.slug === slug);
  if (!product) return { title: "Không tìm thấy sản phẩm" };

  return {
    title: `${product.name} - Cửa hàng áo quần bóng đá cũ`,
    description: `Mua ${product.name} với giá ${product.price}. ${product.condition}`,
    openGraph: {
      title: `${product.name} - Cửa hàng áo quần bóng đá cũ`,
      description: `Mua ${product.name} với giá ${product.price}. ${product.condition}`,
      url: `https://wtm.com/product/${product.slug}`,
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



export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const product = mockProducts.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <main className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto border p-4 rounded-lg shadow-lg">
        <Image src={product.image} alt={product.name} width={300} height={300} className="mx-auto" />
        <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-700 text-xl font-semibold">Giá: {product.price}</p>
        <p className="text-gray-500">Tình trạng: {product.condition}</p>
      </div>
    </main>
  );
}


