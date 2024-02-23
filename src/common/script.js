const getUrlParams = () =>
  Object.fromEntries(new URLSearchParams(location.search));

const commonInit = () => {
  const { login_hint } = getUrlParams();

  // document.querySelectorAll(".helpLink.tiny")?.forEach((el) => {
  //   el.parentNode.querySelector("label")?.appendChild(el);
  // });

  document.getElementById("UserId")?.setAttribute("disabled", "disabled");

  if (location.hostname === "localhost" && document.getElementById("UserId")) {
    document.getElementById("UserId").value = decodeURIComponent(login_hint);
  }

  document.querySelector(".form").style.visibility = "visible";

  const url = "{{BASE_URL}}/idm/v1/contacts/verify-email";

  if (localStorage.logo) {
    document.getElementById("logo").src = localStorage.logo;
  }

  document.getElementById("back").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    // go back to last page
    console.log("hello");
    window.history.back();
  });

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
};

setTimeout(commonInit, 100);

