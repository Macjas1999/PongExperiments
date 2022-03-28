var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//Ball####################
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
//PaddleDown##################
var downPaddleHeight = 10;
var downPaddleWidth = 100;
var downPaddleX = (canvas.width-downPaddleWidth)/2;
var downRightPressed = false;
var downLeftPressed = false;
//PaddleUP##############
var upPaddleHeight = 10;
var upPaddleWidth = 100;
var upPaddleX = (canvas.width-upPaddleWidth)/2;
var upRightPressed = false;
var upLeftPressed = false;

var paddleColor = "#4b7502";
var ballColor = "#13084a";

//score
var adScore = 0;
var lrScore = 0;


//Event
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    switch (e.key) {
        case "Right":
            downRightPressed = true;
            break;
        case "ArrowRight":
            downRightPressed = true;
            break;
        case "Left":
            downLeftPressed = true;
            break;
        case "ArrowLeft":
            downLeftPressed = true;
            break;
        case "d":
            upRightPressed = true;
            break;
        case "a":
            upLeftPressed = true;
            break;
        default:
            break;
    }
}

function keyUpHandler(e) {
    switch (e.key) {
        case ("Right"):
            downRightPressed = false;
            break;
        case ("ArrowRight"):
            downRightPressed = false;
            break;
        case ("Left"):
            downLeftPressed = false;
            break;
        case ("ArrowLeft"):
            downLeftPressed = false;
            break;
        case "d":
            upRightPressed = false;
            break;
        case "a":
            upLeftPressed = false;
            break;
        default:
            break;
    }
    
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}
function drawPaddleDown() {
    ctx.beginPath();
    ctx.rect(downPaddleX, canvas.height-downPaddleHeight - 1, downPaddleWidth, downPaddleHeight);
    ctx.fillStyle = paddleColor;
    ctx.fill();
    ctx.closePath();
}
function drawPaddleUp() {
    ctx.beginPath();
    ctx.rect(upPaddleX, 1, upPaddleWidth, upPaddleHeight);
    ctx.fillStyle = paddleColor;
    ctx.fill();
    ctx.closePath();
}

function drawScore(){
    ctx.font = "32px Arial";
    ctx.fillStle = "#0095DD";
    ctx.fillText(adScore, canvas.width/2, canvas.height/4);
    ctx.fillText(lrScore, canvas.width/2, canvas.height - canvas.height/4)
}

//Mainfunciton###################
function drawMultiplayer() {
    if(paused){return;}
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddleDown();
    drawPaddleUp();
    drawScore();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    if(y + dy < ballRadius+upPaddleHeight) {
        if(x > upPaddleX && x < upPaddleX + upPaddleWidth) {
            dy = -dy;
            
        }
        else {
            lrScore++;
            x = canvas.width/2
            y = canvas.height/2;
        }
    }
    if(y + dy > canvas.height-ballRadius-downPaddleHeight) {
        if(x > downPaddleX && x < downPaddleX + downPaddleWidth) {
            dy = -dy;
        }
        else {
            adScore++;
            x = canvas.width/2
            y = canvas.height/2;
        }
    }
    
    if(upRightPressed && upPaddleX < canvas.width-upPaddleWidth) {
        upPaddleX += 7;
    }
    else if(upLeftPressed && upPaddleX > 0) {
        upPaddleX -= 7;
    }

    if(downRightPressed && downPaddleX < canvas.width-downPaddleWidth) {
        downPaddleX += 7;
    }
    else if(downLeftPressed && downPaddleX > 0) {
        downPaddleX -= 7;
    }
    
    x += dx;
    y += dy;

    requestAnimationFrame(drawMultiplayer);
}
