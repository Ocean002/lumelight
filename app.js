'use strict';

var session = require('cookie-session')
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet')
var index = require('./routes/index');
var users = require('./routes/users');

var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun(process.env.MAILGUN_API_KEY);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
app.get('/contatti', function(req, res){
  res.render('contatti');
}); 

app.post('/contatti', function(req, res) {
  
  var api_key = '@';
  var domain = '@';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
   
  var data = {
    from: 'Lume Lighting Team Team <@>',
    to: 'infolumelighting@gmail.com',
    subject: 'Hello',
    html: 'UserName: '+req.body.userName+
          'Email: '+req.body.email+ 
          'Phone: '+req.body.phone+ 
          'Company: '+req.body.company+ 
          'Textarea: '+req.body.textarea
  };
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    res.render('contatti', {
      msg:'Grazie. Il messaggio è stato inviato'
    })
    });
  });

var expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
app.use(session({
  name: 'session',
  keys: ['', ''],
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'lumelight.it',
    path: 'foo/bar',
    expires: expiryDate
  }
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
var path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.pug'));
})

module.exports = app;
