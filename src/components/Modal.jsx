import { useEffect } from "react";

// Modal generik.
// Props:
// - isOpen   : boolean, true = modal tampil
// - onClose  : fungsi untuk menutup modal
// - title    : judul modal
// - children : isi modal (teks, form, tombol, dll.)
function Modal({ isOpen, onClose, title, children }) {
  // Tutup modal dengan tombol Escape dan kunci scroll halaman saat modal terbuka
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    // Cleanup: kembalikan kondisi awal saat modal ditutup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Conditional rendering: modal tidak dirender sama sekali saat tertutup
  if (!isOpen) return null;

  return (
    // Overlay gelap. Klik di area ini menutup modal
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2B2B2B]/60 px-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-md rounded-[28px] bg-[#F5F0E6] p-8 shadow-2xl"
        // Hentikan propagasi agar klik di dalam kotak tidak ikut menutup modal
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-[#2F3E2E] transition hover:bg-[#2F3E2E]/10"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        <h2
          id="modal-title"
          className="mb-4 pr-10 font-['League_Spartan'] text-3xl font-bold tracking-tight text-[#2F3E2E]"
        >
          {title}
        </h2>

        <div className="text-[#2B2B2B] leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default Modal;