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

  const userId = document.getElementById("UserId");
  if (userId) {
    userId.parentNode.appendChild(emailLabel);
    userId.parentNode.appendChild(emailInput);

    document.querySelector('label[for="UserId"]').style.display = "none";
    userId.style.display = "none";
    userId.value = login_hint;
  }

  const signInName = document.getElementById("signInName");
  if (signInName) {
    signInName.parentNode.appendChild(emailLabel);
    signInName.parentNode.appendChild(emailInput);

    document.querySelector('label[for="signInName"]').style.display = "none";
    signInName.style.display = "none";
    signInName.value = login_hint;
  }

  document.getElementById("password").focus();

  const forgotPassword = document.getElementById("forgotPassword");
  forgotPassword.setAttribute(
    "href",
    forgotPassword.getAttribute("href") +
      `&login_hint=${login_hint}&email=${email}`
  );

  const checkForError = (cb) => {
    if (document.querySelector(".error.pageLevel").style.display === "block") {
      cb();
    }
  };

  document
    .getElementById("localAccountForm")
    .addEventListener("submit", () => {
      const button = document.getElementById("next");
      button.innerText = "Signing in...";
      button.setAttribute("disabled", true);

      const interval = setInterval(() => {
        checkForError(() => {
          button.innerText = "Sign in";
          button.removeAttribute("disabled");
          clearInterval(interval);
        });
      }, 100);
    });
}

setTimeout(init, 100);





