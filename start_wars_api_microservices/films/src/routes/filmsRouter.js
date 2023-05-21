const { Router } = require("express");
const constrollers = require("../controllers");

const filmsRouter = Router();

filmsRouter.get("/", constrollers.getFilms);

module.exports = filmsRouter;