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
    <main className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
        Hướng Dẫn Toàn Diện Về Áo Bóng Đá Cổ Điển
      </h1>
      <p className="text-gray-700 leading-relaxed mb-6">
        Áo bóng đá cổ điển (vintage football shirts) không chỉ là một món đồ
        thời trang mà còn là một phần ký ức bóng đá. Từ những chiếc áo đấu gắn
        với Maradona, Beckham, đến thời kỳ hoàng kim của các CLB như MU, AC
        Milan, Juventus... việc sở hữu một chiếc áo đấu vintage giống như giữ
        lại một phần lịch sử.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          1. Lịch sử áo bóng đá cổ điển
        </h2>
        <p className="text-gray-700 mb-4">
          Áo bóng đá bắt đầu có thiết kế đặc trưng từ những năm 1970s, nhưng
          thực sự bùng nổ vào những năm 90s với các hãng như Adidas, Umbro,
          Kappa. Mỗi thời kỳ mang một phong cách riêng biệt:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>1980s: Đơn giản, màu sắc đậm, logo CLB nhỏ</li>
          <li>
            1990s: Thiết kế táo bạo, hoạ tiết lớn, logo nhà tài trợ nổi bật
          </li>
          <li>
            2000s: Bắt đầu chuyển sang phong cách hiện đại, co giãn, slim fit
          </li>
        </ul>
        <p className="mt-2 text-blue-600">
          → <Link href="/blog/lich-su-ao-dau-mu">Xem lịch sử áo đấu MU</Link>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          2. Cách phân biệt áo đấu thật – giả
        </h2>
        <p className="text-gray-700 mb-4">
          Trên thị trường có 3 loại áo phổ biến: Authentic (thật), Replica
          (phiên bản thương mại), và Fake (nhái). Dưới đây là cách phân biệt:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>Authentic</strong>: Vải nhẹ, có tem chính hãng, mã QR, logo
            thêu/in sắc nét
          </li>
          <li>
            <strong>Replica</strong>: Gần giống bản gốc, dành cho fan, chất
            lượng ổn
          </li>
          <li>
            <strong>Fake</strong>: Chất vải thô, logo lệch, tem sai, nhanh hỏng
          </li>
        </ul>
        <p className="mt-2 text-blue-600">
          →{" "}
          <Link href="/blog/phan-biet-ao-dau-fake-real">
            Xem hướng dẫn chi tiết
          </Link>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          3. Mẹo phối đồ với áo bóng đá vintage
        </h2>
        <p className="text-gray-700 mb-4">
          Áo đấu cổ điển không chỉ dành cho sân bóng – bạn hoàn toàn có thể mix
          đồ cực chất:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Phối với quần jean rách, giày sneaker trắng</li>
          <li>Mặc ngoài hoodie nhẹ vào mùa lạnh</li>
          <li>Thêm phụ kiện như mũ bucket, kính retro</li>
        </ul>
        <p className="mt-2 text-blue-600">
          →{" "}
          <Link href="/blog/phoi-do-voi-ao-vintage">
            Gợi ý phối đồ cực chất với áo vintage
          </Link>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          4. Bảo quản áo bóng đá cổ điển
        </h2>
        <p className="text-gray-700 mb-4">
          Vì là sản phẩm lâu năm, áo vintage cần bảo quản kỹ để giữ form, không
          bong logo:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Giặt tay bằng nước lạnh, không dùng máy sấy</li>
          <li>Lộn trái áo khi giặt để bảo vệ logo</li>
          <li>Trẻo ở nơi khô thoáng, tránh ánh nắng trực tiếp</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          5. Mua áo bóng đá cổ điển ở đâu uy tín?
        </h2>
        <p className="text-gray-700 mb-4">
          Gợi ý một số nơi bạn có thể mua áo đấu cổ điển chất lượng:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>WTM Vintage Sport</strong> – Hàng tuyển, chính hãng, giao
            hàng toàn quốc → <Link href="/product">Xem sản phẩm</Link>
          </li>
          <li>Group Facebook sưu tầm áo đấu cổ điển</li>
          <li>Trang nước ngoài: classicfootballshirts.co.uk, Subside Sports</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          6. Kết luận
        </h2>
        <p className="text-gray-700 mb-6">
          Áo bóng đá cổ điển không chỉ là món đồ thời trang – mà còn là giá trị
          tinh thần. Nếu bạn là người yêu bóng đá, đừng bỏ qua cơ hội sở hữu một
          chiếc áo gắn liền với lịch sử. Và hãy nhớ: chọn nơi uy tín, hiểu rõ
          cách phân biệt, và bảo quản tốt để giữ mãi giá trị chiếc áo theo thời
          gian.
        </p>
        <div className="text-center">
          <Link
            href="/product"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Xem bộ sưu tập áo đấu cổ điển →
          </Link>
        </div>
      </section>
    </main>
  );
}
