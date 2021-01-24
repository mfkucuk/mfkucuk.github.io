function Ball() {
    this.x = canvas.width / 2;
    this.y = 350;
    this.xSpeed = 5;
    this.ySpeed = -5;
    this.radius = 10;

    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    
    this.move = function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    this.collide = function() {
        if (this.x + this.radius > canvas.width) {
            this.xSpeed = -this.xSpeed;
        } 
        else if (this.x - this.radius < 0) {
            this.xSpeed = -this.xSpeed;
        }
        else if (this.y - this.radius < 0) {
            this.ySpeed = -this.ySpeed;
        }
    }
}