const Film=require("../data")
const {response }=require("../utils")

module.exports= async(req, res)=>{
    const films = await Film.list()//listo para traer los datos
    response(res, 200, films)
}



