const fibonacci = function(num) {
  if (num <=0 || Number(num) != num) {
    return 'OOPS'
  }
  let fibonacciarray = [];
  fibonacciarray[0]= 1;
  fibonacciarray[1]= 1;
  for(let i = 2; i < num; i++) {
    fibonacciarray[i]= fibonacciarray[i-1]+ fibonacciarray[i-2]
  }
  return fibonacciarray[num-1];
};

module.exports = fibonacci;
