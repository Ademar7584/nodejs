'use strict';

/*eslint max-len: ["error", { "code": 350 }]*/
var f = require('../../../lib/functions');

module.exports = function(News) {
  News.validatesPresenceOf('title', {message: 'Titulo es requerido'});
  News.validatesPresenceOf('content', {message: 'Contenido es requeridp'});
  News.validatesPresenceOf('coinType', {message: 'Moneda es requerido'});
  News.validatesPresenceOf('guessCoin', {message: 'Conjetura de Precio en requerido'});
  News.validatesLengthOf('title', {
    min: 9, message:
      {min: 'Titulo debe tener como maximo 9 caracteres'},
  });
  News.validatesLengthOf('title', {
    max: 90, message:
      {max: 'Titulo debe tener como maximo 90 caracteres'},
  });
  News.validatesLengthOf('content', {
    max: 5000, message: {
      max: 'El contenido debe tener como maximo 5000 caracteres',
    },
  });
  News.validatesLengthOf('guessCoin', {
    max: 500, message: {
      max: 'Conjetura Precio debe tener como maximo 500 caracteres',
    },
  });

  // verifica si es tiene un precio por defecto
  // News.afterRemote('create', (ctx, news, next) => {
  //   if (ctx.result.precio == null) {
  //     News.setPrice(ctx.result.id, ctx.result.userId)
  //       .then(price => {
  //         ctx.result.prece = price;
  //         next();
  //       });
  //   } else {
  //     next();
  //   }
  // });

  News.afterRemote('create', (ctx, model, next) => {
    console.log(ctx);
    let userId = ctx.result.userId;
    let coinType = ctx.result.coinType;
    News.app.models.User.findById(userId).then(data => {
      News.app.io.emit('create', {posts: ctx.result, user: data});
      News.app.models.User.fameUser(userId, 1, coinType, 1, 1);
    });
    next();
  });

  News.setPrice = (newsId, userId) => {
    let userModel = News.app.models.user;
    return userModel.findById(userId).then(usuario => {
      return News.count({userId: userId}, (err, count)  => {
        let price = f.CalculatePrice(usuario.precision.valor, count);
        // News.updateAll({id: newsId}, {precio: price, comprable: true});
        return price;
      });
    });
  };
};
