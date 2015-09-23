
console.log('PHYSICS JS.... ')

//test target table td is initially red
document.getElementById("26y17x").style.backgroundColor = "red";

//test target table td can be turned green "TEMPORARILY"
// var target = function(){
//   console.log("Target function referenced..");
//   var velocityX = document.getElementById("velocityGameX").value; debugger
//   var velocityY = document.getElementById("velocityGameY").value;
//   console.log("velocityX:     " + velocityX);
//   console.log("velocityY:   " + velocityY);
//   var coordinates = velocityY + "y" + velocityX + "x";
//   var plotLine = function(){
//     return "12y12x"
//   }
//   document.getElementById(plotLine()).style.backgroundColor = "green";
// }

// var click = document.getElementById('ignitionButton');
// click.addEventListener('click', target);

//test target table td can enter a line green "TEMPORARILY"
var target = function(){

  var arrNumsX= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  var coordinates = [];
  var makeCoordinates = function(){
  
    for (var i = 0; i < arrNumsX.length; i++){
        if((arrNumsX[i] > 0) && ((arrNumsX[i] * 2) + 1) > 0 && (arrNumsX[i] < 25) && ((arrNumsX[i] * 2) + 1) < 25)
            coordinates.push(arrNumsX[i] + "y" + (arrNumsX[i] * 2 + 1) + "x"); 
    }
  }
  makeCoordinates();
  console.log(coordinates);

  // var velocityX = document.getElementById("velocityGameX").value; debugger
  // var velocityY = document.getElementById("velocityGameY").value;

  var plotLine = function(){
    for (var j = 0; j < coordinates.length; j++){
      document.getElementById(coordinates[j]).style.backgroundColor = "green";debugger
    }  
  }
  plotLine();debugger
}
var click = document.getElementById('ignitionButton');
click.addEventListener('click', target);














