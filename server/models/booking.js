const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    bookingDate :[
        {type : Date,
            required : true}
        ],
    hotelId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'hotels'
    },
    booker : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    },
})

const Booking = new mongoose.model("Booking", Schema)

module.exports = Booking