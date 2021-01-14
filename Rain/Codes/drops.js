function Drops() {

	// Properties
	this.x = Math.random() * canvas.width;
	this.y = (Math.random() - 1) * 400 - 100;
	this.speed = Math.random() * 30 * rainSound.volume + 5;
	this.gravity = 0.2;
	this.len = Math.random() * 10 + 4;

	// Functions
	this.fall = function() {
		this.y += this.speed;
		this.speed += this.gravity;

		if ( this.y > canvas.height ) {
			this.x = Math.floor(Math.random() * canvas.width);
			this.y = Math.floor((Math.random() - 1) * 400 - 100);
			this.speed = Math.random() * 30 * rainSound.volume + 5;
		}
	}

	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = "#AFC3CC";
		ctx.fillRect(this.x, this.y, 4, this.len);
		ctx.closePath();
	}
}