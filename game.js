// JavaScript Document

var main = function () {
	var now = Date.now();
	var delta = now - then;

	keyBoard(delta / 1000);
	render();

	then = now;
};

var then = Date.now();
setInterval(main, 1);