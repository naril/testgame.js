// JavaScript Document
function Bullet(x,y,speed,enemy) {
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.enemy = enemy;

	this.destroy = function () {
		Bullet.bulletList.splice(Bullet.bulletList.indexOf(this),1);
	};
};

Bullet.bulletList = [];
Bullet.image = new Image();
Bullet.ready = false;
Bullet.image.onload = function () {
	Bullet.ready = true;
};
Bullet.image.src = "img/bullet.png";

Bullet.image2 = new Image();
Bullet.image2.src = "img/bullet2.png";

Bullet.counter = 0;

Bullet.render = function () {
		if(Bullet.ready) {
    		for( bullet in Bullet.bulletList){
    			if(!Bullet.bulletList[bullet].enemy)
      				ctx.drawImage(Bullet.image, Bullet.bulletList[bullet].x, Bullet.bulletList[bullet].y);
        		else
        			ctx.drawImage(Bullet.image2, Bullet.bulletList[bullet].x, Bullet.bulletList[bullet].y);
        	}
        }
};

Bullet.update = function (modifier) {
		if(Bullet.bulletList.length > 0) {
			for(bullet in Bullet.bulletList){
	    		Bullet.bulletList[bullet].y -= Bullet.bulletList[bullet].speed * modifier;
	    		if(Bullet.bulletList[bullet].y < 0 || Bullet.bulletList[bullet].y > Bullet.height)
	    		{
	      			Bullet.bulletList[bullet].destroy();
					Bullet.counter--;
				}
			}
		}
};
	