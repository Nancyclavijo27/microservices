const Character=require("../data")
const {response }=require("../utils")

module.exports= async(req, res)=>{
    const characters = await Character.list()//listo para traer los datos
    response(res, 200, characters)
}