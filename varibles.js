var circleArray = [];let newA=0;let check=false;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
let curX,curY;
var painting = document.getElementById('paint');
var paint_style = getComputedStyle(painting);
var mouse = {x: 0, y: 0};
