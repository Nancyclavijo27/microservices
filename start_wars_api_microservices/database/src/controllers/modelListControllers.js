const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model } = req.params;
  const data = await store[model].list();
  console.log(data);
  response(res, 200, data);
};