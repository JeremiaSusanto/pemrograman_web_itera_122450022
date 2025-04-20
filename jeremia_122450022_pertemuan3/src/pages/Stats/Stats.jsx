import React from 'react';
import useBookStats from '../../hooks/useBookStats';

const Stats = () => {
  const stats = useBookStats();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Statistik Buku</h2>
      <ul className="space-y-2 text-lg">
        <li>Total Buku: {stats.total}</li>
        <li>Buku Dimiliki: {stats.owned}</li>
        <li>Sedang Dibaca: {stats.reading}</li>
        <li>Ingin Dibeli: {stats.wishlist}</li>
      </ul>
    </div>
  );
};

export default Stats;
