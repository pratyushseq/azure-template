function init() {
  const { login_hint, email } = getUrlParams();

  // create a label called "Email" and input with id "email" and append to UserId field
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email";
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("value", email);
  emailInput.setAttribute("disabled", "disabled");

  document.getElementById("UserId").parentNode.appendChild(emailLabel);
  document.getElementById("UserId").parentNode.appendChild(emailInput);

  document.querySelector('label[for="UserId"]').style.display = "none";
  document.getElementById("UserId").style.display = "none";

  document.getElementById("password").focus();

  const forgotPassword = document.getElementById("forgotPassword");
  forgotPassword.setAttribute(
    "href",
    forgotPassword.getAttribute("href") +
      `&login_hint=${login_hint}&email=${email}`
  );
}

setTimeout(init, 100);

