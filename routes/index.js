var db = require('monk')('localhost/player-demo');
var playersCollection = db.get('players');

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rocket' });
});

router.get('/rocket', function(req, res, next) {
  playersCollection.find({}, function(err, records){
    res.render('index', { title: 'Rocket', allPlayers: records});
  })
});


// router.get('/albums', function(req, res, next) {
//   albumCollection.find({}, function (err, records) {
//     res.render('albums/index', {allAlbums: records});
//   });
// });


router.get('/rocket/signup', function(req, res, next) {
  res.render('signup', { title: 'Rocket - New Player Sign Up' });
});

router.post('/rocket/signup', function(req, res, next) {
  playersCollection.insert({ name: req.body.new_player_name});
  res.render('show_user', { title: 'Thank you for joining ', name: req.body.new_player_name + '!'});
});

router.get('/rocket/login', function(req, res, next) {
  res.render('login', { title: 'Logging in as previous user' });
});

router.post('/rocket/login', function(req, res, next) {
  res.render('show_user', { title: 'Hello again ' ,  name: req.body.login_player_name + "! You're back."});
});



// router.post('/albums', function(req, res, next) {
//   albumCollection.insert({ name: req.body.album_name });
//   res.redirect('/albums');
// });


module.exports = router;
