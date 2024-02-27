const fs = require("fs-extra");

console.clear();

const loginUrl = {
  dev: "https://login-web-dev.sequoia-development.com",
  stage: "https://login-web-stage.sequoia-development.com",
  production: "https://login.sequoia.com",
};

const baseUrlMap = {
  dev: "https://hrx-backend-dev.sequoia-development.com",
  stage: "https://hrx-backend-stage.sequoia-development.com",
  production: "https://hrx-backend.sequoia.com",
};

const envs = Object.keys(baseUrlMap);

const formatHtml = ({ env, html, script, styles }) =>
  html
    .replace(
      "{{STYLES}}",
      `<style>
    ${styles}
    </style>`
    )
    .replace(
      "{{SCRIPTS}}",
      `<script defer>
    ${script}
    </script>`
    )
    .replace("{{BASE_URL}}", baseUrlMap[env])
    .replace("{{LOGIN_URL}}", loginUrl[env]);

const folders = fs
  .readdirSync("./src", {})
  .filter((item) => !item.startsWith(".") && item !== "common")
  .filter((item) => fs.lstatSync(path.resolve("./src", item)).isDirectory());

console.log(folders);

const testingJs = fs.readFileSync(`./src/testing.js`)?.toString();

console.log(folders);

folders.forEach((folder) => {
  let html = "",
    js = "",
    css = "";

  try {
    html = fs.readFileSync(`./src/${folder}/index.html`)?.toString();
  } catch (_e) {}
  try {
    js = fs.readFileSync(`./src/${folder}/script.js`)?.toString();
  } catch (_e) {}
  try {
    css = fs.readFileSync(`./src/${folder}/styles.css`)?.toString();
  } catch (_e) {}

  if (!html) {
    html = fs.readFileSync(`./src/common/index.html`)?.toString();
  }
  js = fs.readFileSync(`./src/common/script.js`)?.toString() + js;
  css = fs.readFileSync(`./src/common/styles.css`)?.toString() + css;

  const folderString = folder === "home" ? "" : `/${folder}`;

  envs.forEach((env) => {
    fs.outputFileSync(
      `./${env}${folderString}/index.html`,
      formatHtml({
        html,
        script: js,
        styles: css,
        env,
      })
    );
  });

  fs.outputFileSync(
    `./testing${folderString}/index.html`,
    formatHtml({
      html,
      script: testingJs + js,
      styles: css,
      env: "dev",
    })
  );
});

console.log("Updated");

