// JavaScript Document

var main = function () {
try
{
	var now = Date.now();
	var delta = now - then;

	//if ( Enemy.enemyCounter < 5)
		new Enemy();

	//console.log(Enemy.enemyCounter);
	render();
	playerInstance.render();
	Bullet.render();
	Enemy.render();
	Explosion.update(delta/1000);
	playerInstance.update(delta/1000);
	Bullet.update(delta/1000);
	Enemy.update(delta/1000);
	Bullet.update(delta/1000);

	ctx.font= "30px Arial";
	ctx.fillStyle = "lime";
	var text = "lives: "+playerInstance.lives+"  score:"+Player.score;
	ctx.fillText(text,0,canvas.height);
	then = now;

}catch(err)
{
	ctx.textAlign = 'center';
	ctx.font="100px Verdanta";
	ctx.fillStyle = "lime";
	ctx.fillText("GAME OVER",canvas.width/2,canvas.height/2);
	ctx.textAlign = 'left';
	ctx.fillText("score: "+Player.score,0,canvas.height);
	clearInterval(id);
}
};

playerInstance = new Player();
//enemyInstance = new Enemy();

var then = Date.now();
var id = setInterval(main, 1);
