var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Lumelight' });
});
router.get('/servizi', function(req, res, next) {
    res.render('servizi.pug', { title: 'Servizi' });
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
router.get('/live', function(req, res, next) {
    res.render('live.pug', { title: 'Spettacoli live' });
});
router.get('/teatri', function(req, res, next) {
    res.render('teatri.pug', { title: 'Spettacoli teatrali' });
});
router.get('/televisivo', function(req, res, next) {
    res.render('televisivo.pug', { title: 'Settore televisivo' });
});
router.get('/navale', function(req, res, next) {
    res.render('navale.pug', { title: 'Settore navale' });
});
router.get('/Disco&Club', function(req, res, next) {
    res.render('disco&club.pug', { title: 'Settore Disco e club' });
});


module.exports = router;