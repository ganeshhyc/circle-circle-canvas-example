canvas.addEventListener('mousemove', function(e) {
mouse.x = e.pageX - this.offsetLeft;
mouse.y = e.pageY - this.offsetTop;
}, false);
let color=getRndColor();

canvas.addEventListener('mousedown', function(e) {
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
curX=mouse.x;curY=mouse.y;
canvas.addEventListener('mousemove', onPaint, false);
}, false);

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Math.abs(curX-mouse.x)>0 ?
      circleArray.push({x:curX,y:curY,rad:curX-mouse.x,col:getRndColor()}) : '';
    canvas.addEventListener("click", ()=>{
        circleArray.some((obj)=>{check=false;
            if(isInside(obj.x, obj.y, obj.rad, mouse.x, mouse.y))
              {
                check=true;
                return true;
              }
        });
        if(check)
          document.getElementById("info").innerHTML="HIT";
        else
          document.getElementById("info").innerHTML="MISS";
    }, false);
    canvas.addEventListener("dblclick", ()=>{
      circleArray.some((obj)=>{check=false;
          if(isInside(obj.x, obj.y, obj.rad, mouse.x, mouse.y))
            {
              check=true;obj.rad=0;
              return true;
            }
      });
      if(check)
        document.getElementById("info").innerHTML="HIT";
      else
        document.getElementById("info").innerHTML="MISS";
    }, false);
}, false);

setInterval(()=>{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circleArray.forEach((obj)=>{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, Math.abs(obj.rad), 0, 2 * Math.PI);
    ctx.strokeStyle =  ctx.fillStyle = obj.col;
    ctx.fill();
    ctx.stroke();
  });

},25);
