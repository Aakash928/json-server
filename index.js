const fs = require("fs");
const os = require("os");
const path = require("path");

const jsonServer = require('json-server')
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(os.tmpdir() + "/db.json"));
const middlewares = jsonServer.defaults()
 



fs.copyFile("db.json", os.tmpdir() + "/db.json", function (err) {
  if (err) console.log(err);
  else console.log("copy file succeed to" + os.tmpdir());
});
server.use(middlewares)
server.use('', router)
server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running')
})