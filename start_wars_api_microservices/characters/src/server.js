const express = require("express");
const morgan = require("morgan");


const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/characters", require("./routes"));

server.use("*", (req,res)=>{
    res.status(404).send("Not found");
});

//para sobreescribir el manejador de errores de express

server.use((err, req, res, next)=>{
    console.log(error);
  res
    .status(error.statusCode || 500)
    .send({ error: true, message: error.message });
    });


module.exports = server;




