'use scrtict';
/*eslint max-len: ["error", { "code": 350 }]*/
module.exports = (app) => {
  var router = app.loopback.Router();
  router.post('/paybear/callback/:order', (req, res) => {
    if (req.body && req.params.order) {
      var orderId = req.params.order;
      var data = req.body;
      var invoice = data.invoice;

      //save data.confirmations - number of confirmations to DB

      if (data.confirmations >= data.maxConfirmations) {
        var amountPaid = data.inTransaction.amount / Math.pow(10, data.inTransaction.exp);
        //compare $amountPaid with order total
        //compare $iunvoice with one saved in the database to ensure callback is legitimate
        //mark the order as paid
        res.send(invoice); //stop further callbacks
      } else {
        res.send('waiting for confirmations');
      }
    } else {
      res.send('error');
    }
  });
};
