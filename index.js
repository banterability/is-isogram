module.exports = function(str) {
  const letters = str.split('');
  return letters.length === letters.filter(function(letter, index, arr) {
    return arr.indexOf(letter) == index;
  }).length;
};
