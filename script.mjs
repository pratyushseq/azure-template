const fs = require("fs-extra");

const main = (await fs.readFile("./src/index.html")).toString();
const testing = (await fs.readFile("./src/testing.html")).toString();
const styles = (await fs.readFile("./src/styles.css")).toString();
const script = (await fs.readFile("./src/script.js")).toString();
const image = await fs.readFile("./assets/home-bg.png");
const imageBase64 = Buffer.from(image).toString("base64");

const formatHtml = (html) =>
  html
    .replace("{{BG_IMAGE}}", `data:image/png;base64,${imageBase64}`)
    .replace("{{STYLES}}", `<style>${styles}</style>`)
    .replace("{{SCRIPTS}}", `<script>${script}</script>`);

const finalHtml = formatHtml(main);
const finalTestingHtml = formatHtml(testing);

fs.outputFileSync("./index.html", finalHtml);
fs.outputFileSync("./testing/index.html", finalTestingHtml);

