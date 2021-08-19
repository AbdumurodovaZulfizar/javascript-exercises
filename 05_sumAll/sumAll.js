const sumAll = function(...values) {
  let number_one = values.sort()[0];
  let number_two = values.sort()[1];
  if (number_two < 0 || number_one < 0 || number_two !== Number(number_two) || number_one !== Number(number_one)) {
    return "ERROR";
  }
  let i = number_one, sum = 0;
  while (i <= number_two) {
    sum += i;
    i+=1
  }
  return sum;

};

module.exports = sumAll;
