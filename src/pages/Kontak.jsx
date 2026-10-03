import Section from "../components/Section";
import ContactForm from "../components/ContactForm";

export default function Kontak() {
  return (
    <Section title="Hubungi Kami" className="bg-[#F5F0E6]">
      <p className="text-center text-[#555] mb-10 max-w-md mx-auto">
        Ada pertanyaan tentang produk atau kolaborasi? Kirim pesan kamu lewat
        form di bawah ini, kami akan membalas secepatnya.
      </p>
      <ContactForm />
    </Section>
  );
}