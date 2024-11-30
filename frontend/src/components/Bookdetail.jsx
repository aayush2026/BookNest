import {React, useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
// import list from '../utils/list.json';
import axios from 'axios';
import Carousel from './Carousel';


const Bookdetail = () => {
  
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook=async ()=>{
      try{
        const res=await axios.get("http://localhost:4001/book")
        console.log(res.data);
        setBook(res.data);
      }
      catch(error){
        console.log('error', error)
      }
    }
    getBook();
  }, [])

  const { id } = useParams(); // Get the book ID from the URL
  const bookDetail = book.find(book => book.id === parseInt(id));
  
  if (!bookDetail) {
    return <div>Book not found</div>; // Handle the case where the book is not found
  }
  const recommendedBooks = book.filter(book => book.recommended && book.availability);
  
  return (
    <>
      <div className='min-h-svh'>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-5 flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 space-y-6 md:mt-28 mt-20 md:mb-8 mb-4'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfHHBM2a-YAYzUabwtTi79kLmXAYGBg3xyg&s" alt={book.title} className="w-56 md:w-72" />
          </div>
          <div className='w-full md:w-1/2 space-y-6 md:mt-28 mt-4 md:mb-8 mb-4'>
            <h1 className='md:text-5xl text-3xl'>{bookDetail.title}</h1>
            <p className="mt-4">{bookDetail.description}</p>
            <p className="mt-2 text-lg font-semibold">Price: ${bookDetail.price}</p>
            <p className="m-0 inline">{bookDetail.availability ? 'Available' : 'Not Available'}</p>
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
