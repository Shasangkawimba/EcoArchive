import Section from "../components/Section";

export default function Tentang() {
  return (
    <Section title="Kenapa EcoArchive" className="bg-white">
      <p className="text-[#555] leading-relaxed mb-5">
        EcoArchive hadir karena kami percaya bahwa fashion tidak harus
        mengorbankan alam. Setiap produk kami dibuat melalui teknik eco-print —
        mencetak motif daun dan bunga asli langsung ke kain — sehingga setiap
        helai punya cerita dan keunikannya sendiri.
      </p>
      <p className="text-[#555] leading-relaxed mb-8">
        Kami bekerja sama dengan pengrajin lokal dan menggunakan bahan daur
        ulang maupun organik, tanpa pewarna kimia berbahaya. Bagi kami,
        keberlanjutan bukan sekadar tren, tapi tanggung jawab jangka panjang
        terhadap bumi.
      </p>

      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <span className="text-[#3A5A40] text-lg">🌿</span>
          <span className="text-[#2B2B2B]">
            100% bahan alami dan daur ulang, tanpa pewarna sintetis.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#3A5A40] text-lg">🧵</span>
          <span className="text-[#2B2B2B]">
            Dikerjakan tangan oleh pengrajin lokal dengan proses eco-print.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#3A5A40] text-lg">🌍</span>
          <span className="text-[#2B2B2B]">
            Setiap produk unik — motifnya tidak akan pernah sama persis.
          </span>
        </li>
      </ul>
    </Section>
  );
}