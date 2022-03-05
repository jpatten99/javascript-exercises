const repeatString = function(inputString, inputNumber) {
    let answer = '';
    if(inputNumber >= 0){
        for(let i = 0; i < inputNumber; i++){
            answer = answer + inputString;
        }
    return answer;
    }
    else{return 'ERROR';}
};

// Do not edit below this line
module.exports = repeatString;
