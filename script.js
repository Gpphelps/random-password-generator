var generateBtn = document.querySelector("#generate");
//added variable for the copy button
var copyBtn = document.querySelector("#copy");


// Writes password to the #password input uses an if statement to prevent the function from running if the password requirements are not met by the user.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password !== null) {
    passwordText.value = password;
  }
}
//This function selects the in values stored in password and copies those values to the computers clipboard and gives an alert to the user.
function copyPassword() {  
  password.select();
  document.execCommand("copy");
  alert("Copied your new password!");
}


function generatePassword() {
  //designates the values held by the variable/splits to be selected by the user.
  let lowCase = "abcdefghijklmnopqrstuvwxyz"
  let lowCaseArr = lowCase.split("");
  let upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upCaseArr = upCase.split("");
  let number = "0123456789";
  let numberArr = number.split("");
  let specl = "!@#$%^&*()_+?<>";
  let speclArr = specl.split("");
  let allChars = [];

  //creates a blank string that is filled by the function
  let password = "";

  //assigns the value input by the user to the var password length
  let pwLength = prompt("How long would you like your new password to be? The length of your password must be at least 8 chracters but no more than 128.");
    
  if (pwLength < 8) {
    alert("Your password length is too short! You are required to input a password length of at least 8 characters.")
    // generatePassword() //if the value given for pwLength is less than 8 characters the alert will display and the function returns a null value ending the function.
    return null;
  } 
  if (pwLength > 128) {
    alert("Your password length is too long! You are required to input a password length of no more than 128 characters.")
    return null;
    //if the value given for pwLength is greater than 128 characters the alert will display and the function returns a null value ending the function.
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
  //this code runs if the user did not select any types of characters, alert is displayed and the function returns a null value ending the function.
  if (allChars.length === 0) {
    alert("At least one type of character must be chosen for a new password to be generated.");
    return null;
  }
  // for loop 
  for (let i = 0; i < pwLength; ++i) {
    let random = Math.floor(Math.random() * Math.floor(allChars.length));
    password += allChars[random];
  }
  //displays the newly generated password onto the webpage
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// added the event listener method for the copy button
copyBtn.addEventListener("click", copyPassword);
  

