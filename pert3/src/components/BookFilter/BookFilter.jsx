// src/components/BookFilter/BookFilter.jsx
import React from 'react';
import PropTypes from 'prop-types';

const BookFilter = ({ onFilter }) => {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="filter" className="block mb-2 mt-6 font-medium text-gray-700 text-2xl">
        Filter Buku
      </label>
      <select
        id="filter"
        onChange={handleChange}
        className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">Semua</option>
        <option value="owned">Dimiliki</option>
        <option value="reading">Sedang Dibaca</option>
        <option value="wishlist">Ingin Dibeli</option>
      </select>
    </div>
  );
};

BookFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default BookFilter;
