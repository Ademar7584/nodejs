'use strict';

module.exports = (Usermeta) => {
  Usermeta.beforeRemote('create', (ctx, user, next) => {
    console.log(ctx);
    next();
  });
};
