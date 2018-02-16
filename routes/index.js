var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lumelight' });
});
router.get('/servizi', function(req, res, next) {
  res.render('servizi.pug', { title: 'Servizi' });
});
router.get('/live', function(req, res, next) {
  res.render('live.pug', { title: 'Spettacoli live' });
});
router.get('/servizi/teatri', function(req, res, next) {
  res.render('teatri.pug', { title: 'Spettacoli teatrali' });
});
router.get('/servizi/televisione', function(req, res, next) {
  res.render('televisione.pug', { title: 'Televisione' });
});
router.get('/servizi/navi', function(req, res, next) {
  res.render('navi.pug', { title: 'Settore navale' });
});
router.get('/corsi', function(req, res, next) {
  res.render('corsi.pug', { title: 'Corsi' });
});
router.get('/about', function(req, res, next) {
  res.render('about.pug', { title: 'About me' });
});
router.get('/contatti', function(req, res, next) {
  res.render('contatti.pug', { title: 'Contatti' });
});
module.exports = router;
