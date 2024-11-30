// import React, { useEffect, useState } from 'react';
// import list from '../utils/list.json';  
// import Carousel from './Carousel';
// import Papa from 'papaparse';

// const Books = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     // Load the CSV file
//     Papa.parse('/data/books.csv', {
//       download: true,
//       header: true,
//       complete: (results) => {
//         // Set the books data
//         setBooks(results.data);
//       },
//       error: (error) => {
//         console.error('Error loading the CSV file:', error);
//       },
//     });
//   }, []);

//   return (
//     <div className='container mx-auto mt-10 min-h-screen'>
//       <h1 className="text-2xl mb-5">All Books</h1>
//       <Carousel Title="All Books" books={list} />
//     </div>
//   )
// }

// export default Books