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
router.get('/settore-live', function(req, res, next) {
    res.render('settore-live.pug', { title: 'Spettacoli live' });
});
router.get('/settore-teatrale', function(req, res, next) {
    res.render('settore-teatrale.pug', { title: 'Spettacoli teatrali' });
});
router.get('/settore-televisivo', function(req, res, next) {
    res.render('settore-televisivo.pug', { title: 'Settore televisivo' });
});
router.get('/settore-navale', function(req, res, next) {
    res.render('settore-navale.pug', { title: 'Settore navale' });
});
router.get('/settore-discoteche-club', function(req, res, next) {
    res.render('settore-discoteche-club.pug', { title: 'Settore Disco e club' });
});

module.exports = router;