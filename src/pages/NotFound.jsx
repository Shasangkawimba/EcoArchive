import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <span className="text-6xl mb-4">🍂</span>
      <h1 className="font-display text-4xl font-bold text-[#3A5A40] mb-3">
        404 — Halaman Tidak Ditemukan
      </h1>
      <p className="text-[#555] max-w-sm mb-8">
        Sepertinya halaman yang kamu cari sudah berpindah atau tidak pernah ada.
      </p>
      <Link
        to="/"
        className="bg-[#3A5A40] text-white px-7 py-3 rounded-full font-medium hover:bg-[#2F4A33] transition"
      >
        Kembali ke Beranda
      </Link>
    </section>
  );
}