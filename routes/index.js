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

router.post('/rocket/show_user', function(req, res, next) {
  console.log("req.body:  " + req.body.name_entered);
  playersCollection.insert({ name: req.body.name_entered}, function(err, record){
    res.render('show_user', { title: 'Thank you for joining ', name: req.body.name_entered + '!'});
  });
});


router.get('/rocket/login', function(req, res, next) {
    res.render('login', { title: 'Logging in as previous user'});  
});

router.get('/rocket/show_user/', function(req, res, next){
  console.log(req.body.name_entered);
  console.log(req.params.name_entered);
  playersCollection.findOne({name: req.params.name}, function(err, record){
    res.render('show_user', {title: "Welcome back", thePlayer: record})
  })
})


// router.get('/albums/:id', function(req, res, next) {
//   albumCollection.findOne({_id: req.params.id}, function (err, record) {
//     res.render('albums/show', {theAlbum: record});
//   });
// });




module.exports = router;
