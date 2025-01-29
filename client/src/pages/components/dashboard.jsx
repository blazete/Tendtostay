import React, { useState } from 'react';
import hotelImg from '../../utils/hotel.jpeg';
import hotel0 from '../../utils/hotel0.jpeg';
import hotel1 from '../../utils/hotel1.jpeg';
import hotel2 from '../../utils/hotel2.jpeg';
import hotel3 from '../../utils/hotel3.jpeg';
import hotel4 from '../../utils/hotel4.jpeg';
import hotel5 from '../../utils/hotel5.jpeg';
import hotel6 from '../../utils/hotel6.jpeg';
import hotel7 from '../../utils/hotel7.jpeg';
import hotel8 from '../../utils/hotel8.jpeg';
import hotel9 from '../../utils/hotel9.jpeg';
import hotel10 from '../../utils/hotel10.jpeg';
import hotel11 from '../../utils/hotel11.jpeg';
import hotel12 from '../../utils/hotel12.jpeg';
import hotel13 from '../../utils/hotel13.webp';
import { NavLink, useNavigate } from 'react-router-dom';
import Card from './card.jsx';
import MissionMap from './missionMap.jsx';

const Dashboard = ({ location, setLocation, date, priceRange }) => {
  const hotelImages = [
    hotel0, hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8,
    hotel9, hotel10, hotel11, hotel12, hotel13
  ];
  const [displayHotel, setDisplayHotels] = useState([]);
  console.log(displayHotel)
  const navigate = useNavigate();
 
  return (
    <div className='sm:flex sm:flex-row flex-col-reverse flex justify-between mb-52 sm:mb-0'>
      <div className='flex flex-col items-start justify-start sm:w-2/3 w-full'>
        <div className='col-span-3 px-3'><span className='font-semibold'>{displayHotel.length}</span> rooms available</div>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-2 items-center justify-between w-full px-3 py-5 gap-4'>
          {Array.isArray(displayHotel) && displayHotel.length > 0?displayHotel.map((hotel) => (
            <Card 
              key={hotel._id}
              name={hotel.name}
              price={hotel.price}
              image={hotelImages[hotel.id % hotelImages.length]}
              location={hotel.District} 
              pool = {hotel.pool}
              rooms = {hotel.rooms}
              garden = {hotel.garder}
              id = {hotel._id}
            />

          )):null}
        </div>
      </div>
      <div className='sm:sticky top-0 sm:h-[100vh] h-[40vh] sm:w-1/3 w-full block'>
        <MissionMap setDisplayHotels={setDisplayHotels} location={location} date={date} priceRange={priceRange} />
      </div>
    </div>
  );
};

export default Dashboard;