function Enemy () {
//modul for handling enemys, curently generate new on random position and add to list
//on update, move enemys and chceck id coliding with bullet, if so delete bullet end enemy
//render - render all enemys
//destroy - delete curent enemy from list
//modul depends on bullet modul
	this.x = 0;
	this.y = 0;
	this.speed = 350;
	
	//static variables
	do {		
		var repeat = false;
		
		do{
			this.x = Math.floor((Math.random()*canvas.width)+1-Enemy.image.width);
		}while(this.x > canvas.width || this.x < 0);

		for(enemy in Enemy.enemyList) {
			if(colide(this.x, this.y, Enemy.image.width,  Enemy.image.height, Enemy.enemyList[enemy].x, Enemy.enemyList[enemy].y, Enemy.image.width, Enemy.image.height)) {
				repeat = true;
				break;
			}
		}
	} while(repeat);

	if(Enemy.enemyCounter < 2 && Enemy.enemyCounter >= 0) {
		Enemy.enemyList.push(this);
		Enemy.enemyCounter++;
	}

	this.destroy = function () {
		Enemy.enemyCounter--;		
		Enemy.enemyList.splice(Enemy.enemyList.indexOf(this), 1);
	};
};

Enemy.image = new Image();  
Enemy.image.src = "img/enemy.png";
Enemy.ready = false;
Enemy.image.onload = function () {
    		Enemy.ready = true;
};
Enemy.enemyList = [];
Enemy.enemyCounter = 0;

Enemy.render = function () {
		if(Enemy.ready) {
			for(enemy in Enemy.enemyList) {
		  		ctx.drawImage(Enemy.image, Enemy.enemyList[enemy].x, Enemy.enemyList[enemy].y);
		  
			}
		}
	};
	

Enemy.update = function (modifier) {
	if(Enemy.enemyCounter > 0)
	{
		for (enemy in Enemy.enemyList) {	
 			if(Math.floor(Math.random()*500) === 5)
 				Bullet.bulletList.push(new Bullet(Enemy.enemyList[enemy].x+Enemy.image.width/2-Bullet.image.width/2, Enemy.enemyList[enemy].y, -300, 1));
 			if(Enemy.enemyList[enemy].y > canvas.height)
			{
				Enemy.enemyList[enemy].destroy();
				continue;
			}

 			Enemy.enemyList[enemy].y += Enemy.enemyList[enemy].speed * modifier;
			for(bullet in Bullet.bulletList) {
				if(!Bullet.bulletList[bullet].enemy){
					if(colide(Enemy.enemyList[enemy].x, Enemy.enemyList[enemy].y, Enemy.image.width, Enemy.image.height, Bullet.bulletList[bullet].x, Bullet.bulletList[bullet].y, Bullet.image.width, Bullet.image.height)) { 
						new	Explosion(Enemy.enemyList[enemy].x, Enemy.enemyList[enemy].y);
						if(Math.floor(Math.random()*3) === 1)
							new powerUp(Enemy.enemyList[enemy].x, Enemy.enemyList[enemy].y);			
						Enemy.enemyList[enemy].destroy();
						Bullet.bulletList[bullet].destroy();
						Bullet.counter--;
						Player.score++;
						break;	
				}
			}				
			} 
  	
		}
	}
};
