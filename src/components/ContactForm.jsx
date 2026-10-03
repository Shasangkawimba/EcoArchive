import { useState } from "react";

const API_URL = "https://devx2026-post.vercel.app/api/posts";
const API_TOKEN = "DEVX2026";

export default function ContactForm() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (author.trim().length < 2) return "Nama minimal 2 karakter.";
    if (title.trim().length < 3) return "Judul minimal 3 karakter.";
    if (content.trim().length < 10) return "Pesan minimal 10 karakter.";
    return "";
  };

  const resetForm = () => {
    setAuthor("");
    setTitle("");
    setContent("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ title, content, author }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.status === 201) {
        setSuccess("Pesan berhasil dikirim! Terima kasih sudah menghubungi kami.");
        resetForm();
      } else if (res.status === 400) {
        setError(data.message || "Data yang dikirim tidak valid.");
      } else if (res.status === 401) {
        setError("Akses ditolak, token tidak valid.");
      } else {
        setError("Terjadi kesalahan, silakan coba lagi.");
      }
    } catch (err) {
      setError("Gagal terhubung ke server. Periksa koneksi internet kamu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-[#2B2B2B] mb-1">
          Nama
        </label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border border-[#3A5A40]/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A5A40]"
          placeholder="Nama kamu"
        />
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-[#2B2B2B] mb-1">
          Judul
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-[#3A5A40]/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A5A40]"
          placeholder="Judul pesan"
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-[#2B2B2B] mb-1">
          Pesan
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          className="w-full border border-[#3A5A40]/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A5A40]"
          placeholder="Tulis pesan kamu di sini..."
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {error}
        </p>
      )}

      {success && (
        <p className="text-green-700 text-sm bg-green-50 border border-green-200 rounded-md px-3 py-2">
          {success}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-[#3A5A40] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2F4A33] transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Mengirim..." : "Kirim Pesan"}
      </button>
    </form>
  );
}