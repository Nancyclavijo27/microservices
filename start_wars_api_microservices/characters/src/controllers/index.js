const { catchedAsync } = require("../utils")//para que el manejo de errores qued en toda mi aplicacion 

module.exports ={
    getCharacters: catchedAsync(require("./getCharacters")),
    createCharacters: catchedAsync(require("./createCharacters")),
};