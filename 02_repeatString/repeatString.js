const repeatString = function(str, num) {
  if (num < 0) {
    return 'ERROR';
  }
  let i = 0;
  let result = ''
  while (i < num) {
    result += str;
    i+=1;
  }
  return result;
};

module.exports = repeatString;
