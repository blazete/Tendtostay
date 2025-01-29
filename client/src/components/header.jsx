import React, { useState } from "react";
import Logo from "../utils/finalLogo.png";
import pool from "../utils/pool.png";
import newPhoto from "../utils/new.png";
import Coffee from "../utils/coffee.png";
import golf from "../utils/golf.png";
import farm from "../utils/farm.png";
import view from "../utils/view.png";
import hotelData from "../pages/components/hotelData";
import "./header.css";
import locations from "./locations";
const Header = ({ setPriceRange, setDates, setLocation, setLatLon, date }) => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [addguest, setAddGuest] = useState(false);
  const handleLargedateOpen = () => {
    setAddGuest(false);
    setDateOpen(false);
    setLocationOpen((prev) => !prev);
  };
  const handleAddguest = () => {
    setDateOpen(false);
    setLocationOpen(false);
    setAddGuest((prev) => !prev);
  };
  const handleLargeDateOpen = () => {
    setAddGuest(false);
    setLocationOpen(false);
    setDateOpen((prev) => !prev);
  };
  const handleClosePopup = () => {
    setAddGuest(false);
    setDateOpen(false);
    setLocationOpen(false);
  };
  const handleLocationChange = (state) => {
    setLocation(state);
    setLatLon(state.latLon);
    setLocationOpen(false);
  };
  return (
    <div>
      <div className="sticky top-0 z-[999] bg-white w-full flex flex-col border-b border-slate-300">
        <div className="sm:hidden flex py-5 w-full items-center justify-center">
          <div className="flex items-center justify-center   mt-3  text-sm  border border-slate-500 rounded-full  xl:ml-28">
            <div
              className="border-r border-slate-500  px-4 py-2 cursor-pointer"
              onClick={handleLargedateOpen}
            >
              Select Area
            </div>
            <div
              className="border-r border-slate-500  px-4 py-2 cursor-pointer"
              onClick={handleLargeDateOpen}
            >
              Select Date
            </div>
            <div
              className="b border-slate-500  px-4 py-2 cursor-pointer"
              onClick={handleAddguest}
            >
              Price Range
            </div>
          </div>
        </div>

        {locationOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-55 z-30"
              onClick={handleClosePopup}
            ></div>
            <div className="absolute top-24 max-w-4xl w-11/12 left-0 right-0 ml-auto mr-auto p-8 z-40">
              <div className="bg-white p-8 rounded-lg">
                <div className="flex flex-row items-stretch justify-between">
                  <h1 className="text-3xl font-semibold mb-4">
                    Holiday rentals in India
                  </h1>
                  <svg
                    width="24"
                    height="24"
                    onClick={handleClosePopup}
                    className="cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 7L7 17M7 7L17 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="mb-6">
                  Please Select your destination from below
                </p>
                <div className="grid grid-rows-4 grid-flow-col gap-4">
                  {locations.map((loc) => (
                    <div
                      key={loc.id} // Add a unique key for each location
                      className="bg-red-300 rounded-lg text-center text-white cursor-pointer py-5"
                      onClick={() => {
                        handleLocationChange(loc);
                      }}
                    >
                      {loc.name}
                    </div>
                  ))}
                </div>
                <div className="text-red-600 mt-4 cursor-pointer">
                  Or, Search through the map
                </div>
              </div>
            </div>
          </>
        )}
        {dateOpen && (
          <div>
            <div
              className="absolute h-[100vh] w-[100vw] z-0 bg-gray-500 bg-opacity-55"
              onClick={handleClosePopup}
            ></div>
            <div className="absolute top-24 max-w-4xl w-20% left-0 right-0 ml-auto mr-auto p-8">
              <div className="bg-white p-8 rounded-lg z-[999]">
                <div className="flex flex-row items-stretch justify-between">
                  <h1 className="text-3xl font-semibold mb-4">
                    Holiday rentals in India
                  </h1>
                  <svg
                    width="5%"
                    onClick={handleClosePopup}
                    className="cursor-pointer"
                    height="5%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 7L7 17M7 7L17 17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="mb-6">Please Select your dates from below</p>
                <form className="flex flex-row gap-4">
                  <div className="border-gray-900 p-2 border rounded-lg">
                    <label className="mr-4" for="fromDate">
                      From :
                    </label>
                    <input
                      type="date"
                      id="fromDate"
                      onChange={(e) =>
                        setDates({ ...date, startDate: e.target.value })
                      }
                    />
                  </div>
                  <div className="border-gray-900 p-2 border rounded-lg">
                    <label className="mr-4" for="todate">
                      To :
                    </label>
                    <input
                      type="date"
                      id="todate"
                      onChange={(e) =>
                        setDates({ ...date, endDate: e.target.value })
                      }
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        {addguest && (
          <div>
            <div
              className="absolute h-[100vh] w-[100vw] z-0 bg-gray-500 bg-opacity-55"
              onClick={handleClosePopup}
            ></div>
            <div className="absolute top-24 max-w-4xl w-20% left-0 right-0 ml-auto mr-auto p-8">
              <div className="bg-white p-8 rounded-lg z-[999]">
                <div className="flex flex-row items-stretch justify-between">
                  <h1 className="text-3xl font-semibold mb-4">
                    Holiday rentals in India
                  </h1>
                  <svg
                    width="5%"
                    onClick={handleClosePopup}
                    className="cursor-pointer"
                    height="5%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 7L7 17M7 7L17 17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="mb-6">Please Select Price Range</p>
                <div className="flex flex-row gap-4">
                  <div className="border-gray-900 p-2 border rounded-lg">
                    <label className="mr-4" for="Adults">
                      Price Range :
                    </label>
                    <input
                      type="number"
                      defaultValue={1000}
                      id="Adults"
                      onChange={(e) => setPriceRange(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="xl:flex xl:justify-between hidden items-center content-center border-b-2 pb-3 w-full">
          <div className="flex items-center justify-center   mt-3  text-sm  border border-slate-500 rounded-full ml-4">
            <div
              className="border-r border-slate-500  px-4 py-1 cursor-pointer"
              onClick={handleLargedateOpen}
            >
              Select Area
            </div>
            <div
              className="border-r border-slate-500  px-4 py-1 cursor-pointer"
              onClick={handleLargeDateOpen}
            >
              Select Date
            </div>
            <div
              className=" text-slate-400 cursor-pointer flex items-center pl-2 pr-1 py-1"
              onClick={handleAddguest}
            >
              Price Range
              <div className=" bg-red-600 rounded-full text-white font-bold p-1 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" self-end justify-self-end flex right-0 items-center justify-center content-center gap-2 mt-3  text-sm py-2">
            <div className=" cursor-pointer flex items-center border-slate-500  px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="sm:flex justify-between xl:hidden hidden items-center content-center border-b-2 pb-3 w-full">
          <div className="flex justify-start">
            <div className="pl-7  cursor-pointer">
              <img src={`${Logo}`} className="h-[50px]" />
            </div>
            <div className="flex items-center justify-center   mt-3  text-sm  border border-slate-500 rounded-full ml-11 xl:ml-28">
              <div
                className="border-r border-slate-500  px-4 py-1 cursor-pointer"
                onClick={handleLargedateOpen}
              >
                Select Area
              </div>
              <div
                className="border-r border-slate-500  px-4 py-1 cursor-pointer"
                onClick={handleLargeDateOpen}
              >
                Select Date
              </div>
              <div
                className=" text-slate-400 cursor-pointer flex items-center pl-2 pr-1 py-1"
                onClick={handleAddguest}
              >
                Price Range
                <div className=" bg-red-600 rounded-full text-white font-bold p-1 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className=" self-end justify-self-end flex right-0 items-center justify-center content-center gap-2 mt-3  text-sm py-2">
            <div className=" cursor-pointer">Airbnb your home</div>
            <div className=" cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <div className=" cursor-pointer flex items-center border-slate-500 border rounded-full px-3 py-2">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex  justify-between items-center content-center py-4 border-b-2 hidden">
          <div className="flex xl:max-w-full max-w-[350px] items-center content-center justify-start overflow-x-auto px-5 py-1">
            <div className="flex flex-col justify-center items-center pr-5 border-r border-slate-500">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <div className="text-xs">Your Search</div>
            </div>
            <div className="flex flex-col justify-center items-center px-5 ">
              <div>
                <img src={`${pool}`} className="h-[25px]" />
              </div>
              <div className="text-xs">Pools</div>
            </div>

            <div className="flex flex-col justify-center items-center px-5 ">
              <div>
                <img src={`${Coffee}`} className="h-[25px]" />
              </div>
              <div className="text-xs">Breakfast</div>
            </div>
            <div className="flex flex-col justify-center items-center px-5 ">
              <div>
                <img src={`${farm}`} className="h-[25px]" />
              </div>
              <div className="text-xs">Garden</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
