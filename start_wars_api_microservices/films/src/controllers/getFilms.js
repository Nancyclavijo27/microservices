const {response }=require("../utils")
const axios = require("axios");


module.exports= async(req, res)=>{
    const data = await axios.get("http://database:8004/Film");
    console.log("films", data.data);
    response(res, 200, data.data)
}



  