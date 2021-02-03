// Getting canvas
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

// Variables
let click = 0;
let lastSpeed = 0;
let canStart = false;

// Other functions
function start() { 
	secondBox.set(document.getElementById("mass").value);
	canStart = true;
}

function reset() { 
	location.reload(); 
}

// Box whose clicks will be counted
const firstBox = {
	x: 100,
	y: canvas.height / 2,
	mass: 1,
	velocity: 0,

	draw: function() {
		ctx.beginPath();
		ctx.fillStyle = 'red';
		ctx.fillRect(this.x, this.y, 20, 20);
	},

	move: function() {
		this.x += this.velocity;
	},

	collide: function() {
		if ( this.x < 0 ) {
			this.velocity = -this.velocity;
			click++;
		}

		if ( this.x + 20 > secondBox.x ) {
			console.log(secondBox.mass);
			console.log(secondBox.velocity);
			lastSpeed = (this.mass * this.velocity + secondBox.mass * secondBox.velocity) / (this.mass + parseInt(secondBox.mass));
			this.velocity = 2 * lastSpeed - this.velocity;
			secondBox.velocity = 2 * lastSpeed - secondBox.velocity;
			click++;
		}
	}
};

// Box which will crash with the first one
const secondBox = {
	x: canvas.width - 20,
	y: canvas.height / 2,
	mass: undefined,
	velocity: -1,

	draw: function() {
		ctx.beginPath();
		ctx.fillStyle = "blue";
		ctx.fillRect(this.x, this.y, 20, 20);
	},

	move: function() {
		this.x += this.velocity;
	},

	set: function(value) {
		this.mass = value;
	}
}

// Request frame from the browser
function main() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "black";
	ctx.font = "20px Arial";
	ctx.fillText("Clicks: " + click, 20, 20);

	firstBox.draw();
	secondBox.draw();

	if ( canStart ) {
		firstBox.move();
		secondBox.move();
		firstBox.collide();
	}

	requestAnimationFrame(main);
}

requestAnimationFrame(main);