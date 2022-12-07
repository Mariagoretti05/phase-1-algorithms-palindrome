
function isPalindrome(word) {
  // Write your algorithm here
  const lenght = word.length;// checks the length of the word
  for (let j=0; j<lenght/2; j++){// divides the words into 2 half
    if (word[j]===word[lenght-1-j]){   // check if the first and last characters are same
      return true;
    }else {
      return false;
    }
  }

}

/*
  Add your pseudocode here
  .The  function ispalindrome accepts an argument as string
  .get the length of the string
   divide the string into two half
  check if the first and the last characters are the same
  . returns true if the characters are the same
  .returns false if the characters are not the same
*/

/*
  the solution checks if the word string is palindrome which means it can be reversed and be
  similar as the word is written originally. if the word is a palindrome it returns true otherwise it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;