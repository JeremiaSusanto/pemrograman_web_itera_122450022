import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { v4 as uuidv4 } from 'uuid';

export default function BookForm() {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('owned');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return alert("Judul dan penulis wajib diisi.");
    addBook({ id: uuidv4(), title, author, status, rating });
    setTitle('');
    setAuthor('');
    setStatus('owned');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Judul Buku"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded p-2 w-full"
      />
      <input
        type="text"
        placeholder="Penulis"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border rounded p-2 w-full"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded p-2 w-full"
      >
        <option value="owned">Dimiliki</option>
        <option value="reading">Sedang Dibaca</option>
        <option value="wishlist">Ingin Dibeli</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Tambah Buku
      </button>
    </form>
  );
}
