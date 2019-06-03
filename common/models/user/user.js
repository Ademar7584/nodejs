'use strict';

var path = require('path');
var f = require('../../../lib/global');
var getDateLimit = require('../../../lib/functions').getDateLimit;
const folders = require('../../../lib/urlFront').credential.foldersId;
var senderAddress = 'Criptoanalisis <info@criptoanalisis.org>';

/*eslint max-len: ["error", { "code": 350 }]*/
module.exports = (User) => {
  User.validatesLengthOf('firstName',
    { min: 3, message: { min: 'nombre debe de tener como minimo 3 letras' } });
  User.validatesLengthOf('lastName', +
    { min: 3, message: { min: 'apellido debe de tener como minimo 3 letras' } });
  User.validatesUniquenessOf('email', { message: 'el email no es unico' });
  User.validatesFormatOf('firstName', {
    with: /[a-zA-Z\-'\s]+/,
    message: 'el nombre debe estar compuesto por solo letras',
  });// solo nombres con letras ej juan
  User.validatesFormatOf('lastName', {
    with: /[a-zA-Z\-'\s]+/,
    message: 'el apellido debe de estar compuesto de solo letras',
  });// apellido solo letras ej lopez
  User.validatesFormatOf('password', {
    with: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{4,20})/,
    message: 'password debe de estar compuesto con al menos un dígito, una ' +
      'letra mayúscula, una letra minúscula.',
  }); // password compuesto por letras y numeros

  User.edit = (data, req, res) => {
    if (req.accessToken == null) throw 'permisos denegados';
    User.upsert(data, (err, user) => {
      if (err) throw err;
      res.send(user);
    });
  };

  User.observe('after save', (ctx, next) => {
    var rol = User.app.models.Role;
    var map = User.app.models.RoleMapping;
    if (ctx.instance != undefined) {
      if (ctx.instance.realm == 'normal') {
        rol.find({ where: { name: 'normal' } }, (err, role) => {
          if (err) throw err;
          map.upsertWithWhere({ principalId: ctx.instance.id }, {
            principalType: 'NORMAL',
            principalId: ctx.instance.id,
            roleId: role[0].id,
          }, (err, rolemapping) => {
            if (err)
              console.log('error asignando roles');
            console.log(rolemapping);
          });
        });
      }
      if (ctx.instance.realm == 'premium') {
        rol.find({ where: { name: 'premium' } }, (err, rol) => {
          if (err)
            throw err;
          map.upsertWithWhere({ principalId: ctx.instance.id }, {
            principalType: 'Premium',
            principalId: ctx.instance.id,
            roleId: rol[0].id,
          }, (err, rolemapping) => {
            if (err)
              console.log('error asignando roles');
            console.log(rolemapping);
          });
        });
      }
    }
    next();
  });

  User.fameUser = (userId, points, coinType, coinPoint, reliability) => {
    User.findById(userId).then(data => {
      User.app.models.coin.find({
        where: {
          symbol: coinType,
        },
      }, (err, coin) => {
        if (data.fame == null) {
          // @dev valor : valor que tenga la moneda
          data.fame = [{
            id: coin[0].id, value: coinPoint, symbol: coin[0].symbol,
          }];
        } else {
          var element = data.fame.find(
            element => element.id === coin[0].id);
          if (element === undefined) {
            data.fame.push({
              id: coin[0].id, value: coinPoint, symbol: coin[0].symbol,
            });
          } else {
            // @dev valor que se autoincrementa para segun al valor de la moneda
            data.fame[data.fame.indexOf(element)].value += points * 2;
          }
        }
        data.points += points;
        data.reliability += reliability;
        data.save();
      });
    });
  };

  User.beforeRemote('create', async (ctx) => {
    const user = ctx.req.body;
    const folderUserId = folders['user'];
    const folder = await User.folder(user.username, folderUserId);
    if (!folder) throw 'Error'
    ctx.req.body.folderId = folder.id;
  });

  User.afterRemote('create', (ctx, user, next) => {
    var options = {
      type: 'email',
      to: user.email,
      from: f.senderAddress,
      subject: 'Thanks for registering.',
      redirect: f.frontend + '/auth/login',
      template: path.resolve(__dirname, '../../../server/views/verify.ejs'),
      user: user,
      redirectToLinkText: 'Verify email address',
    };

    user.verify(options, (err, response) => {
      if (err) {
        User.deleteById(user.id);
        return next(err);
      }
      ctx.res.render('response', {
        title: 'Registrado con éxito',
        content: 'Verifique su correo electrónico y haga clic en el enlace ' +
          'de verificación antes de iniciar sesión.',
        redirectTo: '',
        redirectToLinkText: '',
      }, (err, html) => {
        ctx.res.send({ html });
      });
    });
  });

  User.afterRemote('prototype.verify', (context, user, next) => {
    context.res.render('response', {
      title: 'A Link to reverify your identity has been sent ' +
        'to your email successfully',
      content: 'Please check your email and click on the verification link ' +
        'before logging in',
      redirectTo: '/auth/login',
      redirectToLinkText: 'Log in',
    });
  });

  User.afterRemote('resetPassword', (ctx, user, next) => {
    ctx.res.render('response', {
      title: 'Password reset requested',
      content: 'Check your email for further instructions',
      redirectTo: '',
      redirectToLinkText: 'Log in',
    }, (err, html) => {
      if (err) throw err;
      ctx.res.status(202).send({ html });
    });
  });

  User.on('resetPasswordRequest', (info) => {
    var url = f.frontend + '/auth/reset-password';
    var html = 'Click <a href="' + url + '/' + info.accessToken.id + '">here</a> to reset your password';
    User.app.models.Email.send({
      to: info.email,
      from: f.senderAddress,
      subject: 'Password reset',
      html: html,
    }, (err) => {
      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
    });
  });

  User.afterRemote('changePassword', (context, user, next) => {
    context.res.render('response', {
      title: 'Password changed successfully',
      content: 'Please login again with new password',
      redirectTo: '/',
      redirectToLinkText: 'Log in',
    }, (err, html) => {
      context.res.send({ html });
    });
  });

  User.afterRemote('setPassword', (context, user, next) => {
    context.res.render('response', {
      title: 'Password reset success',
      content: 'Your password has been reset successfully',
      redirectTo: '/',
      redirectToLinkText: 'Log in',
    }, (err, html) => {
      context.res.send({ html });
    });
  });

  User.afterRemote('login', (ctx, model, next) => {
    User.findById(model.userId).then(user => {
      user.visit += 1;
      user.save();
      next();
    });
  });

  var filter = {
    where: {},
    order: 'created DESC',
    limit: 10,
    fields: {
      id: true,
      precision: true,
      created: true,
    },
  };

  User.calcPrecision = (userId) => {
    filter.where = {
      and: [
        { userId: userId },
        { created: { gte: getDateLimit(3) } },
        { precision: { neq: null } },
        { precision: { neq: 0 } },
      ],
    };
    User.app.models.signal.find(filter).then(signal => {
      if (signal.length == 0) return;
      var presicion = 0;
      signal.forEach(element => {
        // console.log('precision ', presicion, ' suma con: ', element.precision);
        presicion += parseFloat(element.precision);
      });
      // presicion = presicion / signal.length;
      // if (!presicion) {
      //   presicion = 0;
      // }
      var userFields = {
        precision: true,
        username: true,
        firstName: true,
        id: true,
        lastName: true,
        email: true,
        password: true,
      };
      User.findById(userId, { fields: userFields }).then(user => {
        user.precision[0].valor = presicion;
        console.log('user ', user.username, ' precision: ', presicion);
        user.precision[0].nropost += 1;
        user.save();
      });
    });
  };

  User.haveEnoughFounds = (userId, monto) => {
    return User.findById(userId)
      .then(user => {
        if (user.points >= monto)
          return true;
        return false;
      })
      .catch(err => {
        return false;
      });
  };

  User.afterRemote('prototype.__get__notifications', (context, user, next) => {
    var list = [];
    context.result.forEach(element => {
      if (element.userId == context.instance.id && element.ownerId == context.instance.id) return;
      list.push(element);
    });
    context.result = list;
    var filter = {
      where: {
        followerId: context.instance.id,
      },
    };
    User.app.models.Notification.verifying(context, filter, next);
  });

  User.afterRemote('prototype.__create__payments', async (ctx) => {
    var user = await User.findById(ctx.result.userId);
    user.points += ctx.result.points;
    await User.upsert(user);
    return;
  });

  User.beforeRemote('prototype.__create__meta', (ctx, user, next) => {
    console.log(ctx.req.body);
    const files = ctx.req.files;
    console.log(files);
    return;
    next();
  });

  User.afterRemote('prototype.__create__transactions', async (ctx) => {
    var user = await User.findById(ctx.result.userId);
    user.points -= f.defaultPrice;
    user.save();
    var owner = await User.findById(ctx.result.ownerId);
    owner.points += f.defaultPrice;
    owner.save();
    return;
  });
};
