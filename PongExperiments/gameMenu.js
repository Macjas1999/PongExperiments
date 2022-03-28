var running = false;
var paused = false;


function startSingle(){
    if(running){return;}
    running = true;
    draw();
}


function startMulti(){
    if(running){return;}
    running = true;
    drawMultiplayer();
}

function pause(){
    if(!paused){
        paused = true;
        document.getElementById("menubar3").innerHTML = "UNPAUSE";
    }
    else if(paused){
        paused = false;
        document.getElementById("menubar3").innerHTML = "PAUSE";
        requestAnimationFrame(draw);
    }   
}