const axios = require('axios');

module.exports={
    list: async()=>{//list retorna los personajes que estan el json pero tambien puede ser de una bd
        const response = await axios.get('http://database:8004/Planet');
    },

    create: async()=>{
        throw Error("Hay un error en la BD al momento de crear el personaje");
    }
}






