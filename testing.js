const forms = [
  {
    name: "Signin",
    content: `<div
            class="claims-provider-list-buttons social"
            aria-label="Sign in with your social account"
            role="form"
          >
            <div class="intro">
              <h2 aria-level="1">Sign in with your social account</h2>
            </div>
            <div class="options">
              <div>
                <button
                  class="accountButton firstButton claims-provider-selection"
                  id="FacebookExchange"
                  role="link"
                  autofocus=""
                >
                  Facebook
                </button>
              </div>
              <div>
                <button
                  class="accountButton claims-provider-selection"
                  id="ContosoExchange"
                  role="link"
                >
                  Auth0
                </button>
              </div>
            </div>
          </div>

          <div class="divider">
            <h2>OR</h2>
          </div>
          <form
            id="localAccountForm"
            action="JavaScript:void(0);"
            class="localAccount"
            aria-label="Sign in with your email address"
          >
            <div class="intro">
              <h2 aria-level="1">Sign in with your email address</h2>
            </div>
            <div
              class="error pageLevel"
              aria-hidden="true"
              role="alert"
              style="display: none"
            >
              <p></p>
            </div>
            <div class="entry">
              <div class="entry-item">
                <label for="signInName"> Email Address </label>
                <div
                  class="error itemLevel"
                  aria-hidden="true"
                  role="alert"
                  style="display: none"
                >
                  <p></p>
                </div>
                <input
                  type="text"
                  id="signInName"
                  name="Email Address"
                  title="Please enter a valid Email Address"
                  autofocus=""
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
              </div>
              <div class="entry-item">
                <div class="password-label">
                  <label for="password">Password</label>
                  <a
                    id="forgotPassword"
                    href="/canopystaging.onmicrosoft.com/B2C_1A_signup_signin/api/CombinedSigninAndSignup/forgotPassword?csrf_token=bTdEdllaNWM5eXVSWUJKQ1NSa2hIL0hqazR5QzhRQ0o5TzJ1RTcwa3lmS09hQXRlYnJkZ0xPR0lsU1hkQzNWalpMeWFGNHg2MkxyY3RydWhhc0RFcGc9PTsyMDI0LTAyLTA2VDA3OjMyOjA0LjA3ODEwMDhaO25LbVV6NWx2WnZsZUdWU1FaenZhTHc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiJmODFkMWZmNS02OGM3LTQzMmMtOGQ2Ni1mMjM3OWMwYmIzYTIifQ&amp;p=B2C_1A_signup_signin"
                    >Forgot your password?</a
                  >
                </div>
                <div
                  class="error itemLevel"
                  aria-hidden="true"
                  style="display: none"
                >
                  <p role="alert"></p>
                </div>
                <input
                  type="password"
                  id="password"
                  name="Password"
                  placeholder="Password"
                  aria-label="Password"
                  autocomplete="current-password"
                  aria-required="true"
                />
              </div>
              <div class="working"></div>

              <div class="buttons">
                <button id="next" type="submit" form="localAccountForm">
                  Sign in
                </button>
              </div>
            </div>
            <div class="divider">
              <h2>OR</h2>
            </div>
            <div class="create">
              <p>
                Don't have an account?<a
                  id="createAccount"
                  href="/canopystaging.onmicrosoft.com/B2C_1A_signup_signin/api/CombinedSigninAndSignup/unified?local=signup&amp;csrf_token=bTdEdllaNWM5eXVSWUJKQ1NSa2hIL0hqazR5QzhRQ0o5TzJ1RTcwa3lmS09hQXRlYnJkZ0xPR0lsU1hkQzNWalpMeWFGNHg2MkxyY3RydWhhc0RFcGc9PTsyMDI0LTAyLTA2VDA3OjMyOjA0LjA3ODEwMDhaO25LbVV6NWx2WnZsZUdWU1FaenZhTHc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiJmODFkMWZmNS02OGM3LTQzMmMtOGQ2Ni1mMjM3OWMwYmIzYTIifQ&amp;p=B2C_1A_signup_signin"
                  >Sign up now</a
                >
              </p>
            </div>
          </form>`,
  },
  {
    name: "Signin / Error",
    content: `<div
            class="claims-provider-list-buttons social"
            aria-label="Sign in with your social account"
            role="form"
          >
            <div class="intro">
              <h2 aria-level="1">Sign in with your social account</h2>
            </div>
            <div class="options">
              <div>
                <button
                  class="accountButton firstButton claims-provider-selection"
                  id="FacebookExchange"
                  role="link"
                  autofocus=""
                >
                  Facebook
                </button>
              </div>
              <div>
                <button
                  class="accountButton claims-provider-selection"
                  id="ContosoExchange"
                  role="link"
                >
                  Auth0
                </button>
              </div>
            </div>
          </div>

          <div class="divider">
            <h2>OR</h2>
          </div>
          <form
            id="localAccountForm"
            action="JavaScript:void(0);"
            class="localAccount"
            aria-label="Sign in with your email address"
          >
            <div class="intro">
              <h2 aria-level="1">Sign in with your email address</h2>
            </div>
            <div
              class="error pageLevel"
              aria-hidden="true"
              role="alert"
              style="display: none"
            >
              <p></p>
            </div>
            <div class="entry">
              <div class="entry-item">
                <label for="signInName"> Email Address </label>
                <div
                  class="error itemLevel"
                  aria-hidden="false"
                  role="alert"
                  style="display: block"
                >
                  <p>Please enter your Email Address</p>
                </div>
                <input
                  type="text"
                  id="signInName"
                  name="Email Address"
                  title="Please enter a valid Email Address"
                  autofocus=""
                  placeholder="Email Address"
                  aria-label="Email Address"
                  class="highlightError"
                />
              </div>
              <div class="entry-item">
                <div class="password-label">
                  <label for="password">Password</label>
                  <a
                    id="forgotPassword"
                    href="/canopystaging.onmicrosoft.com/B2C_1A_signup_signin/api/CombinedSigninAndSignup/forgotPassword?csrf_token=bTdEdllaNWM5eXVSWUJKQ1NSa2hIL0hqazR5QzhRQ0o5TzJ1RTcwa3lmS09hQXRlYnJkZ0xPR0lsU1hkQzNWalpMeWFGNHg2MkxyY3RydWhhc0RFcGc9PTsyMDI0LTAyLTA2VDA3OjMyOjA0LjA3ODEwMDhaO25LbVV6NWx2WnZsZUdWU1FaenZhTHc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiJmODFkMWZmNS02OGM3LTQzMmMtOGQ2Ni1mMjM3OWMwYmIzYTIifQ&amp;p=B2C_1A_signup_signin"
                    >Forgot your password?</a
                  >
                </div>
                <div
                  class="error itemLevel"
                  aria-hidden="false"
                  style="display: block"
                >
                  <p role="alert">Please enter your password</p>
                </div>
                <input
                  type="password"
                  id="password"
                  name="Password"
                  placeholder="Password"
                  aria-label="Password"
                  autocomplete="current-password"
                  aria-required="true"
                  class="highlightError"
                />
              </div>
              <div class="working"></div>

              <div class="buttons">
                <button id="next" type="submit" form="localAccountForm">
                  Sign in
                </button>
              </div>
            </div>
            <div class="divider">
              <h2>OR</h2>
            </div>
            <div class="create">
              <p>
                Don't have an account?<a
                  id="createAccount"
                  href="/canopystaging.onmicrosoft.com/B2C_1A_signup_signin/api/CombinedSigninAndSignup/unified?local=signup&amp;csrf_token=bTdEdllaNWM5eXVSWUJKQ1NSa2hIL0hqazR5QzhRQ0o5TzJ1RTcwa3lmS09hQXRlYnJkZ0xPR0lsU1hkQzNWalpMeWFGNHg2MkxyY3RydWhhc0RFcGc9PTsyMDI0LTAyLTA2VDA3OjMyOjA0LjA3ODEwMDhaO25LbVV6NWx2WnZsZUdWU1FaenZhTHc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiJmODFkMWZmNS02OGM3LTQzMmMtOGQ2Ni1mMjM3OWMwYmIzYTIifQ&amp;p=B2C_1A_signup_signin"
                  >Sign up now</a
                >
              </p>
            </div>
          </form>`,
  },
  {
    name: "Signup",
    content: `<div class="buttons"></div>
          <div class="intro">
            <p>Please provide the following details.</p>
          </div>
          <form id="attributeVerification" action="JavaScript:void(0);">
            <div
              id="passwordEntryMismatch"
              class="error pageLevel"
              style="display: none"
              aria-hidden="true"
            >
              The password entry fields do not match. Please enter the same
              password in both fields and try again.
            </div>
            <div
              id="requiredFieldMissing"
              class="error pageLevel"
              style="display: none"
              aria-hidden="true"
            >
              A required field is missing. Please fill out all required fields
              and try again.
            </div>
            <div
              id="fieldIncorrect"
              class="error pageLevel"
              style="display: none"
              aria-hidden="true"
            >
              One or more fields are filled out incorrectly. Please check your
              entries and try again.
            </div>
            <div
              id="claimVerificationServerError"
              class="error pageLevel"
              style="display: none"
              aria-hidden="true"
            ></div>
            <div id="attributeList" class="attr">
              <ul>
                <li class="TextBox">
                  <div class="attrEntry">
                    <div>
                      <div
                        class="verificationInfoText"
                        id="email_intro"
                        style="display: inline"
                        aria-hidden="false"
                        role="alert"
                        aria-live="polite"
                      >
                        Verification is necessary. Please click Send button.
                      </div>
                      <div
                        class="verificationInfoText"
                        id="email_info"
                        style="display: none"
                        aria-hidden="true"
                        role="alert"
                      >
                        Verification code has been sent to your inbox. Please
                        copy it to the input box below.
                      </div>
                      <div
                        class="verificationSuccessText"
                        id="email_success"
                        style="display: none"
                        aria-hidden="true"
                        role="alert"
                      >
                        E-mail address verified. You can now continue.
                      </div>
                      <div
                        class="verificationErrorText error"
                        id="email_fail_retry"
                        style="display: none"
                        aria-hidden="true"
                        role="alert"
                      >
                        That code is incorrect. Please try again.
                      </div>
                      <div
                        class="verificationErrorText error"
                        id="email_fail_no_retry"
                        style="display: none"
                        aria-hidden="true"
                        role="alert"
                      >
                        You've made too many incorrect attempts. Please try
                        again later.
                      </div>
                      <div
                        class="verificationErrorText error"
                        id="email_fail_throttled"
                        style="display: none"
                        aria-hidden="true"
                        role="alert"
                      >
                        There have been too many requests to verify this email
                        address. Please wait a while, then try again.
                      </div>
                      <div
                        class="verificationErrorText error"
                        id="email_fail_code_expired"
                        style="display: none"
                        aria-hidden="true"
                        role="alert"
                      >
                        That code is expired. Please request a new code.
                      </div>
                      <div
                        class="verificationErrorText error"
                        id="email_fail_server"
                        style="display: none"
                        aria-hidden="true"
                        role="alert"
                      >
                        We are having trouble verifying your email address.
                        Please enter a valid email address and try again.
                      </div>
                      <div
                        class="verificationErrorText error"
                        id="email_incorrect_format"
                        style="display: none"
                        aria-hidden="true"
                        role="alert"
                      >
                        Incorrect format.
                      </div>
                    </div>
                    <label id="email_label" for="email">Email Address</label>
                    <div class="error itemLevel" role="alert"></div>
                    <input
                      id="email"
                      class="textInput"
                      type="text"
                      placeholder="Email Address"
                      aria-label="Email Address"
                      pattern="^[a-zA-Z0-9!#$%&amp;'+^_\`{}~-]+(?:\.[a-zA-Z0-9!#$%&amp;'+^_\`{}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$"
                      title="Email address that can be used to contact you."
                      aria-required="true"
                      autofocus="autofocus"
                    /><a
                      class="helpLink tiny"
                      href="javascript:void(0)"
                      data-help="Email address that can be used to contact you."
                      >What is this?</a
                    >
                    <div class="buttons verify" data-claim_id="email">
                      <div
                        class="working"
                        id="email_ver_wait"
                        aria-label="Please wait"
                        aria-hidden="true"
                        style="display: none"
                      ></div>
                      <label
                        id="email_ver_input_label"
                        for="email_ver_input"
                        aria-hidden="true"
                        style="display: none"
                        >Verification code</label
                      ><input
                        class="verifyInput"
                        id="email_ver_input"
                        type="text"
                        autocomplete="off"
                        placeholder="Verification code"
                        style="display: none"
                        aria-hidden="true"
                      /><button
                        class="sendButton"
                        id="email_ver_but_send"
                        type="button"
                        aria-label="Send verification code"
                        style="display: inline"
                        aria-hidden="false"
                      >
                        Send verification code</button
                      ><button
                        class="verifyButton"
                        id="email_ver_but_verify"
                        type="button"
                        aria-label="Verify code"
                        style="display: none"
                        aria-hidden="true"
                      >
                        Verify code</button
                      ><button
                        class="sendButton"
                        id="email_ver_but_resend"
                        type="button"
                        aria-label="Send new code"
                        style="display: none"
                        aria-hidden="true"
                      >
                        Send new code</button
                      ><button
                        class="editButton"
                        id="email_ver_but_edit"
                        type="button"
                        aria-label="Change e-mail"
                        style="display: none"
                        aria-hidden="true"
                      >
                        Change e-mail</button
                      ><button
                        class="defaultButton"
                        id="email_ver_but_default"
                        type="button"
                        aria-label="Default"
                        style="display: none"
                      >
                        Default
                      </button>
                    </div>
                  </div>
                </li>
                <li class="Password">
                  <div class="attrEntry">
                    <label id="newPassword_label" for="newPassword"
                      >New Password</label
                    >
                    <div class="error itemLevel" role="alert"></div>
                    <input
                      id="newPassword"
                      class="textInput"
                      type="password"
                      placeholder="New Password"
                      aria-label="New Password"
                      pattern="^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]))([A-Za-z\d@#$%^&amp;*\-_+=[\]{}|\\:',?/\`~&quot;();!]|\.(?!@)){8,16}$"
                      title="Enter new password"
                      autocomplete="new-password"
                      aria-required="true"
                    /><a
                      class="helpLink tiny"
                      href="javascript:void(0)"
                      data-help="Enter new password"
                      >What is this?</a
                    >
                  </div>
                </li>
                <li class="Password">
                  <div class="attrEntry">
                    <label id="reenterPassword_label" for="reenterPassword"
                      >Confirm New Password</label
                    >
                    <div class="error itemLevel" role="alert"></div>
                    <input
                      id="reenterPassword"
                      class="textInput"
                      type="password"
                      placeholder="Confirm New Password"
                      aria-label="Confirm New Password"
                      pattern="^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]))([A-Za-z\d@#$%^&amp;*\-_+=[\]{}|\\:',?/\`~&quot;();!]|\.(?!@)){8,16}$"
                      title="Confirm new password"
                      autocomplete="new-password"
                      aria-required="true"
                    /><a
                      class="helpLink tiny"
                      href="javascript:void(0)"
                      data-help="Confirm new password"
                      >What is this?</a
                    >
                  </div>
                </li>
                <li class="TextBox">
                  <div class="attrEntry">
                    <label id="displayName_label" for="displayName"
                      >Display Name</label
                    >
                    <div class="error itemLevel" role="alert"></div>
                    <input
                      id="displayName"
                      class="textInput"
                      type="text"
                      placeholder="Display Name"
                      aria-label="Display Name"
                      title="Your display name."
                    /><a
                      class="helpLink tiny"
                      href="javascript:void(0)"
                      data-help="Your display name."
                      >What is this?</a
                    >
                  </div>
                </li>
                <li class="TextBox">
                  <div class="attrEntry">
                    <label id="givenName_label" for="givenName"
                      >Given Name</label
                    >
                    <div class="error itemLevel" role="alert"></div>
                    <input
                      id="givenName"
                      class="textInput"
                      type="text"
                      placeholder="Given Name"
                      aria-label="Given Name"
                      title="Your given name (also known as first name)."
                    /><a
                      class="helpLink tiny"
                      href="javascript:void(0)"
                      data-help="Your given name (also known as first name)."
                      >What is this?</a
                    >
                  </div>
                </li>
                <li class="TextBox">
                  <div class="attrEntry">
                    <label id="surname_label" for="surname">Surname</label>
                    <div class="error itemLevel" role="alert"></div>
                    <input
                      id="surname"
                      class="textInput"
                      type="text"
                      placeholder="Surname"
                      aria-label="Surname"
                      title="Your surname (also known as family name or last name)."
                    /><a
                      class="helpLink tiny"
                      href="javascript:void(0)"
                      data-help="Your surname (also known as family name or last name)."
                      >What is this?</a
                    >
                  </div>
                </li>
              </ul>
            </div>
            <div class="buttons">
              <button
                id="continue"
                type="submit"
                form="attributeVerification"
                aria-disabled="false"
                aria-label="Create"
              >
                Create</button
              ><button id="cancel" aria-label="Cancel" formnovalidate="">
                Cancel
              </button>
            </div>

            <div class="verifying-modal">
              <div id="verifying_blurb"></div>
            </div>
          </form>
        </div>`,
  },
  {
    name: "Singup / Error",
    content: `<div id="api" data-name="SelfAsserted">
    <div class="buttons">
    </div>
    <div class="intro">
      <p>Please provide the following details.</p>
    </div>
    <form id="attributeVerification" action="JavaScript:void(0);">
        <div id="passwordEntryMismatch" class="error pageLevel" style="display: none;" aria-hidden="true">The password entry fields do not match. Please enter the same password in both fields and try again.</div>
        <div id="requiredFieldMissing" class="error pageLevel" style="display: block;" aria-hidden="false" role="alert" aria-live="polite" tabindex="1">A required field is missing. Please fill out all required fields and try again.</div>
        <div id="fieldIncorrect" class="error pageLevel" style="display: none;" aria-hidden="true">One or more fields are filled out incorrectly. Please check your entries and try again.</div>
        <div id="claimVerificationServerError" class="error pageLevel" style="display: none;" aria-hidden="true"></div>
        <div id="attributeList" class="attr">
            <ul>
                <li class="TextBox"><div class="attrEntry validate"><div><div class="verificationInfoText" id="email_intro" style="display: inline;" aria-hidden="false" role="alert" aria-live="polite">Verification is necessary. Please click Send button.</div><div class="verificationInfoText" id="email_info" style="display:none" aria-hidden="true" role="alert">Verification code has been sent to your inbox. Please copy it to the input box below.</div><div class="verificationSuccessText" id="email_success" style="display:none" aria-hidden="true" role="alert">E-mail address verified. You can now continue.</div><div class="verificationErrorText error" id="email_fail_retry" style="display:none" aria-hidden="true" role="alert">That code is incorrect. Please try again.</div><div class="verificationErrorText error" id="email_fail_no_retry" style="display:none" aria-hidden="true" role="alert">You've made too many incorrect attempts. Please try again later.</div><div class="verificationErrorText error" id="email_fail_throttled" style="display:none" aria-hidden="true" role="alert">There have been too many requests to verify this email address. Please wait a while, then try again.</div><div class="verificationErrorText error" id="email_fail_code_expired" style="display:none" aria-hidden="true" role="alert">That code is expired. Please request a new code.</div><div class="verificationErrorText error" id="email_fail_server" style="display:none" aria-hidden="true" role="alert">We are having trouble verifying your email address. Please enter a valid email address and try again.</div><div class="verificationErrorText error" id="email_incorrect_format" style="display:none" aria-hidden="true" role="alert">Incorrect format.</div></div><label id="email_label" for="email">Email Address</label><div class="error itemLevel show" role="alert" aria-hidden="false" aria-label="">This information is required.</div><input id="email" class="textInput" type="text" placeholder="Email Address" aria-label="Email Address" pattern="^[a-zA-Z0-9!#$%&amp;'+^_\`{}~-]+(?:\.[a-zA-Z0-9!#$%&amp;'+^_\`{}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$" title="Email address that can be used to contact you." aria-required="true" autofocus="autofocus"><a class="helpLink tiny" href="javascript:void(0)" data-help="Email address that can be used to contact you.">What is this?</a><div class="buttons verify" data-claim_id="email"><div class="working" id="email_ver_wait" aria-label="Please wait" aria-hidden="true" style="display: none;"></div><label id="email_ver_input_label" for="email_ver_input" aria-hidden="true" style="display: none;">Verification code</label><input class="verifyInput" id="email_ver_input" type="text" autocomplete="off" placeholder="Verification code" style="display: none;" aria-hidden="true"><button class="sendButton" id="email_ver_but_send" type="button" aria-label="Send verification code" style="display: inline;" aria-hidden="false">Send verification code</button><button class="verifyButton" id="email_ver_but_verify" type="button" aria-label="Verify code" style="display: none;" aria-hidden="true">Verify code</button><button class="sendButton" id="email_ver_but_resend" type="button" aria-label="Send new code" style="display: none;" aria-hidden="true">Send new code</button><button class="editButton" id="email_ver_but_edit" type="button" aria-label="Change e-mail" style="display: none;" aria-hidden="true">Change e-mail</button><button class="defaultButton" id="email_ver_but_default" type="button" aria-label="Default" style="display: none;">Default</button></div></div></li>
                <li class="Password"><div class="attrEntry validate"><label id="newPassword_label" for="newPassword">New Password</label><div class="error itemLevel show" role="alert" aria-hidden="false" aria-label="">This information is required.</div><input id="newPassword" class="textInput" type="password" placeholder="New Password" aria-label="New Password" pattern="^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]))([A-Za-z\d@#$%^&amp;*\-_+=[\]{}|\\:',?/\`~&quot;();!]|\.(?!@)){8,16}$" title="Enter new password" autocomplete="new-password" aria-required="true"><a class="helpLink tiny" href="javascript:void(0)" data-help="Enter new password">What is this?</a></div></li>
                <li class="Password"><div class="attrEntry validate"><label id="reenterPassword_label" for="reenterPassword">Confirm New Password</label><div class="error itemLevel show" role="alert" aria-hidden="false" aria-label="">This information is required.</div><input id="reenterPassword" class="textInput" type="password" placeholder="Confirm New Password" aria-label="Confirm New Password" pattern="^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]))([A-Za-z\d@#$%^&amp;*\-_+=[\]{}|\\:',?/\`~&quot;();!]|\.(?!@)){8,16}$" title="Confirm new password" autocomplete="new-password" aria-required="true"><a class="helpLink tiny" href="javascript:void(0)" data-help="Confirm new password">What is this?</a></div></li>
                <li class="TextBox"><div class="attrEntry validate"><label id="displayName_label" for="displayName">Display Name</label><div class="error itemLevel" role="alert" aria-hidden="true" aria-label=""></div><input id="displayName" class="textInput" type="text" placeholder="Display Name" aria-label="Display Name" title="Your display name."><a class="helpLink tiny" href="javascript:void(0)" data-help="Your display name.">What is this?</a></div></li>
                <li class="TextBox"><div class="attrEntry validate"><label id="givenName_label" for="givenName">Given Name</label><div class="error itemLevel" role="alert" aria-hidden="true" aria-label=""></div><input id="givenName" class="textInput" type="text" placeholder="Given Name" aria-label="Given Name" title="Your given name (also known as first name)."><a class="helpLink tiny" href="javascript:void(0)" data-help="Your given name (also known as first name).">What is this?</a></div></li>
                <li class="TextBox"><div class="attrEntry validate"><label id="surname_label" for="surname">Surname</label><div class="error itemLevel" role="alert" aria-hidden="true" aria-label=""></div><input id="surname" class="textInput" type="text" placeholder="Surname" aria-label="Surname" title="Your surname (also known as family name or last name)."><a class="helpLink tiny" href="javascript:void(0)" data-help="Your surname (also known as family name or last name).">What is this?</a></div></li>
            </ul>
        </div>
        <div class="buttons">
            <button id="continue" type="submit" form="attributeVerification" aria-disabled="false" aria-label="Create">Create</button><button id="cancel" aria-label="Cancel" formnovalidate="">Cancel</button>
        </div>

        <div class="verifying-modal">
            <div id="verifying_blurb"></div>
        </div>
    </form>
    
  </div>`,
  },
  {
    name: "Singup / Verify Email / Error",
    content: `<div id="api" data-name="SelfAsserted">
    <div class="buttons">
    </div>
    <div class="intro">
      <p>Please provide the following details.</p>
    </div>
    <form id="attributeVerification" action="JavaScript:void(0);">
        <div id="passwordEntryMismatch" class="error pageLevel" style="display: none;" aria-hidden="true">The password entry fields do not match. Please enter the same password in both fields and try again.</div>
        <div id="requiredFieldMissing" class="error pageLevel" style="display: block;" aria-hidden="false" role="alert" aria-live="polite" tabindex="1">A required field is missing. Please fill out all required fields and try again.</div>
        <div id="fieldIncorrect" class="error pageLevel" style="display: none;" aria-hidden="true">One or more fields are filled out incorrectly. Please check your entries and try again.</div>
        <div id="claimVerificationServerError" class="error pageLevel" style="display: none;" aria-hidden="true"></div>
        <div id="attributeList" class="attr">
            <ul>
                <li class="TextBox"><div class="attrEntry"><div><div class="verificationInfoText" id="email_intro" style="display: none;" aria-hidden="true" role="alert" aria-live="polite">Verification is necessary. Please click Send button.</div><div class="verificationInfoText" id="email_info" style="display: inline;" aria-hidden="false" role="alert" aria-live="polite">Verification code has been sent to your inbox. Please copy it to the input box below.</div><div class="verificationSuccessText" id="email_success" style="display:none" aria-hidden="true" role="alert">E-mail address verified. You can now continue.</div><div class="verificationErrorText error" id="email_fail_retry" style="display:none" aria-hidden="true" role="alert">That code is incorrect. Please try again.</div><div class="verificationErrorText error" id="email_fail_no_retry" style="display:none" aria-hidden="true" role="alert">You've made too many incorrect attempts. Please try again later.</div><div class="verificationErrorText error" id="email_fail_throttled" style="display:none" aria-hidden="true" role="alert">There have been too many requests to verify this email address. Please wait a while, then try again.</div><div class="verificationErrorText error" id="email_fail_code_expired" style="display:none" aria-hidden="true" role="alert">That code is expired. Please request a new code.</div><div class="verificationErrorText error" id="email_fail_server" style="display:none" aria-hidden="true" role="alert">We are having trouble verifying your email address. Please enter a valid email address and try again.</div><div class="verificationErrorText error" id="email_incorrect_format" style="display:none" aria-hidden="true" role="alert">Incorrect format.</div></div><label id="email_label" for="email">Email Address</label><div class="error itemLevel" role="alert" aria-hidden="true" aria-label=""></div><input id="email" class="textInput" type="text" placeholder="Email Address" aria-label="Email Address" pattern="^[a-zA-Z0-9!#$%&amp;'+^_\`{}~-]+(?:\.[a-zA-Z0-9!#$%&amp;'+^_\`{}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$" title="Email address that can be used to contact you." aria-required="true" autofocus="autofocus"><a class="helpLink tiny" href="javascript:void(0)" data-help="Email address that can be used to contact you.">What is this?</a><div class="buttons verify" data-claim_id="email"><div class="working" id="email_ver_wait" aria-label="Please wait" aria-hidden="true" style="display: none;" role="alert" aria-live="polite"></div><label id="email_ver_input_label" for="email_ver_input" aria-hidden="false" style="display: inline;">Verification code</label><input class="verifyInput" id="email_ver_input" type="text" autocomplete="off" placeholder="Verification code" style="display: inline;" aria-hidden="false" aria-label="Verification code"><button class="sendButton" id="email_ver_but_send" type="button" aria-label="Send verification code" style="display: none;" aria-hidden="true">Send verification code</button><button class="verifyButton" id="email_ver_but_verify" type="button" aria-label="Verify code" style="display: inline;" aria-hidden="false">Verify code</button><button class="sendButton" id="email_ver_but_resend" type="button" aria-label="Send new code" style="display: inline;" aria-hidden="false">Send new code</button><button class="editButton" id="email_ver_but_edit" type="button" aria-label="Change e-mail" style="display: none;" aria-hidden="true">Change e-mail</button><button class="defaultButton" id="email_ver_but_default" type="button" aria-label="Default" style="display: none;">Default</button></div></div></li>
                <li class="Password"><div class="attrEntry validate"><label id="newPassword_label" for="newPassword">New Password</label><div class="error itemLevel show" role="alert" aria-hidden="false" aria-label="">This information is required.</div><input id="newPassword" class="textInput" type="password" placeholder="New Password" aria-label="New Password" pattern="^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]))([A-Za-z\d@#$%^&amp;*\-_+=[\]{}|\\:',?/\`~&quot;();!]|\.(?!@)){8,16}$" title="Enter new password" autocomplete="new-password" aria-required="true"><a class="helpLink tiny" href="javascript:void(0)" data-help="Enter new password">What is this?</a></div></li>
                <li class="Password"><div class="attrEntry validate"><label id="reenterPassword_label" for="reenterPassword">Confirm New Password</label><div class="error itemLevel show" role="alert" aria-hidden="false" aria-label="">This information is required.</div><input id="reenterPassword" class="textInput" type="password" placeholder="Confirm New Password" aria-label="Confirm New Password" pattern="^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]))([A-Za-z\d@#$%^&amp;*\-_+=[\]{}|\\:',?/\`~&quot;();!]|\.(?!@)){8,16}$" title="Confirm new password" autocomplete="new-password" aria-required="true"><a class="helpLink tiny" href="javascript:void(0)" data-help="Confirm new password">What is this?</a></div></li>
                <li class="TextBox"><div class="attrEntry validate"><label id="displayName_label" for="displayName">Display Name</label><div class="error itemLevel" role="alert" aria-hidden="true" aria-label=""></div><input id="displayName" class="textInput" type="text" placeholder="Display Name" aria-label="Display Name" title="Your display name."><a class="helpLink tiny" href="javascript:void(0)" data-help="Your display name.">What is this?</a></div></li>
                <li class="TextBox"><div class="attrEntry validate"><label id="givenName_label" for="givenName">Given Name</label><div class="error itemLevel" role="alert" aria-hidden="true" aria-label=""></div><input id="givenName" class="textInput" type="text" placeholder="Given Name" aria-label="Given Name" title="Your given name (also known as first name)."><a class="helpLink tiny" href="javascript:void(0)" data-help="Your given name (also known as first name).">What is this?</a></div></li>
                <li class="TextBox"><div class="attrEntry validate"><label id="surname_label" for="surname">Surname</label><div class="error itemLevel" role="alert" aria-hidden="true" aria-label=""></div><input id="surname" class="textInput" type="text" placeholder="Surname" aria-label="Surname" title="Your surname (also known as family name or last name)."><a class="helpLink tiny" href="javascript:void(0)" data-help="Your surname (also known as family name or last name).">What is this?</a></div></li>
            </ul>
        </div>
        <div class="buttons">
            <button id="continue" type="submit" form="attributeVerification" aria-disabled="false" aria-label="Create">Create</button><button id="cancel" aria-label="Cancel" formnovalidate="">Cancel</button>
        </div>

        <div class="verifying-modal">
            <div id="verifying_blurb"></div>
        </div>
    </form>
    
  </div>`,
  },
];

const pageWrapper = document.querySelector(".page-wrapper");
pageWrapper.innerHTML = forms.reverse().reduce(
  (str, item) =>
    (str += `<div class="form-wrapper">
        <h3>${item.name}</h3>
        <div class="form">${item.content}</div>
      </div>`),
  ""
);