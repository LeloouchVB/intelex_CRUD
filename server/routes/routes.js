var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page */
router.get('/', function (req, res) {
    res.render('index');
});

module.exports = router;