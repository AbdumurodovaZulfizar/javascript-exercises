const palindromes = function (str) {
  let newStr = str.trim().replace(/[^0-9a-z]/gi, '');
  let final  =newStr.toLowerCase();
  let result = final.split("").reverse().join("");
  return result === final;
};

module.exports = palindromes;
