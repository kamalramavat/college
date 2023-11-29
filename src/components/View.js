
// View.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PdfGenerator from '../components/PdfGenerator';
import PdfExport from './PdfExport';



const View = () => {
  const [studentData, setStudentData] = useState([]);
  const pdfFile = 'your-pdf-file.pdf'; // Provide the path to your PDF file
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedAttendance, setSelectedAttendance] = useState([]);



  useEffect(() => {
    // Replace 'YOUR_GOOGLE_SHEET_ID' and 'YOUR_API_KEY' with your actual Google Sheet ID and API key
    const sheetId = '1qyzcGO4tjAqj1V7m5NegU2vKW4FUyJcgNPkxizwaPLA';
    const apiKey = 'AIzaSyD7Ze0SiCt7Ucc7wChDNguptxrGVLJDk-c';
    const range = 'Master'; // Change to your sheet name

    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;




// Example for fetching columns A to Z
const apiUrlPart1 = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/'Master'!A:Z?key=${apiKey}`;
const apiUrlPart2 = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/'Master'!AA:AZ?key=${apiKey}`;

axios.get(apiUrlPart1)
.then(response => {
  // Parse the response and extract the data
  const rows = response.data.values.slice(1); // Exclude header row
  
  const sheetData = rows.map(row => ({
    srNo: row[0],
    name: row[1],
    address: row[2],
    mobileNumber: row[3],
    totalAttendance: row[4], // Assuming date is in the first column
    totalAssignment:row[5],
    totalTest:row[6],

  }));

  setStudentData(sheetData);
})
.catch(error => {
  console.error('Error fetching data from Google Sheet:', error);
  console.log('Error response:', error.response); // Log the actual error response
});


axios.get(apiUrlPart2)
.then(response => {
  // Parse the response and extract the data
  const rows = response.data.values.slice(1); // Exclude header row
  
  const sheetData = rows.map(row => ({
    srNo: row[0],
    name: row[1],
    address: row[2],
    mobileNumber: row[3],
    totalAttendance: row[4], // Assuming date is in the first column
    totalAssignment:row[5],
    totalTest:row[6],
  }));

  setStudentData(sheetData);
})
.catch(error => {
  console.error('Error fetching data from Google Sheet:', error);
  console.log('Error response:', error.response); // Log the actual error response
});
    
  }, []); // Empty dependency array ensures the effect runs only once on component mount
  const handleCheckboxChange = (attendance) => {
    const updatedSelectedAttendance = selectedAttendance.includes(attendance)
      ? selectedAttendance.filter((selected) => selected !== attendance)
      : [...selectedAttendance, attendance];

    setSelectedAttendance(updatedSelectedAttendance);
  };

  return (
    
    <div className="container mt-5">
      <h2 className="mb-4">View Student Data</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Total Attendance</th>
            <th scope="col">Total Assignment</th>
            <th scope="col">Total Test</th>

          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={index}>
              <th scope="row">{student.srNo}</th>
              <td>{student.name}</td>
              <td>{student.address}</td>
              <td>{student.mobileNumber}</td>
              <td>{student.totalAttendance}</td>
              <td>{student.totalAssignment}</td>
              <td>{student.totalTest}</td>

            </tr>
          ))}
        </tbody>
      </table>
      
      {/* <div className="container mt-5">
        <h2 className="mb-4">Export Student Data</h2>
        <div className="d-flex">
          <Link
            to={{
              pathname: '/student-data/sem4/pdf-export',
              state: { selectedStudents: selectedStudents },
            }}
            className="btn btn-warning mr-3"
          >
            Export to PDF
          </Link>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={() => setSelectedStudents([])}
              />
              Select All
            </label>
          </div>
        </div>

        <div className="mt-3">
          {studentData.map((student) => (
            <div key={student.srNo} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={selectedStudents.includes(student)}
                onChange={() => handleCheckboxChange(student)}
              />
              <label className="form-check-label">
                {student.srNo}: {student.name}, {student.address}, {student.mobileNumber}
              </label>
            </div>
          ))}
        </div>

        <PdfExport studentData={selectedStudents} />
      </div> */}

    </div>
  );
};

export default View;