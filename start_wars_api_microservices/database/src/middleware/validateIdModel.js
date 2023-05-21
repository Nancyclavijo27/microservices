const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { id } = req.params;
  if (id) {
    return next();
  } else {
    throw new ClientError("No ID found in request");
  }
};