import React, { useState } from 'react'
import UserHeader from './userComponents/header'
import YourBookings from './userComponents/yourBookings';
import { YourProperties } from './userComponents/yourProperties';

const User = () => {
    const [yourBooking,setYourBooking]  = useState(true);
    const [yourProperties,setYourProperties]  = useState(false);
  return (
    <div>
        <UserHeader setYourBooking={setYourBooking} setYourProperties={setYourProperties}/>
        {yourBooking && <YourBookings/>}
        {yourProperties && <YourProperties/>}
    </div>

  )
}

export default User