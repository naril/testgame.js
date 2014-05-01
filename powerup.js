function powerUp(x,y) {
	this.x = x;
	this.y = y;
//	this.timeOfLive = 0;
//	this.activated = 0;
	this.bonus = Math.floor(Math.random()*3);
	this.timeOfLive = Math.floor(Math.random()*5000)+2000;
	this.created = Date.now();
	this.pos = 0;
	this.tickCount = 0;
	this.tickPerFrame = 20;
	this.enemy 
	powerUp.powerUpList.push(this);

	this.destroy = function(player) {	
		powerUp.powerUpList.splice(powerUp.powerUpList.indexOf(this), 1);
	};
}

powerUp.update = function(player) {
	for(one in powerUp.powerUpList)
	{
		var now = Date.now();
		if((now - powerUp.powerUpList[one].created) > powerUp.powerUpList[one].timeOfLive)
		{
			powerUp.powerUpList[one].destroy(player);
			continue;
		}
		
		var res = colide(powerUp.powerUpList[one].x,powerUp.powerUpList[one].y,powerUp.imageList[powerUp.powerUpList[one].bonus].width, powerUp.imageList[powerUp.powerUpList[one].bonus].height, player.x, player.y, Player.image.width, Player.image.height);
		if(res)
		{
			player.amo += powerUp.bonuses[powerUp.powerUpList[one].bonus].amo;
			player.speed += powerUp.bonuses[powerUp.powerUpList[one].bonus].speed;
			player.lives += powerUp.bonuses[powerUp.powerUpList[one].bonus].live;
			powerUp.powerUpList[one].destroy(player);
		}
	}
};

powerUp.render = function() {
	for(one in powerUp.powerUpList) {
		powerUp.powerUpList[one].tickCount++;
		if(powerUp.powerUpList[one].tickCount >powerUp.powerUpList[one].tickPerFrame)
		{
			ctx.drawImage(powerUp.imageList[powerUp.powerUpList[one].bonus],(powerUp.powerUpList[one].pos*powerUp.imageList[powerUp.powerUpList[one].bonus].width)/8,0,powerUp.imageList[powerUp.powerUpList[one].bonus].width/8,powerUp.imageList[powerUp.powerUpList[one].bonus].height, powerUp.powerUpList[one].x,powerUp.powerUpList[one].y, powerUp.imageList[powerUp.powerUpList[one].bonus].width/8,powerUp.imageList[powerUp.powerUpList[one].bonus].height);
			powerUp.powerUpList[one].tickCount = 0;
			powerUp.powerUpList[one].pos++;
			if(powerUp.powerUpList[one].pos === 5)
				powerUp.powerUpList[one].pos = 0;
		}
		else
			ctx.drawImage(powerUp.imageList[powerUp.powerUpList[one].bonus],(powerUp.powerUpList[one].pos*powerUp.imageList[powerUp.powerUpList[one].bonus].width)/8,0,powerUp.imageList[powerUp.powerUpList[one].bonus].width/8,powerUp.imageList[powerUp.powerUpList[one].bonus].height, powerUp.powerUpList[one].x,powerUp.powerUpList[one].y, powerUp.imageList[powerUp.powerUpList[one].bonus].width/8,powerUp.imageList[powerUp.powerUpList[one].bonus].height);
	//	ctx.drawImage(powerUp.imageList[powerUp.powerUpList[one].bonus], powerUp.powerUpList[one].x, powerUp.powerUpList[one].y);
	}
};

powerUp.imageAmo = new Image();
powerUp.imageSpeed = new Image();
powerUp.imageLive = new Image();

powerUp.imageAmo.src = "img/ammo_sprite.png";
powerUp.imageSpeed.src = "img/speed_sprite.png";
powerUp.imageLive.src = "img/live_sprite.png";

powerUp.amoReady = false;
powerUp.speedReady = false;
powerUp.liveReady = false;
/*
imageAmo.onload = function(){amoReady = true;};
imageSpeed.onload = function(){speedReady = true;};
imageLive.onload = function(){liveReady = true;};
*/
powerUp.imageList = {0:powerUp.imageAmo, 1:powerUp.imageSpeed, 2:powerUp.imageLive};
powerUp.powerUpList = [];
powerUp.bonuses = [{amo:1,speed:0,live:0},{amo:0,speed:50,live:0},{amo:0,speed:0,live:1}];