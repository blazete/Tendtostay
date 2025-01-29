import { useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Dashboard from '../components/dashboard'
const Hotels = () => {
  const [latlon,setLatLon] = useState()
  const [date,setDates] = useState({startDate:'',endDate:''});
  const [priceRange,setPriceRange] = useState(0);
  const [location, setLocation] = useState({
    latLon: [20.5937, 78.9629], 
    zoom: 7
  });
  console.log(priceRange)
  return (
    <div>
       <Header setPriceRange={setPriceRange} setDates={setDates} setLocation={setLocation} setLatLon={setLatLon} date={date}/>
       <div><Dashboard location={location} setLocation={setLocation} date={date} priceRange={priceRange}/></div>
      <Footer/>
    </div>
  )
}

export default Hotels