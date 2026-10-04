import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

export default function Kontak() {
  return (
    <div className="space-y-8 pb-12 max-w-3xl mx-auto px-4">
      <Section title="Hubungi Kami">
        <p className="text-gray-600 text-center max-w-xl mx-auto mb-6">
          Punya pertanyaan, saran, atau ingin berkolaborasi dengan EcoArchive? Silakan isi formulir di bawah ini.
        </p>
        <ContactForm />
      </Section>
    </div>
  );
}