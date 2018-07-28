function clearR(){
  circleArray.forEach((cir)=>{cir.rad=0});
}

function undoR(){
  circleArray.pop();
}

function isInside(circle_x, circle_y,circle_rad, mouse_x, mouse_y){
    if (
          Math.pow(mouse_x-circle_x,2) +
          Math.pow(mouse_y-circle_y,2) <=
          Math.pow(circle_rad,2)
    )
        return true;
    else
        return false;
}

function getRndColor() {
  var r = 255*Math.random()|0,
      g = 255*Math.random()|0,
      b = 255*Math.random()|0;
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

var onPaint = function() {
ctx.beginPath();
ctx.arc(curX, curY, Math.abs(curX-mouse.x), 0, 2 * Math.PI);
ctx.strokeStyle =  ctx.fillStyle = getRndColor();
ctx.fill();
ctx.stroke();
};
