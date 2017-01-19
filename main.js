var move = 20;
var yOffset = 18;

var upElem = document.getElementById("up");
var downElem = document.getElementById("down");
var leftElem = document.getElementById("left");
var rightElem = document.getElementById("right");

if(upElem){
upElem.addEventListener('click', function(event){
  upElem.innerHTML = "hello";
  var turtle = document.getElementById("canvas");
  var canvasX = canvas.getBoundingClientRect().left;
  var canvasY = canvas.getBoundingClientRect().top;

  var turtle = document.getElementById("turtle");
  var turtlePos = turtle.getBoundingClientRect();
  var top =  turtlePos.top;
  turtle.style.top = (top - move - canvasY-yOffset) + "px";
});}

if(downElem){
downElem.addEventListener('click', function(event){
  var turtle = document.getElementById("canvas");
  var canvasX = canvas.getBoundingClientRect().left;
  var canvasY = canvas.getBoundingClientRect().top;

  var turtle = document.getElementById("turtle");
  var turtlePos = turtle.getBoundingClientRect();
  var top =  turtlePos.top;
  turtle.style.top = (top + move - canvasY-yOffset) + "px";
});}

if(leftElem){
leftElem.addEventListener('click', function(event){
  var turtle = document.getElementById("canvas");
  var canvasX = canvas.getBoundingClientRect().left;
  var canvasY = canvas.getBoundingClientRect().top;

  var turtle = document.getElementById("turtle");
  var turtlePos = turtle.getBoundingClientRect();
  var left =  turtlePos.left;
  turtle.style.left = (left - move - canvasX) + "px";
});}

if(rightElem){
rightElem.addEventListener('click', function(event){
  var turtle = document.getElementById("canvas");
  var canvasX = canvas.getBoundingClientRect().left;
  var canvasY = canvas.getBoundingClientRect().top;

  var turtle = document.getElementById("turtle");
  var turtlePos = turtle.getBoundingClientRect();
  var left =  turtlePos.left;
  turtle.style.left = (left + move - canvasX) + "px";
});}
