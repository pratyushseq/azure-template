const fs = require("fs-extra");

const mode = process.argv[3];
const env = process.env.ENVIRONMENT || process.argv[4];

console.clear();

const isLocal = mode === "local";

await $`rm -rf ./dist`;

const urlFat = (env, url) =>
  env === "production"
    ? `https://${url}.sequoia.com`
    : `https://${url}-${env}.sequoia-development.com`;

const getUrls = (env) => ({
  LOGIN_URL: urlFat(env, "login-web"),
  BASE_URL: urlFat(env, "hrx-backend"),
});

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
    .replace("{{BASE_URL}}", getUrls(env).BASE_URL)
    .replace("{{LOGIN_URL}}", getUrls(env).LOGIN_URL);

const folders = fs
  .readdirSync("./src", {})
  .filter((item) => !item.startsWith(".") && item !== "common")
  .filter((item) => fs.lstatSync(path.resolve("./src", item)).isDirectory());

const testingJs = fs.readFileSync(`./src/testing.js`)?.toString();

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

  fs.outputFileSync(
    `./dist/${folderString}/index.html`,
    formatHtml({
      html,
      script: js,
      styles: css,
      env,
    })
  );

  if (isLocal) {
    fs.outputFileSync(
      `./dist/testing${folderString}/index.html`,
      formatHtml({
        html,
        script: testingJs + js,
        styles: css,
        env: "dev",
      })
    );
  }
});

if (isLocal) {
  await $`http-server ./dist -p 8080 -s -g -b`;
  console.log("Updated");
}




