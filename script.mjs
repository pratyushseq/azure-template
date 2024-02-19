const fs = require("fs-extra");

console.clear();

const main = (await fs.readFile("./src/index.html")).toString();
const idp = (await fs.readFile("./src/idp.html")).toString();
const testing = (await fs.readFile("./src/testing.html")).toString();
const styles = (await fs.readFile("./src/styles.css")).toString();
const script = (await fs.readFile("./src/script.js")).toString();

const baseUrlMap = {
  dev: "https://hrx-backend-dev.sequoia-development.com",
  stage: "https://hrx-backend-stage.sequoia-development.com",
  production: "https://hrx-backend.sequoia.com",
};

const formatHtml = (html, env) =>
  html
    .replace(
      "{{STYLES}}",
      `<style>
    ${styles}
    </style>`
    )
    .replace(
      "{{SCRIPTS}}",
      `<script>
    ${script}
    </script>`
    )
    .replace("{{BASE_URL}}", baseUrlMap[env]);

const envs = Object.keys(baseUrlMap);

envs.forEach((env) => {
  fs.outputFileSync(`./${env}/index.html`, formatHtml(main, env));
  fs.outputFileSync(`./${env}/idp/index.html`, formatHtml(idp, env));
});

const finalTestingHtml = formatHtml(testing);
fs.outputFileSync("./testing/index.html", formatHtml(testing, "stage"));

