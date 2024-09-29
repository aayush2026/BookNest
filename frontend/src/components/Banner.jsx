import React from 'react'

const Banner = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-5 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 space-y-6 md:mt-28 mt-20 md:mb-8 mb-4'>
          <h1 className='md:text-8xl text-5xl'>Welcome to
            <br /> 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."'> BookNest</span></h1>
          <p>Your gateway to endless knowledge. Browse, read, and download a wide variety of books, from fiction to academic resources. Start reading your favorite books from anywhere, at any time.</p>
          <button className='btn border-2 border-gray-500'>Subscribe</button>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Banner