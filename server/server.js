'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var sockets = require('socket.io');

const fileUpload = require('express-fileupload');

var path = require('path');

var errorHandler = require('strong-error-handler');
var app = module.exports = loopback();

var cookieParser = require('cookie-parser');
var session = require('express-session');

// Passport configurators..
var loopbackPassport = require('loopback-component-passport');
var PassportConfigurator = loopbackPassport.PassportConfigurator;
var passportConfigurator = new PassportConfigurator(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(fileUpload());

// attempt to build the providers/passport config
var config = {};

try {
  config = require('../providers').provider;
} catch (err) {
  console.trace(err);
  process.exit(1); // fatal
}
// https://github.com/binance-exchange/binance-api-node
const Binance = require('binance-api-node').default;
const client = Binance({
  apiKey: 'MtXswC2KIAPUfwko0jlhfOgDZIPK91FI29EV2LxYI2ekmV63IQbhILgIy5F3Svh8',
  apiSecret: 'NeltLraMMQ71cFQibUMNSpHio5GkQxKe1KEpAPSbwMz298mf1yNT4NNeGcoVWi3a',
});

app.locals.moment = require('moment');
app.get('/history/signal/:id', async (req, res) => {
  const Signal = app.models.signal;

  const filter = {
    fields: {
      "investmentType": false,
      "fundamentalAnalysis": false,
      "technicalAnalysis": false,
      "exitStrategy": false,
      "exchange": false,
      "region": false,
      "image": false,
      "content": false,
      "blocked": false,
      "affordable": false,
      "userId": false,
      "coinId": false,
      "status": false,
      "price": false,
      "perfilLink": false,
      "likes": false,
      "dislikes": false
    },
    include: [{
      relation: 'position',
      scope: {
        order: 'pointId ASC',
        fields: ['value', 'reached', 'created', 'lastUpdated', 'pointId'],
      },
    }, {
      relation: 'history',
      scope: {
        order: 'created DESC',
      },
    }],
  };
  const id = req.params.id;
  const signals = await Signal.findById(id, filter);
  const signal = JSON.parse(JSON.stringify(signals));
  const position = signal.position;
  const history = signal.history;
  delete signal.id;
  delete signal.position;
  delete signal.history;
  signal.offer = signal.offer ? 'compra' : 'venta';
  const columnSignal = Object.keys(signal);
  if (!id) res.status(404).send('Debe proporcionar una ID de señal');
  res.render('pages/signal', {
    columnSignal: columnSignal.sort(),
    signal: signal,
    history: history,
    position: position,
    columnPosition: filter.include[0].scope.fields,
  });
});

app.start = () => {
  // start the web server
  return app.listen(() => {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, (err) => {
  if (err) throw err;
});

// start the server if `$ node server.js`

if (require.main === module) {
  app.io = sockets(app.start());

  const date = new Date();
  app.models.award.generate();
  if (date.getHours() === 0) {
    app.emit('generate'); // observable para generar premios
  }
  setInterval(() => {
    const date = new Date();
    if (date.getHours() == 0) {
      app.emit('generate'); // observable para generar premios
    }
  }, 1 * 60 * 60 * 1000); // HH MM SS ML ejecucion de codigo cada 1 hora
  app.io.on('connection', (socket) => {
    console.log('a user connected');
    console.log('id : ' + socket.id);
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('onTrader', event => {
      const pair = [`${event.pair[2]}${event.pair[3]}`];
      client.ws.aggTrades(pair, trade => {
        // console.log(trade);
        socket.emit('trader', trade);
      });
      // console.log('-------', pair);
    });
  });
}

// The access token is only available after boot
app.middleware('auth', loopback.token({
  model: app.models.AccessToken,
}));

app.middleware('session:before', cookieParser(app.get('cookieSecret')));
app.middleware('session', session({
  secret: 'kitty',
  saveUninitialized: true,
  resave: true,
}));
passportConfigurator.init();

passportConfigurator.setupModels({
  userModel: app.models.user,
});
for (var s in config) {
  var c = config[s];
  c.session = c.session !== false;
  passportConfigurator.configureProvider(s, c);
}
