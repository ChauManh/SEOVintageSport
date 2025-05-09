import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  CheckSquare,
  CreditCard,
  Truck,
  Smile,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Chính Sách Đổi Trả | WTM Vintage Sport",
  description: "Tìm hiểu quy định đổi trả sản phẩm tại WTM Vintage Sport.",
  alternates: {
    canonical: "https://www.aodaucodienwtm.com/chinh-sach-doi-tra",
  },
};

export default function ReturnPolicyPage() {
  const policies = [
    {
      id: 1,
      title: "Thời gian đổi trả",
      content: (
        <>
          Khách hàng có thể yêu cầu đổi/trả hàng trong vòng{" "}
          <strong>7 ngày</strong> kể từ ngày nhận hàng.
        </>
      ),
      icon: <Clock className="w-6 h-6 text-blue-600" />,
    },
    {
      id: 2,
      title: "Điều kiện đổi trả",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Sản phẩm còn nguyên tem, mác, chưa qua sử dụng.</li>
          <li>Không bị rách, bẩn, hoặc có mùi lạ.</li>
          <li>Có đầy đủ hóa đơn hoặc mã đơn hàng.</li>
        </ul>
      ),
      icon: <CheckSquare className="w-6 h-6 text-green-600" />,
    },
    {
      id: 3,
      title: "Phương thức hoàn tiền",
      content: (
        <>
          Khách hàng có thể chọn hoàn tiền qua chuyển khoản ngân hàng hoặc đổi
          sang sản phẩm khác có giá trị tương đương.
        </>
      ),
      icon: <CreditCard className="w-6 h-6 text-purple-600" />,
    },
    {
      id: 4,
      title: "Chi phí đổi/trả",
      content: (
        <>
          WTM hỗ trợ <strong>miễn phí đổi/trả</strong> nếu sản phẩm lỗi do vận
          chuyển hoặc sản xuất. Trường hợp đổi vì lý do cá nhân, khách hàng vui
          lòng thanh toán phí vận chuyển hai chiều.
        </>
      ),
      icon: <Truck className="w-6 h-6 text-yellow-600" />,
    },
    {
      id: 5,
      title: "Liên hệ đổi/trả",
      content: (
        <div className="space-y-2">
          <p className="flex items-center">
            <Phone className="w-5 h-5 mr-2 text-blue-600" />
            <Link
              href="tel:0367485383"
              className="text-blue-600 hover:underline"
            >
              0367485383
            </Link>
          </p>
          <p className="flex items-center">
            <Mail className="w-5 h-5 mr-2 text-red-600" />
            <Link
              href="mailto:chaumanh1108@gmail.com"
              className="text-blue-600 hover:underline"
            >
              chaumanh1108@gmail.com
            </Link>
          </p>
        </div>
      ),
      icon: <Smile className="w-6 h-6 text-red-500" />,
    },
  ];

  return (
    <main className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Nút quay về trang chủ */}
        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Quay về Trang chủ
        </Link>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Chính Sách Đổi Trả
        </h1>
        <div className="space-y-6">
          {policies.map((policy) => (
            <div
              key={policy.id}
              className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition"
            >
              <div className="flex-shrink-0"> {policy.icon} </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {policy.id}. {policy.title}
                </h2>
                <div className="mt-2 text-gray-700"> {policy.content} </div>
              </div>
            </div>
          ))}
          {/* Hoặc thêm nút ở cuối */}
          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              ← Về Trang chủ
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
