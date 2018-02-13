var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lumelight' });
});
router.get('/about', function(req, res, next) {
  res.render('about.pug', { title: 'About me' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact.pug', { title: 'Contatti' });
});
module.exports = router;
