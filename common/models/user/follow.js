'use strict';

module.exports = (Follow) => {
  Follow.follow = (req, res, cb) => {
    Follow.findOne({
      where: {
        and: [
          {followerId: req.body.followerId},
          {posterId: req.body.posterId},
        ],
      },
    }).then(data => {
      var res = '';
      if (data != null) {
        Follow.destroyById(data.id, (err, data) => {
          cb(null, data);
        });
      } else {
        Follow.create(req.body, (err, data) => {
          cb(null, data);
        });
      };
    });
  };

  Follow.remoteMethod('follow', {
    http: {
      path: '/follow', verb: 'post',
    },
    accepts: [
      {arg: 'req', type: 'object', 'http': {ource: 'req'}},
      {arg: 'res', type: 'object', 'http': {source: 'res'}},
    ],
    returns: {arg: 'follow', type: 'object'},
  });

  Follow.afterRemote('follow', (ctx, model, next) => {
    var io = Follow.app.io;
    if (ctx.result.follow.count == undefined) {
      Follow.app.models.notification.create({
        'tipo': 'follow',
        'senderId': ctx.result.follow.followerId,
        'date': Date.now(),
        'status': false,
        'usuarioId': ctx.result.follow.posterId,
      });
      io.to(ctx.result.follow.posterId).emit('request', {
        tipo: 'follow',
        senderId: ctx.result.follow.followerId,
      });
    }
    next();
  });
};
