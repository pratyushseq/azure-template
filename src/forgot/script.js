const init = () => {
  const getUrlParams = () =>
    Object.fromEntries(new URLSearchParams(location.search));
  const { login_hint, email } = getUrlParams();

  document.querySelector(".form").style.visibility = "visible";

  document.getElementById("UserId")?.setAttribute("value", login_hint);
  document.getElementById("email")?.setAttribute("value", email);
  document.getElementById("UserId")?.setAttribute("disabled", "disabled");
  document.getElementById("email")?.setAttribute("disabled", "disabled");
};

setTimeout(init, 100);

