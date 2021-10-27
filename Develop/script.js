// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //Ask the user for the paramaters (length and type of characters) that will be used in the password
  const length = window.prompt("Choose length of password");
   //Checks to see if the password can be created given the length
   if (length < 8 ||  length > 128) {
    alert("Your password can't be shorter than 8 characters or longer than 128, please submit a new lenght");
    return
  }
  const numbers = window.confirm("Press OK if you want numbers in your password, press Cancel otherwise");
  const specialCharacters = window.confirm("Press OK if you want special characters in your password, press Cancel otherwise");
  const lowerCase = window.confirm("Press OK if you want lower case letters in your password, press Cancel otherwise");
  const upperCase = window.confirm("Press OK if you want upper case letters in your password, press Cancel otherwise");

  var password = generatePassword(length, numbers, specialCharacters, lowerCase, upperCase);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Function responsible for generating the password
var generatePassword = function (passLength, numbers, specialCharacters, lowerCase, upperCase) {

  //Initialize empty variables that will help create the password
  charArray = [];
  let password = "";

  //Fill the array with the ascii numbers for special characters
  if (specialCharacters === true) {
    //Adds one of the characters the user wants to make sure that it has at least one if it's kind
    password = password + String.fromCharCode(Math.floor(Math.random() * (47 - 37) + 37));

    for (let i = 33; i <= 47; i++) {
      charArray.push(i);
      
    }
  
    for (let i = 91; i <= 96; i++) {
      charArray.push(i);
    }
  
    for (let i = 123; i <= 126; i++) {
      charArray.push(i);
   }
  }

  //Fill the array with the ascii numbers for numbers
  if (numbers === true) {
    //Adds one of the characters the user wants to make sure that it has at least one if it's kind
    password = password + String.fromCharCode(Math.floor(Math.random() * (57 - 48) + 48));

    for (let i = 48; i <= 57; i++) {
      charArray.push(i);
    }
  }

  //Fill the array with the ascii numbers for lower case letters
  if (lowerCase === true) {
    //Adds one of the characters the user wants to make sure that it has at least one if it's kind
    password = password + String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97));

    for (let i = 97; i <= 122; i++) {
      charArray.push(i);
    } 
  }

  //Fill the array with the ascii numbers for upper case letters
  if (upperCase === true) {
    //Adds one of the characters the user wants to make sure that it has at least one if it's kind
    password = password + String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
    
    for (let i = 65; i <= 90; i++) {
      charArray.push(i);
    } 
  }

  //Select a random position from the array and convert the value of that position to a character using the ascii chart
  var remainingLength = passLength -password.length;
  for (i = 0; i < remainingLength; i++){

    let position = Math.floor(Math.random() * (charArray.length - 0))

    //Add the selected value from the array to the string to create the password
    password = password + String.fromCharCode(charArray[position])
  }

  //Scrambles the string to make sure that the first poistions arent always of the same type of characters
  password = password.split('').sort(function(){return 0.5-Math.random()}).join('');

  return password;
}


