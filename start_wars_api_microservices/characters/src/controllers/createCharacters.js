const {response }=require("../utils")
const axios = require("axios")


module.exports= async(req, res)=>{
    const character= req.body
    const newCharacter= await  axios.post(
        "http://database:8004/Character", character
    )
    response(res, 201, newCharacter);

};