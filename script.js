//First Name
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");

//Last name
let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
let emptyLastNameError = document.getElementById("empty-last-name");
//Submit
let submitButton = document.getElementById("submit-button");

//Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

//Email
let confirmemailInput = document.getElementById("confirmemail");
let confirmemailError = document.getElementById("confirmemail-error");
let emptyconfirmemailError = document.getElementById("empty-confirmemail"); 

 const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");
  
  passwordInput.addEventListener("input", function() {
    const password = passwordInput.value;
    if (password.length < 8 || password.length > 20) {
      passwordError.textContent = "Password must be between 8 and 20 characters long.";
    } else {
      passwordError.textContent = "";
    }
  });

//Text verification (if input contains only text)
const textVerify = (text) => {
  const regex = /^[a-zA-Z]{3,}$/;
  return regex.test(text);
};

//Email verification
const emailVerify = (input) => {
  const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
  return regex.test(input);
};
const confirmemailVerify = (input) => {
  const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
  return regex.test(input);
};
//For empty input - accepts(input,empty error for that input and other errors)
const emptyUpdate = (
  inputReference,
  emptyErrorReference,
  otherErrorReference
) => {
  if (!inputReference.value) {
    //input is null/empty
    emptyErrorReference.classList.remove("hide");
    otherErrorReference.classList.add("hide");
    inputReference.classList.add("error");
  } else {
    //input has some content
    emptyErrorReference.classList.add("hide");
  }
};

//For error styling and displaying error message
const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove("hide");
  inputReference.classList.remove("valid");
  inputReference.classList.add("error");
};

//For no errors
const validInput = (inputReference) => {
  inputReference.classList.remove("error");
  inputReference.classList.add("valid");
};
//First name
firstNameInput.addEventListener("input", () => {
  if (textVerify(firstNameInput.value)) {
    //If verification returns true
    firstNameError.classList.add("hide");
    validInput(firstNameInput);
  } else {
    //for false
    errorUpdate(firstNameInput, firstNameError);
    //empty checker
    emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError);
  }
});

//Last name
lastNameInput.addEventListener("input", () => {
  if (textVerify(lastNameInput.value)) {
    lastNameError.classList.add("hide");
    validInput(lastNameInput);
  } else {
    errorUpdate(lastNameInput, lastNameError);
    emptyUpdate(lastNameInput, emptyLastNameError, lastNameError);
  }
});
//Email
emailInput.addEventListener("input", () => {
  if (emailVerify(emailInput.value)) {
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    errorUpdate(emailInput, emailError);
    emptyUpdate(emailInput, emptyEmailError, emailError);
  }
});
//Email
confirmemailInput.addEventListener("input", () => {
  if (emailVerify(confirmemailInput.value)) {
    confirmemailError.classList.add("hide");
    validInput(confirmemailInput);
  } else {
    errorUpdate(confirmemailInput, confirmemailError);
    emptyUpdate(confirmemailInput, emptyconfirmEmailError, confirmemailError);
  }
});
  passwordInput.addEventListener("input", function() {
    const password = passwordInput.value;
    if (password.length < 8 || password.length > 20) {
      passwordError.textContent = "Password must be between 8 and 20 characters long.";
    } else {
      passwordError.textContent = "";
      const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");
    }
  });


//Submit button
submitButton.addEventListener("click", () => {
  if (validClasses.length == 6 && invalidClasses.length == 0) {
    alert("Success");
  } else {
    alert("Error");
  }
});

