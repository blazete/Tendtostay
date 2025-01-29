import React from 'react'
import Logo from '../../../utils/stayNestLogo.png'
const UserHeader = ({setYourBooking,setYourProperties}) => {
    const handleYourBooking = ()=>{
        setYourProperties(false)
        setYourBooking(true)
    }
    const handleYourProperites = ()=>{
        setYourProperties(true)
        setYourBooking(false)
    }
  return (
    <div className='w-[100vw] flex items-center justify-between bg-blue-900 py-4 text-white'>
        <div className='flex items-center '>
        <img src={`${Logo}`} className='w-10 h-10 ml-3'/>
        <div className='text-xl font-bold ml-1'>Stay-Nest</div>
        </div>
        <div className='flex items-center justify-end gap-4 mr-3'>
            <div onClick={handleYourBooking} className='cursor-pointer'>bookings</div>
            <div onClick={handleYourProperites} className='cursor-pointer'>Properties</div>
            <div>Profile Picture</div>
        </div>
    </div>
  )
}

export default UserHeader