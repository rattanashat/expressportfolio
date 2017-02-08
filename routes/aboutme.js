var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/aboutme', function(req, res, next) {
    res.render('aboutme');
});
module.exports = router;