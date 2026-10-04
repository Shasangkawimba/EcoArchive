import Section from '../components/Section';

export default function Tentang() {
  return (
    <div className="space-y-12 pb-12 max-w-4xl mx-auto px-4">
      {/* 1. Header & Deskripsi Singkat */}
      <Section title="Tentang EcoArchive">
        <p className="text-gray-600 leading-relaxed text-center text-lg">
          EcoArchive adalah inisiatif berbasis digital yang bertujuan untuk mendokumentasikan, 
          mengelola, dan menyebarluaskan edukasi seputar pengelolaan lingkungan hidup serta daur ulang sampah secara berkelanjutan.
        </p>
      </Section>

      {/* 2. Seksi Visi & Misi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 shadow-xs">
          <h3 className="text-xl font-bold text-emerald-800 mb-3">Visi Kami</h3>
          <p className="text-gray-700 leading-relaxed">
            Menjadi pusat arsip dan platform edukasi lingkungan terdepan yang mendorong kesadaran masyarakat menuju pola hidup yang ramah lingkungan dan bebas sampah.
          </p>
        </div>

        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 shadow-xs">
          <h3 className="text-xl font-bold text-emerald-800 mb-3">Misi Kami</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
            <li>Menyediakan informasi dan edukasi lingkungan yang mudah diakses.</li>
            <li>Mendorong partisipasi aktif masyarakat dalam pemilahan sampah.</li>
            <li>Mengembangkan teknologi informasi untuk pemantauan arsip lingkungan.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}