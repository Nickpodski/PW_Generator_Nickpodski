// Assignment Code
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
      if (pwLowerCase == true|| pwUpperCase == true || pwNumbers == true || pwSpecial == true) {
        i = 1;
      } else {
        alert("One Character type should be selected!");
      }
    }

    // One condition chosen.
    if (pwLowerCase == true && pwUpperCase == false && pwNumbers == false && pwSpecial == false) {
      lcPW = randomPW('abcdefghijklmnopqrstuvwxy');
      return lcPW;
    }
    if (pwLowerCase == false && pwUpperCase == true && pwNumbers == false && pwSpecial == false) {
      lcPW = randomPW('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      return lcPW;
    }
    if (pwLowerCase == false && pwUpperCase == false && pwNumbers == true && pwSpecial == false) {
      lcPW = randomPW('0123456789');
      return lcPW;
    }
    if (pwLowerCase == false && pwUpperCase == false && pwNumbers == false && pwSpecial == true) {
      lcPW = randomPW('~`!@#$%^&*()_-+={[}]|:;<,>.?/');
      return lcPW;
    }

    // Two conditions chosen.
    if (pwLowerCase == true && pwUpperCase == true && pwNumbers == false && pwSpecial == false) {
      lcPW = randomPW('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy');
      return lcPW;
    }
    if (pwLowerCase == true && pwUpperCase == false && pwNumbers == true && pwSpecial == false) {
      lcPW = randomPW('abcdefghijklmnopqrstuvwxy0123456789');
      return lcPW;
    }
    if (pwLowerCase == true && pwUpperCase == false && pwNumbers == false && pwSpecial == true) {
      lcPW = randomPW('abcdefghijklmnopqrstuvwxy~`!@#$%^&*()_-+={[}]|:;<,>.?/');
      return lcPW;
    }
    if (pwLowerCase == false && pwUpperCase == true && pwNumbers == true && pwSpecial == false) {
      lcPW = randomPW('ABCDEFGHIJKLMNOPQRSTUVWXY0123456789');
      return lcPW;
    }
    if (pwLowerCase == false && pwUpperCase == true && pwNumbers == false && pwSpecial == true) {
      lcPW = randomPW('ABCDEFGHIJKLMNOPQRSTUVWXY~`!@#$%^&*()_-+={[}]|:;<,>.?/');
      return lcPW;
    }
    if (pwLowerCase == false && pwUpperCase == false && pwNumbers == true && pwSpecial == true) {
      lcPW = randomPW('0123456789~`!@#$%^&*()_-+={[}]|:;<,>.?/');
      return lcPW;
    }

    // 3 conditions chosen
    if (pwLowerCase == true && pwUpperCase == true && pwNumbers == true && pwSpecial == false) {
      lcPW = randomPW('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy0123456789');
      return lcPW;
    }
    if (pwLowerCase == true && pwUpperCase == true && pwNumbers == false && pwSpecial == true) {
      lcPW = randomPW('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy~`!@#$%^&*()_-+={[}]|:;<,>.?/');
      return lcPW;
    }
    if (pwLowerCase == true && pwUpperCase == false && pwNumbers == true && pwSpecial == true) {
      lcPW = randomPW('abcdefghijklmnopqrstuvwxy0123456789~`!@#$%^&*()_-+={[}]|:;<,>.?/');
      return lcPW;
    }
    if (pwLowerCase == false && pwUpperCase == true && pwNumbers == true && pwSpecial == true) {
      lcPW = randomPW('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_-+={[}]|:;<,>.?/');
      return lcPW;
    }

    // All conditions chosen.
    if (pwLowerCase == true && pwUpperCase == true && pwNumbers == true && pwSpecial == true) {
      lcPW = randomPW('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy0123456789~`!@#$%^&*()_-+={[}]|:;<,>.?/');
      return lcPW;
    }

    // function for making random password after criteria chosen.
    function randomPW(chars) {
      lcPass = '';
      for (var n = 0; n < pwLength; ++n) {
        var c = Math.floor(Math.random()*chars.length + 1);
        lcPass += chars.charAt(c);
      }
      return lcPass;
    }
  }
}  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
