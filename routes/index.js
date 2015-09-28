var db = require('monk')(process.env.MONGOLAB_URI || 'localhost/player-demo');
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
  });
});

//signup handling
router.get('/rocket/signup', function(req, res, next) {
  res.render('signup', { title: 'Rocket - New Player Sign Up' });
});

router.post('/rocket/show_user/signup', function(req, res, next) {
  console.log("req.body:  " + req.body.name_entered);
  playersCollection.insert({ name: req.body.name_entered, gamesPlayed: 0, gamesWon: 0}, function(err, record){
    playersCollection.findOne({name: req.body.name_entered},function(err, record){
      res.render('show_user', { title: 'Thank you for signing up!', thePlayer: record});
    });  
  });
});

//login handling
router.get('/rocket/login', function(req, res, next) {
    res.render('login', { title: 'Logging in as previous user'});  
});

router.post('/rocket/show_user/login', function(req, res, next) {
  console.log("req.body:  " + req.body.name_entered);
    playersCollection.findOne({name: req.body.name_entered},function(err, record){
      res.render('show_user', { title: 'Welcome back!!! You are signed in!', thePlayer: record}); 
  });
});

router.get('/rocket/playGame/:name', function(req, res, next){
  console.log("Request params name:  " + req.params.name);
  playersCollection.findOne({name:  req.params.name},function(err, record){
    res.render('playGame', {title: "Game Page", thePlayer: record, theField: 100});
  });
});

//edit handling
router.get('/rocket/edit/:name', function(req, res, next){
  console.log('Rocket/edit/:name' + req.params.name);
  playersCollection.findOne({name: req.params.name}, function(err, record){
    res.render('edit', {title: "Edit player profile", thePlayer: record});
  });
});


router.post('/rocket/edit/:name', function(req, res, next) {
  console.log("req.params.name:  " + req.params.name);
  console.log("req.body.name_entered:  " + req.body.name_entered);
  playersCollection.update({name: req.params.name}, {name: req.body.name_entered}, function(err, record){
    playersCollection.findOne({name: req.body.name_entered}, function(err, record){
      res.render('show_user', { title: 'Your profile has been updated!', thePlayer: record});
    });  
  });
});

//admin for delete handling
router.get('/rocket/admin', function(req, res, next){
  playersCollection.find({}, function(err, records){
    res.render('admin', { title: 'Rocket - Administration Page', allPlayers: records});
  });
});

router.get('/rocket/delete/:_id', function(req, res, next){
  console.log('Delete req.params._id:  ' + req.params._id)
  playersCollection.remove({_id: req.params._id}, function(err, record){
    playersCollection.find({}, function(err, records){
      res.render('index', { title: 'Rocket', allPlayers: records});
    });
  });
});

router.post("/rocket/playGame/:name", function(req, res, next){
  console.log('Route from playGame post working....');
  console.log('req.params.name......' + req.params.name);
  console.log('req.body.inputGamesWon......' + req.body.inputGamesWon);
  console.log('req.body.inputGamesPlayed......' + req.body.inputGamesPlayed);
  playersCollection.update({name: req.params.name}, {gamesWon: req.body.inputGamesWon, gamesPlayed: req.body.inputGamesPlayed}, function(err, record){
    playersCollection.findOne({name: req.params.name}, function(err, record){
      res.render('show_user', {title: "Game stats updated!", thePlayer: record}); 
    });   
  });
})




module.exports = router;
