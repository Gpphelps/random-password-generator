var generateBtn = document.querySelector("#generate");
//added variable for the copy button
var copyBtn = document.querySelector("#copy");


// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }



  function generatePassword() {
  //designates the values held by the variable/splits to be used in the 'confirm's 
  let lowCase = "abcdefghijklmnopqrstuvwxyz"
  let lowCaseArr = lowCase.split("");
  let upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upCaseArr = upCase.split("");
  let number = "0123456789";
  let numberArr = number.split("");
  let specl = "!@#$%^&*()_+?<>";
  let speclArr = specl.split("");
  let allChars = [];

  //creates a blank string that is added to by the function
  let password = "";

  //assigns the value input by the user to the var password length
  let pwLength = prompt("Choose a password length that is at least 8 chracters long, but no more than 128.");
    
  if (pwLength < 8 || pwLength > 128) {
    alert("Password must contain at least 8, but no more than, 128 charcaters.")
    generatePassword() //if the value given for pwLength is less than 8 or more than 128 an alert will display and the function will restart
  } 
  //prompts the user for which kinds of characters they would like in their password
  if (confirm("Do you want to include lowercase characters?")) {
    allChars = allChars.concat(lowCaseArr);
  }
  if (confirm("Do you want to include uppercase characters?")) {
    allChars = allChars.concat(upCaseArr);
  }
  if (confirm("Do you want to include numeric characters?")) {
    allChars = allChars.concat(numberArr);
  }
  if (confirm("Do you want to include special characters?")) {
    allChars = allChars.concat(speclArr);
  }
  //this code runs if the user did not select any types of characters, alert is displayed and the function runs again
  if (allChars.length === 0) {
    alert("At least one type of character must be chosen for a new password to be generated.");
    generatePassword()
  }
  // for loop that refrences the allChars variable and selects a randon assortment of chracters according to the user's inputs for the password criteria chosen and the pwLength
  for (let i = 0; i < pwLength; ++i) {
    let random = Math.floor(Math.random() * Math.floor(allChars.length));
    password += allChars[random];
  }
  //displays the newly generated password onto the webpage
  return password;

  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// added the event listener function for the copy button which selects the newly generated password and then coppies it to the computer's clip board
copyBtn.addEventListener("click", function () {
  password.select();
  document.execCommand("copy");
  alert("Copied your new password");
})

