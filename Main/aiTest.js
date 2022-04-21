var outputP
var error

let aiElem = {
    learningRate : 1,
    bias : 1,
    weights : [1, 1, 1]
}

function perception(input1, input2, output){
    outputP =  input1*aiElem.weights[0] + input2*aiElem.weights[1] + aiElem.bias*aiElem.weights[2];
    if (outputP > 0) {
        outputP = 1;
    } else {
        outputP = 0;
    }
    error = output - outputP;
    weights[0] += error*input1*aiElem.learningRate;
    weights[1] += error*input2*aiElem.learningRate;
    weights[2] += error*aiElem.bias*aiElem.learningRate;
}

function learning(iterations){
    for (let index = 0; index < iterations; index++) {
        perception(1,1,1); //T^T
        perception(1,0,1); //T^F
        perception(0,1,1); //F^T
        perception(0,0,0); //F^F      
    }
}

function useP(x,y){
    outputP = x*aiElem.weights[0] + y*aiElem.weights[1] + bias*aiElem.weights[2];
    if(outputP > 0){
        outputP = 1;
    } else {
        outputP = 0;
    }
}