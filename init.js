// JavaScript Document
var canvas = document.getElementById("myCanvas");//document.createElement("canvas");
var ctx = canvas.getContext("2d");

var bulletImage = new Image();
var bulletReady = false;
bulletImage.onload =  function () {
	bulletReady = true;
};

var shipImage = new Image();
var shipReady = false;
shipImage.onload = function () {
	shipReady = true;
};

var backgroundImage = new Image();
var backReady = false;
backgroundImage.onload = function () {
    backReady = true;
};

shipImage.src = "img/ship.png";
bulletImage.src = "img/bullet.png";
backgroundImage.src = "img/back.png";

ship.x = (canvas.width / 2) - shipImage.width;
ship.y = (canvas.height / 2) - shipImage.height;