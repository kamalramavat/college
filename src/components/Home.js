// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container mt-5">
    <h1>Welcome to Dr V R Godhaniya college of IT</h1>
    <Link to="/student-data" className="btn btn-primary mt-3">
      Student Data
    </Link>
  </div>
);

export default Home;
