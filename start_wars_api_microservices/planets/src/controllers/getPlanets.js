const axios = require("axios");
const {response }=require("../utils")

module.exports= async(req, res)=>{
    const data = await axios.get("http://database:8004/Planet");
    console.log("planets", data.data);
    response(res, 200, planets)
}


