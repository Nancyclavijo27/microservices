const express = require("express");
const server= express()
const morgan = require("morgan");
//const validateModel = require("./middleware/validateModel");


//const app = express();
server.use(express.json());
server.use(morgan("dev"));
//server.use(validateModel);

//server.use(require("./routes"));

server.use("/database", require("./routes"));


module.exports = server
