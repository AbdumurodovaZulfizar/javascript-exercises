const repeatString = function(str, num) {
  let i = 0;
  while (i < num) {
    str+=str;
    i+=1;
  }
  return str;
};

module.exports = repeatString;
