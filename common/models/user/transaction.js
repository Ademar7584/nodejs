'use strict';

module.exports = (Transaction) => {
  Transaction.afterRemote('create', (ctx, model, next) => {
    var User = Transaction.app.models.user;
    User.findById(model.userId).then(user => {
      user.points -= g.defaultPrice;
      user.save();
    });
    User.findById(model.ownerId).then(owner => {
      owner.points += g.defaultPrice;
      owner.save();
    });
    next();
  });

  Transaction.closeChat = (req, res, cb) => {
    console.log(req.body.sender);
    Transaction.find({
      where: {
        and: [{
          and: [{
            senderId: req.body.sender,
          }, {
            recieverId: req.body.reciever,
          }],
        }, {
          activo: true,
        }],
      },
    }).then(transfer => {
      console.log(transfer);
      if (transfer.length > 0) {
        Transaction.modPuntos(req.body.reciever, transfer[0].monto);
        transfer.save();
      } else {
        console.log('no tiene ningun cobro pendiente');
      };
      cb();
    });
  };

  Transaction.remoteMethod('closeChat', {
    http: {
      path: '/closeChat', verb: 'post',
    },
    accepts: [{
      arg: 'req', type: 'object', 'http': { source: 'req' },
    }, {
      arg: 'res', type: 'object', 'http': { source: 'res' },
    }],
    returns: { arg: '', type: 'object' },
  });

  Transaction.modPuntos = (userId, monto) => {
    Transaction.app.models.user.findById(userId).then(data => {
      data.points += monto;
      delete data.perfilLink;
      data.save();
    }).cath(err => {
      console.log('error durante la Transaction');
    });
  };

  Transaction.makeTransaction = (sellerId, buyerId, monto, razon) => {
    let usuario = Transaction.app.models.user;
    return usuario.haveEnoughFounds(buyerId, monto)
      .then(result => {
        if (result) {
          Transaction.modPuntos(buyerId, -monto);
          Transaction.modPuntos(sellerId, monto);
          Transaction.create({
            'senderId': buyerId,
            'recieverId': sellerId,
            'monto': monto,
            'razon': razon,
            'activo': false,
          });
          return true;
        } else {
          return false;
        }
      });
  };

  Transaction.transfiere = (senderId, receptorId, type, costo) => {
    // obtencion de una tranzaccion activa entre los usuarios
    Transaction.find({
      where: {
        and: [{
          or: [{
            and: [{
              senderId: senderId,
            }, {
              recieverId: receptorId,
            }],
          }, {
            and: [{
              senderId: receptorId,
            }, {
              recieverId: senderId,
            }],
          }],
        }, {
          activo: true,
        }],
      },
    }).then(transfer => {
      // obtencion del solicitante y aumento de creditos en caso verdadero
      if (transfer.length > 0) {
        Transaction.modPuntos(senderId, -costo);
        if (senderId == transfer[0].senderId) {
          // flujo de aumento de creditos
          transfer[0].monto += costo;
          transfer.save();
        } else {
          console.log('el mensaje es gratuito');
        };
      } else {
        Transaction.create([{
          tipo: type,
          monto: costo,
          senderId: senderId,
          recieverId: receptorId,
          razon: 'chat',
          activo: true,
        }], (err, data) => {
          console.log('transferido', data);
        });
      };
    });
  };
};
