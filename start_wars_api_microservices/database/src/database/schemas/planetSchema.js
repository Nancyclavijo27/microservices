const {Schema}= require("mongoose");

const planetSchema =new Schema({

    "_id": String,
    "name": String,
    "rotation_period": String,
    "orbital_period": String,
    "diameter": String,
    "climate": String,
    "gravity": String,
    "terrain": String,
    "surface_water": String,
    "residents": [{ type:String, ref:"Character"}],
    "films": [{type:String, ref:"Film"}],

});

planetSchema.statics.list=async function (){  //list trae todo 
    return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"])
}

planetSchema.statics.get=async function (id){//get id  trae el id solicitado
    return await this.findById(id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"])
}

planetSchema.statics.insert=async function (film){//crea un personaje
    return await this.create(film)
    
}


module.exports= planetSchema