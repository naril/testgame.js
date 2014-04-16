// JavaScript Document
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


var keyBoard = function (modifier) {
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
