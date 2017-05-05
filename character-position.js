function LettersPosition(str) {
  var output = {};
  var strArr = str.toLowerCase().split('')

  for (i = 0; i < strArr.length; i++) {
    if (strArr[i] != " ") {
      if (strArr[i] in output) {
        output[strArr[i]].push(i);

      }
      else {
        output[strArr[i]] = [i];
      }
    }
  }
  return output;
  }

console.log(LettersPosition('Lighthouse in the house'));
