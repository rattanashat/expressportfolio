var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rattan Ashat' });
});
router.get('/aboutme', function(req, res, next) {
    res.render('aboutme');
});
router.get('/contactme', function(req, res, next) {
    res.render('contactme');
});

module.exports = router;
