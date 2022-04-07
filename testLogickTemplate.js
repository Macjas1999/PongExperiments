//Description
//Killines
function incrementScoreAD(){
    //increment score and reset ball position and pause the game
    adScore++;
    x = canvas.width/2;
    y = canvas.height/2;
    paused = true;
}

function incrementScoreLR(){
    //increment score and reset ball position and pause the game
    lrScore++;
    x = canvas.width/2;
    y = canvas.height/2;
    paused = true;
}
function incrementScore(whichPaddle){
    x = canvas.width/2;
    y = canvas.height/2;
    paused = true;
    if(whichPaddle = 1){
        adScore++;
    }
    else if (whichPaddle = 0){
        lrScore++;
    }
}

function movementPaddleYDir(){
    if(upDownPressed && upPaddleYOffset < maxYOffset + 7){
        upPaddleYOffset += 5;
    }
    else if(upUpPressed && upPaddleYOffset > 7){
        upPaddleYOffset -= 5;
    }
    
    if(downDownPressed && downPaddleYOffset > 7){
        downPaddleYOffset -= 5;
    }
    else if(downUpPressed && downPaddleYOffset < maxYOffset + 7){
        downPaddleYOffset += 5;
    }
}

function movementPaddleXDir(){
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
}
function ballMovementAndCollision(){
    try {
        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        
        if(y + dy < ballRadius+upPaddleHeight) {
            if(x > upPaddleX && x < upPaddleX + upPaddleWidth) {
                dy = -dy;
                
            }
            else {
                incrementScore(0);
            }
        }
        if(y + dy > canvas.height-ballRadius-downPaddleHeight) {
            if(x > downPaddleX && x < downPaddleX + downPaddleWidth) {
                dy = -dy;
            }
            else {
                incrementScore(1);
            }
        }
    
        if(y + dy < upPaddleYOffset + ballRadius*2 && y + dy > upPaddleYOffset - ballRadius*2 && x + dx > upPaddleX && x + dx < upPaddleX + upPaddleWidth) {
            if(!(y+dy > y)){//!(y+dy > y)
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
        
    } catch (error) {
        console.error(error);
    }
}






x += dx;
y += dy;