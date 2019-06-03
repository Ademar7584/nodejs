'use strict';
/*eslint max-len: ["error", { "code": 350 }]*/

module.exports = (server) => {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());

  server.use(router);
};
