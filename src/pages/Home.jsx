import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { programs } from '../data/programs';

export default function Home() {
  return (
    <div className="space-y-12 pb-12">
      {/* 1. Tampilkan Banner Utama */}
      <Hero />

      {/* 2. Tampilkan Seksi Edukasi / Pengenalan */}
      <Section title="Mengenal EcoArchive">
        <p className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto">
          EcoArchive adalah platform digital untuk mengelola dan memantau arsip lingkungan hidup serta kegiatan daur ulang secara terstruktur dan berkelanjutan.
        </p>
      </Section>

      {/* 3. Tampilkan Daftar Program Menggunakan Komponen Card */}
      <Section title="Program Unggulan">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </Section>
    </div>
  );
}