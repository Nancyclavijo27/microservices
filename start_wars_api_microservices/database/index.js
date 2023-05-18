const server = require("./src/server");

//const { Character }=require("./src/database");

//Character.list(1).then((res)=>console.log(res));
//Character.get(1).then((res)=>console.log(res));

//Character.insert({
//  _id:"200",
 // name: "Nancy Clavijo",
 // birth_year:"1991",

//})
//.then((res)=>console.log(res));




server.listen(8004, () => {
  console.log(`Database service  on PORT 8004`);
});
