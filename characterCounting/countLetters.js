function countLetters (string) {
  var count = {};
  for (var i = 0; i < string.length; i++) {
    var string = string.replace(' ','');
    if (count[string[i]] === undefined) {
      count[string[i]] = 1;
    }
    else {
      count[string[i]] ++;
    }
  }
  console.log(count);
}
countLetters("lighthouse in the house");
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }

// need to save the [i] of the letter
//