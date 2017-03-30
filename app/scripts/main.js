console.log('\'Allo \'Allo!');

function showFromBehind(testWord) {

  var finalWord = "";
  var letter = "";

  for (var i = testWord.length; i > 0; i--) {
    letter = testWord.charAt(i-1);

    if(finalWord.indexOf(letter) < 0) {
      finalWord = finalWord.concat(letter);
    } else {
      // letter exist in a word
    }
  }

  alert(finalWord);
}

function string1() {
  alert(1 + "2" + "2");
}
function string2() {
  alert(1 + "2" + 2);
}
function string3() {
  alert(1 - "2" + 2);
}
function string4() {
  alert( 1 +  + 2 + "3" )
}
function string5() {
  alert( 1 -  + 2 + "3" )
}
