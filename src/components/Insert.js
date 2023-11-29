
// src/components/Insert.js
import React, { useState } from 'react';
import api from '../api';

const Insert = () => {
  const [formData, setFormData] = useState({
    srNo: '',
    name: '',
    address: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/edit', formData); // Replace with your actual API endpoint
      console.log('Data inserted successfully');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <div>
      <h2>Insert Student Data</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Sr No:
          <input type="text" name="srNo" value={formData.srNo} onChange={handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <br />
        <label>
          Mobile Number:
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Insert</button>
      </form>
    </div>
  );
};

export default Insert;
