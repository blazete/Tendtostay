
const mongoose = require('mongoose')

const ConnectMongo = (url)=>{
 return mongoose.connect(url)
}

module.exports = {ConnectMongo}