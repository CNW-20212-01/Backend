import { bodyParser } from "./Parser/bodyParser";
import { routerinit } from "./router/idex";
import { AdminService } from "./module/admin/admin.service";

const http = require('http');
const router = require('./router/router');

const adminService = new AdminService();
adminService.register()

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
console.log("server start port: " + process.env.APP_PORT) 

server.listen(process.env.APP_PORT);