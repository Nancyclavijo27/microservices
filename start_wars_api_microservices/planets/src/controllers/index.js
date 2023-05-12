const { catchedAsync } = require("../utils")//para que el manejo de errores qued en toda mi aplicacion 


module.exports ={
    getPlanets:catchedAsync(require("./getPlanets")),
    createPlanets:catchedAsync(require("./createPlanets")),
}



    