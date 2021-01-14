function Player() {
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	this.size = 10;
	this.speed = 4;

	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = "#F00";
		ctx.fillRect(this.x, this.y, this.size, this.size);
		ctx.closePath();
	}

	this.move = function() {
		if (up == true && this.y > 0) {this.y -= this.speed;}
		if (down == true && this.y + this.size < canvas.height) {this.y += this.speed;}
		if (left == true && this.x > 0) {this.x -= this.speed;}
		if (right == true && this.x + this.size < canvas.width) {this.x += this.speed;}
	}
}