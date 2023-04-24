import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './Form.css';

export default function Form() {

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  return (
    <>
      <div>
        < img src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/a05cac71997049f28dbc.svg" alt="neighborhood node"/>
      </div>

      <div className="login-info-box">
        <div className="login-signup-box">
          <div className="sub-login-signup-box">
            <div className="sub-login-signup-box-content">
              <h1 className="sub-login-signup-box-content-title">Welcome back</h1>
              <div className="sub-login-signup-box-content-choose-method">
                {/* ------------------------Where the signup credentials go--------------------- */}
                <form className="email-password" onSubmit={handleSubmit}>
                  <div className="sub-email-password">
                    <div className="email-input">
                      <div className="sub-email-input">
                        <div className="deep-sub-email-input">
                          <ul>
                            {errors.map((error) => <li key={error}>{error}</li>)}
                          </ul>
                          <input className="actual-email-input" aria-disabled="false" aria-label="Email address" placeholder="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            required />
                        </div>
                      </div>
                    </div>
                    <div className="password-input">
                      <div className="sub-password-input">
                        <div className="deep-sub-password-input">
                          <input className="actual-password-input" aria-disabled="false" aria-label="Password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            required />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="signup-continue-button">
                    <button className="signup-continue-button-style" aria-disabled="false" type="submit">
                      Log in
                    </button>
                  </div>
                  <div className="signup-continue-button-2">
                    <button className="signup-continue-button-style" aria-disabled="false" type="submit">
                      Demo User Log In
                    </button>
                  </div>
                  <div className="divider">
                    <div className="or">
                      <span>OR</span>
                    </div>
                  </div>
                  <div className="thrid-party-options">
                    <div className="social-registration">
                      <button className="social-registration-company" aria-disabled="false" type="button" id="google-button" aria-label="Continue with Google" >
                        <img src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/3cc4b0eb5bdb0c5cb9e5.svg" alt="google" />
                        <div className="social-registration-label">Continue with Google</div>
                      </button>
                    </div>
                    <div className="social-registration">
                      <button className="social-registration-company" aria-disabled="false" type="button" id="facebook-button" aria-label="Continue with Facebook" >
                        <img src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/9c885269569db3947bfe.svg" alt="facebook" />
                        <div className="social-registration-label">Continue with Facebook</div>
                      </button>
                    </div>
                    <div className="social-registration">
                      <button className="social-registration-company" aria-disabled="false" type="button" id="apple-button" aria-label="Continue with Apple" >
                        <img src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/83a554b807c8d4f3b329.svg" alt="apple" />
                        <div className="social-registration-label">Continue with Apple</div>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="have-a-business-prompt">
                  <span className="have-a-business-prompt-label">New to Nextdoor?</span>
                  <a className="have-a-business-prompt-label-link" href="/">Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
