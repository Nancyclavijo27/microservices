const { catchedAsync } = require("../utils");

module.exports = {
  modelListController: catchedAsync(require("./modelListControllers")),
  modelIdController: catchedAsync(require("./modelIdControllers")),
};