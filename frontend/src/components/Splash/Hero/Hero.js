import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../../store/session";
import './Hero.css';
// import header from '../../../assets/header.jpg'




export default function Hero() {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [neighborhoodId, setNeighborhoodId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      return setErrors(['Please input a password with atleast 6 characters']);
    }
    else {
      setErrors([]);
      dispatch(sessionActions.signup({ email, password, firstName, lastName, neighborhoodId }))
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
    }
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
      <div className="hero">
        <span>
          <div className="hero-img">

          </div>
        </span>
        <div className="hero-info-box">
          <div className="hero-signup-box">
            <div className="sub-hero-signup-box">
              <div className="sub-hero-signup-box-content">
                <h1 className="sub-hero-signup-box-content-title">Discover your neighborhood</h1>
                <div className="sub-hero-signup-box-content-choose-method">
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
                  <div className="divider">
                    <div className="or">
                      <span>Or Signup Below</span>
                    </div>
                  </div>
                  {/* ------------------------Where the signup credentials go--------------------- */}
                  <form className="email-password" onSubmit={handleSubmit}>
                    <ul>
                      {errors.map((error) => <li className="signup-errors"key={error}>{error}</li>)}
                    </ul>
                    <div className="sub-email-password">
                      <div className="email-input">
                        <div className="sub-email-input">

                          <div className="password-input">
                            <div className="sub-password-input">
                              <div className="deep-sub-password-input">
                                <input className="actual-password-input" aria-disabled="false" aria-label="First Name" placeholder="First Name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                  required />
                              </div>
                            </div>
                          </div>

                          <div className="password-input">
                            <div className="sub-password-input">
                              <div className="deep-sub-password-input">
                                <input className="actual-password-input" aria-disabled="false" aria-label="Last Name" placeholder="Last Name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}
                                  required />
                              </div>
                            </div>
                          </div>

                          <div className="password-input">
                            <div className="sub-password-input">
                              <div className="deep-sub-password-input">
                                <select className="actual-password-input" value={neighborhoodId} onChange={(e) => setNeighborhoodId(e.target.value)}>
                                  <option value="">Select a neighborhood</option>
                                  <option value={1} >Mission District</option>
                                  <option value={2} >Marina District</option>
                                  <option value={3} >Pacific Heights</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="deep-sub-email-input">
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
                        Continue
                      </button>
                    </div>
                  </form>
                  <p className="signup-disclamier">
                    <span>By signing up, you agree to our&nbsp;
                      <a className="signup-disclamier-content" href="/" target="_blank">
                        Privacy Policy
                      </a>,&nbsp;
                      <a className="signup-disclamier-content" href="/" target="_blank">
                        Cookie Policy
                      </a>,&nbsp;
                      <a className="signup-disclamier-content" href="/" target="_blank">
                        Member Agreement
                      </a>
                      , and that we may share your personal information with our&nbsp;
                      <a className="signup-disclamier-content" href="/" target="_blank">
                        partners&nbsp;
                      </a>
                      to verify your account.
                    </span>
                  </p>
                  <div className="have-a-business-prompt">
                    <span className="have-a-business-prompt-label">Have a business?</span>
                    <a className="have-a-business-prompt-label-link" href="/login">Get started</a>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div className="hero-login-box">
            <div className="have-an-account-prompt">
              <span className="have-an-account-prompt-label">Have an account?</span>
              <a className="have-an-account-prompt-label-link" href="/login">Log in</a>
            </div>
            <div className="signup-continue-button">
              <button className="signup-continue-button-style" aria-disabled="false" type="submit" onClick={handleDemo}>
                Demo User Log In
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
