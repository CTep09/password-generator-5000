// Assignment Code
var generateBtn = document.querySelector("#generate");

// Added variables and 
var lowerCaseAlphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseAlphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacterArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompt for password criteria
function generatePassword() {
  var passwordLength = prompt("How many characters do you want your password to be?");
  // Must be between 8 and 128 characters 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.");
    return
  };

 // Confirm windows for user to select which characters to use in password
  var upCase = confirm("Would you like to use upper case letters?")

  var lowCase = confirm("Would you like to use lower case letters?")

  var num = confirm("Would you like to use numbers?")

  var char = confirm("Would you like to use special characters?")

  // Creating arrays to contain the information
  var charPool = [];
  var possibleCharacters = [];
  var result = [];

  // spread operator ...  used to include all elements from an array and include in new array

  if (upCase === true) {
    charPool.push(...randomNumber(upperCaseAlphabetArray))
    possibleCharacters = possibleCharacters.concat(upperCaseAlphabetArray);
    console.log(charPool)

  }

  if (lowCase === true) {
    charPool.push(...randomNumber(lowerCaseAlphabetArray))
    possibleCharacters = possibleCharacters.concat(lowerCaseAlphabetArray);
    console.log(charPool)

  }

  if (num === true) {
    charPool.push(...randomNumber(numbersArray))
    possibleCharacters = possibleCharacters.concat(numbersArray);
    console.log(charPool)
  }

  if (char === true) {
    charPool.push(...randomNumber(specialCharacterArray))
    possibleCharacters = possibleCharacters.concat(specialCharacterArray);

    console.log(charPool)
  }
//  User must select one of the above options, if not then then alert will pop-up and return user to start 
  if (charPool.length === 0) {
    alert("You need to pick at least one character type?")
    return
  }

  for (var i = 0; i < passwordLength; i++) {
    var possibleCharacters = randomNumber(possibleCharacters);
    result.push(possibleCharacters)

  }

  for (var i = 0; i < charPool.length; i++) {
    result[i] = charPool[i];
  }
  return result.join("");

}

function randomNumber(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement;

}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // displays password to the user on their screen

  passwordText.value = password;
}