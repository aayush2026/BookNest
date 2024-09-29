import React from 'react';
import list from '../utils/list.json';  
import Card from './Card';

const AllBooks = () => {
  return (
    <div className='max-w-screen-2xl mx-auto md:px-20 container mt-20 min-h-screen'>
      <h1 className="text-2xl">All Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-8">
          {list.length > 0 ? (
            list.map((book) => (
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