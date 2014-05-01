// JavaScript Document
function Player () {
	this.speed = 350; // movement in pixels per second
	this.x = 0;
	this.y = 0;
	this.lives = 3;
	this.amo = 1;

	this.x = (canvas.width / 2) - Player.image.width;
	this.y = (canvas.height / 2) - Player.image.height;

	addEventListener("keydown", function (e) {
		Player.keysDown[e.keyCode] = true;
	}, false);

	addEventListener("keyup", function (e) {
		delete Player.keysDown[e.keyCode];
	}, false);

	addEventListener("keypress", function(e) {
		Player.keysPress[e.keyCode] = true;
	}, false);

	var destroy = function () {};
};

Player.image = new Image();
Player.ready =  false;
Player.image.onload = function () {
	Player.ready = true;
};
Player.image.src = "img/ship.png";
Player.keysDown = {};
Player.keysPress = {};
Player.score = 0;

Player.prototype.render = function () {
		
		if (Player.ready) 
    		ctx.drawImage(Player.image, this.x, this.y);
	};

Player.prototype.update = function (modifier) {
	if (38 in Player.keysDown) { // Player holding up
   		if((this.y - (this.speed * modifier)) >= 0)
   			this.y -= this.speed * modifier;
   		else
   			this.y = 0;
	}

	if (40 in Player.keysDown) { // Player holding down
		if((this.y + (this.speed * modifier)) <= (canvas.height - Player.image.height))
   			this.y += this.speed * modifier;
   		else
   			this.y = canvas.height - Player.image.height;
	}

	if (37 in Player.keysDown) { // Player holding left
 		if((this.x - (this.speed * modifier)) >= 0)  
			this.x -= this.speed * modifier;
	else
   		this.x = 0; 
	}
  
	if (39 in Player.keysDown) { // Player holding right
	   	if((this.x + (this.speed * modifier)) <= (canvas.width - Player.image.width))
			this.x += this.speed * modifier;
	   	else
	   		this.x = canvas.width - Player.image.width;
  	}
  
	if(32 in Player.keysPress) {
		if(Bullet.counter < playerInstance.amo){
			Bullet.bulletList.push(new Bullet(this.x+(Player.image.width/2)-Bullet.image.width/2, this.y, 256, 0));
			Bullet.counter++;
		}
    	delete Player.keysPress[32];
	}

	for(enemy in Enemy.enemyList)
	{
		if(colide(this.x, this.y, Player.image.width, Player.image.height, Enemy.enemyList[enemy].x, Enemy.enemyList[enemy].y, Enemy.image.width, Enemy.image.height)) {
			this.lives--;
			new	Explosion(Enemy.enemyList[enemy].x, Enemy.enemyList[enemy].y);
			Player.score++;
			Enemy.enemyList[enemy].destroy();
			break;
		}
	}

	for(bullet in Bullet.bulletList)
	{
		if(Bullet.bulletList[bullet].enemy)
		{
			if(colide(this.x, this.y, Player.image.width, Player.image.height, Bullet.bulletList[bullet].x, Bullet.bulletList[bullet].y, Bullet.image2.width, Bullet.image2.height))
			{
				Bullet.bulletList[bullet].destroy();
				new	Explosion(this.x, this.y);
				this.lives--;
			}
		}	
	}

	if(this.lives <= 0)
	{
		throw { name: 'FatalError', message: 'GAME OVER' };
	}
};