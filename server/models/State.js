const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  city: String,
  lat: Number,
  lng: Number
});

const stateSchema = new mongoose.Schema({
  name: String,
  cities: [citySchema]
});

const State = mongoose.model('State', stateSchema);

module.exports = State