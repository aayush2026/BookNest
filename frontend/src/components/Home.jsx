import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Carousel from './Carousel';
import Footer from './Footer';
import list from '../utils/list.json';

const Home = () => {
  // Filter books for different categories
  const newBooks = list.filter(book => book.new && book.availability);
  const popularBooks = list.filter(book => book.popular && book.availability);
  const recommendedBooks = list.filter(book => book.recommended && book.availability);

  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <NavBar />
      <Banner />

      <Carousel Title="New Books" books={newBooks} />
      <Carousel Title="Popular Books" books={popularBooks} />
      <Carousel Title="Recommended Books" books={recommendedBooks} />
      
    </>
  );
};

export default Home;