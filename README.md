# 🌿 EcoArchive

**Nature's Imprint, Archived in Threads.**

EcoArchive adalah landing page untuk brand fashion ramah lingkungan yang mengangkat teknik *eco-print* — mencetak motif daun dan bunga alami langsung ke kain. Project ini dibangun menggunakan React + Vite sebagai bagian dari tugas kelompok (Penugasan Week 2).

---

## 🚀 Tech Stack

- **React** — library UI
- **Vite** — build tool & dev server
- **React Router v6** — routing antar halaman
- **Tailwind CSS** — styling

---

## 📦 Instalasi & Menjalankan Project

Clone repository:

```bash
git clone https://github.com/Shasangkawimba/EcoArchive.git
cd EcoArchive
```

Install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

---

## 📁 Struktur Folder

```
src/
├── assets/          # Gambar dan aset statis
├── components/       # Komponen reusable (Navbar, Footer, Hero, Card, Modal, Section, ContactForm)
├── data/              # Data statis (navLinks, programs)
├── layouts/          # Layout pembungkus halaman (MainLayout)
├── pages/             # Halaman utama (Home, Program, Tentang, Kontak, NotFound)
├── App.jsx            # Routing utama
└── main.jsx           # Entry point
```

---

## 🗺️ Routing

| Path         | Halaman   |
|--------------|-----------|
| `/`          | Home      |
| `/program`   | Program   |
| `/tentang`   | Tentang   |
| `/kontak`    | Kontak    |
| `*`          | NotFound (404) |

---

## 👥 Kontribusi Tim

Project ini dikerjakan secara kolaboratif dengan pembagian role:

### A — Infra, Navbar & Layout Lead
- Setup awal project (Vite, Tailwind, struktur folder, placeholder file)
- `Navbar.jsx`, `Footer.jsx`, `Modal.jsx`, `Hero.jsx`, `Card.jsx`
- `MainLayout.jsx`

### B — Interactive & Content Support Lead
- `ContactForm.jsx` — form kontak dengan validasi dan integrasi API
- `Section.jsx` — komponen wrapper generik untuk section halaman
- `Tentang.jsx` — halaman "Kenapa EcoArchive"
- `Kontak.jsx` — halaman kontak
- `NotFound.jsx` — halaman 404

### C — Pages & Deployment Lead
- `Home.jsx`, `Program.jsx` — halaman utama & program
- Deployment project

---

## 🔌 Integrasi API (Contact Form)

Form kontak pada halaman `/kontak` terhubung ke API berikut:

- **Endpoint:** `POST https://devx2026-post.vercel.app/api/posts`
- **Headers:**
  ```
  Content-Type: application/json
  Authorization: Bearer DEVX2026
  ```
- **Body:**
  ```json
  {
    "title": "string",
    "content": "string",
    "author": "string"
  }
  ```

**Validasi form:**
- `author` minimal 2 karakter
- `title` minimal 3 karakter
- `content` minimal 10 karakter

**Penanganan response:**
| Status | Perilaku |
|--------|----------|
| `201`  | Form berhasil dikirim, ditampilkan pesan sukses, dan form di-reset |
| `400`  | Menampilkan pesan error dari API (`data.message`) |
| `401`  | Menampilkan pesan "Akses ditolak, token tidak valid" |

---

## 🌱 Git Workflow

Project ini menggunakan alur kerja branch per anggota:

| Anggota | Branch |
|---------|--------|
| A | `feat/setup-infra` → `feat/navbar-footer-modal` |
| B | `feat/contact-content` |
| C | `feat/pages-deploy` |

Setiap perubahan dikerjakan di branch masing-masing, lalu diajukan sebagai Pull Request ke `main` untuk direview sebelum di-merge.

---

## 📄 Lisensi

Project ini dibuat untuk keperluan tugas kelompok (Penugasan Week 2) dan bersifat edukatif.
