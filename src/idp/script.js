function init() {
  const { idp } = getUrlParams();
  if (idp) {
    const idpButton = document.getElementById(idp);
    if (idpButton) {
      document.getElementById(
        "loading"
      ).innerHTML = `Redirecting to ${idpButton.innerHTML}...`;
      idpButton?.click();
      return;
    } 
  }
  location.href = "{{LOGIN_URL}}";
}
setTimeout(() => {
  init();
}, 100);

