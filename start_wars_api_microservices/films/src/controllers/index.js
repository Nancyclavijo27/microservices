const { catchedAsync } = require("../utils")//para que el manejo de errores qued en toda mi aplicacion 

module.exports ={
    getFilms:catchedAsync(require("./getFilms")),
    createFilms: catchedAsync(require("./createFilms")),
}






