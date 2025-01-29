const express = require('express')
const {handleHotelCreation,handleHotelFromMap,handleGetHotelById,handleHotelBooking} = require('./../controllers/hotelControllers')
const router = express.Router();

router.post('/create',handleHotelCreation)
router.get('/getHotels',handleHotelFromMap)
router.get("/getHotel/:id",handleGetHotelById)
router.post("/bookHote/:id",handleHotelBooking)
module.exports = router