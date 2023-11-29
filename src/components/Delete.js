// src/components/Delete.js
import React, { useState } from 'react';
import api from '../api';

const Delete = () => {
  const [srNoToDelete, setSrNoToDelete] = useState('');

  const handleDelete = async () => {
    try {
      await api.delete(`/delete/${srNoToDelete}`); // Replace with your actual API endpoint
      console.log('Data deleted successfully');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <h2>Delete Student Data</h2>
      <label>
        Sr No to Delete:
        <input type="text" value={srNoToDelete} onChange={(e) => setSrNoToDelete(e.target.value)} />
      </label>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Delete;
