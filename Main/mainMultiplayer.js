//Init canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//Ball
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -4;
//PaddleDown
var downPaddleHeight = 10;
var downPaddleWidth = 100;
var downPaddleX = (canvas.width-downPaddleWidth)/2;
var downRightPressed = false;
var downLeftPressed = false;
var downUpPressed = false;
var downDownPressed = false;
//PaddleUP
var upPaddleHeight = 10;
var upPaddleWidth = 100;
var upPaddleX = (canvas.width-upPaddleWidth)/2;
var upRightPressed = false;
var upLeftPressed = false;
var upUpPressed = false;
var upDownPressed = false;
//Color variable settings
var paddleColor = "#4b7502";
var ballColor = "#13084a";
var scoreAndHalfColor = "#614355";
//Score
var adScore = 0;
var lrScore = 0;
//Y axis paddle offset
var upPaddleYOffset = 0;
var downPaddleYOffset = 0;
var maxYOffset = 256;
//States
var alrtScore = false;
var lastUp = false;
var lastDown = false;
//Diferential variables 
var dPaddleYOffset = 5;
var dPaddleX = 7;
//Event
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//Handle input
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
        case "Up":
            downUpPressed = true;
            break;
        case "Down":
            downDownPressed = true;
            break;
        case "ArrowUp":
            downUpPressed = true;
            break;
        case "ArrowDown":
            downDownPressed = true;
            break;
        case "w":
            upUpPressed = true;
            break;
        case "s":
            upDownPressed = true;
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
        //YOff
        case "Up":
            downUpPressed = false;
            break;
        case "Down":
            downDownPressed = false;
            break;
        case "ArrowUp":
            downUpPressed = false;
            break;
        case "ArrowDown":
            downDownPressed = false;
            break;
        case "w":
            upUpPressed = false;
            break;
        case "s":
            upDownPressed = false;
            break;
        //YOff
        default:
            break;
    }
}
function drawHalf(){
    ctx.beginPath();
    ctx.rect(0, canvas.height/2-2, canvas.width, 4);
    ctx.fillStyle = scoreAndHalfColor;
    ctx.fill();
    ctx.closePath();
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
    ctx.rect(downPaddleX, canvas.height-downPaddleHeight - 1 - downPaddleYOffset, downPaddleWidth, downPaddleHeight);
    ctx.fillStyle = paddleColor;
    ctx.fill();
    ctx.closePath();
}
function drawPaddleUp() {
    ctx.beginPath();
    ctx.rect(upPaddleX, 1 + upPaddleYOffset, upPaddleWidth, upPaddleHeight);
    ctx.fillStyle = paddleColor;
    ctx.fill();
    ctx.closePath();
}

function drawScore(){
    ctx.font = "32px Courier New";
    ctx.fillStle = scoreAndHalfColor;
    ctx.fillText(adScore, canvas.width/2, canvas.height/4);
    ctx.fillText(lrScore, canvas.width/2, canvas.height - canvas.height/4)
}
//Logic section
function incrementScore(whichPaddle){
    x = canvas.width/2;
    y = canvas.height/2;
    // paused = true;
    switch (whichPaddle) {
        case 0:
            adScore++;
            alrtScore = true;
            break;
        case 1:
            lrScore++;
            alrtScore = true;
            break;
        default:
            break;
    }
}
function movementPaddleYDir(){
    if(upDownPressed && upPaddleYOffset < maxYOffset + 7){
        upPaddleYOffset += dPaddleYOffset;
    }
    else if(upUpPressed && upPaddleYOffset > 7){
        upPaddleYOffset -= dPaddleYOffset;
    }
    //
    if(downDownPressed && downPaddleYOffset > 7){
        downPaddleYOffset -= dPaddleYOffset;
    }
    else if(downUpPressed && downPaddleYOffset < maxYOffset + 7){
        downPaddleYOffset += dPaddleYOffset;
    }
}
function movementPaddleXDir(){
    if(upRightPressed && upPaddleX < canvas.width-upPaddleWidth) {
        upPaddleX += dPaddleX;
    }
    else if(upLeftPressed && upPaddleX > 0) {
        upPaddleX -= dPaddleX;
    }
    //
    if(downRightPressed && downPaddleX < canvas.width-downPaddleWidth) {
        downPaddleX += dPaddleX;
    }
    else if(downLeftPressed && downPaddleX > 0) {
        downPaddleX -= dPaddleX;
    }
}
function ballMovementAndCollision(){
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    //killines
    if(y + dy < ballRadius/2+upPaddleHeight) {
        incrementScore(1);
    }
    if(y + dy > canvas.height-ballRadius/2-downPaddleHeight) {
        incrementScore(0);
    }
    if(y + dy < upPaddleYOffset + ballRadius*2 && y + dy > upPaddleYOffset - ballRadius*2 && x + dx > upPaddleX && x + dx < upPaddleX + upPaddleWidth) {
        if(!(y+dy > y)){
            dy = -dy;
            lastUp = true;
            lastDown = false;
        }
    }
    if(y + dy < canvas.height - downPaddleYOffset + ballRadius*2 && y + dy > canvas.height - downPaddleYOffset - ballRadius*2 && x + dx > downPaddleX && x + dx < downPaddleX + downPaddleWidth) {
        if(!(y+dy < y)){
            dy = -dy;
            lastDown = true;
            lastUp = false;
        }
    }
}
//Mainfunciton###################
function drawMultiplayer() {
    if(paused){return;}
    //Draw section
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHalf();
    drawBall();
    drawPaddleDown();
    drawPaddleUp();
    drawScore();
    //Logic section
    ballMovementAndCollision();
    if (alrtScore) {
        alrtScore = false;
        setTimeout(drawMultiplayer, 3000);
        return;
    }
    //Player move section 
    movementPaddleXDir();
    movementPaddleYDir();
    //Ball move section
    x += dx;
    y += dy;
    //End of logick istructions
    //Display loop
    requestAnimationFrame(drawMultiplayer);  
}