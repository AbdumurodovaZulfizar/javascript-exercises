const findTheOldest = function(array) {
  let myarray = [];
    for(let i = 0 ; i < array.length; i++) {
      if ('yearOfDeath' in array[i]) {
      myarray.push(array[i]);} else {
        array[i].yearOfDeath = new Date().getFullYear();
        myarray.push(array[i]);
      }
    }
  let final = myarray.sort((a, b) => (a.yearOfDeath - a.yearOfBirth)> (b.yearOfDeath - b.yearOfBirth) ? -1:1);
  return final[0];
};

module.exports = findTheOldest;
