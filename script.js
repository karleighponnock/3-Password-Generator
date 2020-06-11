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
  var numOfChar = prompt("How many characters do you want in your password?");
  if (numOfChar > 8 && numOfChar < 128) {

    // ask if user ants to include lowercase letters
    var lowerCase = confirm("Include lowercase letters?");

    // ask if user ants to include uppercase letters
    var upperCase = confirm("Include uppercase letters?");

    // ask if user ants to include numbers
    var numbers = confirm("Include numbers?");

    // ask if user ants to include special characters
    var specialChar = confirm("Include special characters?");

    // If used confirmed use of lowercase letters this will 
    // push the contents of lowerCharArray into the criteria array
    if (lowerCase) {
      passCriteria.push(lowerCharArray);
    }
    console.log(passCriteria);

    // If used confirmed use of uppercase letters this will 
    // push the contents of upperCase array into the criteria array
    if (upperCharArray) {
      passCriteria.push(upperCase);
    }
    console.log(passCriteria);


    // If used confirmed use of numbers this will 
    // push the contents of numArray into the criteria array
    if (numbers) {
      passCriteria.push(numArray);
    }
    console.log(passCriteria);

    // If used confirmed use of special characters this will 
    // push the contents of specialCharactersArray into the criteria array
    if (specialChar) {
      passCriteria.push(specialCharactersArray);
    }

    // not needed for functionality, visual of all criteria for developer
    console.log(passCriteria);



    return "This is the Password"


    // if user inputs a number not within the length 
    // parameters 8-128 they are prompted to try again
  } else {
    alert("Must be between 8 and 128 character. Press Generate to try again!")

  }
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
