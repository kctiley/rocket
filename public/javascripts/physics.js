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

//Trajectory hits target
// var targetHitCoordinates = function(centerX, centerY){

// }
//Plots trajectory and launches based on knobText and angleText inputs
var launch = function(){
  var screenSize = 200;//CHECK THIS TO SEE IF WORKING OR IF NOT EVEN NEEDED(PROB NOT?)
  var arrOfScreenSizes = [];
  var makeScreenSizeArr = function(){
      for (var i = 0; i < screenSize; i++){
          arrOfScreenSizes.push(i);
      }
  }
  makeScreenSizeArr();

  var velocity = document.getElementById('knobText').value / 100;
  console.log('KnobText value divided by 100:...........' + velocity);
  var angle = document.getElementById('angleText').value / 1;
  console.log('angleText value:...........' + angle);

  var g = 32;
  var trajectoryCoordinates = [];
  var maketrajectoryCoordinates = function(){  
    for (var t = 0; t < arrOfScreenSizes.length; t++){
      var x = Math.round((velocity / 1 )* t * Math.cos(angle));
      var y = Math.round((velocity / 1) * t * Math.sin(angle) - ((1 / (g / (1 * 1))) * t * t));

      if(x > 0 && y > 0 && x < screenSize && y < screenSize){
        trajectoryCoordinates.push(y + "y" + x + "x");
      } 
    }
    return trajectoryCoordinates;
  }
  maketrajectoryCoordinates();

  var addTrajectoryToDom = function(){
    for (var j = 0; j < trajectoryCoordinates.length; j++){
      document.getElementById(trajectoryCoordinates[j]).style.backgroundColor = 'red';
    }  
  }  
  addTrajectoryToDom();
  //Check coordinates for matching in trajectoryCoordinates and targetCoordinatesArray
  
  var coordsMatchArr = [];
  var checkMatch = function(arr1, arr2){
      var fixedArr = arr1;
      var slicedArr = arr2;

      if(slicedArr.length == 0){
        if (coordsMatchArr.length == 0){
          
          console.log(coordsMatchArr);

          var para = document.createElement("h1");
          var node = document.createTextNode("Missed the target...");
          para.appendChild(node);
          var element = document.getElementById("gameScreen");
          element.appendChild(para);
          para.style.color = 'red';
          para.style.position = 'absolute';
          para.style.top = '500px';
          para.style.left = '380px';


        }
        else{

          var para = document.createElement("h1");
          var node = document.createTextNode("Success!!!");
          para.appendChild(node);
          var element = document.getElementById("gameScreen");
          element.appendChild(para);
          para.style.color = 'green';
          para.style.position = 'absolute';
          para.style.top = '500px';
          para.style.left = '380px';

        }
      }
      else {
          for (var i = 0; i < fixedArr.length; i++){
              if (fixedArr[i] == slicedArr[0]){
                  coordsMatchArr.push(fixedArr[i])
              }
          }
          return checkMatch(fixedArr, slicedArr.slice(1))
      }  
  };
  //checkMatch(targetCoordinatesArray, trajectoryCoordinates);

  var doThis = window.setTimeout(function(){checkMatch(targetCoordinatesArray, trajectoryCoordinates); }, 2000);
  doThis();
 
}

//Listens for Launch button
var click = document.getElementById('launchButton');
click.addEventListener('click', launch);

//Listens for angle value
function updateAngleText(val) {
  document.getElementById('angleText').value=val; 
}












