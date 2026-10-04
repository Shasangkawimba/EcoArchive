import Section from '../components/Section';

export default function Tentang() {
  return (
    <div className="space-y-12 pb-12 max-w-4xl mx-auto px-4">
      <Section title="Tentang EcoArchive">
        <div className="text-center space-y-3">
          <p className="italic font-serif text-xl text-[#C97B63]">
            “Nature’s Imprint, Archived in Threads.”
          </p>
          <p className="text-[#2B2B2B] leading-relaxed max-w-2xl mx-auto">
            EcoArchive adalah brand fashion ramah lingkungan yang berfokus pada pembuatan rompi (vest) dan tas berbahan daur ulang serta serat alami untuk gaya hidup yang lebih ramah lingkungan.
          </p>
        </div>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-[#A3B18A]/30 shadow-xs">
          <h3 className="text-xl font-bold text-[#2F3E2E] mb-3">Visi Kami</h3>
          <p className="text-[#2B2B2B]/80 leading-relaxed">
            Menjadi pelopor produk fashion berkelanjutan yang menginspirasi anak muda untuk tampil gaya tanpa mengorbankan kelestarian alam.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#A3B18A]/30 shadow-xs">
          <h3 className="text-xl font-bold text-[#2F3E2E] mb-3">Misi Kami</h3>
          <ul className="list-disc list-inside text-[#2B2B2B]/80 space-y-2 leading-relaxed">
            <li>Menggunakan bahan kain daur ulang dan alami berkualitas.</li>
            <li>Menerapkan sistem produksi etis dan minim limbah.</li>
            <li>Menghasilkan desain produk yang timeless dan tahan lama.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}