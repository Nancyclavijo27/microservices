const { Router } = require("express");
const constrollers = require("../controllers");

const planetsRouter = Router();

planetsRouter.get("/", constrollers.getPlanets);

module.exports = planetsRouter;