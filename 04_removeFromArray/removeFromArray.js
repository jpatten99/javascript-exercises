const removeFromArray = function(inputArray) {
    let args = Array.from(arguments);
    let argsLength = args.length;
    for(let j = 1; j<argsLength; j++){
        inputArray = inputArray.filter(item => item !== args[j]);
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
