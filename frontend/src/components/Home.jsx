import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Carousel from './Carousel';
import { useState,useEffect } from 'react';
// import list from '../utils/list.json';
import axios from 'axios';

const Home = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook=async ()=>{
      try{
        const res=await axios.get("http://localhost:4001/book")
        // console.log(res.data);
        setBook(res.data);
      }
      catch(error){
        console.log('error', error)
      }
    }
    getBook();
  }, [])

  // Filter books for different categories
  const availableBooks = book.filter(book => book.availability === true);
  const newBooks = book.filter(book => book.new && book.availability);
  const popularBooks = book.filter(book => book.popular && book.availability);
  const recommendedBooks = book.filter(book => book.recommended && book.availability);

  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <NavBar />
      <Banner />

      <Carousel Title="New Books" books={newBooks} />
      <Carousel Title="Popular Books" books={popularBooks} />
      <Carousel Title="Recommended Books" books={recommendedBooks} />
      <Carousel Title="Available Books" books={availableBooks} />
      
    </>
  );
};

export default Home;