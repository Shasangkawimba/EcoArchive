import Section from '../components/Section';
import Card from '../components/Card';
import { programs } from '../data/programs';

export default function Program() {
  return (
    <div className="space-y-8 pb-12 max-w-6xl mx-auto px-4">
      <Section title="Koleksi Produk EcoArchive">
        <p className="text-[#2B2B2B]/80 text-center max-w-2xl mx-auto mb-8">
          Jelajahi pilihan produk vest dan bag berkualitas tinggi kami[cite: 16].
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </Section>
    </div>
  );
}