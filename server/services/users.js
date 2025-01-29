const jwt = require('jsonwebtoken')
const jwtSecret = "Rushit12839182738124780126984632937649213674234"
const setUser=(user)=>{
    const finlauer = {
        id : user._id,
        email : user.email
    }
    return jwt.sign(finlauer,jwtSecret)
}   

const getUser = (id)=>{
    if (!id){ return null}
    return jwt.verify(id,jwtSecret)
}   

module.exports = {setUser,getUser}