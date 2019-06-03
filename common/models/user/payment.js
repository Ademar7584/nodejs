'use strict';
var g = require('../../../lib/global');

module.exports = (Payment) => {
  Payment.afterRemote('create', async (ctx) => {
    var User = Payment.app.models.user;
    var user = await User.findById(ctx.result.userId);
    user.points += ctx.result.points;
    await User.upsert(user);
    return;
  });
};
