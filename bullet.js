// JavaScript Document
function Bullet(x,y) {
	this.x = x;
	this.y = y;
	this.speed = 512;

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

Bullet.render = function () {
		if(Bullet.ready) {
    		for( bullet in Bullet.bulletList)
      			ctx.drawImage(Bullet.image, Bullet.bulletList[bullet].x, Bullet.bulletList[bullet].y);
        }
};

Bullet.update = function (modifier) {
		if(Bullet.bulletList.length > 0) {
			for(bullet in Bullet.bulletList){
	    		Bullet.bulletList[bullet].y -= Bullet.bulletList[bullet].speed * modifier;
	    		if(Bullet.bulletList[bullet].y < 0)
	      			Bullet.bulletList[bullet].destroy();
			}
		}
};
	