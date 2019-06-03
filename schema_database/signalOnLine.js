'use strict';

var server = require('../server/server.js');
var Signal = server.registry.modelBuilder.getModel('signal');
var collection = {};
var filter = {
  fields: {
    id: true,
    coinType: true,
    currencyExchange: true,
    tags: true,
    precision: true,
    created: true,
    lastUpdated: true,
  },
  include: {
    relation: 'position',
    scopes: {
      fields: {
        id: true,
        value: true,
        reached: true,
        pointId: true,
        created: true,
        lastUpdated: true,
      },
    },
  },
};
Signal.find(filter).then(list => {
  list.filter(señal => {
    if (Date.parse(señal.created) == Date.parse(señal.lastUpdated)) {
      var pair = `${señal.coinType}${señal.currencyExchange}`;
      var senial = JSON.parse(JSON.stringify(señal));
      senial.pair = pair;
      senial.position.forEach(element => element.value = parseFloat(element.value));
      collection[pair] = collection[pair] ? collection[pair] : [];
      collection[pair].push(senial);
    }
  });
  console.log(collection);
});
