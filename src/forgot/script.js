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

  // document.getElementById("emailVerificationControl_but_send_code").click();
  document.getElementById("emailVerificationControl_but_send_code").innerText =
    "Sending...";
};

setTimeout(init, 100);

