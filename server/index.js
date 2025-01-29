const express = require('express')
const {ConnectMongo} = require('./Connect')
const CookieParser = require("cookie-parser")
const cors = require('cors')
const State = require('./models/State')

const userRouter = require('./routes/userRoute')
const hotelRouter = require('./routes/hotelRoutes')


const app = express();
ConnectMongo('mongodb://127.0.0.1:27017/airbnb').then(()=>{
    console.log("Connected succesfully")
}).catch(err=>console.log(err))



app.use(cors({
    origin : "http://localhost:3000",
    credentials: true 
}))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(CookieParser())

app.get('/cities',async (req,res)=>{
    const {state} = req.query;
    console.log(state)
    try {
        const foundState = await State.findOne({ 
            name: state
         });
        if (!foundState) {
          res.send('State not created');
        } else {
          res.send(foundState);
        }
      } catch (err) {
        res.send(err);
      }
})

app.use('/user',userRouter)
app.use('/hotel',hotelRouter)


app.listen(5000,()=>{
    console.log("Server Started")
})