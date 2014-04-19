// JavaScript Document

function enemyFactory () {
	var enemy = {
		alive : true,
		x : 0,
		y : 0,
		speed : 256,
	};
	
	var repeat = true;
	enemy.y = 0;
	if(enemys.length > 0)
	{	
	while(repeat)
	{		
		enemy.x = Math.floor((Math.random()*canvas.width)+1-enemyImage.width);
		
		
		for(enem in enemys)
		{
			if(!colide(enemy.x, enemy.y, enemyImage.width, enemyImage.height, enemys[enem].x, enemys[enem].y, enemyImage.width, enemyImage.height))
			{
					console.log("mam");			
				repeat = false;
				break;
			}
		}
	}
	}
	else
		enemy.x = Math.floor((Math.random()*canvas.width)+1-enemyImage.width);
		
	return enemy;
};

