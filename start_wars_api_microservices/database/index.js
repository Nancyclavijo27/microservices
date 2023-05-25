const server = require("./src/server");
const { Character, Film, Planet } = require("./src/database");

/* Character.list().then((res) => console.log(res[0]));
Film.list().then((res) => console.log(res[0]));
Planet.list().then((res) => console.log(res[0])); */
/*Character.get(1).then((res) => console.log(res)); */
/* Character.insert({ _id: "201", name: "Micaela", birth_year: "2000" }).then(
  (res) => console.log(res)
);
 */
server.listen(8004, () => {
  console.log("Database service listening on port 8004");
});
