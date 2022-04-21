var loadingCounter = 0;

function spinLoading(){
    switch (loadingCounter) {
        case 0:
            document.getElementById("loading").innerHTML = "-";
            loadingCounter++;
            break;
        case 1:
            document.getElementById("loading").innerHTML = "\\";
            loadingCounter++;
            break;
        case 2:
            document.getElementById("loading").innerHTML = "|";
            loadingCounter++;
            break;
        case 3:
            document.getElementById("loading").innerHTML = "/";
            loadingCounter = 0;
            break;
        default:
            break;
    }
}
var interval2 = setInterval(spinLoading, 100);
