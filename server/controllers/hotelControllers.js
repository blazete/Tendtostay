const { getUser } = require('../services/users');
const Bookings  = require('../models/booking')
const Hotel = require('./../models/hotels')
async function handleHotelCreation(req, res) {
    const user = getUser(req.cookies.uid);
    const hotelData = {
        name: '',
        garden: false,
        breakfast: false,
        pool: false,
        rooms: 0,
        state: '',
        district: '',
        location: [],
        availabilitydates: [],
        price: 0,
        createdBy : user.id,
        ...req.body 
    };
    try {
        await Hotel.create(hotelData);
        res.status(201).send("Hotel created successfully");
    } catch (error) {
        res.status(400).send(`Error creating hotel: ${error.message}`);
    }
}
async function handleHotelFromMap(req, res) {
    const bonds = req.query?.bonds;
    if (bonds) {
        try {
            // Parse the string coordinates into numbers
            const coordinates = bonds[0].map(coord => {
                const lat = parseFloat(coord[0]);
                const lng = parseFloat(coord[1]);
                
                if (isNaN(lat) || isNaN(lng)) {
                    throw new Error('Invalid coordinates provided');
                }
                
                return [lat, lng];
            });

            const hotels = await Hotel.find({
                "location.coordinates": {
                    $geoWithin: {
                        $geometry: {
                            type: "Polygon",
                            coordinates: [coordinates] // Note: coordinates is already in the correct format
                        }
                    }
                }
            });
            
            console.log("Found hotels:", hotels);
            res.json(hotels);
        } catch (error) {
            console.error("Error fetching hotels:", error);
            res.status(400).json({ 
                error: error.message || "Invalid coordinates provided" 
            });
        }
    } else {
        res.status(400).json({ message: "No bounds provided" });
    }
}

async function handleGetHotelById(req,res){
    const id = req.params.id
    const hotelData = await Hotel.findOne({
        _id  : id,
    })
    console.log(hotelData)
    res.send(hotelData)
}

async function handleHotelBooking(req, res) {
    const userId = getUser(req.cookies.uid);
    const id = req.params.id;
    const dates = req.body.date;
    const newDates = dates.map(date => new Date(date));
    const hotelAvailability = await Hotel.findOne({
        _id: id,
        availabilitydates: { $all: newDates }
    });
    if (hotelAvailability) {
        try{
            await Hotel.findOneAndUpdate(
                { _id: id },
                {
                    $pullAll: { availabilitydates: newDates },
                    $push: { bookingdate: newDates }
                },
                { new: true }
            );
            const booking = await Bookings.create({
                bookingDate: newDates,
                hotelId: hotelAvailability._id,
                booker: userId.id
            });
            return res.send({ bookingId: booking._id });}
        catch(error){
            return res.send("Please Try again")
        }
    }

    return res.status(400).send("Select different date");
}




module.exports = {handleHotelCreation,handleHotelFromMap,handleGetHotelById,handleHotelBooking}