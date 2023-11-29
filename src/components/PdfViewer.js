// PdfViewer.js

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = ({ pdfFile }) => {
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log(`Document loaded successfully - ${numPages} pages`);
  };

  const onPdfLoadError = (error) => {
    console.error('Error loading PDF:', error);
    setError('Failed to load PDF file. Please check the file and try again.');
  };

  return (
    <div>
      {error && <div>{error}</div>}
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onPdfLoadError}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfViewer;
