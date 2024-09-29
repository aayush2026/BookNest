import React from 'react'
import { useNavigate } from 'react-router-dom';


const Card = ({ id, title, image,price, route, className}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(route);
  };

  return (
    <>
      <div className={`carousel-item md:w-56 md:h-88 w-40 h-76 rounded-xl md:mx-0 mx-2 my-4 bg-whitev 
      transform transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col ${className}`}
      onClick={handleCardClick}>
        <div>
          <img className='rounded-xl md:mt-4 m-auto object-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfHHBM2a-YAYzUabwtTi79kLmXAYGBg3xyg&s" alt={title} />
        </div>
        <div className='flex justify-between md:mx-4 mt-2 mb-4'>
          <h2 className="md:text-lg text-base card-title">
            {title}
          </h2>
          <div className="badge badge-primary text-xs mt-1 shadow-md">₹{price}</div>
        </div>
      </div>
      
      {/* <div className='carousel-item md:w-56 md:h-80 w-40 h-56 rounded-xl mx-2 my-4 bg-whitev 
      transform transition-transform duration-300 hover:scale-105 cursor-pointer'
      onClick={handleCardClick}>
        <div>
          <img className='rounded-xl w-56' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfHHBM2a-YAYzUabwtTi79kLmXAYGBg3xyg&s" alt={title} />
        </div>
      </div> */}
    </>
  )
}

export default Card


