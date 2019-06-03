'use strict';

var server = require('../server/server.js');
var f = require('../lib/functions');
var Signal = server.registry.modelBuilder.getModel('signal');
var User = server.registry.modelBuilder.getModel('user');
var y = [];

var x = User.find({fields: ['id', 'precision', 'firstName', 'lastName', 'email', 'password']}).then(users => {
  users.forEach(user => {
    const filter = {
      fields: ['id', 'precision', 'created'],
      where: {
        and: [
          {userId: user.id},
          {created: {gte: f.getDateLimit(3)}},
          {precision: {neq: null}},
          {precision: {neq: 0}},
        ],
      },
      order: 'created DESC',
      limit: 10,
    };
    var z = Signal.find(filter, (err, signal) => {
      console.log('para ', user.firstName, ':', signal);
      if (signal.length == 0) return;
      var presicion = 0;
      signal.forEach(element => {
        presicion += parseFloat(element.precision);
      });
      presicion = presicion / signal.length;
      if (!presicion) {
        presicion = 0;
      }
      console.log('precision', presicion);

      user.precision[0].valor = presicion;
      user.save();
    });
    y.push(z);
  });
});

Promise.all([x]).then(data => {
  Promise.all(y).then(exists => console.log('ok!!!'));
});
