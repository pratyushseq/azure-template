const remoteUrl = "https://pratyushseq.github.io/azure-template";
const localUrl = "http://localhost:8080";
const url = window.location.hostname === "localhost" ? localUrl : remoteUrl;
document.querySelectorAll("[data-replace]").forEach((el) => {
  el.setAttribute(
    el.dataset.replace,
    el.dataset[el.dataset.replace].replace("__URL__", url)
  );
});

document.querySelectorAll(".helpLink.tiny").forEach((el) => {
  el.parentNode.querySelector("label").appendChild(el);
});
