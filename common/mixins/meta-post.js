'use strict';

module.exports = (Model, options) => {
  Model.answer = (id, fk, body, res, req, cb) => {
    Model.app.models.answer.create(body, (err, data) => {
      if (err) return console.log(err);
      var appIo = Model.app.io;
      var userId = data.userId;
      Model.app.models.User.findById(userId).then(user => {
        appIo.emit('answer', {posts: data, user: user});
      });
      cb(null, data);
    });
  };

  Model.answers = (id, fk, req, res, cb) => {
    var answer = Model.app.models.answer;
    var filter = {
      where: {
        and: [{
          commentId: fk,
        }, {
          modelId: id,
        }, {
          modelName: Model.definition.name,
        }],
      },
    };
    answer.find(filter).then(data => {
      cb(null, data);
    });
  };

  Model.remoteMethod('answers', {
    accepts: [
      {arg: 'id', type: 'number', required: true},
      {arg: 'fk', type: 'number', required: true},
      {arg: 'req', type: 'object', 'http': {source: 'req'}},
      {arg: 'res', type: 'object', 'http': {source: 'res'}},
    ],
    returns: {arg: 'data', type: 'answer', root: true},
    http: {path: '/:id/comments/:fk/answers', verb: 'get'},
  });
  Model.remoteMethod('answer', {
    accepts: [
      {arg: 'id', type: 'number', required: true},
      {arg: 'fk', type: 'number', required: true},
      {arg: 'body', type: 'answer', 'http': {source: 'body'}},
      {arg: 'req', type: 'object', 'http': {source: 'req'}},
      {arg: 'res', type: 'object', 'http': {source: 'res'}},
    ],
    returns: {arg: 'data', type: 'answer', root: true},
    http: {path: '/:id/comments/:fk/answers', verb: 'post'},
  });
};
