// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 8, 
charset = "qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM", 
retVal= "";
for (var i = 0, n = charset.length; i < length; ++i) {

  retVal += charset.charAt(Math.floor(Math.random() * n))
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
