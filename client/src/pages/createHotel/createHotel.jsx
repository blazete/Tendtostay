import React, { useState,useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap
} from "react-leaflet";
import DatePicker, { DateObject } from "react-multi-date-picker";
import "./mapcss.css";
import states from "./state";
import axios from "axios";

const CreateHotel = () => {
  const [hotelData, setHotelData] = useState({
    name: "",
    price: 0,
    state: "",
    district: "",
    rooms: 0,
    garden: false,
    breakfast: false,
    pool: false,
  });
  const [clickedPosition, setClickedPosition] = useState(null);
  const [addDates, setAllDates] = useState([]);
  const [center,setCenter] = useState({
    center :  [20.5937, 78.9629],
    zoom : 10
  })
  const [dates, setDates] = useState([]);
  const [districts,setDistrict] = useState([])
  const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(center);
    }, [center]);
    return null;
  };
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setClickedPosition([e.latlng.lat, e.latlng.lng]);
        setHotelData({ ...hotelData, location: [e.latlng.lng, e.latlng.lat] });
        setCenter({...center,center:[e.latlng.lat, e.latlng.lng]})
      },
    });
    return clickedPosition === null ? null : (
      <Marker position={clickedPosition}>
        <Popup>
          Latitude: {clickedPosition[0]}, Longitude: {clickedPosition[1]}
        </Popup>
      </Marker>
    );
  };
  const hanldeState = async (e)=>{
    const fetchDistricts = await axios.get('http://localhost:5000/cities',{params :{state : e.target.value}})
    setHotelData({ ...hotelData, state: e.target.value })
    if(fetchDistricts?.data?.cities){
      setDistrict(fetchDistricts.data.cities)
    }
  }
  const handleDistrictChange = (e)=>{
    const data = e.target.value.split(',')
    console.log(data)
    setHotelData({ ...hotelData, district: data[0] });
    setCenter({center :[data[1],data[2]], zoom : 12})
  }
  console.log(hotelData)
  return (
    <>
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

      <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10 border rounded-lg mt-4 shadow-lg">
        <header>
          <h1 className="text-3xl font-bold">Create a New Hotel</h1>
          <p className="text-gray-600">
            Enter the details below to add a new hotel.
          </p>
        </header>

        <main className="mt-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="hotel-name"
                    className="block text-sm font-medium mb-1"
                  >
                    Hotel Name
                  </label>
                  <input
                    type="text"
                    id="hotel-name"
                    placeholder="Hotel Name"
                    className="w-full px-3 py-2 border rounded-md"
                    onChange={(e) => {
                      setHotelData({ ...hotelData, name: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium mb-1"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    placeholder="$100"
                    className="w-full px-3 py-2 border rounded-md"
                    onChange={(e) => {
                      setHotelData({ ...hotelData, price: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="grid  gap-4 w-full">
                <div className="w-full">
                  <label
                    htmlFor="hotel-name"
                    className="block text-sm font-medium mb-1"
                  >
                    Hotel Tagline
                  </label>
                  <input
                    type="text"
                    id="hotel-name"
                    placeholder="Hotel Name"
                    className="px-3 py-2 border rounded-md w-full"
                    onChange={(e) => {
                      setHotelData({ ...hotelData, name: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="grid  gap-4 w-full">
                <div className="w-full">
                  <label
                    htmlFor="hotel-name"
                    className="block text-sm font-medium mb-1"
                  >
                    Hotel Address
                  </label>
                  <input
                    type="text"
                    id="hotel-name"
                    placeholder="Hotel Name"
                    className="px-3 py-2 border rounded-md w-full"
                    onChange={(e) => {
                      setHotelData({ ...hotelData, name: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="grid  gap-4 w-full">
                <div className="w-full">
                  <label
                    htmlFor="hotel-name"
                    className="block text-sm font-medium mb-1"
                  >
                    Hotel Pincode
                  </label>
                  <input
                    type="text"
                    id="hotel-name"
                    placeholder="Hotel Name"
                    className="px-3 py-2 border rounded-md w-full"
                    onChange={(e) => {
                      setHotelData({ ...hotelData, name: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium mb-1"
                  >
                    State
                  </label>
                  <select
                    id="state"
                    className="w-full px-3 py-2 border rounded-md"
                    onChange={(e) => {hanldeState(e)}}
                  >
                    {states.map((location,index) => {
                      return (
                        <option key={index} value={location}>{location}</option>
                      );
                     
                    })}
                     <option value="" selected>
                           state
                      </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="district"
                    className="block text-sm font-medium mb-1"
                  >
                    District
                  </label>
                  <select
                    id="district"
                    className="w-full px-3 py-2 border rounded-md"
                    onChange={(e) => handleDistrictChange(e)}
                  >
                    {districts.map((d,index) => {
                      return <option key={index} value={[d.city,d.lat,d.lng]}>{d?.city}</option>;
                    })}
                     <option value="" selected>
                            district
                      </option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="rooms"
                    className="block text-sm font-medium mb-1"
                  >
                    Number of Rooms
                  </label>
                  <input
                    type="number"
                    id="rooms"
                    placeholder="50"
                    className="w-full px-3 py-2 border rounded-md"
                    onChange={(e) => {
                      setHotelData({ ...hotelData, rooms: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="rooms"
                    className="block text-sm font-medium mb-1"
                  >
                    Number of Bathrooms
                  </label>
                  <input
                    type="number"
                    id="rooms"
                    placeholder="50"
                    className="w-full px-3 py-2 border rounded-md"
                    onChange={(e) => {
                      setHotelData({ ...hotelData, rooms: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="rooms"
                    className="block text-sm font-medium mb-1"
                  >
                    Number of Beds
                  </label>
                  <input
                    type="number"
                    id="rooms"
                    placeholder="50"
                    className="w-full px-3 py-2 border rounded-md"
                    onChange={(e) => {
                      setHotelData({ ...hotelData, rooms: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <fieldset>
                <legend className="text-sm font-medium mb-1">Amenities</legend>
                <div className="flex flex-col gap-2">
                  <div>
                    <input
                      type="checkbox"
                      id="garden"
                      className="mr-2"
                      onChange={(e) => {
                        setHotelData({ ...hotelData, garden: true });
                      }}
                    />
                    <label htmlFor="garden" className="text-sm">
                      Garden
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="breakfast"
                      className="mr-2"
                      onChange={(e) => {
                        setHotelData({ ...hotelData, breakfast: true });
                      }}
                    />
                    <label htmlFor="breakfast" className="text-sm">
                      Breakfast
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="pool"
                      className="mr-2"
                      onChange={(e) => {
                        setHotelData({ ...hotelData, pool: true });
                      }}
                    />
                    <label htmlFor="pool" className="text-sm">
                      Pool
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </form>

          <div className="mt-4">select the date: </div>
          <div className="relative">
            <div className="z-50 relative mt-4">
              <DatePicker
                multiple
                value={dates}
                minDate={new DateObject()}
                onChange={(dateObjects) => {
                  setDates(dateObjects);
                  const allDatesInRange = dateObjects.map((date) =>
                    date.format("YYYY-MM-DD")
                  );
                  setAllDates(allDatesInRange);
                }}
              />
            </div>

            <div className="w-full h-[400px] mt-6 relative z-10">
              <MapContainer
                center={center.center}
                zoom={center.zoom || 6}
                className="h-full"
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
                <ChangeView center={center.center} />
              </MapContainer>
            </div>
          </div>
        </main>

        <footer className="mt-6 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Hotel
          </button>
        </footer>
      </div>
    </>
  );
};

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
export default CreateHotel;
