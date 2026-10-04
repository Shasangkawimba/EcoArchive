import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-[#2F3E2E] text-[#F5F0E6] rounded-2xl p-8 md:p-12 my-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Teks Utama */}
        <div className="space-y-5 text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Fashion Ramah Lingkungan, Terinspirasi dari Alam.
          </h1>
          <p className="text-[#F5F0E6]/90 text-base md:text-lg leading-relaxed">
            EcoArchive menghadirkan pakaian dan tas dari bahan ramah lingkungan, dirancang untuk menemani gaya hidupmu tanpa merusak bumi.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/program"
              className="px-6 py-3 bg-[#C97B63] text-white font-medium rounded-lg hover:bg-[#b56952] transition text-sm"
            >
              Lihat Koleksi
            </Link>
            <a
              href="#footer"
              className="px-6 py-3 border border-[#F5F0E6]/40 text-[#F5F0E6] font-medium rounded-lg hover:bg-white/10 transition text-sm"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>

        {/* Gambar Hero */}
        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
          <img
            src="/images/bg.jpg"
            alt="Koleksi EcoArchive"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}