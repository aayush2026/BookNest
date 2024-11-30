// import React, { useEffect, useState } from 'react';
// import { fetchBooks } from '../../../backend/bookServices';

// const BooksList = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch books with a sample query, e.g., 'fiction'
//     fetchBooks('fiction').then((data) => {
//       setBooks(data);
//       setLoading(false);
//     });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//       {books.map((book) => (
//         <div key={book.id} className="bg-white shadow-md rounded-lg p-4">
//           <img
//             src={book.volumeInfo.imageLinks?.thumbnail}
//             alt={book.volumeInfo.title}
//             className="w-full h-60 object-cover mb-2 rounded-md"
//           />
//           <h3 className="text-lg font-semibold">{book.volumeInfo.title}</h3>
//           <p className="text-sm text-gray-600">
//             {book.volumeInfo.authors?.join(', ')}
//           </p>
//           <p className="text-sm">{book.volumeInfo.description?.substring(0, 100)}...</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BooksList;