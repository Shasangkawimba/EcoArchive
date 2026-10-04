# Pengerjaan Kelompok — Penugasan Week 2

**Project:** EcoArchive — Fashion ramah lingkungan (vest & tas)
**Teknologi:** ReactJS + Vite, React Router DOM, Tailwind CSS, Vercel, GitHub

---

## Anggota Kelompok

| Anggota | Nama Lengkap | Peran |
|---|---|---|
| A | [Salma] | Infrastructure & Chrome Lead |
| B | [Tanaya] | Interactive & Content Support Lead |
| C | [Tama] | Content & Deploy Lead |

---

## Anggota A — Infrastructure & Chrome Lead

**Nama:** [Salma]

### Fase 1: Setup infrastruktur
- Membuat project Vite + React dan memasang `react-router-dom`, `tailwindcss`, dan `@tailwindcss/vite`.
- Mengonfigurasi `vite.config.js`, `index.css`, `main.jsx` (BrowserRouter), dan `App.jsx` (routing 5 halaman).
- Membuat placeholder seluruh komponen dan halaman agar B dan C bisa langsung bekerja.
- Branch `feat/setup-infra` — Pull Request #1, sudah di-merge ke `main`.

### Fase 2: Komponen layout
- `MainLayout.jsx`: Navbar + Outlet + Footer, serta state untuk Modal.
- `Navbar.jsx`: navbar responsif, hamburger menu dengan `useState`, `NavLink` dengan penanda halaman aktif, dan tombol CTA "Pesan Sekarang" yang membuka Modal.
- `Modal.jsx`: props `isOpen`, `onClose`, `title`, `children`; conditional rendering; bisa ditutup lewat tombol X, klik overlay, dan tombol Esc.
- `Footer.jsx`: brand, deskripsi, info toko, tagline, link navigasi, dan 3 ikon sosial media sesuai desain Week 1.
- `data/navLinks.js`: daftar menu yang dipakai bersama Navbar dan Footer.
- Memindahkan aset gambar dari Week 1 ke `public/images/` dan memasang Google Fonts serta Font Awesome di `index.html`.
- Branch `feat/navbar-footer-modal` — Pull Request #2, sudah di-merge ke `main`.

### Fase 3: Dokumentasi
- Menyusun `PengerjaanKelompok.md` (file ini) dari kontribusi A, B, dan C.

### File milik A
`package.json`, `vite.config.js`, `index.css`, `main.jsx`, `App.jsx`, `MainLayout.jsx`, `Navbar.jsx`, `Modal.jsx`, `Footer.jsx`, `PengerjaanKelompok.md`

---

## Anggota B — Interactive & Content Support Lead

**Nama:** [Tanaya]

- `ContactForm.jsx`: form dengan 6 state (`author`, `title`, `content`, `error`, `success`, `loading`), validasi (author min. 2, title min. 3, content min. 10 karakter), dan pengiriman data dengan `fetch` POST ke `https://devx2026-post.vercel.app/api/posts`.
- Handling response API: 201 (sukses dan form direset), 400 (menampilkan pesan error dari API), 401 ("Akses ditolak, token tidak valid").
- `Kontak.jsx`: halaman yang merender `ContactForm`.
- `Section.jsx`: komponen pembungkus generik dengan props `title`, `children`, `className`.
- `Tentang.jsx`: section "Kenapa EcoArchive" berisi 2 paragraf dan 3 poin.
- `NotFound.jsx`: halaman 404 dengan tombol kembali ke Beranda.
- `README.md`: disusun dari kontribusi A, B, dan C, termasuk AI yang digunakan.

**File milik B:** `ContactForm.jsx`, `Kontak.jsx`, `Section.jsx`, `Tentang.jsx`, `NotFound.jsx`, `README.md`

---

## Anggota C — Content & Deploy Lead

**Nama:** [Tama]

- `data/programs.js`: array 3 produk (Women's Vest, Men's Vest, Bag) berisi `id`, `title`, `description`, `image`, `price`.
- `Hero.jsx`: props `title`, `subtitle`, `image`, `ctaText`, `ctaLink`.
- `Card.jsx`: props `title`, `description`, `image`, `price`.
- `Home.jsx`: Hero + Section + 3 Card hasil `.map()`.
- `Program.jsx`: menampilkan data `programs` ke Card dengan grid `md:grid-cols-3`.
- `vercel.json`: rewrite ke `/index.html` agar routing tidak 404 saat di-refresh.
- Deploy ke Vercel dan pengujian refresh pada `/program`, `/tentang`, `/kontak`.

**File milik C:** `Hero.jsx`, `Card.jsx`, `data/programs.js`, `Home.jsx`, `Program.jsx`, `vercel.json`

---

## Catatan

- Menu navbar bertuliskan "Produk" dan mengarah ke route `/program` (file `Program.jsx`).
- Pembagian beban kerja: masing-masing anggota dengan estimasi sekitar 7,5 jam.
- Alur kerja: setiap anggota bekerja di branch masing-masing, lalu masuk ke `main` lewat Pull Request.
