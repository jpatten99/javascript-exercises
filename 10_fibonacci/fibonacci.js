const fibonacci = function(inputVal) {
    inputVal = Number(inputVal);
    if(inputVal < 0){return 'OOPS';}
    else if(inputVal === 0){return 0;}
    else if (inputVal === 1){return 1;}
    else{
        let first = 0;
        let second = 1;
        let answ;
        for(let i = 2; i <= inputVal; i++){
            answ = first + second;
            first = second;
            second = answ;
        }
        return answ;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
