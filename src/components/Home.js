// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ onLogout }) => (
  <div className="container mt-5">
    <h1>Welcome to Dr V R Godhaniya college of IT</h1>

    {/* Link to Student Data page */}
    <Link to="/student-data" className="btn btn-primary mt-3 mr-3">
      Student Data
    </Link>

    {/* Back button (assuming it goes back in the browser history) */}
    <button onClick={() => window.history.back()} className="btn btn-secondary mt-3 mr-3">
      Back
    </button>

    {/* Logout button */}
    <button onClick={onLogout} className="btn btn-danger mt-3">
      Logout
    </button>
  </div>
);

export default Home;
