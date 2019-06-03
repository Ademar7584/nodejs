'use strict';
var global = require('../../lib/global');

module.exports = (server) => {
  var router = server.loopback.Router();
  router.get('/auth/success', (req, res, next) => {
    var user = req.user;
    user.visit += 1;
    delete user.perfilLink;
    user.save();
    res.redirect(global.frontend + '/auth/passport/' +
      req.accessToken.id + '/' + req.accessToken.userId);
  });
  router.get('/auth/:network/failure', (req, res, next) => {
    const redsocial = req.params.network;
    const resp = {
      message: 'El proceso de registro se cancelo. Por favor acepte las condiciones solicitadas por ' + redsocial,
    };
    res.redirect(global.frontend + '/auth/passport/' + JSON.stringify(resp));
  });
  server.use(router);
};
