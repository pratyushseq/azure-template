function init() {
  document.querySelectorAll(".helpLink.tiny")?.forEach((el) => {
    el.parentNode.querySelector("label")?.appendChild(el);
  });

  const getUrlParams = () =>
    Object.fromEntries(new URLSearchParams(location.search));
  const { login_hint, email } = getUrlParams();

  document.getElementById("UserId")?.setAttribute("disabled", "disabled");

  if (location.hostname === "localhost" && document.getElementById("UserId")) {
    document.getElementById("UserId").value = decodeURIComponent(login_hint);
  }

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

  document.querySelector(".form").style.visibility = "visible";

  console.log({ login_hint, email });

  const url = "{{BASE_URL}}/idm/v1/contacts/verify-email";

  if (localStorage.logo) {
    document.getElementById("logo").src = localStorage.logo;
  }

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((res) => res.json())
    .then((data) => {
      const {
        data: { companyLogo },
      } = data;
      console.log(companyLogo);
      localStorage.setItem("logo", companyLogo);
      document.getElementById("logo").src = localStorage.logo;
    })
    .catch((err) => {
      console.error(err);
    });

  console.log("Welcome to Sequoia!");
}

setTimeout(() => {
  init();
}, 100);

