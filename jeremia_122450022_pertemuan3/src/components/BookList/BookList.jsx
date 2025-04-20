// src/components/BookList/BookList.jsx
import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const BookList = ({ filter }) => {
  const { books, deleteBook } = useContext(BookContext);

  // Fungsi filter berdasarkan status
  const filteredBooks = books.filter((book) => {
    if (filter === 'all') return true;
    if (filter === 'owned') return book.status === 'owned';
    if (filter === 'reading') return book.status === 'reading';
    if (filter === 'wishlist') return book.status === 'wishlist';
    return true;
  });

  return (
    <div className="space-y-4">
      {filteredBooks.length === 0 ? (
        <p className="text-gray-500 italic">Tidak ada buku yang sesuai filter.</p>
      ) : (
        filteredBooks.map((book) => (
          <div key={book.id} className="border p-4 rounded-md shadow-sm flex justify-between items-center">
            <div className="ml-2">
              <h3 className="text-lg font-semibold ml-1">{book.title}</h3>
              <p className="text-sm text-gray-600 ml-1 mb-1">{book.author}</p>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{book.status}</span>
            </div>
            <button
              onClick={() => deleteBook(book.id)}
              className="text-red-500 hover:text-red-700"
            >
              Hapus
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
