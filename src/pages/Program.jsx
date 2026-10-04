import Section from '../components/Section';
import Card from '../components/Card';
import { programs } from '../data/programs';

export default function Program() {
  return (
    <div className="space-y-8 pb-12 max-w-6xl mx-auto px-4">
      <Section title="Program & Kegiatan">
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Temukan berbagai program dan inisiatif pengelolaan lingkungan dari EcoArchive yang dapat kamu ikuti.
        </p>

        {programs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-8">
            Belum ada program yang tersedia saat ini.
          </p>
        )}
      </Section>
    </div>
  );
}