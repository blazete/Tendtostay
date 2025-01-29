
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/card'

export const YourProperties = () => {
  const [userHotels,setUSerHostes] = useState([])
  useEffect(()=>{
    fetchData();
    async function fetchData() {
      const response = await axios.get('http://localhost:5000/user/getHotels', { withCredentials: true });
      setUSerHostes(response.data)
    }
  },[])
  return (
    <div className='w-[100vw] flex items-center  justify-center'>
        <div className='flex flex-wrap mx-4  justify-center  gap-6 my-5'>
          {userHotels.map((hotel,index)=>{
            return (<Card
              key={index}
              name = {hotel.name}
              price={hotel.price}
              location={hotel.district}
              pool={hotel.pool}
              rooms={hotel.rooms}
              garden={hotel.garden}
              />  )

          })}
        </div>
    </div>
  )
}
