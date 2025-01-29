const express = require('express');
const {handleUserSignup,handleUserLogin,hanleGetHotels,handleBookedHotel} = require('./../controllers/userControllers')
const router = express.Router();



router.post('/signup',handleUserSignup);
router.post('/login',handleUserLogin);
router.get('/getHotels',hanleGetHotels);
router.get("/getuserbookings",handleBookedHotel)
module.exports = router;