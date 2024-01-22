// PriceFilter.js
import React from 'react';
import '../css/listobjects.css';

const PriceFilter = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="price">Filter by Price:</label>
      <input
        type="number"
        id="price"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default PriceFilter;
