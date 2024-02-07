const fs = require("fs-extra");

console.log("Welcome to Azure Templates!");

const html = (await fs.readFile("./src/index.html")).toString();
const testing = (await fs.readFile("./src/testing.html")).toString();
const styles = (await fs.readFile("./src/styles.css")).toString();
const script = (await fs.readFile("./src/script.js")).toString();
const image = await fs.readFile("./assets/home-bg.png");
const imageBase64 = Buffer.from(image).toString("base64");

const finalHtml = html
  .replace("{{BG_IMAGE}}", `data:image/png;base64,${imageBase64}`)
  .replace("{{STYLES}}", `<style>${styles}</style>`)
  .replace("{{SCRIPTS}}", `<script>${script}</script>`);

fs.outputFileSync("./index.html", finalHtml);

const finalTestingHtml = testing
  .replace("{{IMAGE}}", `data:image/png;base64,${imageBase64}`)
  .replace("{{STYLES}}", `<style>${styles}</style>`)
  .replace(
    "{{SCRIPTS}}",
    `<script src="src/testing.js" /><script>${script}</script>`
  );

fs.outputFileSync("./testing.html", finalTestingHtml);

console.log("Done!");

