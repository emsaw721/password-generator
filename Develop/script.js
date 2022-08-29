// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("You clicked the button!"); //confirmation that button is clicked
  window.prompt("How many characters do you want the password to be?");

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Needs to be a number.")
    return 
  }

  if (passwordLength < 8 || passworldLength >128) {
    window.alert("Password length must be between 8 and 128 characters.")
    return 
  }

  var passwordCase = parseInt(userInput)

  


}
  

  // 1. Prompt user for the password criteria
  //    a. password length 8 - 128
  //    b. uppercase, lowercase, numberic, and/or special characters
  // 2. Validate input. 
  // 3. Generate password based on criteria. 
  
 // var chars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%&?";
  //var password = ""; 

  //for (var i = 0; i <= passwordLength; i++) {
    //var randomNumber = Math.floor(Math.random() * chars.length); 
   // password += chars.substring(randomNumber, randomNumber +1); 



  //4. return "Generated password here!"; 



// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
