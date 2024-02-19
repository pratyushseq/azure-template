const forms = [
  {
    name: "Signin",
    content: `
      <div class="heading">
        <h1 role="heading">Sign in</h1>
      </div>
      <form id="localAccountForm" class="localAccount" aria-label="Sign in with your username">
        <div class="intro">
          <h2>
            Sign in with your username
          </h2>
        </div>
        <div class="error pageLevel" aria-hidden="true" role="alert">
          <p></p>
        </div>
        <div class="entry">
          <div class="entry-item">
            <label for="UserId">
              Username
            </label>
            <div class="error itemLevel" aria-hidden="true" role="alert">
              <p></p>
            </div>
            <input type="text" id="UserId" name="Username" title="Please enter a valid username" pattern="^[a-zA-Z0-9]+[a-zA-Z0-9_-]*$" autofocus="" placeholder="Username" aria-label="Username">
          </div>
            <div class="entry-item">
              <div class="password-label">
                <label for="password">Password</label>
                    <a id="forgotPassword" href="/canopystaging.onmicrosoft.com/B2C_1_Test_Signin_Feb_13/api/CombinedSigninAndSignup/forgotPassword?csrf_token=eUFTRWtIZlJ0RlljbDNKSk1CWjN3ZzRFaUE3NlZLTEY0MFRMaHd1clFhcGJ4Tjg5TUdlL3BvY3M1dXdCUkhEK1BXS3ZUeEk0V0pHMTZmcUdaSlFpdWc9PTsyMDI0LTAyLTE5VDA2OjUxOjI0Ljk2NTU3NTlaOzJUa1BIODM1ZmxaeS9JU3V5S2szTmc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiJlOWJjOGJiMS1jZjM0LTQwMjYtYjkwZS1kYzdkZmU1YmE3OTUifQ&amp;p=B2C_1_Test_Signin_Feb_13">Forgot your password?</a>
                              </div>
              <div class="error itemLevel" aria-hidden="true">
                <p role="alert"></p>
              </div>
              <input type="password" id="password" name="Password" placeholder="Password" aria-label="Password" autocomplete="current-password" aria-required="true">
                          </div>
          <div class="working"></div>
              <div class="rememberMe">
                <input id="rememberMe" type="checkbox" name="rememberMe">
                <label for="rememberMe">Keep me signed in</label>
              </div>


          <div class="buttons">
            <button id="next" type="submit" form="localAccountForm">Sign in</button>
          </div>
        </div>
      </form>`,
  },
  {
    name: "Signin / Error",
    content: `<div class="heading">
        <h1 role="heading">Sign in</h1>
      </div>
      <form id="localAccountForm" class="localAccount" aria-label="Sign in with your username">
        <div class="intro">
          <h2>
            Sign in with your username
          </h2>
        </div>
        <div class="error pageLevel" aria-hidden="true" role="alert" style="display: none;">
          <p></p>
        </div>
        <div class="entry">
          <div class="entry-item">
            <label for="UserId">
              Username
            </label>
            <div class="error itemLevel" aria-hidden="false" role="alert" style="display: block;">
              <p>Please enter your Username</p>
            </div>
            <input type="text" id="UserId" name="Username" title="Please enter a valid username" pattern="^[a-zA-Z0-9]+[a-zA-Z0-9_-]*$" autofocus="" placeholder="Username" aria-label="Username" class="highlightError">
          </div>
            <div class="entry-item">
              <div class="password-label">
                <label for="password">Password</label>
                    <a id="forgotPassword" href="/canopystaging.onmicrosoft.com/B2C_1_Test_Signin_Feb_13/api/CombinedSigninAndSignup/forgotPassword?csrf_token=eUFTRWtIZlJ0RlljbDNKSk1CWjN3ZzRFaUE3NlZLTEY0MFRMaHd1clFhcGJ4Tjg5TUdlL3BvY3M1dXdCUkhEK1BXS3ZUeEk0V0pHMTZmcUdaSlFpdWc9PTsyMDI0LTAyLTE5VDA2OjUxOjI0Ljk2NTU3NTlaOzJUa1BIODM1ZmxaeS9JU3V5S2szTmc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiJlOWJjOGJiMS1jZjM0LTQwMjYtYjkwZS1kYzdkZmU1YmE3OTUifQ&amp;p=B2C_1_Test_Signin_Feb_13">Forgot your password?</a>
                              </div>
              <div class="error itemLevel" aria-hidden="false" style="display: block;">
                <p role="alert">Please enter your password</p>
              </div>
              <input type="password" id="password" name="Password" placeholder="Password" aria-label="Password" autocomplete="current-password" aria-required="true" class="highlightError">
                          </div>
          <div class="working"></div>
              <div class="rememberMe">
                <input id="rememberMe" type="checkbox" name="rememberMe">
                <label for="rememberMe">Keep me signed in</label>
              </div>


          <div class="buttons">
            <button id="next" type="submit" form="localAccountForm">Sign in</button>
          </div>
        </div>
      </form>`,
  },
];

const pageWrapper = document.querySelector(".page-wrapper");
pageWrapper.innerHTML = forms.reduce(
  (str, item) =>
    (str += `
    <div class="form-wrapper">
      <h3>${item.name}</h3>
      <div class="form">
        <img src="https://media.sequoia.com/public/logo_dark.svg" alt="company-logo" id="logo" />
        <h2 class="header">Login</h2>
        <div>${item.content}</div>
        <a
          href="https://login-web-dev.sequoia-development.com/forgot"
          class="forgot"
        >
          Forgot Password
        </a>
      </div>
    </div>
    `),
  ""
);