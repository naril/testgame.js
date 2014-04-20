// JavaScript Document
var render = function () {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(186, 51, 35, 0.6)";
  
  if(backReady)
      ctx.drawImage(backgroundImage, 0, 0);
};
