// src/components/ExportPDF.js
import React from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf-viewer/pdf-viewer';

const ExportPDF = ({ data }) => {
  return (
    <div>
      <PDFDownloadLink document={<YourPDFDocument data={data} />} fileName="students.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
      <PDFViewer width="100%" height="500px">
        <YourPDFDocument data={data} />
      </PDFViewer>
    </div>
  );
};

const YourPDFDocument = ({ data }) => {
  // Implement PDF generation logic based on data
  return (
    <div>
      {/* Your PDF content goes here */}
    </div>
  );
};

export default ExportPDF;
