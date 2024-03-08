const isCodeInputAvailable = (callback) => {
  if (!document.getElementById("email_ver_input")) return;

  const interval = setInterval(() => {
    const isAvailable =
      document.getElementById("email_ver_input").parentNode.parentNode.style
        .display !== "none";
    if (isAvailable) {
      clearInterval(interval);
      callback();
    }
  }, 100);
};

const forgotInit = () => {
  const getUrlParams = () =>
    Object.fromEntries(new URLSearchParams(location.search));
  const { login_hint, email } = getUrlParams();

  document.querySelector(".form").style.visibility = "visible";

  const signInName = document.getElementById("signInName");
  if (signInName) {
    signInName?.setAttribute("value", login_hint);
    signInName?.setAttribute("disabled", "disabled");
  }
  if (document.getElementById("signInName_label")) {
    document.getElementById("signInName_label").style.display = "none";
  }

  const emailField = document.getElementById("email");
  if (emailField) {
    emailField?.setAttribute("value", email);
    emailField?.setAttribute("disabled", "disabled");
  }

  if (document.getElementById("UserId")) {
    document.getElementById("UserId").style.display = "none";
  }

  if (document.getElementById("continue"))
    document.getElementById("continue").innerText = "Sending...";
  if (document.getElementById("email_ver_but_send"))
    document.getElementById("email_ver_but_send").click();
  if (document.getElementById("email_ver_input"))
    document.getElementById("email_ver_input").setAttribute("autofocus", true);

  isCodeInputAvailable(() => {
    setTimeout(() => {
      document.getElementById("email")?.setAttribute("disabled", "disabled");
      document.getElementById("continue").innerText = "Continue";
    }, 100);
  });

  if (document.getElementById("email_ver_but_resend"))
    document
      .getElementById("email_ver_but_resend")
      .addEventListener("click", () => {
        document.getElementById("continue").innerText = "Sending...";

        isCodeInputAvailable(() => {
          setTimeout(() => {
            document
              .getElementById("email")
              ?.setAttribute("disabled", "disabled");
            document.getElementById("continue").innerText = "Continue";
          }, 100);
        });
      });

  // console.log("hello");
  // document
  //   .getElementById("forgotPassword")
  //   .parentNode.appendChild(document.getElementById("ForgotPasswordExchange"));
};

console.log("boo");
setTimeout(forgotInit, 100);



