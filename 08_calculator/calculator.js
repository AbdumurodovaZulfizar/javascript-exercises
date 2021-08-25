const add = function(...values) {
  let sum  = 0;
  for(let i = 0; i< values.length; i++) {
    sum += values[i];
  }
	return sum;
};

const subtract = function(...args) {
  let first = args[0];
  let second  = args[1];
  return first - second;
	
};

const sum = function(array) {
	if(array.length == 0) {
    return 0;
  } else {
    return array.reduce((sum, ele) =>  sum + ele )
  }
};

const multiply = function(array) {
  if(array.length == 0) {
    return 0;
  } else {
    return array.reduce((sum, ele) =>  sum * ele )
  }
};

const power = function(number, times) {
  let array = [];
  for(let i = 0; i< times; i++) {
    array.push(number)
  }
  return array.reduce((power, num) => power*num);
};

const factorial = function(num) {
  let array = [];
	if (num <= 0) {
    return 1;
  } else {
    for(let i = 1; i <= num; i++) {
      array.push(i);
    }
    return array.reduce((fac, num) => fac*num)
  }
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
