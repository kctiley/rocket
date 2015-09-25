console.log('PHYSICS JS.... ') 

//Makes expanded array of coordinates from random centers generated
var targetCoordinatesArray = [];
var makeTargetAndAddToDom = function(centerX, centerY){
  for (var i = -4; i < 4; i++){
    var x = centerX + i;
    for (var j = -4; j < 4; j++){
      var y = centerY + j;
      targetCoordinatesArray.push(y + "y" + x + "x");
    }
  }

  var addToDom = function(){
    for (var i = 0; i < targetCoordinatesArray.length; i++){
      var each = targetCoordinatesArray[i];
      document.getElementById(each).style.backgroundColor = "white";
    }
  }
  addToDom();
}
var genCenterXY = [];
var targetCenterGenerator = function(){
  genCenterXY.push(Math.floor(Math.random() * (140 - 70) + 70));
  genCenterXY.push(Math.floor(Math.random() * (180 - 100) + 100));
}

targetCenterGenerator();
makeTargetAndAddToDom(genCenterXY[0], genCenterXY[1]);

//Plots trajectory and launches based on knobText and angleText inputs
var launch = function(){
  var scale = 400;//CHECK THIS TO SEE IF WORKING OR IF NOT EVEN NEEDED(PROB NOT?)
  var arrTime = [];
  var makeTimeArr = function(){
      for (var i = 0; i < scale; i++){
          arrTime.push(i);
      }
  }
  makeTimeArr();

  var velocity = document.getElementById('knobText').value / 100;
  console.log('KnobText value divided by 100:...........' + velocity);
  var angle = document.getElementById('angleText').value / 1;
  console.log('angleText value:...........' + angle);

  var g = 32;
  var coordinates = [];
  var makeCoordinates = function(){  
    for (var t = 0; t < arrTime.length; t++){
      var x = Math.round((velocity / 1 )* t * Math.cos(angle));
      var y = Math.round((velocity / 1) * t * Math.sin(angle) - ((1 / (g / (1 * 1))) * t * t));

      if(x > 0 && y > 0 && x < scale && y < scale){
        coordinates.push(y + "y" + x + "x");
      } 
    }
    return coordinates;
  }
  makeCoordinates();

  var plotLine = function(){
    for (var j = 0; j < coordinates.length; j++){
      document.getElementById(coordinates[j]).style.backgroundColor = "yellow";
    }  
  }
  
  plotLine();
}

//Listens for Launch button
var click = document.getElementById('ignitionButton');
click.addEventListener('click', launch);












