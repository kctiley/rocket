
console.log('PHYSICS JS.... ')

//test target table td is initially red
document.getElementById("26y17x").style.backgroundColor = "red";


// var velocityX = document.getElementById("velocityGameX").value; debugger
// var velocityY = document.getElementById("velocityGameY").value;

//test target table td can enter a line green "TEMPORARILY"
var target = function(){

  var arrNumsX= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  var coordinates = [];
  var makeCoordinates = function(arrX){  
    for (var i = 0; i < arrX.length; i++){
      var x = arrX[i];
      var y = 0;
      var yFormula = function(){
        y = 2 * x +1;    
      }
      yFormula();
      if(x > 0 && y > 0 && x < 25 && y < 30){
        coordinates.push(y + "y" + x + "x");
      } 
    }
  }
  makeCoordinates(arrNumsX);
  console.log(coordinates);

  var plotLine = function(){
    for (var j = 0; j < coordinates.length; j++){
      document.getElementById(coordinates[j]).style.backgroundColor = "green";
    }  
  }
  plotLine();
}
var click = document.getElementById('ignitionButton');
click.addEventListener('click', target);














