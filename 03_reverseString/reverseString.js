const reverseString = function(inputString) {
    let splitString = inputString.split("");
    let reverseString = splitString.reverse();
    let answer  = reverseString.join("");
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
