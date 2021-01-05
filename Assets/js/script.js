// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwCriteria = document.querySelector("#passwordCriteria")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // if (pwCriteria.getAttribute("class") === "visually-hidden") {
  //   pwCriteria.setAttribute("class", "")
  // }
  passwordText.value = password;

}

// Function for generatePassword
function generatePassword() {
  var pwLength = prompt("How long would you like your password? Min = 8 Max = 128")
  var i = 0
  if (pwLength < 8 || pwLength > 128) {
    alert("Length Must be between 8-128 characters please try again.");
  } else {
    while ( i === 0) {
      var pwLowerCase = confirm("Do you want lowercase letters?");
      var pwUpperCase = confirm("Do you want Upper Case letters?");
      var pwNumbers = confirm("Do you want numbers?");
      var pwSpecial = confirm("Do you want Special Characters?")
      if (pwLowerCase|| pwUpperCase || pwNumbers || pwSpecial) {
        i = 1;
      } else {
        alert("One Character type should be selected!");
      }
    // while (i === 1) {

    // }
    }
  }
}  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
