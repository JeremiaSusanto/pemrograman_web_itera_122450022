// src/hooks/useBookStats.js
import { useContext, useMemo } from 'react';
import { BookContext } from '../context/BookContext';

export default function useBookStats() {
  const { books } = useContext(BookContext);

  return useMemo(() => {
    const stats = {
      total: books.length,
      owned: books.filter(b => b.status === 'owned').length,
      reading: books.filter(b => b.status === 'reading').length,
      wishlist: books.filter(b => b.status === 'wishlist').length,
    };
    return stats;
  }, [books]);
}
