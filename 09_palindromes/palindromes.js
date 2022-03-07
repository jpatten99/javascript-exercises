const palindromes = function (inputString) {
    inputString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    //^^removes punctuation
    inputString = inputString.replace(/\s+/g, '')
    //^^removes whitespace
    inputString = inputString.toLowerCase();
    let reverseStr = reverseString(inputString);
    return reverseStr === inputString;
};

function reverseString(str) {
    if (str === "")
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0);
}
// Do not edit below this line
module.exports = palindromes;
