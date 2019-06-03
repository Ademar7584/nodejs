'use strict';

module.exports = function(Model, options) {
  Model.defineProperty('status', {type: Boolean, default: true});
  Model.defineProperty('created', {type: Date, default: '$now'});
  Model.defineProperty('lastUpdated', {type: Date, default: '$now'});
};
