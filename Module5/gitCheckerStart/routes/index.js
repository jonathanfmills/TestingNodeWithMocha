var express = require('express');
var router = express.Router();
var gitController = require('../controllers/gitController')();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/git/:userId', gitController.userGet);

module.exports = router;
