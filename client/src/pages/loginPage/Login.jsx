import React from 'react'
import LoginHeader from './loginCompontnets/header'
import Main from './loginCompontnets/main'

const Login = () => {
  return (
    <div>
        <div className='top-0 sticky'>
        <LoginHeader/>
        </div>
        <div className='w-[100vw] flex items-center justify-center my-5 text-4xl font-semibold text-blue-900'>Your Ultimate Hotel Booking App</div>
        <Main/>
    </div>

  )
}

export default Login