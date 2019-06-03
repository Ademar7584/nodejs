'use strict';
/*eslint max-len: ["error", { "code": 350 }]*/
var io = require('socket.io-client');
var WebSocket = require('ws');
var f = require('../../../lib/functions');
var g = require('../../../lib/global');
var PriceMoney = require('../../../lib/fakePriceMoney');
var currentPrice, history;

module.exports = (Signal) => {
  Signal.collection = {}; // collection according to pairs

  // https://github.com/binance-exchange/binance-api-node
  Signal.Binance = require('binance-api-node').default;
  Signal.client = Signal.Binance({
    apiKey: 'MtXswC2KIAPUfwko0jlhfOgDZIPK91FI29EV2LxYI2ekmV63IQbhILgIy5F3Svh8',
    apiSecret: 'NeltLraMMQ71cFQibUMNSpHio5GkQxKe1KEpAPSbwMz298mf1yNT4NNeGcoVWi3a',
  });

  Signal.validatesPresenceOf('offer', { message: 'Tipo es requerido' });
  Signal.validatesPresenceOf('technicalAnalysis', { message: 'Analisis Tecnico es requerido' });
  Signal.validatesPresenceOf('expiration', { message: 'Fecha Limite en requerido' });
  Signal.validatesPresenceOf('coinType', { message: 'Moneda 1 en requerido' });
  Signal.validatesPresenceOf('currencyExchange', { message: 'Moneda 2 en requerido' });
  Signal.validatesPresenceOf('entryType', { message: 'Tipo de entrada es requerido' });
  Signal.validatesLengthOf('titleSignal', {
    max: 50, message: {
      max: 'El título no debe sobrepasar los 50 caracteres',
    },
  });
  Signal.validatesLengthOf('technicalAnalysis', {
    max: 5000, message: {
      max: 'El Analisis Tecnico debe tener como maximo 5000 caracteres',
    },
  });

  Signal.afterRemote('create', (ctx, signal, next) => {
    let userId = ctx.result.userId;
    let coinType = ctx.result.coinType;
    const position = JSON.parse(ctx.args.data.position);
    position.forEach(element => element.signalId = ctx.result.id);
    Signal.app.models.position.create(position).then(positions => {
      ctx.req.body.id = ctx.result.id;
      if (typeof ctx.result.offer != 'boolean') {
        if (typeof ctx.result.offer == 'string') ctx.result.offer = (ctx.result.offer == 'true' || ctx.result.offer == '1');
        if (typeof ctx.result.offer == 'number') ctx.result.offer = ctx.result.offer == 1;
      }
      ctx.req.body.position = positions;
      ctx.req.body.position.forEach(element => element.value = parseFloat(element.value));
      var pair = `${ctx.req.body.coinType}${ctx.req.body.currencyExchange}`;
      ctx.req.body.pair = pair;
      Signal.collection[pair] = Signal.collection[pair] ? Signal.collection[pair] : [];
      Signal.collection[pair].push(ctx.req.body);
      Signal.conectToSocket();
    });
    Signal.app.models.User.findById(userId).then(data => {
      Signal.app.io.emit('create', { posts: ctx.result, user: data });
    });
    Signal.app.models.User.fameUser(userId, 1, coinType, 1, 1);
    next();
  });

  Signal.conectToSocket = () => {
    var listPair = Object.keys(Signal.collection);
    // history = {};
    Signal.client.ws.aggTrades(listPair, data => {
      currentPrice = parseFloat(data.price);
      // history.pointHigh = parseFloat(data.high);
      // history.pointLow = parseFloat(data.low);
      var pair = data.symbol;
      Signal.collection[pair].forEach((senial, index) => {
        // console.log('START========================================================');
        // history.signalId = senial.id;
        var position = f.groupByPoint(senial.position, 'pointId');
        var oferta = senial.entryType == 'limit' ? !senial.offer : senial.offer;
        // console.log('la oferta segun stop o limit es:', oferta);
        if (f.verifyCaseExpiration(senial, position, isCorrect)) {
          // history.inPoint = false;
          // history.outPoint = false;
          // history.stopLoss = false;
          senial.tags = 'caduco';
        }
        if (!senial.tags || senial.tags != 'caduco') {
          verifyPosition(oferta, position.entrada, 'activo', senial, true);
          // history.inPoint = senial.tags == 'activo' ? true : false;
          if (f.somethingWasReached(position.entrada)) {
            verifyPosition(senial.offer, position.salida, 'exito', senial, true);
            // history.outPoint = senial.tags == 'exito' ? true : false;
            var touchingSomething = (f.somethingWasReached(position.entrada) && f.somethingWasReached(position.salida));
            var estado = touchingSomething ? 'exito' : 'fracaso';
            var positionToCal = touchingSomething ? position.salida : position.stop;
            position.stop.forEach(p => {
              if (isCorrect(!senial.offer, p.value) && !p.reached) {
                // console.log('La señal entro a: ', estado);
                // history.stopLoss = senial.tags == 'fracaso' ? true : false;
                update(estado, senial, p, !touchingSomething);
                if (!touchingSomething) precision(senial, positionToCal);
              }
            });
          }
        }
        if (f.verifyCasesForSignalEnd(position.entrada, position.salida, position.stop) || senial.tags == 'caduco') {
          console.log('finish', senial.tags);
          senial.lastUpdated = new Date();
          Signal.upsert(senial, (err, señal) => {
            if (err) throw err;
            // emit socket erick
            Signal.collection[senial.pair].splice(index, 1);
            Signal.app.models.user.calcPrecision(senial.userId);
          });
        }
        // Signal.app.models.HistorySignal.create(history);
        // console.log('END========================================================');
      });
    });
  };

  var precision = (senial, puntoToCalc) => {
    var price1 = 0; var price2 = 0;
    var positions = f.groupByPoint(senial.position.filter(position => position.reached), 'pointId');
    positions.entrada.forEach(entry => price1 += parseFloat(entry.value));
    price1 = price1 / positions.entrada.length;
    puntoToCalc = puntoToCalc.filter(position => position.reached);
    puntoToCalc.forEach(p => price2 += parseFloat(p.value));
    price2 = price2 / puntoToCalc.length;
    senial.precision = f.ecuPrecision(senial.offer, price1, price2);
  };

  var verifyPosition = (offer, position, status, senial, calc) => {
    position.forEach(p => {
      // console.log('La señal entro a: ', status, '- y la condicion es: ', isCorrect(offer, p.value), '&&', !p.reached, ' : ', isCorrect(offer, p.value) && !p.reached);
      if (isCorrect(offer, p.value) && !p.reached) {
        // console.log('La señal entro a: ', status);
        update(status, senial, p, calc);
        if (calc) precision(senial, position);
      }
    });
  };

  var isCorrect = (offer, value) => {

    var artificio = Math.pow(-1, offer ? 0 : 1);
    // if (((artificio * value) <= (artificio * currentPrice))) console.log((artificio * value), '<=', (artificio * currentPrice), ' : ', ((artificio * value) <= (artificio * currentPrice)));
    return ((artificio * value) <= (artificio * currentPrice[0])) ||
      ((artificio * value) <= (artificio * currentPrice[1]));
  };


  var update = (status, senial, position, calc) => {
    // console.log('event signal: ', status, ', de la señal: ', senial.id);
    position.reached = true;
    position.lastUpdated = new Date();
    Signal.app.models.position.upsert(position, (err, señal) => { if (err) throw err; });
    if (calc) {
      senial.tags = status;
      Signal.upsert(senial, (err, señal) => {
        if (err) throw err;
        // emit socket erick
        Signal.app.models.user.calcPrecision(senial.userId);
      });
    }
  };
};
