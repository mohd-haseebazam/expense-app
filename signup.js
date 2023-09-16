// login form

let login_users = [];
let emailElementLogin = document.getElementById("emailLogin");
let passwordElementLogin = document.getElementById("passwordLogin");

// Validation
function loginFormSign(event) {
  event.preventDefault();
  let emailLogin = emailElementLogin.value;
  let passwordLogin = passwordElementLogin.value;

  let emailErrorLogin = document.getElementsByClassName("emailErrorLogin");
  emailErrorLogin[0].classList.remove("show");
  emailErrorLogin[1].classList.remove("show");
  if (emailLogin.length == 0) {
    emailErrorLogin[0].classList.add("show");
  } else if (!emailLogin.includes("@")) {
    emailErrorLogin[1].classList.add("show");
  } else {
    emailErrorLogin[0].classList.remove("show");
    emailErrorLogin[1].classList.remove("show");
  }

  let passwordErrorLogin =
    document.getElementsByClassName("passwordErrorLogin");
  passwordErrorLogin[0].classList.remove("show");
  passwordErrorLogin[1].classList.remove("show");
  if (!emailLogin.length == 0 && !!emailLogin.includes("@")) {
    if (passwordLogin.length == 0) {
      passwordErrorLogin[0].classList.add("show");
    } else if (passwordLogin.length < 8) {
      passwordErrorLogin[1].classList.add("show");
    } else {
      passwordErrorLogin[0].classList.remove("show");
      passwordErrorLogin[1].classList.remove("show");
    }
  }

  if (!!emailLogin.includes("@") && !(passwordLogin.length < 8)) {
    login_users = { emailLogin, passwordLogin };

    localStorage.setItem("login_users", JSON.stringify(login_users));

    emailElementLogin.value = "";
    passwordElementLogin.value = "";
    window.location = "http://127.0.0.1:5500/dashboard/todo.html";
  }
}
function loginSign(event) {
  event.preventDefault();
  document.getElementById("loginForm").classList.remove("visible");
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signUpForm").classList.remove("hidden");
  document.getElementById("signUpForm").classList.add("visible");
}
function logOut() {
  localStorage.removeItem("login_users");
}
logOut();

// Signupform

let signin_users = [];
let userNameElementSign = document.getElementById("usernameSign");
let emailElementSign = document.getElementById("emailSign");
let passwordElementSign = document.getElementById("passwordSign");
let correctPasswordElement = document.getElementById("correctPasswordSign");

// Validation
function signForm(event) {
  event.preventDefault();
  let userNameSign = userNameElementSign.value;
  let emailSign = emailElementSign.value;
  let passwordSign = passwordElementSign.value;
  let correctPassword = correctPasswordElement.value;

  let nameErrorSign = document.getElementsByClassName("nameErrorSign");
  nameErrorSign[0].classList.remove("show");
  nameErrorSign[1].classList.remove("show");
  if (userNameSign.length == 0) {
    nameErrorSign[0].classList.add("show");
  } else if (userNameSign.length < 3) {
    nameErrorSign[1].classList.add("show");
  } else {
    nameErrorSign[0].classList.remove("show");
    nameErrorSign[1].classList.remove("show");
  }

  let emailErrorSign = document.getElementsByClassName("emailErrorSign");
  emailErrorSign[0].classList.remove("show");
  emailErrorSign[1].classList.remove("show");
  if (!userNameSign.length == 0 && !(userNameSign.length < 3)) {
    if (emailSign.length == 0) {
      emailErrorSign[0].classList.add("show");
    } else if (!emailSign.includes("@")) {
      emailErrorSign[1].classList.add("show");
    } else {
      emailErrorSign[0].classList.remove("show");
      emailErrorSign[1].classList.remove("show");
    }
  }

  let passwordErrorSign = document.getElementsByClassName("passwordErrorSign");
  passwordErrorSign[0].classList.remove("show");
  passwordErrorSign[1].classList.remove("show");
  if (!emailSign.length == 0 && !!emailSign.includes("@")) {
    if (passwordSign.length == 0) {
      passwordErrorSign[0].classList.add("show");
    } else if (passwordSign.length < 8) {
      passwordErrorSign[1].classList.add("show");
    } else {
      passwordErrorSign[0].classList.remove("show");
      passwordErrorSign[1].classList.remove("show");
    }
  }

  let correctPasswordErrorOne = document.getElementsByClassName(
    "correctPasswordErrorOne"
  );
  correctPasswordErrorOne[0].classList.remove("show");
  correctPasswordErrorOne[1].classList.remove("show");
  if (!passwordSign.length == 0 && !(passwordSign.length < 8)) {
    if (correctPassword.length == 0) {
      correctPasswordErrorOne[0].classList.add("show");
    } else if (correctPassword.length < 8) {
      correctPasswordErrorOne[1].classList.add("show");
    } else {
      correctPasswordErrorOne[0].classList.remove("show");
      correctPasswordErrorOne[1].classList.remove("show");
    }
  }

  let correctPasswordErrorTwo = document.getElementsByClassName(
    "correctPasswordErrorTwo"
  );
  if (!correctPassword.length == 0 && !(correctPassword.length < 8)) {
    correctPasswordErrorTwo[0].classList.remove("show");
    if (passwordSign !== correctPassword) {
      correctPasswordErrorTwo[0].classList.add("show");
    } else {
      correctPasswordErrorTwo[0].classList.remove("show");
    }
  }

  if (
    !(userNameSign.length < 3) &&
    !!emailSign.includes("@") &&
    !(passwordSign.length < 8) &&
    !(correctPassword.length < 8) &&
    passwordSign == correctPassword
  ) {
    signin_users = { userNameSign, emailSign, passwordSign, correctPassword };
    localStorage.setItem("signin_users", JSON.stringify(signin_users));

    userNameElementSign.value = "";
    emailElementSign.value = "";
    passwordElementSign.value = "";
    correctPasswordElement.value = "";
    window.location = "http://127.0.0.1:5500/signup.html";
  }
}

function signLogin(event) {
  event.preventDefault();
  document.getElementById("signUpForm").classList.remove("visible");
  document.getElementById("signUpForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("visible");
}
