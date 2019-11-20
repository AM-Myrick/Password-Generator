// Declare allCharacters object and assign nested arrays
const allCharacters = [
  {
    allLowers: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ]
  },
  {
    allUppers: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ]
  },
  { allNums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
  {
    allSpecials: [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "_",
      "-",
      "+",
      "=",
      "~"
    ]
  }
];

// Generate random password using if statements to control array concatenation
function createPassword() {
  console.log("You made it to createPassword function, hooray!");
  let passwordArray = [];
  if (confirmLower) {
    passwordArray.push(allCharacters[0]);
  }
  console.log(passwordArray);
}

// Check whether user checked at least one checkbox; If not, alert and prevent further action. If they did it correctly, proceed with generating a password.
function checkboxError() {
  let confirmLower = document.getElementById("confirmLower").checked;

  let confirmUpper = document.getElementById("confirmUpper").checked;

  let confirmNumeric = document.getElementById("confirmNumeric").checked;

  let confirmSpecial = document.getElementById("confirmSpecial").checked;

  if (
    confirmLower == false &&
    confirmUpper == false &&
    confirmNumeric == false &&
    confirmSpecial == false
  ) {
    console.log(confirmLower, confirmUpper, confirmNumeric, confirmSpecial);
    alert("Error: Must select at least one type of character.");
  } else {
    createPassword();
  }
}

// When user clicks Generate Password button, check whether user entered a number between 8 and 128 for password length; If not, error alert and prevent further action. If they did it correctly, proceed to checkbox error check.
function lengthError() {
  let passwordLength = document.getElementById("passwordLength");
  if (
    passwordLength.value < 8 ||
    passwordLength.value > 128 ||
    isNaN(passwordLength.value)
  ) {
    alert("Error: Password must have between 8 and 128 characters.");
  } else {
    checkboxError();
  }
}

// Add event for user clicking "Generate Password" button
document
  .getElementById("generatePassword")
  .addEventListener("click", lengthError);
