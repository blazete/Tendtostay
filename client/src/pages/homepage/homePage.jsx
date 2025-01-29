import React from 'react';
import logo from '../utils/airbnb.png';
import hotel from '../utils/hotel.jpeg';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="p-6 bg-gray-100 flex justify-between">
        <img src={logo} alt="Airbnb logo" className="h-8" />
        <span className="text-gray-600">Airbnb your place</span>
      </header>
      <main className="flex justify-center items-center py-12">
        <div className="relative max-w-4xl w-full p-8">
          <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-md z-10">
            <h1 className="text-3xl font-semibold mb-4">Holiday rentals in India</h1>
            <p className="mb-6">Find and book unique accommodation on Airbnb</p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  placeholder="India"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex space-x-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="checkin">Check In</label>
                  <input
                    type="date"
                    id="checkin"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="checkout">Check Out</label>
                  <input
                    type="date"
                    id="checkout"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className='w-[90%]' style={{backgroundImage : `${hotel}`}}>
            hello
        </div>
      </main>
    </div>
  );
}

export default App;