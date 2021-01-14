function Block() {
	this.x = 0;
	this.y = Math.floor(Math.random() * 300);
	this.width = 5;
	this.height = 50;
	this.speed = 10;

	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = "#FFF";
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.closePath();
	}

	this.update = function() {
		this.x += this.speed;
		if (this.x > canvas.width) {
			this.x = 0;
			this.y = Math.floor(Math.random() * 300);
		}
	}
}