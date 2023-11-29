// StudentData.js

import React from 'react';
import { Link } from 'react-router-dom';

const StudentData = () => (
  <div className="container mt-5">
    <h2>Student Data</h2>
    <Link to="/student-data/sem4" className="btn btn-primary mt-3">
      Semester 4
    </Link>
  </div>
);

export default StudentData;
