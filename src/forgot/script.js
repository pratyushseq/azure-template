const isCodeInputAvailable = (callback) => {
  const interval = setInterval(() => {
    const isAvailable =
      document.getElementById("emailVerificationCode").parentNode.parentNode
        .style.display !== "none";
    if (isAvailable) {
      clearInterval(interval);
      callback();
    }
  }, 100);
};

const init = () => {
  const getUrlParams = () =>
    Object.fromEntries(new URLSearchParams(location.search));
  const { login_hint, email } = getUrlParams();

  document.querySelector(".form").style.visibility = "visible";

  document.getElementById("UserId")?.setAttribute("value", login_hint);
  document.getElementById("email")?.setAttribute("value", email);
  document.getElementById("UserId")?.setAttribute("disabled", "disabled");
  document.getElementById("email")?.setAttribute("disabled", "disabled");

  document.getElementById("UserId_label").style.display = "none";
  document.getElementById("UserId").style.display = "none";

  document.getElementById("continue").innerText = "Sending...";
  document.getElementById("emailVerificationControl_but_send_code").click();

  isCodeInputAvailable(() => {
    setTimeout(() => {
      document.getElementById("email")?.setAttribute("disabled", "disabled");
      document.getElementById("continue").innerText = "Continue";
    }, 100);
  });

  document
    .getElementById("emailVerificationControl_but_send_new_code")
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
};

setTimeout(init, 100);

