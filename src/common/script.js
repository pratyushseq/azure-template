const getUrlParams = () =>
  Object.fromEntries(new URLSearchParams(location.search));

const commonInit = () => {
  const { login_hint, email } = getUrlParams();

  // document.querySelectorAll(".helpLink.tiny")?.forEach((el) => {
  //   el.parentNode.querySelector("label")?.appendChild(el);
  // });

  // create a label called "Email" and input with id "email" and append to UserId field
  const emailLabel = document.createElement("label");
  if (emailLabel) {
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email";
  }
  const emailInput = document.createElement("input");
  if (emailInput) {
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("value", email);
    emailInput.setAttribute("disabled", "disabled");
  }

  const userId = document.getElementById("UserId");
  if (userId) {
    userId.style.display = "none";
  }
  const signInName = document.getElementById("signInName");
  if (signInName) {
    signInName.style.display = "none";
  }

  document.querySelector(".form").style.visibility = "visible";

  const url = "{{BASE_URL}}/idm/v1/contacts/verify-email";

  if (localStorage.logo) {
    document.getElementById("logo").src = localStorage.logo;
  }

  if (email) {
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
  }

  document.getElementById("back").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    // go back to last page
    console.log("hello");
    window.history.back();
  });

  console.log("Welcome to Sequoia!");
};

setTimeout(commonInit, 100);

