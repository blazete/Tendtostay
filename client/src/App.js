import './App.css';
import Hotels from './pages/homepage/hotels';
import Login from './pages/loginPage/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUPForm from './pages/signuppage/signup';
import User from './pages/userPage/user';
import Hotel from './pages/hotel/hotel';
import Demo from './demo';
import CreateHotel from './pages/createHotel/createHotel';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Hotels />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<SignUPForm/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/hotel/:id" element={<Hotel/>}/>
          <Route path="/createHotel" element={<CreateHotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
