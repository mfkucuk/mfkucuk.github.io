function UI() {
	this.hp = 5;
	this.maxHp = 5;
	this.score = 0;

	this.draw = function() {
		ctx.strokeText("Health: " + this.hp + "/" + this.maxHp, 10, 10);
		ctx.strokeText("Score: " + this.score, 10, 20);
	}

	this.damage = function() {
		if (player.x < block.x + block.width && player.x + player.size > block.x && player.y + player.size > block.y && player.y < block.y + block.height) {
			this.hp -= 1;
		}
	}
	this.scoreCount = function() {
		this.score += 1;
	}

	this.end = function() {
		if (this.hp <= 0) {
			alert("Game Over!\nYou scored " + this.score);
			windows.reload();
		}
	}
}