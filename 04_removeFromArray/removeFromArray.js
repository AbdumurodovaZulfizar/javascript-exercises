const removeFromArray = function(...values) {
  let arr = values[0], store = []
  let i = 1;
  while (i < values.length) {
    store.push(values[i]);
    i+=1;
  }

  for(let j = 0; j < store.length; j++) {
    if (arr.indexOf(store[j]) >= 0) {
    arr.splice(arr.indexOf(store[j]), 1);
    }
  }
  return arr;
};

module.exports = removeFromArray;
