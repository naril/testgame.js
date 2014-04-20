// JavaScript Document

var main = function () {
	var now = Date.now();
	var delta = now - then;

	//if ( Enemy.enemyCounter < 5)
		new Enemy();

	//console.log(Enemy.enemyCounter);
	render();
	playerInstance.render();
	Bullet.render();
	Enemy.render();
	playerInstance.update(delta/1000);
	Bullet.update(delta/1000);
	Enemy.update(delta/1000);
//	Bullet.update(delta/1000);


	then = now;
};

playerInstance = new Player();
//enemyInstance = new Enemy();

var then = Date.now();
setInterval(main, 1);
