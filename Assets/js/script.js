var generateBtn = document.querySelector("#generate");
var pwCriteria = document.querySelector("#passwordCriteria")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function for generatePassword
function generatePassword() {
  var pwLength = parseInt(prompt("How long would you like your password? Min = 8 Max = 128", ""));
  var i = 0;
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert("Length Must be between 8-128 characters please try again.");
    return 'Please Try Again!';
  } else {
    while ( i === 0) {
      var pwLowerCase = confirm("Do you want lowercase letters?");
      var pwUpperCase = confirm("Do you want Upper Case letters?");
      var pwNumbers = confirm("Do you want numbers?");
      var pwSpecial = confirm("Do you want Special Characters?")
      var chars = "";

      // Must pick one criteria to continue.
      if (pwLowerCase == true|| pwUpperCase == true || pwNumbers == true || pwSpecial == true) {
        i = 1;
      } else {
        alert("One Character type should be selected!");
      }
    }

    // If user chooses Lower Case Letters.
    if (pwLowerCase == true){
      chars += "abcdefghijklmnopqrstuvwxy";
    }

    // If user chooses Uppercase letters.
    if (pwUpperCase == true){
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    // If user chooses Numbers.
    if (pwNumbers == true){
      chars += "0123456789";
    }

    // If user chooses Special Characters.
    if (pwSpecial == true){
      chars += "'~`!@#$%^&*()_-+={[}]|:;<,>.?/'";
    }

    // After password criteria chosen call funtion to create password then returns it.
    lcPW = randomPW();
    return lcPW;

    // function for making random password after criteria chosen.
    function randomPW() {
      lcPass = '';
      for (var n = 0; n < pwLength; ++n) {
        var c = Math.floor(Math.random()*chars.length + 1);
        lcPass += chars.charAt(c);
      }
      return lcPass;
    }
  }
}  

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);
