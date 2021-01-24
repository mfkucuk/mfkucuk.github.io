function Slider() {
    this.x = canvas.width / 2 - 50;
    this.y = canvas.height - 10;
    this.xSpeed = 10;
    this.width = 100;
    this.height = 10;

    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = 'lightblue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.move = function() {
        if (leftPressed && this.x > 0) {
            this.x -= this.xSpeed;
        }
        else if (rightPressed && this.x + this.width < canvas.width) {
            this.x += this.xSpeed;
        }
    }

    this.collide = function() {
        if (ball.y + ball.radius > this.y && ball.y - ball.radius < this.y + this.height && ball.x + ball.radius > this.x && ball.x - ball.radius < this.x + this.width) {
            ball.ySpeed = -ball.ySpeed;
        }
    }
}