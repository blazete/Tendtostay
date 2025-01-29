import React, { useState,useEffect } from "react";
import ImageCarousel from "./components/carousel";
import DatePicker, { DateObject, getAllDatesInRange } from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import { useParams } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default function Component() {
    let { id } = useParams();
    const [hotelData, setHotelData] = useState();
    const [dates, setDates] = useState([])
    const [allDates, setAllDates] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`http://localhost:5000/hotel/getHotel/${id}`, {
            withCredentials: true
          });
        console.log(response.data)
        setHotelData(response.data);
      };
      fetchData();
    }, [id]);
  
    const handleBooking = async() => {
      if (allDates.length > 0) {
        const dateArray = allDates.map(date => {
          const utcDate = new Date(date);
          utcDate.setUTCHours(0, 0, 0, 0);
          return utcDate.toISOString();
        });
        console.log(dateArray)
        const response = await axios.post(`http://localhost:5000/hotel/bookHote/${id}`,{date : dateArray},{withCredentials : true})
        console.log(response)
      } else {
        console.log('Please select a valid date range');
      }
    };
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <HotelIcon className="w-8 h-8 mr-2" />
          <h1 className="text-xl font-bold">Stay-Nest</h1>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline" prefetch={false}>
            View Properties
          </a>
          <address href="#" className="hover:underline" prefetch={false}>
            Profile Picture
          </address>
        </nav>
      </header>
      <main className="max-w-5xl mx-auto p-4">
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-4">Hotel in New Delhi</h2>
          <div className="relative mb-4">
            <ImageCarousel/>
          </div>
          <h3 className="text-2xl font-semibold mb-2">{hotelData?hotelData.name:null}</h3>
          <div className="flex flex-wrap space-x-2 mb-4">
            <div>1 Rooms</div>
            <div>Swimming pool</div>
            <div>Guests</div>
            <div>Garden</div>
            <div>Beds</div>
            <fiv>Washroom</fiv>
          </div>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleBooking();
            }}
          >
            <div className="space-y-2">
              <div htmlFor="start-date">Start Date:</div>
              <DatePicker
                range
                fixMainPosition
                value={dates}
                minDate={new DateObject()}
                onChange={(dateObjects) => {
                  setDates(dateObjects);
                  const allDatesInRange = getAllDatesInRange(dateObjects).map((date) => date.format("YYYY-MM-DD"));
                  setAllDates(allDatesInRange);
                }}
            
              />
            </div>
            <div className="space-y-2">
              <div htmlFor="guests">Enter the number of guests:</div>
              <input id="guests" type="number" className="w-full" />
            </div>
            <button type="submit" className="bg-red-600 text-white w-full">
              Book
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function HotelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 22v-6.57" />
      <path d="M12 11h.01" />
      <path d="M12 7h.01" />
      <path d="M14 15.43V22" />
      <path d="M15 16a5 5 0 0 0-6 0" />
      <path d="M16 11h.01" />
      <path d="M16 7h.01" />
      <path d="M8 11h.01" />
      <path d="M8 7h.01" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </svg>
  );
}
