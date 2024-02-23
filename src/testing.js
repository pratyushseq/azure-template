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
                <li class="AuthenticatorAppIconControl authenticatorAppIconControl_li"><div class="attrEntry"><label id="authenticatorAppIconControl_label" for="authenticatorAppIconControl" class=""></label><div class="error itemLevel" role="alert"></div><div class="authenticatorIconControlContent" id="authenticatorAppIconControl"><label id="authenticatorAppIconControl-title">Download the Microsoft Authenticator using the download links for iOS and Android or use any other authenticator app of your choice.</label><a class="googleStoreIconControlContent" id="authenticatorAppIconControl-google" href="https://play.google.com/store/apps/details?id=com.azure.authenticator"><img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" style="float: left; width: 100%;"></a><a class="appStoreIconControlContent" id="authenticatorAppIconControl-apple" href="https://apps.apple.com/us/app/microsoft-authenticator/id983156458"><img alt="Download on the App Store" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;amp;releaseDate=1432944000&amp;amp;h=39686e6a537b2c44ff7ce60f6287e68f" style="float: left; width: 80%; margin-top: 10px;"></a><label id="authenticatorAppIconControl-instruction">Once you've downloaded the Authenticator app, you can use any of the methods below to continue with enrollment.</label></div><a class="helpLink tiny" href="javascript:void(0)">What is this?</a></div></li>
                <li class="QrCodeControl totpQrCodeControl_li"><div class="attrEntry"><label id="totpQrCodeControl_label" for="totpQrCodeControl" class=""></label><div class="error itemLevel" role="alert"></div><div class="qrCodeControlContent" id="totpQrCodeControl"><label id="totpQrCodeControl-title">Scan the QR code</label><div class="qrCodeInfo" id="totpQrCodeControl_info_message" aria-hidden="false" role="alert" aria-label="Using your app scan this QR code and click &quot;Continue&quot;">Using your app scan this QR code and click "Continue"</div><div id="totpQrCodeControl-picture" title="otpauth://totp/Sequoia%20Canopy%20Staging:wrick_usa?secret=ovq4wt2oe2ywptos&amp;issuer=Sequoia+Canopy+Staging"><img id="totpQrCodeControl-img" alt="Scan me!" src="data:image/x-jpeg;base64,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" style="display: block;"></div><div id="totpQrCodeControl-text" aria-hidden="true" style="display: none;">otpauth://totp/Sequoia%20Canopy%20Staging:wrick_usa?secret=ovq4wt2oe2ywptos&amp;issuer=Sequoia+Canopy+Staging</div><a href="otpauth://totp/Sequoia%20Canopy%20Staging:wrick_usa?secret=ovq4wt2oe2ywptos&amp;issuer=Sequoia+Canopy+Staging">Can't scan? Try this</a></div><a class="helpLink tiny" href="javascript:void(0)">What is this?</a></div></li>
                <li class="AuthenticatorInfoControl authenticatorInfoControl_li"><div class="attrEntry"><label id="authenticatorInfoControl_label" for="authenticatorInfoControl" class=""></label><div class="error itemLevel" role="alert"></div><div class="attrEntry" id="authenticatorInfoControl"><label id="authenticatorInfoControl-title" style="display: none;">Enter the account details manually:</label><div id="authenticatorInfoControl-account_name" tabindex="0" aria-hidden="false" aria-label="wrick_usa" style="display: none;">Account Name: wrick_usa</div><div id="authenticatorInfoControl-secret" tabindex="1" aria-hidden="false" aria-label="ovq4wt2oe2ywptos" style="display: none;">Secret: ovq4wt2oe2ywptos</div><a id="authenticatorInfoControl-collapse_text" href="javascript:void(0)" class="authenticatorInfoCollapse">Still having trouble?</a></div><a class="helpLink tiny" href="javascript:void(0)">What is this?</a></div></li>
            </ul>
        </div>
        <div class="buttons">
            <button id="continue" type="submit" form="attributeVerification" aria-disabled="false" aria-label="Continue">Continue</button><button id="cancel" aria-label="Cancel" formnovalidate="">Cancel</button>
        </div>

        <div class="verifying-modal" aria-live="assertive" aria-labelledby="verifying_blurb">
            <div id="verifying_blurb"></div>
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

