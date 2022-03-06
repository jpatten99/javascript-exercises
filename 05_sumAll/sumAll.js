const sumAll = function(firstInt, secondInt) {
    let sum = 0;
    if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt)) return "ERROR";
        if(firstInt > 0 && secondInt > 0){
            if(firstInt < secondInt){
                for(firstInt; firstInt <= secondInt; firstInt++){
                    sum += firstInt;
                }
            }
            else if(firstInt > secondInt){
                for(secondInt; secondInt <= firstInt; secondInt++){
                    sum += secondInt;
                }
            }    
            return sum;
        }
        else{return "ERROR";}    
};

// Do not edit below this line
module.exports = sumAll;
