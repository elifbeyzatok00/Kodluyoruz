/*
Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
Words will be separated by only one space.
Examples
Input: "hello world"
Output: Hello World
Input: "i ran there"
Output: I Ran There
*/

function LetterCapitalize(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      words[i] = capitalizedWord;
    }
    return words.join(' ');
  }
  
  var input = "hello world";
  var output = LetterCapitalize(input);
  console.log(output);
  