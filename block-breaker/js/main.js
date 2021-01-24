// Fetch the canvas
const canvas = document.getElementById('myCanvas');
const ctx =  canvas.getContext('2d');

// Define input keys and events
let leftPressed = false;
let rightPressed = false;

function keyDownHandler(event) {
    if ( event.keyCode == 37 ) { leftPressed = true; }
    if ( event.keyCode == 39 ) { rightPressed = true; }
}

function keyUpHandler(event) {
    if ( event.keyCode == 37 ) { leftPressed = false; }
    if ( event.keyCode == 39 ) { rightPressed = false; }
}

// Create objects
let ball = new Ball();
let slider = new Slider();

// Request animation frame
function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.draw();
    ball.move();
    ball.collide();

    slider.draw();
    slider.move();
    slider.collide();
    requestAnimationFrame(main);
}

requestAnimationFrame(main);

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);