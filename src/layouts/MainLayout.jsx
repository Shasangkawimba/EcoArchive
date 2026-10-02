import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

// Layout utama: Navbar + isi halaman (Outlet) + Footer.
// State modal disimpan di sini agar tombol CTA di Navbar bisa membukanya.
function MainLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#F5F0E6] font-['Montserrat']">
      <Navbar onOpenModal={openModal} />

      {/* Outlet = tempat halaman (Home, Program, dll.) dirender */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Modal pemesanan */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Pesan Sekarang">
        <p className="mb-6">
          Ceritakan produk yang kamu inginkan lewat halaman Kontak, lalu tim EcoArchive akan
          menindaklanjuti pesananmu.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/kontak"
            onClick={closeModal}
            className="rounded-full bg-[#2F3E2E] px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-[#243124]"
          >
            Ke halaman Kontak
          </Link>
          <button
            type="button"
            onClick={closeModal}
            className="rounded-full border border-[#2F3E2E]/30 px-6 py-3 text-sm font-medium text-[#2F3E2E] transition hover:bg-[#2F3E2E]/10"
          >
            Nanti saja
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default MainLayout;