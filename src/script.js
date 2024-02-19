function init() {
  document.querySelectorAll(".helpLink.tiny").forEach((el) => {
    el.parentNode.querySelector("label").appendChild(el);
  });

  const getUrlParams = () =>
    Object.fromEntries(new URLSearchParams(location.search));

  document.getElementById("UserId")?.setAttribute("disabled", "disabled");

  const { login_hint, email } = getUrlParams();

  if (location.pathname === "/testing/" && document.getElementById("UserId")) {
    document.getElementById("UserId").value = decodeURIComponent(login_hint);
  }

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

document.addEventListener("DOMContentLoaded", init, false);

