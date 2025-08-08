import React, { useState } from 'react';
import './DynamicRows.css';

const DynamicRows = () => {
  const [rows, setRows] = useState([{ name: '', lastName: '', gmail: '' }]);

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const isLastRowFilled = () => {
    const lastRow = rows[rows.length - 1];
    return lastRow.name.trim() !== '' && lastRow.lastName.trim() !== '' && lastRow.gmail.trim() !== '';
  };

  const handleAddRow = () => {
    if (!isLastRowFilled()) {
      alert('Please fill all fields in the last row before adding a new one.');
      return;
    }
    setRows([...rows, { name: '', lastName: '', gmail: '' }]);
  };

  return (
    <div className="container">
      <h2>User Information</h2>
      {rows.map((row, index) => (
        <div key={index} className="row">
          <input
            type="text"
            placeholder="Name"
            value={row.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={row.lastName}
            onChange={(e) => handleChange(index, 'lastName', e.target.value)}
          />
          <input
            type="email"
            placeholder="Gmail"
            value={row.gmail}
            onChange={(e) => handleChange(index, 'gmail', e.target.value)}
          />
          {index === rows.length - 1 && (
            <button className="add-button" onClick={handleAddRow}>+</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default DynamicRows;
