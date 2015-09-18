var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rocket' });
});

router.get('/rocket', function(req, res, next) {
  res.render('index', { title: 'Rocket' });
});

router.get('/rocket/newPlayerSignin', function(req, res, next) {
  res.render('newPlayerSignin', { title: 'Rocket - New Player Sign Up' });
});

router.get('/rocket/login', function(req, res, next) {
  res.render('login', { title: 'Rocket - Player Login' });
});

module.exports = router;
