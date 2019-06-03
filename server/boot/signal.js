'use strict';
/*eslint max-len: ["error", { "code": 350 }]*/
var io = require('socket.io-client');

module.exports = function(app) {
  var signal = app.models.signal;
  signal.client = signal.Binance({
    apiKey: 'MtXswC2KIAPUfwko0jlhfOgDZIPK91FI29EV2LxYI2ekmV63IQbhILgIy5F3Svh8',
    apiSecret: 'NeltLraMMQ71cFQibUMNSpHio5GkQxKe1KEpAPSbwMz298mf1yNT4NNeGcoVWi3a',
  });
  signal.find({include: 'position'}).then(list => {
    list.filter(señal => {
      if (Date.parse(señal.created) == Date.parse(señal.lastUpdated)) {
        var pair = `${señal.coinType}${señal.currencyExchange}`;
        var senial = JSON.parse(JSON.stringify(señal));
        senial.pair = pair;
        senial.position.forEach(element => element.value = parseFloat(element.value));
        signal.collection[pair] = signal.collection[pair] ? signal.collection[pair] : [];
        signal.collection[pair].push(senial);
      }
    });
    signal.conectToSocket();
  });
};
