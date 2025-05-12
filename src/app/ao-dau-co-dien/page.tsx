// app/ao-bong-da-co-dien/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Áo Đấu, Áo Bóng Đá Cổ Điển: Kiến Thức Tổng Hợp | WTM",
  description:
    "Tổng hợp kiến thức đầy đủ về áo đấu, áo bóng đá cổ điển: lịch sử, cách phân biệt thật - giả, mẹo phối đồ và địa chỉ mua uy tín.",
  alternates: {
    canonical: "https://www.aodaucodienwtm.com/ao-bong-da-co-dien",
  },
};

export default function VintageFootballGuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-xl rounded-2xl border border-gray-200">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
          📘 Hướng Dẫn Toàn Diện Về Áo Bóng Đá Cổ Điển
        </h1>
        <p className="text-gray-600 text-lg">
          Cẩm nang giúp bạn hiểu sâu hơn về áo đấu vintage – từ nguồn gốc lịch
          sử đến cách bảo quản và phối đồ thời thượng.
        </p>
      </header>

      {/* Lịch sử */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          1. Lịch sử áo bóng đá cổ điển
        </h2>
        <p className="text-gray-700 mb-4">
          Áo bóng đá đã phát triển mạnh từ những năm 70s và đạt đỉnh về thiết kế
          trong thập niên 90s. Những mẫu áo cổ điển không chỉ đơn thuần là trang
          phục thi đấu mà còn thể hiện bản sắc, văn hóa và thời đại bóng đá:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>1980s: Màu sắc đơn giản, vải dày, logo nhỏ</li>
          <li>
            1990s: Họa tiết độc đáo, logo nhà tài trợ to rõ, đậm chất retro
          </li>
          <li>2000s: Thiết kế gọn gàng, co giãn, phù hợp thi đấu tốc độ cao</li>
        </ul>
        <p className="mt-2 text-blue-600">
          → <Link href="/blog/lich-su-ao-dau-mu">Xem lịch sử áo đấu MU</Link>
        </p>
      </section>

      {/* Phân biệt thật giả */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          2. Cách phân biệt áo đấu thật – giả
        </h2>
        <p className="text-gray-700 mb-4">
          Tránh mua phải hàng kém chất lượng bằng cách nắm rõ 3 loại áo chính:
          Authentic (chính hãng), Replica (bản thương mại), và Fake (giả).
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>Authentic</strong>: Vải nhẹ, mỏng, tem chính hãng có mã QR
            hoặc NFC, logo in/thêu sắc nét
          </li>
          <li>
            <strong>Replica</strong>: Gần giống bản gốc, dùng cho cổ động viên,
            giá rẻ hơn
          </li>
          <li>
            <strong>Fake</strong>: Vải kém chất, logo sai, đường may lỗi, dễ
            bong tróc
          </li>
        </ul>
        <p className="mt-2 text-blue-600">
          →{" "}
          <Link href="/blog/phan-biet-ao-dau-fake-real">
            Xem hướng dẫn chi tiết
          </Link>
        </p>
      </section>

      {/* Phối đồ */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          3. Mẹo phối đồ với áo bóng đá vintage
        </h2>
        <p className="text-gray-700 mb-4">
          Áo đấu vintage là lựa chọn thời trang táo bạo nếu bạn biết phối đúng.
          Hãy thử kết hợp cùng:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>👖 Quần jean rách, giày sneaker trắng – phong cách streetwear</li>
          <li>🧥 Áo khoác bomber, denim – retro cá tính</li>
          <li>🎒 Túi chéo, mũ bucket, kính râm – vibe thể thao đường phố</li>
        </ul>
        <p className="mt-2 text-blue-600">
          →{" "}
          <Link href="/blog/phoi-do-voi-ao-vintage">
            Gợi ý phối đồ cực chất với áo vintage
          </Link>
        </p>
      </section>

      {/* Bảo quản */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          4. Bảo quản áo bóng đá cổ điển
        </h2>
        <p className="text-gray-700 mb-4">
          Một chiếc áo vintage đẹp cần được giữ gìn đúng cách để bảo tồn giá
          trị:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>🧼 Giặt tay với nước lạnh, không dùng chất tẩy mạnh</li>
          <li>🔁 Lộn trái áo khi giặt để giữ logo và họa tiết</li>
          <li>☀️ Phơi nơi râm mát, tránh ánh nắng trực tiếp</li>
          <li>🧴 Dùng túi chống ẩm khi cất áo lâu dài</li>
        </ul>
        <p className="mt-2 text-blue-600">
          →{" "}
          <Link href="/blog/bao-quan-ao-bong-da">
            Xem bài hướng dẫn bảo quản
          </Link>
        </p>
      </section>

      {/* Mua ở đâu */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          5. Mua áo bóng đá cổ điển ở đâu uy tín?
        </h2>
        <p className="text-gray-700 mb-4">
          Bạn nên lựa chọn các địa chỉ có độ tin cậy cao, có feedback từ cộng
          đồng:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>🏪 WTM Vintage Sport</strong> – Hàng sưu tầm, tuyển chọn,
            chính hãng →{" "}
            <Link href="/product" className="text-blue-600">
              Xem sản phẩm
            </Link>
          </li>
          <li>💬 Nhóm Facebook chuyên về áo bóng đá cổ điển</li>
          <li>
            🌍 Website quốc tế: classicfootballshirts.co.uk, Subside Sports
          </li>
        </ul>
      </section>

      {/* Tổng kết */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          6. Tổng kết
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          Áo bóng đá cổ điển là món đồ mang đậm giá trị văn hóa, cảm xúc và thời
          trang. Nếu bạn là người yêu bóng đá thực thụ, hãy đầu tư cho mình một
          vài chiếc áo biểu tượng. Đồng thời, hãy mua ở nơi uy tín và biết cách
          bảo quản để giữ áo luôn như mới.
        </p>
        <Link
          href="/product"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-lg"
        >
          🎽 Khám phá bộ sưu tập áo đấu cổ điển →
        </Link>
      </section>
    </main>
  );
}
