// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(x,y) {
  if (!y) {
    y = x
    x = 0
  }

  var random = Math.random()
  return Math.floor(x*(1 - random) + random*y)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
  console.log("You clicked the button!"); //confirmation that button is clicked
  var userInput = window.prompt("How many characters do you want the password to be?");

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Needs to be a number.")
    return generatePassword(); 
  }

  if (passwordLength < 8 || passwordLength >128) {
    window.alert("Password length must be between 8 and 128 characters.")
    return generatePassword(); 
  }

  var passwordUCase = window.confirm("Would you like your password to contain upper case letters?");
  var passwordLCase = window.confirm("Would you like your password to contain lower case letters?"); 
  var passwordSymbol = window.confirm("Would you like your password to contain special characters?");
  var passwordNumber = window.confirm("Would you like your password to contain numbers?")

  var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolsList = ["!", "@", "#", "$", "&", "?", "^", "%", "*", "-", "_"]
  var lowercaseList = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"] 
  var uppercaseList = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "N", "M"]

  var charList = []
  

  
  if (passwordUCase === true) {
    charList.push(uppercaseList)
  }

  if (passwordLCase === true) {
    charList.push(lowercaseList)
  } 

  if (passwordSymbol === true) {
    charList.push(symbolsList)
  }

  if (passwordNumber === true) {
    charList.push(numbersList)
  }

var generatedPassword = "" 

for (var i = 0; i <= passwordLength; i++) {
  var randomList= getRandomItem(charList); 
  var randomChar = getRandomItem(randomList); 
  generatedPassword += randomChar 
  console.log(generatedPassword); 
}
  return generatedPassword; 
}
  

  // 1. Prompt user for the password criteria
  //    a. password length 8 - 128
  //    b. uppercase, lowercase, numberic, and/or special characters
  // 2. Validate input. 
  // 3. Generate password based on criteria. 
  // 4. return "Generated password here!"; 



// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
