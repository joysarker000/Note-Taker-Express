// Assignment Code
var generateBtn = document.querySelector("#generate");
var charactersArray = "!@#$%^&*()".split("");
var upperLettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerLettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
var numbersArray = "1234567890".split("");
function generatePassword() {
  // prompt the user to choose the length of the password
  var message = "please pick a length for the password";
  var passLength = document.getElementById("length").value;
  //console.log(passLength);
  // get checkbox status from the DOM
  var numbers = document.getElementById("num").checked;
  var upCase = document.getElementById("upCase").checked;
  var lowCase = document.getElementById("lowCase").checked;
  var spcChar = document.getElementById("spcChar").checked;
  //make sure the user checks at least one box to generate a password
  if (numbers || upCase || lowCase || spcChar) {
    //variable to store the new password
    var passwordNew = [];
    // big pool will contain all the pools the user chose to get characters from
    var bigPool = [];
    // if selected make sure at least one number is in the mix
    if (numbers) {
      passwordNew.push(
        numbersArray[Math.floor(Math.random() * numbersArray.length)]
      );
      //update password length
      passLength--;
      // add the numbers to the big pool
      bigPool = bigPool.concat(numbersArray);
      //console.log(bigPool);
    }
    // if selected make sure at least one uppercase letter is in the mix
    if (upCase) {
      passwordNew.push(
        upperLettersArray[Math.floor(Math.random() * upperLettersArray.length)]
      );
      //update password length
      passLength--;
      // add the uppercase letters to the big pool
      bigPool = bigPool.concat(upperLettersArray);
      //console.log(bigPool);
    }
    // if selected make sure at least one lowercase is in the mix
    if (lowCase) {
      passwordNew.push(
        lowerLettersArray[Math.floor(Math.random() * lowerLettersArray.length)]
      );
      //update password length
      passLength--;
      // add the lower letters  to the big pool
      bigPool = bigPool.concat(lowerLettersArray);
      //console.log(bigPool);
    }
    // if selected make sure at least one special character is in the mix
    if (spcChar) {
      passwordNew.push(
        charactersArray[Math.floor(Math.random() * charactersArray.length)]
      );
      //update password length
      passLength--;
      // add the special characters  to the big pool
      bigPool = bigPool.concat(charactersArray);
      //console.log(bigPool);
    }
    // a pool to fill the rest of the password
    console.log(bigPool);
    for (let i = 0; i < passLength; i++) {
      passwordNew.push(bigPool[Math.floor(Math.random() * bigPool.length)]);
      //console.log(passLength);
    }
    //console.log(passLength);
    //console.log(passwordNew);
    return passwordNew.join("");
  } else {
    return "You have to choose at least one criteria";
  }
}
// transfer the password value to the html file
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
