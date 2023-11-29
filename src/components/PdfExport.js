// // PdfExport.js
// import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf-viewer/pdfjs';

// const PdfExport = ({ selectedStudents }) => {
//   const styles = StyleSheet.create({
//     page: {
//       flexDirection: 'row',
//       backgroundColor: '#E4E4E4',
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1,
//     },
//   });

//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>Selected Students</Text>
//           {selectedStudents.map((student, index) => (
//             <Text key={index}>
//               {student.srNo}: {student.name}, {student.address}, {student.mobileNumber}
//             </Text>
//           ))}
//         </View>
//       </Page>
//     </Document>
//   );
// };

// export default PdfExport;
