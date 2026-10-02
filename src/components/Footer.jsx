import { Link } from "react-router-dom";
import { navLinks } from "../data/navLinks";

// Data sosial media dan info toko dipisah dari JSX supaya rapi dan mudah diubah
const socials = [
  { name: "Instagram", icon: "fa-instagram", href: "https://instagram.com" },
  { name: "LinkedIn", icon: "fa-linkedin", href: "https://linkedin.com" },
  { name: "YouTube", icon: "fa-youtube", href: "https://youtube.com" },
];

const infos = [
  {
    title: "Toko Utama",
    lines: [
      { text: "Jl. Alam Lestari No. 12, Semarang." },
      { text: "Kunjungi toko kami dan temukan koleksi ecoprint terbaru kami." },
    ],
  },
  {
    title: "Pabrik",
    lines: [
      { text: "Gunungpati, Semarang." },
      { text: "Bahan-bahan alami dipadukan dengan proses pengerjaan yang penuh perhatian." },
    ],
  },
  {
    title: "Jam Operasional",
    lines: [
      { text: "Senin – Sabtu", bold: true },
      { text: "09.00 – 17.00 WIB" },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-[#F5F0E6] text-[#2B2B2B]">
      <div className="mx-auto flex max-w-[1150px] flex-col justify-between gap-10 px-9 py-9 md:flex-row md:gap-0">
        {/* Kolom kiri: brand, deskripsi, tagline */}
        <div className="md:w-[30%]">
          <h2 className="font-['League_Spartan'] text-[42px] font-extrabold leading-none tracking-[-2px]">
            EcoArchive<i className="fa-brands fa-envira text-[#C97B63]"></i>
          </h2>

          <p className="mt-5 w-[300px] max-w-full text-justify text-[15px] leading-[1.4]">
            Mengabadikan keindahan alam dalam setiap karya melalui ecoprint yang sederhana dan
            bermakna. Warna, bentuk, dan jejak alami menjadi bagian dari setiap cerita. Karena
            menjaga bumi bisa dimulai dari cara kita memilih, menghargai, dan berkarya dengan lebih
            sadar.
          </p>

          <p className="mt-5 w-[320px] max-w-full text-[15px] font-bold leading-[1.4]">
            Nature’s Imprint, Archived in Threads.
            <i className="fa-solid fa-seedling text-[#C97B63]"></i>
          </p>
        </div>

        {/* Kolom kanan: info toko */}
        <div className="md:w-[60%]">
          {infos.map((info) => (
            <div key={info.title} className="mb-5 last:mb-0">
              <h4 className="font-['League_Spartan'] text-[27px] font-extrabold leading-none">
                {info.title}
              </h4>
              {info.lines.map((line) => (
                <p
                  key={line.text}
                  className={`mt-1 w-[300px] max-w-full text-[14px] ${line.bold ? "font-bold" : ""}`}
                >
                  {line.text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Link navigasi kecil, rata kanan */}
      <nav
        aria-label="Navigasi footer"
        className="mx-auto flex max-w-[1150px] flex-wrap gap-4 px-9 pb-4 text-[13px] md:-translate-y-8 md:justify-end md:pb-0"
      >
        {navLinks.map((item) => (
          <Link key={item.to} to={item.to} className="transition hover:opacity-70">
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Ikon sosial media, rata kanan */}
      <div className="mx-auto flex max-w-[1150px] gap-6 px-9 pb-6 md:-translate-y-8 md:justify-end md:pb-3">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            aria-label={s.name}
            className="text-[38px] transition hover:opacity-70"
          >
            <i className={`fa-brands ${s.icon}`}></i>
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;