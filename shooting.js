// JavaScript Document
var bullets = [];

function bulletFactory(x,y) {
var bullet = { 
  x: 0,
  y: 0,
  speed: 512,
};

  bullet.x = x;
  bullet.y = y;

  return bullet;  
}
