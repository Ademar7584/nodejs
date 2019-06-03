'use strict';
var config = require('./urlFront');

/*eslint max-len: ["error", { "code": 350 }]*/

// points for News
module.exports.pointsPublishNews = 1;
module.exports.reliabilityNews = 1;
module.exports.pointsCommentNews = 1;
module.exports.pointsLikesNews = 1;
module.exports.pointsDislikesNews = -1;
module.exports.coinPointsNews = 1;

// points for Signals
module.exports.pointsPublishSignals = 1;
module.exports. reliabilitySignals = 1;
module.exports.pointsCommentSignals = 1;
module.exports.pointsLikesSignals = 1;
module.exports.pointsDislikesSignals = -1;
module.exports.coinPointsSignals = 1;
//end

module.exports.doubtful = -2;

module.exports.senderAddress = 'Criptoanalisis <info@criptoanalisis.org>';

module.exports.exchangeDefault = 'Binance';

module.exports.exchangeDefault = 'Binance';

module.exports.frontend = config.frontend;
module.exports.backend = config.backend;
module.exports.credentials = config.credential;
