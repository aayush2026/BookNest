import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';

const Avaliable = () => {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetch('/list.json')
      .then((response) => response.json())
      .then((data) => {
        const availableBooks = data.filter((data) => book.availability === true);
        setFilteredList(availableBooks);
        console.log(availableBooks); // This should log correctly now
      })
      .catch((error) => {
        console.error('Error fetching the JSON file:', error  );
      });
  }, []);

  return (
    <>
      <Carousel Title="Available Books" books={availableBooks} />
      {/* <Carousel Title="Avaliable"></Carousel> */}
    </>
  );
};

export default Avaliable;
