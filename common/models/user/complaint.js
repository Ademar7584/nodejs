'use strict';

var configEmail = require('../../../lib/functions');

/*eslint max-len: ["error", { "code": 350 }]*/

module.exports = function(Complaint) {
  var notification = {
    content: 'tu publicacion ha sido ',
    type: 'complaints',
  };

  Complaint.afterRemote('find', (ctx, model, next) => {
    var iterable = [];
    ctx.result.forEach(element => {
      var promise = Complaint.app.models[element.modelName].findById(element.modelId).then(data => {
        element.content = data;
      });
      iterable.push(promise);
    });
    Promise.all(iterable).then(valor => {
      next();
    });
  });

  Complaint.afterRemote('replaceById', (ctx, model, next) => {
    var user = ctx.args.data.userId;
    notification.modelName = ctx.args.data.modelName;
    notification.modelId = ctx.args.data.modelId;
    notification.content += ((!ctx.args.data.blockedPublish) ? 'denuncia' : 'eliminado');
    notification.userId = ctx.args.data.userId;
    notification.ownerId = ctx.args.data.denouncedId;

    if (ctx.args.data.blockedPublish) {
      user = ctx.args.data.denouncedId;
      Complaint.app.models[ctx.args.data.modelName].findById(ctx.args.data.modelId).then(data => {
        data.status = false;
        data.save();
      });
      notification.content = 'la publicacion denunciada ha sido eliminada';
      notification.ownerId = ctx.args.data.userId;
    }
    Complaint.Notif(notification, user);
    Complaint.app.models.user.findById(user, {fields: {id: true, password: true, firstName: true, lastName: true, accusation: true}}, (error, dataUser) => {
      dataUser.accusation++;
      dataUser.save();
    });
    next();
  });

  Complaint.Notif = function(content, userId) {
    Complaint.app.models.Notification.NotifCreate(content);
    Complaint.app.models.user.findById(userId, (error, dataUser) => {
      if (!dataUser.email) return;
      Complaint.app.models.Email.send(configEmail.dataEmail(dataUser.email), (err, mail) => {
        if (err) return (error);
        console.log('email sent!');
      });
    });
  };
};
