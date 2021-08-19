const reverseString = function(str) {
  let i = str.length - 1;
  let result = '';
  while(i >= 0) {
    result += str[i];
    i-=1;
  }
  return result;
};

module.exports = reverseString;
