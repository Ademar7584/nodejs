'use strict';
var f = require('../../../lib/functions');

module.exports = function(Idea) {
  Idea.afterRemote('create', (ctx, news, next)=>{
    if (ctx.result.precio == null) {
      Idea.setPrice(ctx.result.id, ctx.result.usuarioId)
      .then(price=>{
        ctx.result.precio = price;
        next();
      });
    } else {
      next();
    }
  });
  Idea.setPrice = (contentId, userId)=>{
    let userModel = Idea.app.models.user;
    return userModel.findById(userId).then(usuario => {
      return Idea.count({userId: userId}, (err, count)  => {
        let price = f.CalculatePrice(usuario.precision.valor, count);
        // Idea.updateAll({id: newsId}, {precio: price, comprable: true});
        return price;
      });
    });
  };
};
