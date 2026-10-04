import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { programs } from '../data/programs';

export default function Home() {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Banner */}
      <Hero />

      {/* Section 1: Kenapa EcoArchive */}
      <Section title="Kenapa Memilih EcoArchive?">
        <div className="max-w-3xl mx-auto space-y-6 text-[#2B2B2B] text-center">
          <p className="leading-relaxed text-lg">
            EcoArchive menghadirkan pakaian dan tas dari bahan ramah lingkungan, 
            dirancang untuk menemani gaya hidupmu tanpa merusak bumi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-left">
            <div className="p-4 bg-white rounded-xl border border-[#A3B18A]/30">
              <h4 className="font-bold text-[#2F3E2E] mb-1">Bahan Daur Ulang</h4>
              <p className="text-xs text-[#2B2B2B]/80">Menggunakan serat alami dan material daur ulang berkualitas[cite: 16].</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#A3B18A]/30">
              <h4 className="font-bold text-[#2F3E2E] mb-1">Produksi Etis</h4>
              <p className="text-xs text-[#2B2B2B]/80">Diproduksi secara bertanggung jawab dan minim limbah tekstil[cite: 16].</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#A3B18A]/30">
              <h4 className="font-bold text-[#2F3E2E] mb-1">Desain Abadi</h4>
              <p className="text-xs text-[#2B2B2B]/80">Gaya minimalis yang abadi dan tidak cepat usang oleh tren[cite: 16].</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 2: Produk Unggulan */}
      <Section title="Produk Unggulan Kami">
        <p className="text-center text-[#2B2B2B]/80 max-w-xl mx-auto mb-8">
          Koleksi vest dan tas berbahan ramah lingkungan yang diproduksi secara etis untuk menunjang penampilanmu[cite: 16].
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