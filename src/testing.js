const forms = [
  {
    id: "home",
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
            <input type="text" id="UserId" name="Username" title="Please enter a valid username" pattern="^[a-zA-Z0-9]+[a-zA-Z0-9_-]*$" placeholder="Username" aria-label="Username">
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
    id: "home-error",
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
            <input type="text" id="UserId" name="Username" title="Please enter a valid username" pattern="^[a-zA-Z0-9]+[a-zA-Z0-9_-]*$" placeholder="Username" aria-label="Username" class="highlightError">
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
  {
    id: "idp",
    name: "IDP",
    content: `<div class="claims-provider-list-buttons social" aria-label="Sign in with your social account" role="form">
          <div class="intro">
            <h2 aria-level="1">Sign in with your social account</h2>
          </div>
          <div class="options">
              <div>
                  <button class="accountButton firstButton claims-provider-selection" id="FacebookExchange" role="link">Facebook</button>
              </div>
                          <div>
                  <button class="accountButton claims-provider-selection" id="ContosoExchange" role="link">Auth0</button>
              </div>
                      </div>
        </div>

        <div class="divider">
          <h2>OR</h2>
        </div>
      <form id="localAccountForm" action="JavaScript:void(0);" class="localAccount" aria-label="Sign in with your email address">
        <div class="intro">
          <h2 aria-level="1">
            Sign in with your email address
          </h2>
        </div>
        <div class="error pageLevel" aria-hidden="true" role="alert" style="display: none;">
          <p></p>
        </div>
        <div class="entry">
          <div class="entry-item">
            <label for="signInName">
              Email Address
            </label>
            <div class="error itemLevel" aria-hidden="true" role="alert" style="display: none;">
              <p></p>
            </div>
            <input type="text" id="signInName" name="Email Address" title="Please enter a valid Email Address" placeholder="Email Address" aria-label="Email Address">
          </div>
            <div class="entry-item">
              <div class="password-label">
                <label for="password">Password</label>
                    <a id="forgotPassword" href="/canopystaging.onmicrosoft.com/B2C_1A_signup_signin/api/CombinedSigninAndSignup/forgotPassword?csrf_token=empHR1c2TDZCK2lLdldpU0p2NUVqTmxKeGw2aWhpOGIrVGUxUzBneC9WSkI2YU1pSmQySko0SGxDcElMcWd1RldZbHhPbjZDL0k3VGtTbzYyNk84M2c9PTsyMDI0LTAyLTIxVDA1OjI1OjE3LjkzNTM5MTFaO3N5bXZPSGJaSXIxOTRWMWVwVGxJcHc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiJmODFkMWZmNS02OGM3LTQzMmMtOGQ2Ni1mMjM3OWMwYmIzYTIifQ&amp;p=B2C_1A_signup_signin">Forgot your password?</a>
                              </div>
              <div class="error itemLevel" aria-hidden="true" style="display: none;">
                <p role="alert"></p>
              </div>
              <input type="password" id="password" name="Password" placeholder="Password" aria-label="Password" autocomplete="current-password" aria-required="true">
                          </div>
          <div class="working"></div>


          <div class="buttons">
            <button id="next" type="submit" form="localAccountForm">Sign in</button>
          </div>
        </div>
              <div class="divider">
                <h2>OR</h2>
              </div>
              <div class="create">
                <p>
                  Don't have an account?<a id="createAccount" href="/canopystaging.onmicrosoft.com/B2C_1A_signup_signin/api/CombinedSigninAndSignup/unified?local=signup&amp;csrf_token=empHR1c2TDZCK2lLdldpU0p2NUVqTmxKeGw2aWhpOGIrVGUxUzBneC9WSkI2YU1pSmQySko0SGxDcElMcWd1RldZbHhPbjZDL0k3VGtTbzYyNk84M2c9PTsyMDI0LTAyLTIxVDA1OjI1OjE3LjkzNTM5MTFaO3N5bXZPSGJaSXIxOTRWMWVwVGxJcHc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiJmODFkMWZmNS02OGM3LTQzMmMtOGQ2Ni1mMjM3OWMwYmIzYTIifQ&amp;p=B2C_1A_signup_signin">Sign up now</a>
                </p>
              </div>
      </form>`,
  },
  {
    id: "forgot",
    name: "Forgot Password",
    content: `<div class="claims-provider-list-buttons social" aria-label="Sign in with your social account" role="form">
          <div class="intro">
            <h2 aria-level="1">Sign in with your social account</h2>
          </div>
          <div class="options">
              <div>
                  <button class="accountButton firstButton claims-provider-selection" id="ForgotPasswordExchange" role="link" autofocus="">Forgot your password?</button>
              </div>
                      </div>
        </div>

        <div class="divider">
          <h2>OR</h2>
        </div>
      <form id="localAccountForm" action="JavaScript:void(0);" class="localAccount" aria-label="Sign in with your sign in name">
        <div class="intro">
          <h2 aria-level="1">
            Sign in with your sign in name
          </h2>
        </div>
        <div class="error pageLevel" aria-hidden="true" role="alert" style="display: none;">
          <p></p>
        </div>
        <div class="entry">
          <div class="entry-item">
            <label for="signInName" style="display: none;">
              Sign in name
            </label>
            <div class="error itemLevel" aria-hidden="true" role="alert" style="display: none;">
              <p></p>
            </div>
            <input type="text" id="signInName" name="Sign in name" title="Please enter a valid Sign in name" pattern="^[a-zA-Z0-9._-]{4,64}$" autofocus="" placeholder="Sign in name" aria-label="Sign in name" disabled="disabled" style="display: none;">
          <label for="email">Email</label><input type="email" id="email" value="azure.clientcontact@mailinator.com" disabled="disabled"></div>
            <div class="entry-item">
              <div class="password-label">
                <label for="password">Password</label>
                    <a id="forgotPassword" href="/canopystaging.onmicrosoft.com/B2C_1A_SeamlessMigration_signuporsignin_non_MFA/api/CombinedSigninAndSignup/forgotPassword?csrf_token=cHB4Z3l5LzhXK1JGSzVsQzdSUzRVRXNXcWhadEozS2wzMHN5V3VYSWNBNEE5Q1RiZXEvK3VSd1YwWDYvRVNmUWJpaERBKzhSS3NlckNyYmpHYWlwNHc9PTsyMDI0LTAzLTA4VDEwOjAyOjIyLjEyNTgyOTRaO2RaS3ZYc28vQ2gvdDVxczRmQ25Uc3c9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiIyYmEzNTZmZi04NGVhLTQ2NTgtOWQ5MS1jZDY1Mjk2ZTU1ZDEifQ&amp;p=B2C_1A_SeamlessMigration_signuporsignin_non_MFA&amp;login_hint=65ead789c293a8dcce506cd9&amp;email=azure.clientcontact@mailinator.com">Forgot your password?</a>
                              </div>
              <div class="error itemLevel" aria-hidden="true" style="display: none;">
                <p role="alert"></p>
              </div>
              <input type="password" id="password" name="Password" placeholder="Password" aria-label="Password" autocomplete="current-password" aria-required="true">
                          </div>
          <div class="working"></div>


          <div class="buttons">
            <button id="next" type="submit" form="localAccountForm">Sign in</button>
          </div>
        </div>
              <div class="divider">
                <h2>OR</h2>
              </div>
              <div class="create">
                <p>
                  Don't have an account?<a id="createAccount" href="/canopystaging.onmicrosoft.com/B2C_1A_SeamlessMigration_signuporsignin_non_MFA/api/CombinedSigninAndSignup/unified?local=signup&amp;csrf_token=cHB4Z3l5LzhXK1JGSzVsQzdSUzRVRXNXcWhadEozS2wzMHN5V3VYSWNBNEE5Q1RiZXEvK3VSd1YwWDYvRVNmUWJpaERBKzhSS3NlckNyYmpHYWlwNHc9PTsyMDI0LTAzLTA4VDEwOjAyOjIyLjEyNTgyOTRaO2RaS3ZYc28vQ2gvdDVxczRmQ25Uc3c9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiIyYmEzNTZmZi04NGVhLTQ2NTgtOWQ5MS1jZDY1Mjk2ZTU1ZDEifQ&amp;p=B2C_1A_SeamlessMigration_signuporsignin_non_MFA">Sign up now</a>
                </p>
              </div>
      </form>`,
  },
  {
    id: "mfa",
    name: "MFA",
    content: `<div class="buttons">
    </div>
    <div class="intro">
      <p>Please provide the following details.</p>
    </div>
    <form id="attributeVerification">
        <div id="requiredFieldMissing" class="error pageLevel" style="display: none;" aria-hidden="true">A required field is missing. Please fill out all required fields and try again.</div>
        <div id="fieldIncorrect" class="error pageLevel" style="display: none;" aria-hidden="true">One or more fields are filled out incorrectly. Please check your entries and try again.</div>
        <div id="captchaUnresolved" class="error pageLevel" style="display: none;" aria-hidden="true">Captcha challenge is not resolved. Please solve it to proceed.</div>
        <div id="claimVerificationServerError" class="error pageLevel" style="display: none;" aria-hidden="true"></div>
        <div id="attributeList" class="attr">
            <ul>
                <li class="Paragraph QrCodeVerifyInstruction_li"><div class="attrEntry"><label id="QrCodeVerifyInstruction_label" for="QrCodeVerifyInstruction" class="">Enter the verification code from your authenticator app​.</label><div class="error itemLevel" role="alert"></div><p class="textInParagraph" id="QrCodeVerifyInstruction" tabindex="0"></p><a class="helpLink tiny" href="javascript:void(0)">What is this?</a></div></li>
                <li class="TextBox otpCode_li"><div class="attrEntry"><label id="otpCode_label" for="otpCode" class="required">Enter your code</label><div class="error itemLevel" role="alert"></div><input id="otpCode" class="textInput" type="text" placeholder="Enter your code" pattern="^[0-9]{6}$" title="Enter the 6-digit verification code generated by the Authenticator app in the box" aria-required="true" autofocus="autofocus"><a class="helpLink tiny" href="javascript:void(0)" data-help="Enter the 6-digit verification code generated by the Authenticator app in the box">What is this?</a></div></li>
            </ul>
        </div>
        <div class="buttons">
            <button id="continue" type="submit" form="attributeVerification" aria-disabled="false" aria-label="Verify">Verify</button><button id="cancel" aria-label="Cancel" formnovalidate="">Cancel</button>
        </div>

        <div class="verifying-modal" aria-live="assertive" aria-labelledby="verifying_blurb">
            <div id="verifying_blurb"></div>
        </div>
    </form>`,
  },
  {
    id: "idp",
    name: "IDP",
    content: `
        <div class="claims-provider-list-buttons social" aria-label="Sign in with your social account" role="form">
          <div class="intro">
            <h2 aria-level="1">Sign in with your social account</h2>
          </div>
          <div class="options">
              <div> <button class="accountButton firstButton claims-provider-selection" role="link">Facebook</button> </div>
              <div> <button class="accountButton claims-provider-selection" role="link">Auth0</button> </div>
          </div>
        </div>

        <div class="divider">
          <h2>OR</h2>
        </div>
      <form id="localAccountForm" action="JavaScript:void(0);" class="localAccount" aria-label="Sign in with your email address">
        <div class="intro">
          <h2 aria-level="1">
            Sign in with your email address
          </h2>
        </div>
        <div class="error pageLevel" aria-hidden="true" role="alert" style="display: none;">
          <p></p>
        </div>
        <div class="entry">
          <div class="entry-item">
            <label for="signInName">
              Email Address
            </label>
            <div class="error itemLevel" aria-hidden="true" role="alert" style="display: none;">
              <p></p>
            </div>
            <input type="text" id="signInName" name="Email Address" title="Please enter a valid Email Address" placeholder="Email Address" aria-label="Email Address">
          </div>
            <div class="entry-item">
              <div class="password-label">
                <label for="password">Password</label>
                    <a id="forgotPassword" href="/canopystaging.onmicrosoft.com/B2C_1A_signup_signin/api/CombinedSigninAndSignup/forgotPassword?csrf_token=TjhtSDBLMGlvRVRVNXpjMGhoUHNyb3RtZWxZOGlQUTgxQk91R1RMR1Z4Yysvd2FYUHBwREIwclhWUkpRS2lyeEpMYXpuQUpDV1ZWK2lYRk9qanhnQmc9PTsyMDI0LTAyLTI3VDA5OjM2OjI1LjQ3MDEyODdaO0w4c3ptN3o0clgwUHdXcmtsSm9WMWc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiIwOGM1YTNhYS1lYjM1LTRmMGMtYmFmYi1hYTAyZDRiNTM4MmEifQ&amp;p=B2C_1A_signup_signin">Forgot your password?</a>
                              </div>
              <div class="error itemLevel" aria-hidden="true" style="display: none;">
                <p role="alert"></p>
              </div>
              <input type="password" id="password" name="Password" placeholder="Password" aria-label="Password" autocomplete="current-password" aria-required="true">
                          </div>
          <div class="working"></div>


          <div class="buttons">
            <button id="next" type="submit" form="localAccountForm">Sign in</button>
          </div>
        </div>
              <div class="divider">
                <h2>OR</h2>
              </div>
              <div class="create">
                <p>
                  Don't have an account?<a id="createAccount" href="/canopystaging.onmicrosoft.com/B2C_1A_signup_signin/api/CombinedSigninAndSignup/unified?local=signup&amp;csrf_token=TjhtSDBLMGlvRVRVNXpjMGhoUHNyb3RtZWxZOGlQUTgxQk91R1RMR1Z4Yysvd2FYUHBwREIwclhWUkpRS2lyeEpMYXpuQUpDV1ZWK2lYRk9qanhnQmc9PTsyMDI0LTAyLTI3VDA5OjM2OjI1LjQ3MDEyODdaO0w4c3ptN3o0clgwUHdXcmtsSm9WMWc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiIwOGM1YTNhYS1lYjM1LTRmMGMtYmFmYi1hYTAyZDRiNTM4MmEifQ&amp;p=B2C_1A_signup_signin">Sign up now</a>
                </p>
              </div>
      </form>`,
  },
];

const initTesting = () => {
  const folder = location.pathname.split("/")[2] || "home";
  document.getElementById("api").innerHTML =
    forms.filter((form) => form.id === folder)?.[0]?.content || "";
};

setTimeout(() => {
  initTesting();
}, 100);

// const pageWrapper = document.querySelector(".page-wrapper");
// pageWrapper.innerHTML = forms.reduce(
//   (str, item) =>
//     (str += `
//     <div class="form-wrapper">
//       <h3>${item.name}</h3>
//       <div class="form">
//         <img src="https://media.sequoia.com/public/logo_dark.svg" alt="company-logo" id="logo" />
//         <h2 class="header">Login</h2>
//         <div>${item.content}</div>
//         <a
//           href="https://login-web-dev.sequoia-development.com/forgot"
//           class="forgot"
//         >
//           Forgot Password
//         </a>
//       </div>
//     </div>
//     `),
//   ""
// );

