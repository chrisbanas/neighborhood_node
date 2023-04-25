import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import textLogo from '../../../assets/text_logo.png'
import './Form.css';

export default function Form() {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({ email, password }))
      .then(move => history.push("/news_feed"))
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

  const handleDemo = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(
      sessionActions.login({ email: "demouser@gmail.com", password: "123456" })
    )
    .then(move => history.push("/news_feed"));
  };

  return (
    <>
      <div className="login-form-logo-container">
        < img src={textLogo} alt="neighborhood node" className="login-form-logo"/>
      </div>

      <div className="login-info-box">
        <div className="login-signup-box">
          <div className="sub-login-signup-box">
            <div className="sub-login-signup-box-content">
              <h1 className="sub-login-signup-box-content-title">Welcome back</h1>
              <div className="sub-login-signup-box-content-choose-method">
                {/* ------------------------Where the signup credentials go--------------------- */}
                <form className="login-form-email-password" onSubmit={handleSubmit}>
                  <div className="login-form-sub-email-password">
                    <div className="login-form-email-input">
                      <div className="login-form-sub-email-input">
                          <ul>
                            {errors.map((error) => <li className="login-form-form-errors" key={error}>{error}</li>)}
                          </ul>
                        <div className="login-form-deep-sub-email-input">
                          <input className="login-form-actual-email-input" aria-disabled="false" aria-label="Email address" placeholder="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            required />
                        </div>
                      </div>
                    </div>
                    <div className="login-form-password-input">
                      <div className="login-form-sub-password-input">
                        <div className="login-form-deep-sub-password-input">
                          <input className="login-form-actual-password-input" aria-disabled="false" aria-label="Password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            required />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="login-form-signup-continue-button">
                    <button className="login-form-signup-continue-button-style" aria-disabled="false" type="submit">
                      Log in
                    </button>
                  </div>
                  <div className="login-form-signup-continue-button-2">
                    <button className="login-form-signup-continue-button-style" aria-disabled="false" type="submit" onClick={handleDemo}>
                      Demo User Log In
                    </button>
                  </div>
                  <div className="login-form-divider">
                    <div className="login-form-or">
                      <span>OR</span>
                    </div>
                  </div>
                  <div className="login-form-thrid-party-options">
                    <div className="login-form-social-registration">
                      <button className="login-form-social-registration-company" aria-disabled="false" type="button" id="google-button" aria-label="Continue with Google" >
                        <img src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/3cc4b0eb5bdb0c5cb9e5.svg" alt="google" />
                        <div className="login-form-social-registration-label">Continue with Google</div>
                      </button>
                    </div>
                    <div className="login-form-social-registration">
                      <button className="login-form-social-registration-company" aria-disabled="false" type="button" id="facebook-button" aria-label="Continue with Facebook" >
                        <img src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/9c885269569db3947bfe.svg" alt="facebook" />
                        <div className="login-form-social-registration-label">Continue with Facebook</div>
                      </button>
                    </div>
                    <div className="login-form-social-registration">
                      <button className="login-form-social-registration-company" aria-disabled="false" type="button" id="apple-button" aria-label="Continue with Apple" >
                        <img src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/83a554b807c8d4f3b329.svg" alt="apple" />
                        <div className="login-form-social-registration-label">Continue with Apple</div>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="new-to-neighborhood-node-prompt">
                  <span className="new-to-neighborhood-node-prompt-label">New to Neighborhood Node?</span>
                  <a className="new-to-neighborhood-node-prompt-label-link" href="/">Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
