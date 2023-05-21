const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.status(200).send("Peliculas"));

router.use("/films", require("./filmsRouter"));
router.use("/films", require("./createFilm"));

module.exports = router;











