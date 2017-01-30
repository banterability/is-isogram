module.exports = function(str) {
  var letters = str.replace(/ /g, '').split('');
  return letters.length === letters.filter(function(letter, index, arr) {
    return arr.indexOf(letter) == index;
  }).length;
};
