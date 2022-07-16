import { bodyParser } from "./Parser/bodyParser";
import { routerinit } from "./router/idex";

const http = require('http');
const router = require('./router/router');

routerinit.forEach((routerClass) => {
  const routerInstance = new routerClass();
  routerInstance.initRouter();
})


const server = http.createServer(async (req, res) => {
  await bodyParser(req);
  const handler = router.findHandler(req);
  handler(req, res);
});
console.log(router.routeLog);
console.log("server start port: 3000") 

server.listen(3000);