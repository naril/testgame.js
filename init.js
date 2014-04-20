// JavaScript Document
var canvas = document.getElementById("myCanvas");//document.createElement("canvas");
var ctx = canvas.getContext("2d");

var backgroundImage = new Image();
var backReady = false;
backgroundImage.onload = function () {
    backReady = true;
};

backgroundImage.src = "img/back.png";

function colide(x,y,xW,yH, x2, y2, x2w, y2h) {
	if (x < x2 + x2w  && x + xW  > x2 && y < y2 + y2h && y + yH > y2)	
		return true;	
	else	
		return false;
}; 
