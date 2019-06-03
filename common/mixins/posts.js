'use strict';
/*eslint max-len: ["error", { "code": 350 }]*/
var global = require('../../lib/global');

var contents = {
  news: ['content', 'guessPrice', 'guessCoin'],
  signal: ['fundamentalAnalysis', 'technicalAnalysis'],
};

module.exports = (Model, options) => {
  Model.defineProperty('content', {
    type: String, dataType: 'text',
  });
  Model.defineProperty('blocked', {
    type: Boolean,
  });
  Model.defineProperty('affordable', {
    type: Boolean,
  });
  Model.defineProperty('price', {
    type: Number,
  });
  Model.defineProperty('coinType', {
    type: String,
  });
  Model.defineProperty('expiration', {
    type: Date,
  });
  Model.defineProperty('country', {
    type: String,
  });
  Model.defineProperty('region', {
    type: String,
  });

  Model.mixin('MetaPost', true);
  Model.mixin('GoogleDrive', true);

  Model.mixin('Likes', {
    'method': 'like',
    'endpoint': '/:id/like',
    'likes': 'likes',
    'userModel': 'user',
    'description': `likes ${Model.definition.name} instance for the given userId`,
  });
  Model.mixin('Likes', {
    'method': 'dislike',
    'endpoint': '/:id/dislike',
    'likes': 'dislikes',
    'userModel': 'user',
    'description': `dislikes ${Model.definition.name} instance for the given userId`,
  });

  // hook para quitar dislike si le damos like
  Model.afterRemote('like', (ctx, model, next) => {
    var promise;
    var id = ctx.req.params.id;
    var userId = ctx.req.query.userId;
    if (ctx.result.dislikes.users.some(user => user == userId)) {
      promise = Model.dislike(id, userId).then(data => {
        ctx.result = data;
      });
    }
    const notification = {
      modelName: Model.definition.settings.plural,
      modelId: ctx.result.id,
      type: 'like',
      content: 'le gusto tu publicacion',
      userId: userId,
      ownerId: ctx.result.userId,
    };
    Model.app.models.Notification.NotifCreate(notification);
    Promise.all([promise]).then(post => {
      next();
    });
  });

  // hook para quitar like si le damos dislike
  Model.afterRemote('dislike', (ctx, model, next) => {
    var promise;
    var id = ctx.req.params.id;
    var userId = ctx.req.query.userId;
    if (ctx.result.likes.users.some(user => user == userId)) {
      promise = Model.like(id, userId).then(data => {
        ctx.result = data;
      });
    }
    Promise.all([promise]).then(data => {
      next();
    });
  });

  Model.beforeRemote('create', (ctx, model, next) => {
    var image = null;
    if (ctx.req.files != undefined || ctx.req.files != null) {
      image = ctx.req.files.image;
    } else {
      image = ctx.args.data.image;
    }
    if (typeof image === 'object') {
      const data = ctx.args.data;
      Model.upload(image, data.username, (err, googledrive) => {
        if (err) throw err;
        ctx.args.data.image = googledrive.name;
        ctx.args.data.perfilLink = googledrive.webContentLink;
        next();
      });
    } else {
      const urlTradingView = `https://www.tradingview.com/i/${ctx.args.data.image}/`;
      ctx.args.data.perfilLink = urlTradingView;
      next();
    }
  });

  Model.afterRemote('findById', (ctx, model, next) => {
    next();
  });
};
