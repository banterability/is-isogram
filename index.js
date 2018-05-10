function isIsogram(str) {
  const letters = str.replace(/ /g, "").split("");

  return letters.length === letters.filter(
    (letter, index, arr) => arr.indexOf(letter) == index
  ).length;
}

module.exports = isIsogram;
