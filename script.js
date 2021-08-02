var generateBtn = document.querySelector("#generate");
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var numberChar = "0123456789";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

function determineLength(){
  passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else{
    alert("Next, please answer Y or N to confim which types of characters will be allowed. If N is answered for all, characters will default to include every type");
    }
    return passwordLength;
}

function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? (Y/N)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Yes or no");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;

    }else {
      alert("Yes or no");
      determineUppercase();
    }
    return uppercaseCheck;
}

function determineLowercase(){
  lowercaseCheck = prompt("Do you want to include lowercase letters in your password? (Y/N)");
    lowercaseCheck = lowercaseCheck.toLowerCase();

    if (lowercaseCheck === null || lowercaseCheck === ""){
      alert("Yes or no");
      determineLowercase();

    }else if (lowercaseCheck === "yes" || lowercaseCheck ==="y"){
      uppercaseCheck = true;
      return lowercaseCheck;

    }else if (lowercaseCheck === "no" || lowercaseCheck ==="n"){
      lowercaseCheck = false;
      return lowercaseCheck;

    }else {
      alert("Yes or no");
      determineLowercase();
    }
    return lowercaseCheck;
}

function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? (Y/N)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Y or N");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;

    }else {
      alert("Please answer Y or N");
      determineNumbers();
    }
    return numberCheck;
}

function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? (Y/N)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Y or N");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;

    }else {
      alert("Please answer Y or N");
      determineSpecial();
    }
    return specialCheck;
}

function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineLowercase();
  console.log(lowercaseCheck)
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

var characters = lowercaseChar;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

}else if (uppercaseCheck){
  characters += uppercaseChar;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters = uppercaseChar + numberChar + specialChar + lowercaseChar;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

function resetText(){
  document.getElementById("password").value = "Your Secure Password";
}

generateBtn.addEventListener("click", writePassword);