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

server.use("*", (req, res) => {
    res.status(404).send("Not found");
  });
  
  server.use((error, req, res, next) => {
    console.log(error);
    res
      .status(error.statusCode || 500)
      .send({ error: true, message: error.message });
  });
  


module.exports = server







