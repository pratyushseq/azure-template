const getUrlParams = () =>
  Object.fromEntries(new URLSearchParams(location.search));

function init() {
  const { idp } = getUrlParams();
  const idpButton = document.getElementById(idp);
  if (idpButton) {
    document.getElementById(
      "loading"
    ).innerHTML = `Redirecting to ${idpButton.innerHTML}...`;
    idpButton?.click();
  }
}
setTimeout(() => {
  init();
}, 100);

