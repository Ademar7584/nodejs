'use strict';
/*eslint max-len: ["error", { "code": 350 }]*/
module.exports = (Notification) => {
  Notification.afterRemote('find', (ctx, model, next) => {
    var filter = {
      where: {
        followerId: ctx.args.filter.where.ownerId,
      },
    };
    Notification.verifying(ctx, filter, next);
  });

  Notification.verifying = (ctx, filter, next) => {
    Notification.app.models.follow.find(filter, (err, follow) => {
      var filterNow = {
        where: {
          or: [],
        },
      };
      follow.forEach(element => filterNow.where.or.push({userId: element.userId, ownerId: element.userId}));
      Notification.find(filterNow, (err, notifieds) => {
        ctx.result = ctx.result.concat(notifieds);
        next();
      });
    });
  };
  Notification.NotifCreate = function(data) {
    Notification.create(data, (error, data) => {
      if (error) return (error);
      // Notification.app.models.User.findById(data.userId).then(user => {
      //   console.log(data, user);
      Notification.app.io.emit('notification', data);
      // });
    });
  };
};
