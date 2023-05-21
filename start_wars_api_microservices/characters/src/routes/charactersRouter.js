const { Router } = require("express");
const constrollers = require("../controllers");
const middlewares = require("../middlewares");

const characterRouter = Router();

characterRouter.get("/", constrollers.getCharacters);

module.exports = characterRouter;