var characterLength = 8;
var answer = [];

var specialChar = ['!','@','#','$','%','^','&','*','(',')','<','>',];
var lowerCase = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var number = ['1', '2','3','4','5','6','7','8','9','0',];




function showPromt(){
  answer = [];
  
  characterLength = parseInt (prompt("How many charcaters do you want your password to be? (8 -128 characters"));
   if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Character length has to be a number, 8 - 128 characters. Please try again.");
      return false;
   }

    if (confirm("Would you like lowercase letters in your password?")){
      choiceArr = answer.concat(lowerCase);
    }
    if (confirm("Would you like uppercase letters in your password?")){
      choiceArr = answer.concat(upperCase);
    }
      if (confirm("Would you like special characters in your password?")){
        answer = answer.concat(specialChar);
      }

      if (confirm("Would you like numbers in your password?")){
        answer = answer.concat(number);
      }
      return true;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");
// add fuction for generate password
function generatePassword(){
console.log("hey! You clicked the button");
// 1. Prompot the user for the password criteria - 
//    a. Password length 8 < 128
//    b. Lowercase, uppercase, numbers, special characters - varibles + arrays
// 2. Validate the input.
// 3. Generate password based on criteria
// 4. Display password to the page

return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var correctPrompts = prompt(); //retunrs true or false
  
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
