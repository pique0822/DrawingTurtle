var move = 20;
var yOffset = 18;
document.getElementById("up").addEventListener('click', function(event){
  document.getElementById("up").innerHTML = "hello";
  var turtle = document.getElementById("canvas");
  var canvasX = canvas.getBoundingClientRect().left;
  var canvasY = canvas.getBoundingClientRect().top;

  var turtle = document.getElementById("turtle");
  var turtlePos = turtle.getBoundingClientRect();
  var top =  turtlePos.top;
  turtle.style.top = (top - move - canvasY-yOffset) + "px";
});

document.getElementById("down").addEventListener('click', function(event){
  var turtle = document.getElementById("canvas");
  var canvasX = canvas.getBoundingClientRect().left;
  var canvasY = canvas.getBoundingClientRect().top;

  var turtle = document.getElementById("turtle");
  var turtlePos = turtle.getBoundingClientRect();
  var top =  turtlePos.top;
  turtle.style.top = (top + move - canvasY-yOffset) + "px";
});

document.getElementById("left").addEventListener('click', function(event){
  var turtle = document.getElementById("canvas");
  var canvasX = canvas.getBoundingClientRect().left;
  var canvasY = canvas.getBoundingClientRect().top;

  var turtle = document.getElementById("turtle");
  var turtlePos = turtle.getBoundingClientRect();
  var left =  turtlePos.left;
  turtle.style.left = (left - move - canvasX) + "px";
});

document.getElementById("right").addEventListener('click', function(event){
  var turtle = document.getElementById("canvas");
  var canvasX = canvas.getBoundingClientRect().left;
  var canvasY = canvas.getBoundingClientRect().top;

  var turtle = document.getElementById("turtle");
  var turtlePos = turtle.getBoundingClientRect();
  var left =  turtlePos.left;
  turtle.style.left = (left + move - canvasX) + "px";
});
