const routeLog = [];

export const router = {
    // this is our missing route handler
    '*': (req, res) => {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        error: 'Not Found'
      }));
    },
};
  
function register(httpCommand, httpHandler) {
    if (router[httpCommand]) {
      throw new Error(`Command ${httpCommand} already exists.`);
    }
    routeLog.push(httpCommand)
    router[httpCommand] = httpHandler;
}
  
function findHandler(req) {
    const handler = router[req.method + req.url] || router['*'];
    return handler;
}
  
module.exports = {
  routeLog,
  findHandler,
  register,
};