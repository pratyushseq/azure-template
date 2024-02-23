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
  {
    id: "idp",
    name: "IDP",
    content: `<div class="claims-provider-list-buttons social" aria-label="Sign in with your social account" role="form">
          <div class="intro">
            <h2 aria-level="1">Sign in with your social account</h2>
          </div>
          <div class="options">
              <div>
                  <button class="accountButton firstButton claims-provider-selection" id="FacebookExchange" role="link" autofocus="">Facebook</button>
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
            <input type="text" id="signInName" name="Email Address" title="Please enter a valid Email Address" autofocus="" placeholder="Email Address" aria-label="Email Address">
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
    content: `<div class="heading">
        <h1 role="heading">User Details</h1>
      </div>
    <div class="buttons">
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
                <li class="TextBox UserId_li"><div class="attrEntry"><label id="UserId_label" for="UserId" class="required">Username</label><div class="error itemLevel" role="alert"></div><input id="UserId" class="textInput" type="text" placeholder="Username" pattern="^[a-zA-Z0-9]+[a-zA-Z0-9_-]*$" title="Your username." aria-required="true" autofocus="autofocus" aria-disabled="true" disabled="disabled" tabindex="-1"><a class="helpLink tiny" href="javascript:void(0)" data-help="Your username.">What is this?</a></div></li>
                <li class="VerificationControl emailVerificationControl_li"><div class="attrEntry"><label id="emailVerificationControl_label" for="emailVerificationControl" class=""></label><div class="error itemLevel" role="alert"></div><div class="verificationControlContent" id="emailVerificationControl"><div class="verificationInfoText"><div id="emailVerificationControl_info_message" aria-hidden="true" role="alert" aria-label="Verification is necessary. Please click Send button." style="display: none;">Verification is necessary. Please click Send button.</div></div><div class="verificationSuccessText"><div id="emailVerificationControl_success_message" aria-hidden="true" role="alert" aria-label="" style="display: none;"></div></div><div class="verificationErrorText error"><div id="emailVerificationControl_error_message" aria-hidden="true" role="alert" aria-label="" style="display: none;"></div></div><ul><li class="EmailBox email_li email" aria-hidden="false" style="display: inline;"><div class="attrEntry"><label id="email_label" for="email" class="required">Email Address</label><div class="error itemLevel" role="alert"></div><input id="email" class="textInput" type="email" placeholder="Email Address" pattern="^[a-zA-Z0-9!#$%&amp;'+^_\`{}~-]+(?:\.[a-zA-Z0-9!#$%&amp;'+^_\`{}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$" title="Email address that can be used to contact you." aria-required="true"><a class="helpLink tiny" href="javascript:void(0)" data-help="Email address that can be used to contact you.">What is this?</a></div></li><li class="TextBox emailVerificationCode_li VerificationCode" aria-hidden="true" style="display: none;"><div class="attrEntry"><label id="emailVerificationCode_label" for="emailVerificationCode" class="required">Verification Code</label><div class="error itemLevel" role="alert"></div><input id="emailVerificationCode" class="textInput" type="text" placeholder="Verification Code" title="Enter your verification code" aria-required="true" autocomplete="off" disabled=""><a class="helpLink tiny" href="javascript:void(0)" data-help="Enter your verification code">What is this?</a></div></li></ul><div class="working" style="display: none;" aria-hidden="true"></div><div class="buttons"><button class="sendCode" id="emailVerificationControl_but_send_code" type="button" aria-label="Send verification code" aria-hidden="false" style="display: inline;">Send verification code</button><button class="verifyCode" id="emailVerificationControl_but_verify_code" type="button" aria-label="Verify code" aria-hidden="true" style="display: none;">Verify code</button><button class="sendNewCode" id="emailVerificationControl_but_send_new_code" type="button" aria-label="Send new code" aria-hidden="true" style="display: none;">Send new code</button><button class="changeClaims" id="emailVerificationControl_but_change_claims" type="button" aria-label="Change e-mail" aria-hidden="true" style="display: none;">Change e-mail</button></div></div><a class="helpLink tiny" href="javascript:void(0)">What is this?</a></div></li>
            </ul>
        </div>
        <div class="buttons">
            <button id="continue" type="submit" form="attributeVerification" aria-disabled="true" aria-label="Continue" tabindex="-1">Continue</button><button id="cancel" aria-label="Cancel" formnovalidate="">Cancel</button>
        </div>

        <div class="verifying-modal" aria-live="assertive" aria-labelledby="verifying_blurb">
            <div id="verifying_blurb"></div>
        </div>
    </form>`,
  },
];

const initTesting = () => {
  const folder = location.pathname.split("/")[2] || "home";
  document.getElementById("api").innerHTML = forms.filter(
    (form) => form.id === folder
  )?.[0]?.content || '';
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

