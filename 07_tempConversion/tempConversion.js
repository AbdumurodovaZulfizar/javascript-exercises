const ftoc = function(num) {
  
  let value = ((num-32)*5/9);
  if (value === parseInt(value)) {
    return value;
  }else {
    return Number(value.toFixed(1));
  }
};

const ctof = function(num) {
  let value = (num*9/5 + 32);
  if (value=== parseInt(value)) {
    return value;
  } else {
    return Number(value.toFixed(1));
  }
};

module.exports = {
  ftoc,
  ctof
};
