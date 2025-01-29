import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from '../../components/card'

const YourBookings = () => {
  const [userBookings,setUserBookings] = useState([])
  useEffect(()=>{
    fetchData();
    async function fetchData() {
      const response = await axios.get('http://localhost:5000/user/getuserbookings', { withCredentials: true });
      setUserBookings(response.data.bookings)
    }
  },[])
  console.log(userBookings)
  return (
    <div className='w-[100vw] flex items-center  justify-center'>
        <div className='flex flex-wrap mx-4  justify-center  gap-6 my-5'>
      {userBookings.map((hotel,index)=>{
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

export default YourBookings