var runningMulti = false;
var runningSingle = false;
var paused = false;


function startSingle(){
    if(runningSingle){return;}
    runningSingle = true;
    draw();
}


function startMulti(){
    if(runningMulti){return;}
    runningMulti = true;
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