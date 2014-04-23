// JavaScript Document
function Explosion(x,y) {
	this.x = x;
	this.y = y;
	this.pos = 1;
	this.ticksPerFrame = 8;
	this.tickCount = 0;

	Explosion.explosionList.push(this);

	this.destroy = function () {
		Explosion.explosionList.splice(Explosion.explosionList.indexOf(this),1);
	}

	this.render = function() {
		this.tickCount++;

		if(this.tickCount > this.ticksPerFrame) {
			ctx.drawImage(Explosion.image, (this.pos*Explosion.image.width)/Explosion.sprites, 0, Explosion.image.width/Explosion.sprites, Explosion.image.height, this.x, this.y, Explosion.image.width/Explosion.sprites, Explosion.image.height);
			this.pos++;
			this.tickCount = 0;
		}
		else
			ctx.drawImage(Explosion.image, (this.pos*Explosion.image.width)/Explosion.sprites, 0, Explosion.image.width/Explosion.sprites, Explosion.image.height, this.x, this.y, Explosion.image.width/Explosion.sprites, Explosion.image.height);

	}
}


Explosion.image = new Image();
Explosion.ready = false;
Explosion.image.src = "img/explosion_sprite2.png";
Explosion.image.onload = function () {
  Explosion.ready = true;
}
Explosion.explosionList = [];

Explosion.sprites = 8;

Explosion.update = function() {
	for(explosion in Explosion.explosionList) {
		Explosion.explosionList[explosion].render();
		if(Explosion.explosionList[explosion].pos === Explosion.sprites - 1)
			Explosion.explosionList[explosion].destroy();	
	}
}