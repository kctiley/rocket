
console.log('PHYSICS JS.... ')

//test target table td is initially red
document.getElementById("26y17x").style.backgroundColor = "red"

//test target table td can be turned green "TEMPORARILY"
var target = function(){
  console.log("Target function referenced..");
  var angle = document.getElementById("gameAngle").value;
  var velocity = document.getElementById("gameVelocity").value;
  console.log("angle:     " + angle);
  console.log("velocity:   " + velocity);
  document.getElementById("26y17x").style.backgroundColor = "green";
}

var click = document.getElementById('ignitionButton');
click.addEventListener('click', target);



