document.querySelectorAll(".helpLink.tiny").forEach((el) => {
  el.parentNode.querySelector("label").appendChild(el);
});

// document
//   .querySelectorAll("#signInName")
//   .forEach((el) => (el.closest(".entry-item").style.display = "none"));

// document
//   .querySelectorAll("#email")
//   .forEach((el) => (el.closest(".attrEntry").style.display = "none"));

