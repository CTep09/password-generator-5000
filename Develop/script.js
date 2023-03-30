// Assignment Code
var generateBtn = document.querySelector("#generate");

// Added variables and 
var lowerCaseAlphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",  "u", "v", "w", "x", "y", "z"];
var upperCaseAlphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacterArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompt for password criteria
function generatePassword() {
  var passwordLength = prompt("How many characters do you want your password to be?");
  // Must be between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.");
  };
  function upperCase() {
    upCase = confirm("Would you like to use upper case letters?")
  }
  function lowerCase() {
    lowCase = confirm("Would you like to use lower case letters?")
  }
  function number() {
    num = confirm("Would you like to use numbers?")
  }
  function specChar() {
    char = confirm("Would you like to use special characters?")
  }
}

// Then when answered store value

// have to pick at least one type

// Call value

// Randomize the given value

// Would print on screen

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // displays password

  passwordText.value = password;
}