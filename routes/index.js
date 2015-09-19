var db = require('monk')('localhost/player-demo');
var playersCollection = db.get('players');

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    playersCollection.find({}, function(err, records){
    res.render('index', { title: 'Rocket', allPlayers: records});
  })
});


router.get('/rocket', function(req, res, next) {
  playersCollection.find({}, function(err, records){
    res.render('index', { title: 'Rocket', allPlayers: records});
  })
});

router.get('/rocket/signup', function(req, res, next) {
  res.render('signup', { title: 'Rocket - New Player Sign Up' });
});

router.post('/rocket/show_user/signup', function(req, res, next) {
  console.log("req.body:  " + req.body.name_entered);
  playersCollection.insert({ name: req.body.name_entered}, function(err, record){
    playersCollection.findOne({name: req.body.name_entered},function(err, record){
      res.render('show_user', { title: 'Thank you for signing up!', thePlayer: record});
    });  
  });
});


router.get('/rocket/login', function(req, res, next) {
    res.render('login', { title: 'Logging in as previous user'});  
});


router.post('/rocket/show_user/login', function(req, res, next) {
  console.log("req.body:  " + req.body.name_entered);
  playersCollection.insert({ name: req.body.name_entered}, function(err, record){
    playersCollection.findOne({name: req.body.name_entered},function(err, record){
      res.render('show_user', { title: 'Welcome back!!! You are signed in!', thePlayer: record});
    });  
  });
});



// router.get('/albums/:id', function(req, res, next) {
//   albumCollection.findOne({_id: req.params.id}, function (err, record) {
//     res.render('albums/show', {theAlbum: record});
//   });
// });




module.exports = router;
