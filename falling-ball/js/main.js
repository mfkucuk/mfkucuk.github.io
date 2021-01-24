// Fetch the canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Variables
let gravity = 0.98;
let ballHeight = 100;
let ballPosition = document.getElementById('ballPosition');
let xInput = document.getElementById('xInput');
let gravityInput = document.getElementById('gravityInput');

// Other functions
function set() {
    ball.xSpeed = parseFloat(xInput.value);
    gravity = parseFloat(gravityInput.value);
}

// Ball object
const ball = {
    x: canvas.width / 2,
    y: ballHeight,
    radius: 10,
    xSpeed: 5,
    ySpeed: 0,

    draw: function() {
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    },

    drop: function() {
        this.y += this.ySpeed;
        this.ySpeed += gravity;

        ballPosition.innerHTML = '(' + Math.floor(this.x) + ', ' + Math.floor(this.y) + ')';
    },

    move: function() {
        this.x += this.xSpeed;

        if (this.x + this.radius > canvas.width) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.x - this.radius < 0) {
            this.xSpeed = -this.xSpeed;
        }
    },

    bounce: function() {
        if (this.y + this.radius >= canvas.height) {
            this.ySpeed = -this.ySpeed;
            this.ySpeed += gravity;
        }
    }
};

// Request animation frame
function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.draw();
    ball.drop();
    ball.move();
    ball.bounce();

    requestAnimationFrame(main);
}

requestAnimationFrame(main);