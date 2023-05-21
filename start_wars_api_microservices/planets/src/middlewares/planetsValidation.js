const { ClientError } = require("../utils/errores");

module.exports = (req, res, next) => {
  const { name } = req.body;
  if (name) {
    return next();
  } else throw new ClientError("Nombre req", 401);
};