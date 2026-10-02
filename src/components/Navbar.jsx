import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/navLinks";

// Navbar responsif.
// Props:
// - onOpenModal : fungsi dari MainLayout untuk membuka modal (tombol CTA)
function Navbar({ onOpenModal }) {
  // State buka/tutup menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // Style link: garis bawah tetap tampil jika halaman sedang aktif
  const linkClass = ({ isActive }) =>
    `relative font-medium text-[#333] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-[#2F3E2E] after:transition-all ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  // Tutup menu mobile lalu buka modal
  const handleCta = () => {
    setMenuOpen(false);
    onOpenModal();
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F5F0E6]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between border-b border-[#2F3E2E]/10 px-6 py-4 md:px-10">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 font-['League_Spartan'] text-2xl font-bold tracking-[-1px] text-[#2F3E2E]"
        >
          <i className="fa-brands fa-envira text-[#C97B63]"></i>
          EcoArchive
        </Link>

        {/* Menu desktop (disembunyikan di mobile) */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={handleCta}
            className="rounded-full bg-[#2F3E2E] px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-[#2F3E2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#243124] hover:shadow-lg"
          >
            Pesan Sekarang
          </button>
        </div>

        {/* Tombol hamburger (hanya tampil di mobile) */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#2F3E2E] transition hover:bg-[#2F3E2E]/10 md:hidden"
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
        </button>
      </div>

      {/* Menu mobile: conditional rendering berdasarkan state menuOpen */}
      {menuOpen && (
        <div className="flex flex-col gap-5 border-b border-[#2F3E2E]/10 bg-[#F5F0E6] px-6 py-6 md:hidden">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? "text-[#C97B63]" : "text-[#333]"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={handleCta}
            className="rounded-full bg-[#2F3E2E] px-5 py-3 text-sm font-medium text-white"
          >
            Pesan Sekarang
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;