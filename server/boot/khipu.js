'use strict';
/*eslint max-len: ["error", { "code": 350 }]*/
var khipu = require('../../lib/khipu');
var global = require('../../lib/global');

module.exports = (app) => {
  var router = app.loopback.Router();
  var apiid = '208753';
  var apikey = '3149f9a0286bcacc2cfec29cbe4ecdfe5ff8d60e';
  khipu.configure(apiid, apikey);
  // khipu.config.sslVerification = false;

  router.get('/khipu', (req, res) => {
    khipu.listBanks(function callback(err, banks) {
      if (err) {
        throw err;
      }
      console.log(banks);
      res.send(banks);
    });
  });

  router.get('/khipu/:id', (req, res) => {
    const id = req.params.id;
    khipu.getPaymentById(id, (err, payment) => {
      console.log(payment);
      res.send(payment);
    });
  });

  router.get('/khipu/callback', (req, res) => {
    console.log(req);
    res.send({message: 'Ok'});
  });

  router.post('/khipu', (req, res) => {
    console.log(req.body);
    var payments = {
      'return_url': global.backend + '/khipu/callback',
      'cancel_url': global.backend + '/khipu/callback',
      subject: 'Test Payment',
      currency: 'BOB',
      amount: 2000,
      'bank_id': 'tUcw7',
      'transaction_id': 12345,
      custom: 'Custom information',
      body: 'This is a test payment',
    };
    khipu.createPayment(payments, (err, payment) => {
      if (err) throw err;
      res.send(payment);
    });
  });
  app.use(router);
};
