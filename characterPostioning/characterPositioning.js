function countLetters (string) {
  var count = {};
  for (var i = 0; i < string.length; i++) {
    if (count[string[i]] === undefined) {
      count[string[i]] = [i];
    }
    else {
      count[string[i]].push(i);
    }
  }
  // optional code if space isn't wanted
  // delete count[' '];
  console.log(count);
}
countLetters("lighthouse in the house");