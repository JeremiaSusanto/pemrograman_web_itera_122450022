import React, { useState } from 'react';
import BookForm from '../../components/BookForm/BookForm';
import BookFilter from '../../components/BookFilter/BookFilter';
import BookList from '../../components/BookList/BookList';

const Home = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Manajemen Buku Pribadi</h1>
        <p className="text-gray-500 mt-2 italic">Catat koleksi bukumu dan kelola dengan mudah 📚</p>
      </header>

      <BookForm />
      <BookFilter onFilter={setFilter} />
      <BookList filter={filter} />

      <footer className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Perpustakaan Pribadi. Dibuat dengan ❤️ oleh Jeremia.
      </footer>
    </div>

    
  );
};

export default Home;
