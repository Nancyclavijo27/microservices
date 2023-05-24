const { Router } = require("express");
const constrollers = require("../controllers");

const planetsRouters = Router();

planetsRouters.get("/", constrollers.getPlanets);

module.exports = planetsRouters;