'use strict';

/*eslint max-len: ["error", { "code": 350 }]*/

module.exports = function(Comment) {
  Comment.afterRemote('create', (ctx, model, next) => {
    let userId = ctx.result.userId;
    let modelId = ctx.result.modelId;
    console.log(ctx.result);
    const notification = {
      modelName: ctx.result.modelName,
      modelId: ctx.result.modelId,
      type: 'comment',
      content: 'a comentado tu publicacion',
      userId: ctx.result.userId,
      ownerId: ctx.result.userId,
    };
    var appIo = Comment.app.io;
    Comment.app.models.User.findById(userId).then(data => {
      appIo.emit('comment', {posts: ctx.result, user: data});
    });
    Comment.app.models.Notification.NotifCreate(notification);
    Comment.app.models.News.findById(modelId).then(data => {
      let coinType = data.coinType;
      Comment.app.models.user.fameUser(userId, 1, coinType, 1, 1);
    });
    next();
  });
};
