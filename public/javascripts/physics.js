
console.log('PHYSICS JS.... ')

//test target table td is initially red
document.getElementById("26y17x").style.backgroundColor = "red";


// var velocityX = document.getElementById("velocityGameX").value; debugger
// var velocityY = document.getElementById("velocityGameY").value;

//test target table td can enter a line green "TEMPORARILY"
var target = function(){




  var scale = 1000;
  var arrTime = [];
  var makeTimeArr = function(){
      for (var i = 0; i < 1000; i++){
          arrTime.push(i);
      }
  }
  makeTimeArr();

  var angle = 45;
  var velocity = 2;
  var g = 32;
  var coordinates = [];
  var makeCoordinates = function(){  
    for (var t = 0; t < arrTime.length; t++){
      var x = Math.round((velocity / 1 )* t * Math.cos(angle));
      var y = Math.round((velocity / 1) * t * Math.sin(angle) - ((1 / (g / (1 * 1))) * t * t));

      if(x > 0 && y > 0 && x < 1000 && y < 1000){
        coordinates.push(y + "y" + x + "x");
      } 
    }
    return coordinates;
  }
  makeCoordinates();

  var plotLine = function(){
    for (var j = 0; j < coordinates.length; j++){
      document.getElementById(coordinates[j]).style.backgroundColor = "green";
    }  
  }
  plotLine();
}
var click = document.getElementById('ignitionButton');
click.addEventListener('click', target);














