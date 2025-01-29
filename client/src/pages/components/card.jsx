import React from 'react'
import HotelImage from '../../utils/hotel.jpeg'
import { useNavigate } from 'react-router-dom'
const Card = ({name,price,image,location,pool,rooms,garden,id}) => {
  const navigate = useNavigate()
  const hanleOnClick = ()=>{
    console.log(id)
    navigate(`/hotel/${id}`)
  }
  return (
    <div>
      <div className='flex flex-col items-start justify-center content-center'>
                <img src={HotelImage} className='rounded-2xl' onClick={hanleOnClick}/>
                <div className='flex justify-between items-center w-full '>
                    <div className='font-semibold'>Room in {location}</div>
                </div>
                <div className='font-thin'>{name}</div>
                <div className='font-thin'>A cozy apartment</div>
                <div className='font-thin'>10-15 Mar</div>
                <div className='font-thin'>{pool && 'Swimming Pool Available'}</div>
                <div className='font-thin'>{garden && 'Garden Available'}</div>
                <div className='font-thin'>Rooms:{rooms}</div>
                <div className='font-semibold pt-2 '>₹{price} night</div>
            </div>
    </div>
  )
}

export default Card