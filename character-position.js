function LettersPosition(str) {
  var output = {};
  var strArr = str.split('')
  //var char = noSpace.split('');
  //console.log(strArr);
  //console.log(char.length);

///////////////////////////////


  // for (i = 0; i < strArr.length; i++)
  //   output[strArr[i]] = [];

  // console.log(output);

  // for (i = 0; i < strArr.length; i++) {
  //   output[strArr[i]].push(i);

  // console.log(output);
  for (i = 0; i < strArr.length; i++) {
    if (strArr[i] in output) {
      output[strArr[i]].push(i);

    }
    else {
      output[strArr[i]] = [i];
      //console.log(output[char[i]]);
    }
  }
  return output;
  }




console.log(LettersPosition('Lighthouse in the house'));


  // for (i = 0; i < strArr.length; i++) {
  //   if (strArr[i] in output) {
  //     output.strArr[i] = push(strArr.indexOf(strArr[i]));
  //     //console.log(output[char[i]]);
  //   }
  //   else {
  //     output[strArr[i]] = [];
  //     output[strArr[i]].push(strArr.indexOf(strArr[i]));
  //     //console.log(output[char[i]]);
  //   }
  // }

  // return output;