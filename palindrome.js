// reverse the string
// compare the reversed string to the original.
// return true/false depending if they are equal.
// word = 'lashma'
function isPalindrome(word){
  var reversedWord = '';
  for(var i = word.length - 1; i >= 0; i -= 1) {
    reversedWord += word[i];
  }

  if (word === reversedWord) {
    return true
  } else {
    return false
  }
}
