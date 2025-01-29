const mongoose = require('mongoose')
const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });
const Schema = new mongoose.Schema({
    name : {
        type : String, 
        required : true,
        unique : true
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
    },
    garder: { 
        type: Boolean, 
    },
    breakfast: { 
        type: Boolean, 
    },
    pool: { 
        type: Boolean, 
    },
    rooms: { 
        type: Number, 
        required: true 
    },
    state: { 
        type: String, 
        required: true 
    },
    district: { 
        type: String, 
        required: true 
    },
    location: {
        type: pointSchema,
        unique : true,
        required: true,
    },
    availabilitydates: [{
        type : Date,
        required : true
    }],
    bookingdate : [{
        type : Date,
        required : true,
    }],
    price: { 
        type: Number, 
        required: true 
    }
})
Schema.index({ "location.coordinates": "2dsphere" });
Schema.pre('save', function (next) {
    this.bookingdate = [...new Set(this.bookingdate)];
    this.availabilitydates = [...new Set(this.availabilitydates)];
    next();
  });
const Hotel = new mongoose.model("Hotels", Schema)

module.exports = Hotel