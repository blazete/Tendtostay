import React, { useState, useEffect } from 'react';
import { MapContainer, useMapEvents, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { divIcon } from 'leaflet';
import hotelImg from '../../utils/hotel.jpeg';
import './customstyles.css';
import axios from 'axios';
const HotelMarkers = ({ innerMap }) => {
  if (Array.isArray(innerMap) && innerMap.length > 0) {
    return innerMap.map((hotel) => {
      const icon = divIcon({
        className: 'custom-icon',
        iconSize: [30, 30],
        html: `<div>${hotel.price}</div>`,
      });
      return (
        <Marker key={hotel._id} position={[hotel.location.coordinates[1],hotel.location.coordinates[0]]} icon={icon}>
          <Popup>
            <div className="flex flex-col items-start justify-center content-center">
              <img src={hotelImg} alt="Hotel" className="rounded-2xl" />
              <div className="flex justify-between items-center w-full">
                <div className="font-semibold">Room in {hotel.district}</div>
              </div>
              <div className="font-thin">{hotel.name}</div>
              <div className="font-thin">A cozy apartment</div>
              <div className="font-thin">10-15 Mar</div>
              <div className="font-semibold pt-2">₹{hotel.price} night</div>
            </div>
          </Popup>
        </Marker>
      );
    });
  }

  return null;
};

const  SetBoundsRectangles =  ({ setInnerMap, setDisplayHotels, date, priceRange }) => {
  const map = useMap();
  const fetchHotelsWithinBounds = async () => {
    const currentBounds = map.getBounds();
    const newbounds = [
      [currentBounds.getSouthWest().lng,currentBounds.getSouthWest().lat], 
      [currentBounds.getSouthEast().lng,currentBounds.getSouthEast().lat], 
      [currentBounds.getNorthEast().lng,currentBounds.getNorthEast().lat], 
      [currentBounds.getNorthWest().lng,currentBounds.getNorthWest().lat], 
      [currentBounds.getSouthWest().lng,currentBounds.getSouthWest().lat]  
  ];
    const hotels = await axios.get("http://localhost:5000/hotel/getHotels",{
      params: {
        bonds: [newbounds]
      }
    })
    setInnerMap(hotels.data);
    setDisplayHotels(hotels.data);
  };

  useEffect(() => {
    fetchHotelsWithinBounds();
  }, [map, date, priceRange]);

  useMapEvents({
    move: () => {
      fetchHotelsWithinBounds();
    }
  });

  return null;
};


const UpdateMapCenter = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location.latLon) {
      map.setView(location.latLon, location.zoom);
    }
  }, [location, map]);

  return null;
};

const MissionMap = ({ setDisplayHotels, location, date, priceRange }) => {
  const [innerMap, setInnerMap] = useState([]);
  console.log(innerMap)
  return (
    <div className="h-full w-full">
      <MapContainer center={location.latLon} zoom={12} className="h-[100%]" scrollWheelZoom={true} maxZoom={12} bounceAtZoomLimits= {false}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <SetBoundsRectangles setInnerMap={setInnerMap} setDisplayHotels={setDisplayHotels} date={date} priceRange={priceRange} />
        <HotelMarkers innerMap={innerMap} />
        <UpdateMapCenter location={location} />
      </MapContainer>
    </div>
  );
};

export default MissionMap;


