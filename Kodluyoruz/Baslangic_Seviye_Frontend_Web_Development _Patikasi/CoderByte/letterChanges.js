/*
Letter Changes
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
Examples
Input: "hello*3"
Output: Ifmmp*3

Input: "fun times!"
Output: gvO Ujnft!
*/

function LetterChanges(str) {
    var modifiedStr = '';
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (char.match(/[a-z]/i)) {
        var nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
        if (nextChar.match(/[aeiou]/i)) {
          nextChar = nextChar.toUpperCase();
        }
        modifiedStr += nextChar;
      } else {
        modifiedStr += char;
      }
    }
    return modifiedStr;
  }
  
  var input = "hello*3";
  var output = LetterChanges(input);
  console.log(output);
  

