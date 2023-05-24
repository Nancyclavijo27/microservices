const {response }=require("../utils")
const axios = require("axios")

module.exports= async(req, res)=>{
    const data = await  axios.get(
        "http://database:8004/Character")//listo para traer los datos
        console.log("characters", data.data);
    response(res, 200, data.data);
};

