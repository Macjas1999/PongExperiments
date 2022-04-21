//Initial var
var runningMulti = false;
var runningSingle = false;
var paused = false;
var alrtScore = false;
//Init singleplayer
function startSingle(){
    if(runningSingle){return;}
    runningSingle = true;
    draw();
}
//Init multiplayer
function startMulti(){
    if(runningMulti){return;}
    runningMulti = true;
    drawMultiplayer();
}
//Pausing
function pause(){
    if(!paused){
        paused = true;
        document.getElementById("menubar3").innerHTML = "UNPAUSE";
    }
    else if(paused){
        paused = false;
        document.getElementById("menubar3").innerHTML = "PAUSE";
        if(runningMulti){
            requestAnimationFrame(drawMultiplayer);
        }
        else if(runningSingle){
            requestAnimationFrame(draw);
        }
    }
}

function settings(){
    inState1 = document.getElementById("menubar0").innerHTML;
}