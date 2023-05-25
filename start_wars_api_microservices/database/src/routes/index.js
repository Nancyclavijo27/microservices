const { Router } = require("express");
const middleware = require("../middleware");
const controllers = require("../controllers");

const router = Router();

router.get(
  "/:model",
  middleware.validateModel,
  controllers.modelListController
);
router.get("/:model/:id", controllers.modelIdController);

module.exports = router;


