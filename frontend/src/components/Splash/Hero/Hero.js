import React from 'react';
import './Hero.css';
// import header from '../../../assets/header.jpg'

export default function Hero() {
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
                        <img src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/3cc4b0eb5bdb0c5cb9e5.svg" alt="google"/>
                          <div className="social-registration-label">Continue with Google</div>
                      </button>
                    </div>
                    <div className="social-registration">
                      <button className="social-registration-company" aria-disabled="false" type="button" id="facebook-button" aria-label="Continue with Facebook" >
                        <img src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/9c885269569db3947bfe.svg" alt="facebook"/>
                          <div className="social-registration-label">Continue with Facebook</div>
                      </button>
                    </div>
                    <div className="social-registration">
                      <button className="social-registration-company" aria-disabled="false" type="button" id="apple-button" aria-label="Continue with Apple" >
                        <img src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/83a554b807c8d4f3b329.svg" alt="apple"/>
                          <div className="social-registration-label">Continue with Apple</div>
                      </button>
                    </div>
                  </div>
                  <div className="divider">
                    <div className="or">
                      <span>OR</span>
                    </div>
                  </div>
                  <form className="email-password">
                    <div className="sub-email-password">
                      <div className="email-input">
                        <div className="sub-email-input">
                          <div className="deep-sub-email-input">
                            <input className="actual-email-input" aria-disabled="false" aria-label="Email address" type="email" value="" />
                            <label className="email-input-label">Email address</label>
                          </div>
                        </div>
                      </div>
                      <div className="password-input">
                        <div className="sub-password-input">
                          <div className="deep-sub-password-input">
                            <input className="actual-password-input" aria-disabled="false" aria-label="Password" type="password" value="" />
                            <label className="password-input-label">Password</label>
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

          </div>

        </div>
      </div>
    </>
  );
}