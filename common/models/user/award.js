'use strict';

module.exports = (Award) => {
  Award.generate = () => {
    var user = Award.app.models.user;
    var filter = {
      fields: ['id', 'country', 'region', 'precision', 'username'],
    };
    var sunday = 0; // representa el dia domingo segun formato Date
    Award.app.on('generate', () => {
      var date = new Date();
      if (date.getDay() == sunday) {
        user.find(filter).then(list => {
          var listOrder = list.sort((a, b) => {
            return b.precision[0].valor - a.precision[0].valor;
          });
          var mayPrecision = listOrder.shift();
          var award = {
            description: 'por tener la mayor precision de pronosticos exitosos',
            type: 'winner',
            country: mayPrecision.country,
            region: mayPrecision.region,
            username: mayPrecision.username,
            userId: mayPrecision.id,
          };
          Award.create(award).then(data => {
            if (!data) throw 'error';
            console.log('Winner: ', data.username);
          });
        });
      }
    });
  };
};
