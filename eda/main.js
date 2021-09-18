// HTML References
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

var image1 = new Image();
image1.src = "assets/image1.jpg";
var image2 = new Image();
image2.src = "assets/image2.jpg";
var image3 = new Image();
image3.src = "assets/image3.jpg";
var image4 = new Image();
image4.src = "assets/image4.jpg";
var image5 = new Image();
image5.src = "assets/image5.jpg";
var image6 = new Image();
image6.src = "assets/image6.jpg";
var image7 = new Image();
image7.src = "assets/image7.jpg";
var heartImg = new Image();
heartImg.src = "assets/heart.png";
var actualHeartImg = new Image();
actualHeartImg.src = "assets/actual_heart.png";
var yoshiImg = new Image();
yoshiImg.src = "assets/yoshi.png";

var backgroundImg = new Image();
backgroundImg.src = "assets/background.jpg";
backgroundImg.width = 1200;
backgroundImg.height = 600;




const IMAGE_WIDTH_HORIZONTAL = 576;
const IMAGE_HEIGHT_HORIZONTAL = 324;
const IMAGE_WIDTH_VERTICAL = 360;
const IMAGE_HEIGHT_VERTICAL = 456;

// Variables
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;
var lastPressed = "right";
var frame = 0;

var player = new Player();

// Main loop
function update() {
    requestAnimationFrame(update);
    ctx.clearRect(-1000, 0, 50000, CANVAS_HEIGHT);

    for (var i = 0; i < 50000; i += 1200) {
        ctx.drawImage(backgroundImg, i, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    // Texts
    ctx.fillStyle = "black";
    ctx.font = "36px Hahmlet"
    ctx.fillText("Welcome to your birthday game!", 350, 200);
    ctx.fillText("We've been together for 2 and a half year now", 3650, 200);
    ctx.fillText("(it's actually 3 heheheheh).", 3750, 250);
    ctx.fillText("And my love for you is growing ever since.", 6950, 200);
    ctx.fillText("I just can't describe how much I love you", 6950, 250);
    ctx.fillText("because there are no such words that", 6950, 300);
    ctx.fillText("convey my feelings.", 6950, 350);
    ctx.fillText("I'm so glad you sticked with me for this long", 10250, 200);
    ctx.fillText("and gave my life such meaning and joy.", 10250, 250);
    ctx.fillText("(my favourite btw)", 11600, 100);
    ctx.fillText("You are trully the best girlfriend in the entire world", 13550, 200);
    ctx.fillText("and nothing and no one can change my mind.", 13550, 250);
    ctx.fillText("All I can ask from life is for you to be with me forever,", 16850, 200);
    ctx.fillText("so I can be happy forever.", 16850, 250);
    ctx.fillText("So please be with me forever and never leave me.", 20150, 200);
    ctx.fillText("Because I'll always be in love with your dumbass.", 20150, 250);
    ctx.fillText("Happy birthday my love! <3", 23450, 150);
    ctx.fillText("Here's an actual heart 'cause you're my fav doctor.", 25100, 200);
    ctx.fillText("Congragulations, you finished the game! <3", 26750, 200);
    ctx.fillText("Here's a fat yoshi", 26750, 250);

    // Images
    ctx.drawImage(image1, 2000, 25, IMAGE_WIDTH_HORIZONTAL, IMAGE_HEIGHT_HORIZONTAL);
    ctx.drawImage(image2, 5300, 25, IMAGE_WIDTH_HORIZONTAL, IMAGE_HEIGHT_HORIZONTAL);
    ctx.drawImage(image3, 8600, 25, IMAGE_WIDTH_HORIZONTAL, IMAGE_HEIGHT_HORIZONTAL);
    ctx.drawImage(image4, 11900, 25, IMAGE_WIDTH_VERTICAL, IMAGE_HEIGHT_VERTICAL);
    ctx.drawImage(image5, 15200, 25, IMAGE_WIDTH_HORIZONTAL, IMAGE_HEIGHT_HORIZONTAL);
    ctx.drawImage(image6, 18500, 25, IMAGE_WIDTH_VERTICAL, IMAGE_HEIGHT_VERTICAL);
    ctx.drawImage(image7, 21800, 25, IMAGE_WIDTH_HORIZONTAL, IMAGE_HEIGHT_HORIZONTAL);
    ctx.drawImage(heartImg, 23600, 200, 100, 100);
    ctx.drawImage(actualHeartImg, 25400, 250, 225, 200);
    ctx.drawImage(yoshiImg, 26900, 300, 250, 250);



    // left side wall
    ctx.fillStyle = "white";
    ctx.fillRect(-1000, 0, 1000, CANVAS_HEIGHT);

    // right side wall
    ctx.fillRect(27570, 0, 29560, CANVAS_HEIGHT);


    player.draw();  
    player.move();  
    player.jump();
}


requestAnimationFrame(update);

addEventListener("keydown", function(event) {
    if (event.keyCode == 39 ) { rightPressed = true }
    if (event.keyCode == 37 ) { leftPressed = true }
    if (event.keyCode == 32 ) { spacePressed = true }
});

addEventListener("keyup", function(event) {
    if (event.keyCode == 39 ) { rightPressed = false }
    if (event.keyCode == 37 ) { leftPressed = false }
    if (event.keyCode == 32 ) { spacePressed = false }
});

// Classes
function Player() {
    this.rightFrame = 0;
    this.leftFrame = 7;
    this.playerWidth = 32;
    this.playerHeight = 37;
    this.x = CANVAS_WIDTH / 2;
    this.y = CANVAS_HEIGHT - this.playerHeight;
    this.dx = 5;
    this.dy = 0;
    this.gravity = 1;
    this.mario = new Image();
    this.mario.src = "assets/mario_walking.png";
    this.marioLeft = new Image();
    this.marioLeft.src = "assets/mario_walking_left.png";
    

    this.draw = function() {
        if (rightPressed) {
            ctx.drawImage(this.mario, this.playerWidth * this.rightFrame, 0, this.playerWidth, this.playerHeight, this.x, this.y, this.playerWidth, this.playerHeight);
        }
        else if (leftPressed) {
            ctx.drawImage(this.marioLeft, this.playerWidth * this.leftFrame, 0, this.playerWidth, this.playerHeight, this.x, this.y, this.playerWidth, this.playerHeight);
        }
        else {
            if (lastPressed == "right") {
                ctx.drawImage(this.mario, 0, 0, this.playerWidth, this.playerHeight, this.x, this.y, this.playerWidth, this.playerHeight);
            }
            else if (lastPressed == "left") {
                ctx.drawImage(this.marioLeft, this.playerWidth * 7, 0, this.playerWidth, this.playerHeight, this.x, this.y, this.playerWidth, this.playerHeight);
            }
        }
    }

    this.jump = function() {
        if (spacePressed && this.y == CANVAS_HEIGHT - this.playerHeight) {
            this.dy = 15;
            this.dy -= this.gravity;
            this.y -= this.dy;  
            spacePressed = ! spacePressed;
        }
        if (this.y < CANVAS_HEIGHT - this.playerHeight) {
            this.dy -= this.gravity;
            this.y -= this.dy;
        }
        
    }

    this.move = function() {
        if (rightPressed) {
            if (this.x < 27560) {
                ctx.translate(-this.dx, 0);
                this.x += this.dx;   
            }                                       
            if (this.rightFrame > 7) {
                this.rightFrame = 0;
            }
            this.rightFrame++;
            lastPressed = "right";
        }
        else if (leftPressed) {
            if (this.x > 0) {
                ctx.translate(this.dx, 0);
                this.x -= this.dx;
            }
            if (this.leftFrame < 0) {
                this.leftFrame = 7;
            }
            this.leftFrame--;
            lastPressed = "left"
        }
    }
}