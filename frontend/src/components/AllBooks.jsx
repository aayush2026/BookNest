import React, { useState, useEffect } from 'react';
// import list from '../utils/list.json';  
import Card from './Card';
import axios from "axios";

const AllBooks = () => {
  
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
  
  return (
    <div className='max-w-screen-2xl mx-auto md:px-20 container mt-20 min-h-screen'>
      <h1 className="max-w-screen-2xl ml-4 md:ml-8 text-2xl">All Books</h1>

      <div className="grid grid-cols-2 justify-items-center sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4">
          {book.length > 0 ? (
            book.map((book) => (
              <Card 
              key={book.id}
              id={book.id}
              title={book.title}
              image={book.image}
              price={book.price}
              route={`/book/${book.id}`}
              className="scale-110 shadow-xl"  // Dynamic route to book details
              />
            ))
          ) : (
            <p>No books available.</p>  // Handle the case when there are no books
          )}
      </div>
      
    </div>
  )
}

export default AllBooks