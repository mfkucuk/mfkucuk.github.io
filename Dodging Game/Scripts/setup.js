const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
var player = new Player();
var block = new Block();
var ui = new UI();
var up = false;
var down = false;
var left = false;
var right = false;

function Restart() {
	location.reload();
}

function Setup() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	block.draw();
	block.update();
	player.draw();
	player.move();
	ui.draw();
	ui.damage();
	ui.end();
	ui.scoreCount();
	requestAnimationFrame(Setup);
}

requestAnimationFrame(Setup);

function keyDownHandler(event) {
	if (event.keyCode == 38) {up = true;}
	if (event.keyCode == 40) {down = true;}
	if (event.keyCode == 39) {right = true;}
	if (event.keyCode == 37) {left = true;}
}

function keyUpHandler(event) {
	if (event.keyCode == 38) {up = false;}
	if (event.keyCode == 40) {down = false;}
	if (event.keyCode == 39) {right = false;}
	if (event.keyCode == 37) {left = false;}
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);