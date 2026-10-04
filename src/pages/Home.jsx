import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
import { programs } from '../data/programs';

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-[#2F3E2E] text-[#F5F0E6] rounded-none p-8 md:p-12 my-6">
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
                className="px-6 py-3 bg-[#C97B63] text-white font-medium rounded-none hover:bg-[#b56952] transition text-sm"
              >
                Lihat Koleksi
              </Link>
              <Link
                to="/kontak"
                className="px-6 py-3 border border-[#F5F0E6]/40 text-[#F5F0E6] font-medium rounded-none hover:bg-white/10 transition text-sm"
              >
                Pesan Sekarang
              </Link>
            </div>
          </div>

          {/* Gambar Hero */}
          <div className="w-full h-64 md:h-80 rounded-none overflow-hidden">
            <img
              src="/images/bg.jpg"
              alt="Koleksi EcoArchive"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 1: Kenapa Memilih EcoArchive */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-6 md:p-10 rounded-none border border-[#A3B18A]/30">
          {/* Gambar Section 1 */}
          <div className="w-full h-72 md:h-96 rounded-none overflow-hidden">
            <img
              src="/images/sc1.jpg"
              alt="Kenapa Memilih EcoArchive"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Konten Teks & Poin */}
          <div className="space-y-6 text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2F3E2E]">
              Kenapa Memilih EcoArchive?
            </h2>

            <div className="space-y-4 text-[#2B2B2B] leading-relaxed text-sm md:text-base">
              <p>
                EcoArchive berfokus pada pembuatan rompi dan tas kanvas berbahan dasar serat alam serta material daur ulang. Kami percaya bahwa produk fashion berkualitas tidak harus merusak lingkungan.
              </p>
              <p>
                Setiap helai pakaian diproduksi secara terukur untuk menekan jumlah limbah tekstil. Dengan potongan yang serbaguna, produk kami siap menyempurnakan tampilan harianmu.
              </p>
            </div>

            {/* 3 Poin Bullet */}
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-[#2B2B2B] text-sm md:text-base">
                <span className="w-2 h-2 bg-[#C97B63] mt-2 shrink-0" />
                <span><strong>Bahan daur ulang dan alami:</strong> Menggunakan kain ramah lingkungan berkualitas tinggi.</span>
              </li>
              <li className="flex items-start gap-3 text-[#2B2B2B] text-sm md:text-base">
                <span className="w-2 h-2 bg-[#C97B63] mt-2 shrink-0" />
                <span><strong>Produksi etis dan minim limbah:</strong> Diproses secara bertanggung jawab untuk menjaga bumi.</span>
              </li>
              <li className="flex items-start gap-3 text-[#2B2B2B] text-sm md:text-base">
                <span className="w-2 h-2 bg-[#C97B63] mt-2 shrink-0" />
                <span><strong>Desain abadi, tidak cepat usang:</strong> Tampilan minimalis yang fleksibel dipakai kapan saja.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Produk Unggulan */}
      <Section title="Produk Unggulan Kami">
        <p className="text-center text-[#2B2B2B]/80 max-w-xl mx-auto mb-8 text-sm md:text-base">
          Koleksi vest dan tas berbahan ramah lingkungan yang diproduksi secara etis untuk menunjang penampilanmu.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {programs.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </Section>
    </div>
  );
}