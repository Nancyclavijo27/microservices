const planets =require("./planets.json");

module.exports={
    list: async()=>{//list retorna los personajes que estan el json pero tambien puede ser de una bd
        return planets
    },

    create: async()=>{
        throw Error("Hay un error en la BD al momento de crear el personaje");
    }
}




