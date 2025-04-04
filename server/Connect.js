
const mongoose = require('mongoose')

const ConnectMongo = (url)=>{
    console.log(url)
 return mongoose.connect(url)
}

module.exports = {ConnectMongo}