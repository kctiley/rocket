
console.log('PHYSICS JS.... ')

//test target table td is initially red
//document.getElementById("84y60x").style.backgroundColor = "red";
 

var moonCoordArr = [];
var makeMoon = function(centerX, centerY, h, w){
  for (var i = -h; i < h; i++){
    var x = centerX + i;
    for (var j = -w; j < w; j++){
      var y = centerY + j;
      moonCoordArr.push(y + "y" + x + "x");
    }
  }

  var addToDom = function(){
    for (var i = 0; i < moonCoordArr.length; i++){
      var each = moonCoordArr[i];
      document.getElementById(each).style.backgroundColor = "white";
    }
  }
  addToDom();

}

makeMoon(90, 140, 1, 3);
makeMoon(94, 140, 3, 1);
makeMoon(85, 140, 4, 1);




//   document.getElementById("84y60x").style.backgroundColor = "red";


// var velocityX = document.getElementById("velocityGameX").value; debugger
// var velocityY = document.getElementById("velocityGameY").value;

//test target table td can enter a line green "TEMPORARILY"
var target = function(){

  var scale = 400;
  var arrTime = [];
  var makeTimeArr = function(){
      for (var i = 0; i < scale; i++){
          arrTime.push(i);
      }
  }
  makeTimeArr();

  var angle = 45.24;
  var velocity = 4.6;
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
var click = document.getElementById('ignitionButton');
click.addEventListener('click', target);














