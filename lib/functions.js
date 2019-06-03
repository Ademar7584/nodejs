'use strict';
/*eslint max-len: ["error", { "code": 350 }]*/

var global = require('./global');

module.exports.dataEmail = (to) => {
  return {
    to: to,
    from: global.senderAddress,
    subject: 'denuncia',
    text: 'notificacion de denuncia',
    html: '<h1>tu publicacion fue denunciada falsamente</h1>',
  };
};

module.exports.CalculatePrice = (precision, nroPublications) => {
  let price = nroPublications / precision;
  return (price != Infinity) ? price : 0;
};

/**
 * @description Function for get precision
 * @example
 * ```
 *        price2 - price1
 * ecu = ----------------- x 100
 *            price1
 * ```
 * donde price1 sera punto de entrada y
 * price2 sera punto de salido o stoploss
 * @param {boolean} offer tipo de oferta compra o venta
 * @param {DoubleRange} price1 punto de entrada
 * @param {DoubleRange} price2 punto de salida o stoploss
 */
module.exports.ecuPrecision = (offer, price1, price2) => {
  var artificio = Math.pow(-1, offer ? 0 : 1);
  var ecu = ((artificio * price2) - (artificio * price1)) / price1;
  return ecu * 100;
};

module.exports.groupByPoint = (collection) => {
};

module.exports.groupByPoint = (positions, property) => {
  return positions.reduce((groups, item) => {
    var val = item[property];
    switch (item[property]) {
      case 1: val = 'entrada'; break;
      case 2: val = 'salida'; break;
      case 3: val = 'stop'; break;
    }
    groups[val] = groups[val] ? groups[val] : [];
    groups[val].push(item);
    return groups;
  }, {});
};

/**
 * @description Calculo para el factor tiempo
 * ```
 * PE - 10(PE - SL)
 * ```
 */
module.exports.calcFactorTime = (entrada, stop) => {
  return entrada.value - (10 * (entrada.value - stop.value));
};

module.exports.getMaxMinByOffer = (offer, position) => {
  var artificio = Math.pow(-1, offer ? 0 : 1);
  return position.sort((a, b) => a - (artificio * b))[0];
};

module.exports.getPrice = function (data) {
  var exchangeData = data.split('~');
  if (parseInt(exchangeData[4], 10) === 4) return;
  return parseFloat(exchangeData[5]);
};

module.exports.getDateLimit = function (day) {
  var date = new Date();
  return date.setMonth(date.getMonth() - day);
};

module.exports.isLifeTime = function (limitDate) {
  return (new Date(limitDate).getTime() - Date.now() <= 0);
};

module.exports.isAllReached = function (position) {
  return !position.some(a => !a.reached);
};

module.exports.somethingWasReached = function (position) {
  return position.some(a => a.reached);
};

module.exports.verifyCasesForSignalEnd = function (entry, sal, stop) {
  var touchingSomething = (this.somethingWasReached(entry) && this.isAllReached(stop));
  return (
    (touchingSomething && this.somethingWasReached(sal)) ||
    (touchingSomething) ||
    (this.isAllReached(entry) && this.isAllReached(sal))
  );
};

module.exports.verifyCaseExpiration = function (senial, position, cb) {
  var minMayEntry = this.getMaxMinByOffer(senial.offer, position.entrada);
  var stop = this.getMaxMinByOffer(senial.offer, position.stop);
  // console.log('limite de precio de entrada', minMayEntry.value);
  // console.log('limite de precio de stop', stop.value);
  var factorTime = this.calcFactorTime(minMayEntry, stop);
  // if (!this.somethingWasReached(position.entrada) &&
  //   (this.isLifeTime(senial.expiration) || cb(!senial.offer, factorTime))) {
  //   console.log('limite de precio de entrada', minMayEntry.value);
  //   console.log('limite de precio de stop', stop.value);
  //   console.log('calculo de factor tiempo: ', factorTime);

  //   console.log('no ha sido alcanzado algun PE : ', !this.somethingWasReached(position.entrada));
  //   console.log('alcanzo la fecha de expiration :', this.isLifeTime(senial.expiration));
  //   console.log('tubo exito factor tiempo : ', cb(!senial.offer, factorTime));
  //   console.log('por lo tanto la condicional es:', !this.somethingWasReached(position.entrada) &&
  //     (this.isLifeTime(senial.expiration) || cb(!senial.offer, factorTime)));
  // }
  return (
    !this.somethingWasReached(position.entrada) &&
    (this.isLifeTime(senial.expiration) || cb(!senial.offer, factorTime))
  );
};
