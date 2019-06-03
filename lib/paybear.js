// 'use strict';

// var https = require('https');

// var PAYBEAR_SECRET = 'sec40c170bf3717df9e83ba5ad71ce7dfc9';

// var PAYBEAR_PUBLIC = 'pub6c5151e17d833459d264a4e8d8ebefe9';

// function getAddress(orderId, token, callback) {
//   var callbackUrl = 'http://CHANGEME.com/payBear/callback/' + orderId;
//   var url = 'https://api.paybear.io/v2/' + token.toLowerCase() + '/payment/' + '?token=' + PAYBEAR_SECRET;

//   https.get(url, (res) => {
//     var rawData = '';
//     res.on('data', (chunk) => { rawData += chunk; });

//     res.on('end', () => {
//       var response = JSON.parse(rawData);
//       if (response.success) {
//         callback(response.data.address);
//       }
//     });
//   }).
//     on('error', (e) => {
//       console.error(e);
//       callback(null);
//     });
// }

// function getCurrencies(callback) {
//   var currencies = null; //TODO: add cache here?

//   var url = 'https://api.paybear.io/v2/currencies?token=' + PAYBEAR_SECRET;

//   https.get(url, (res) => {
//     var rawData = '';
//     res.on('data', (chunk) => { rawData += chunk; });

//     res.on('end', () => {
//       var response = JSON.parse(rawData);
//       if (response.success) {
//         callback(response.data);
//       }
//     });
//   }).
//     on('error', (e) => {
//       console.error(e);
//       callback(null);
//     });
// }

// function getCurrency(token, orderId, getAddr, callback) {
//   getRate(token, (rate) => {
//     if (rate) {
//       var fiatValue = 19.99; //get from $orderId
//       var coinsValue = +(fiatValue / rate).toFixed(8);
//       var currency = null;

//       getCurrencies((currencies =>) {
//         token = token.toLowerCase();
//         currency = currencies[token];
//         currency['coinsValue'] = coinsValue;

//         if (getAddr) {
//           getAddress(orderId, token, (address) => {
//             currency['address'] = address;
//             currency['blockExplorer'] = currency['blockExplorer'] + address;
//             callback(currency);
//           });
//         } else {
//           currency['currencyUrl'] = '/paybear/currencies?order=' + orderId + '&token=' + token;
//           callback(currency);
//         }
//       });

//     }
//   });
// }

// function getRate(curCode, callback) {
//   curCode = curCode.toLowerCase();
//   getRates((rates =>) {
//     rates[curCode] ? callback(rates[curCode].mid) : callback(false);
//   });
// }

// function getRates(callback) {
//   var url = 'https://api.paybear.io/v2/exchange/usd/rate';

//   https.get(url, (res) => {
//     var rawData = '';
//     res.on('data', (chunk) => { rawData += chunk; });

//     res.on('end', () => {
//       var response = JSON.parse(rawData);
//       if (response.success) {
//         callback(response.data);
//       }
//     });
//   }).
//     on('error', (e) => {
//       console.error(e);
//       callback(null);
//     });
// }

// module.exports = {
//   getAddress: getAddress,
//   getCurrency: getCurrency,
//   getCurrencies: getCurrencies,
//   getRate: getRate,
//   getRates: getRates,
// };
