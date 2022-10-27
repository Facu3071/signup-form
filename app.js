const form = document.querySelector(".form");
const text = document.querySelector(".text-error");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (firstName.value === "") {
    addError("firstname");
    firstName.placeholder = " ";
  } else if (!onlyLetters(firstName.value)) {
    addError("firstname");
  } else {
    removeError("firstname");
  }

  if (lastName.value === "") {
    addError("lastname");
    lastName.placeholder = " ";
  } else if (!onlyLetters(lastName.value)) {
    addError("lastname");
  } else {
    removeError("lastname");
  }

  if (email.value === "") {
    addError("email");
    email.placeholder = "email@example.com";
  } else if (!validateEmail(email.value)) {
    addError("email");
  } else {
    removeError("email");
  }
  if (password.value === "") {
    addError("password");
    password.placeholder = " ";
  } else {
    removeError("password");
  }
});

function addError(input) {
  const formError = form[input].parentNode;
  formError.classList.add("error");
}

function removeError(input) {
  const formError = form[input].parentNode;
  formError.classList.remove("error");
}

function onlyLetters(input) {
  let regex = /^[a-zA-Z]+$/;
  return regex.test(String(input).toLowerCase());
}
function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
