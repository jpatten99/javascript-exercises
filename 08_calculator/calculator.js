const add = function(inputOne, inputTwo) {
	return inputOne + inputTwo;
};

const subtract = function(inputOne, inputTwo) {
  return inputOne - inputTwo;
};

const sum = function(inputArray) {
  let sum = 0;
  for(const numbers of inputArray){
    sum +=Number(numbers);
  }
  return sum;
};

const multiply = function(inputArray) {
  let answ = 1;
  for(const numbers of inputArray){
    answ *=numbers;
  }
  return answ;
};

const power = function(inputOne, inputTwo) {
  return Math.pow(inputOne, inputTwo);
};

const factorial = function(inputNum) {
  let answ=1;
    for (let i = 2; i <= inputNum; i++)
        answ = answ * i;
    return answ;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
