const Booking = require('../models/booking');
const Hotel = require('../models/hotels');
const User = require('../models/userMode')
const {setUser, getUser} = require('../services/users')

async function handleUserSignup(req,res){
    const {name,email,password} = req.body;
    if(name && email && password){
        try{
            await User.create({
                name,
                email,
                password
            })
            return res.send("User created Successfully");
        }catch(error){
            return res.json({"error" : error.message})
        }
    }   
    return res.json({"error" : "Please enter required fields properly"});
}

async function handleUserLogin(req,res){
    const {email,password} = req.body;
    if(email&&password){
        try{
            const user = await User.findOne({
                email,
                password
            })
            const cookieId = setUser(user)
            console.log(cookieId)
            res.cookie('uid',cookieId)
            return res.json({"email" : user.email, "id" : user._id});
        }catch(error){
            return res.json({"error" : error.message})
        }
    }   
    return res.json({"error" : "Please enter required fields properly"});
}

async function hanleGetHotels(req,res){
    const user = getUser(req.cookies.uid)
    const hotels = await Hotel.find({
        createdBy : user.id
    })
    res.send(hotels)
}

async function handleBookedHotel(req,res){
    const user = getUser(req.cookies.uid)
    const hotels = await Booking.find({
        booker : user.id
    })
    const hotelIds = hotels.map(booking => booking.hotelId);
    const userBookings = await Hotel.find({
        _id: { $in: hotelIds }
    })  
    return res.send({bookings : userBookings})
}



module.exports = {handleUserSignup,handleUserLogin,hanleGetHotels,handleBookedHotel}