const {response }=require("../utils")
const axios = require("axios");

module.exports= async(req, res)=>{
    const film = req.body;
  const newFilm = await axios.post("http://database:8004/Film", film);
    response(res, 201, newFilms)

};


  