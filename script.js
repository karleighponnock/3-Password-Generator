// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Build array for criteria
var  passCriteria = [];

  // Prompt user for password criteria
//TODO can only be between 8 and 128 characters
  var numOfChar = prompt("How many characters do you want in your password?");

  var lowerCase = confirm("Include lowercase letters?");

  var upperCase = confirm("Include uppercase letters?");

  var numbers= confirm("Include numbers?");

  var specialChar= confirm("Include special characters?");
 
passCriteria.push(numOfChar,lowerCase,upperCase,numbers,specialChar);



  return "This is the Password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//calls for function above to be run
generateBtn.addEventListener("click", writePassword);
