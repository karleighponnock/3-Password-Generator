// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCharArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCharArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "_", "-"]

function generatePassword() {

  // Build array for criteria
  var passCriteria = [];


  // Prompt user for password criteria
  //TODO can only be between 8 and 128 characters
  var numOfChar = prompt("How many characters do you want in your password?");
  if (numOfChar > 8 && numOfChar < 128) {

    var lowerCase = confirm("Include lowercase letters?");

    var upperCase = confirm("Include uppercase letters?");

    var numbers = confirm("Include numbers?");

    var specialChar = confirm("Include special characters?");


    if (lowerCase) {
      passCriteria.push(lowerCharArray);
    }
    console.log(passCriteria);

    if (upperCharArray) {
      passCriteria.push(upperCase);
    }
    console.log(passCriteria);

    if (numbers) {
      passCriteria.push(numArray);
    }
    console.log(passCriteria);

    if (specialChar) {
      passCriteria.push(specialCharactersArray);
    }

console.log(passCriteria);

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



return "This is the Password"

  } else {
    alert("Must be between 8 and 128 character. Press Generate to try again!")

  }
}


// Add event listener to generate button
//calls for function above to be run
generateBtn.addEventListener("click", writePassword);
