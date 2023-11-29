// Sem4.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sem4 = () => (
  <div className="container mt-5">
    <h2>Semester 4</h2>
    {/* Add your buttons for Add, Update, Delete, and View here */}
    <Link to="/student-data/sem4/view" className="btn btn-success mt-3">
      View
    </Link>
  </div>
);

export default Sem4;
