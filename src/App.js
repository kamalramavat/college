// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/components/Home';
import StudentData from '../src/components/StudentData';
import Sem4 from '../src/components/Sem4';
import View from '../src/components/View';
import PdfExport from '../src/components/PdfExport';

const App = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    // Fetch data from Google Sheets or set a mock data
    // For demonstration purposes, let's use mock data
    // const mockData = [
    //   { srNo: 1, name: 'John Doe', address: '123 Main St', mobileNumber: '123-456-7890' },
    //   // Add more mock data as needed
    // ];

    // setStudentData(mockData);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-data" element={<StudentData />} />
        <Route path="/student-data/sem4" element={<Sem4 />} />
        <Route path="/student-data/sem4/view" element={<View studentData={studentData} />} />
        <Route
          path="/student-data/sem4/pdf-export"
          element={<PdfExport selectedStudents={[]} studentData={studentData} />}
        />      </Routes>
    </Router>
  );
};

export default App;
