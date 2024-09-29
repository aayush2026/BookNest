import React from 'react';
import { useParams } from 'react-router-dom';
import list from '../utils/list.json';
import Carousel from './Carousel';


const Bookdetail = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const book = list.find(book => book.id === parseInt(id));
  
  if (!book) {
    return <div>Book not found</div>; // Handle the case where the book is not found
  }
  const recommendedBooks = list.filter(book => book.recommended && book.availability);
  
  return (
    <>
      <div className='min-h-svh'>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-5 flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 space-y-6 md:mt-28 md:mb-8 mb-4'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfHHBM2a-YAYzUabwtTi79kLmXAYGBg3xyg&s" alt={book.title} className="w-56 md:w-72" />
          </div>
          <div className='w-full md:w-1/2 space-y-6 md:mt-28 mt-4 md:mb-8 mb-4'>
            <h1 className='md:text-5xl text-3xl'>{book.title}</h1>
            <p className="mt-4">{book.description}</p>
            <p className="mt-2 text-lg font-semibold">Price: ${book.price}</p>
            <p className="m-0 inline">{book.availability ? 'Available' : 'Not Available'}</p>
            <button className='btn border-2 border-gray-500 block'>Buy Now</button>
          </div>
        </div>
        <div className='max-w-screen-2xl container mx-auto mt-8'>
          <Carousel Title="Recommended Books" books={recommendedBooks} />
        </div>
      </div>
    </>
  );
};

export default Bookdetail;
