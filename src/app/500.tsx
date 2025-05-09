"use client";
import Link from "next/link";

export default function Error500() {
  return (
    <main className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
      <p className="text-xl text-gray-700 mb-6">
        Có lỗi xảy ra từ hệ thống. Vui lòng thử lại sau.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        ← Quay về trang chủ
      </Link>
    </main>
  );
}
