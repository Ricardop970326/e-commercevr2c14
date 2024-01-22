import React from 'react';
import '../css/listobjects.css';


const TypeFilter = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="productType">Filter by Product Type:</label>
      <select
        id="productType"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select Type</option>
        <option value="Electronics">Electronics</option>
        {/* Add more options based on your product types */}
      </select>
    </div>
  );
};

export default TypeFilter;