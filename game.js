// JavaScript Document
var canvas = document.getElementById("myCanvas");//document.createElement("canvas");
var ctx = canvas.getContext("2d");


var bulletImage = new Image();
var bulletReady = false;
bulletImage.onload =  function () {
	bulletReady = true;
};

var shipImage = new Image();
var shipReady = false;
shipImage.onload = function () {
	shipReady = true;
};

var backgroundImage = new Image();
var backReady = false;
backgroundImage.onload = function () {
    backReady = true;
};

shipImage.src = "img/ship.png";
bulletImage.src = "img/bullet.jpg";
backgroundImage.src = "img/back.png";

var ship = {
	speed: 512, // movement in pixels per second
	x: 0,
	y: 0
};

var bullets = [];

function bulletFactory(x,y) {
var bullet = { 
  x: 0,
  y: 0,
  speed: 512,
};

  bullet.x = x;
  bullet.y = y;

  return bullet;  
}

var keysDown = {};
var keysPress = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

addEventListener("keypress", function(e) {
  keysPress[e.keyCode] = true;
}, false);


var update = function (modifier) {
   if (38 in keysDown) { // Player holding up
    if((ship.y - (ship.speed * modifier)) >= 0)
      ship.y -= ship.speed * modifier;
    else
      ship.y = 0;
  }

	if (40 in keysDown) { // Player holding down
		if((ship.y + (ship.speed * modifier)) <= (canvas.height - shipImage.height))
      ship.y += ship.speed * modifier;
    else
      ship.y = canvas.height - shipImage.height;
	}

	if (37 in keysDown) { // Player holding left
	 if((ship.x - (ship.speed * modifier)) >= 0)  
  	ship.x -= ship.speed * modifier;
   else
    ship.x = 0; 
	}
  
	if (39 in keysDown) { // Player holding right
    if((ship.x + (ship.speed * modifier)) <= (canvas.width - shipImage.width))
	   	ship.x += ship.speed * modifier;
    else
      ship.x = canvas.width - shipImage.width;
  }
  
  if(32 in keysPress) {
    bullets.push(bulletFactory(ship.x+(shipImage.width/2)-bulletImage.width/2, ship.y));
    delete keysPress[32];
  }
  
  for( bullet in bullets){
    bullets[bullet].y -= bullets[bullet].speed * modifier;
    if(bullets[bullet].y < 0)
      delete bullets[bullet];
  }
};

var render = function () {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(186, 51, 35, 0.6)";
  
  if(backReady) {
      ctx.drawImage(backgroundImage, 0, 0);
  }

  if (shipReady) {
    ctx.drawImage(shipImage, ship.x, ship.y);
  }

  if(bulletReady) {
     for( bullet in bullets)
     {
      ctx.drawImage(bulletImage, bullets[bullet].x, bullets[bullet].y);
     }
  }
};
                            
                            
ship.x = (canvas.width / 2) - shipImage.width;
ship.y = (canvas.height / 2) - shipImage.height;

var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;
};

var then = Date.now();
setInterval(main, 1);