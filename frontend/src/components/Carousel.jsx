import React from 'react'
import Card from './Card'

const Carousel = ({Title,books=[]}) => {
  return (
    <>
      <div className='mt-5'>
        <h1 className='max-w-screen-2xl container mx-auto md:px-20 px-5 text-2xl text-neutral-300'>{Title}</h1>
        <div className='justify-evenly flex'>
          <div className="carousel rounded-box w-[90%] container">
            {books.length > 0 ? (
                books.map((book) => (
                  <Card 
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    image={book.image}
                    price={book.price}
                    route={`/book/${book.id}`}  // Dynamic route to book details
                  />
                ))
              ) : (
                <p>No books available.</p>  // Handle the case when there are no books
              )}
          </div>
        </div> 
      </div>
    </>
  )
}

export default Carousel