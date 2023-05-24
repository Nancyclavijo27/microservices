const { Router } = require("express");



const router =Router();

router.get("/", (req, res) => res.status(200).send("Personajes"));

router.use("/characters", require("./charactersRouter"));
router.use("/characters", require("./createCharacter"));



module.exports = router;




