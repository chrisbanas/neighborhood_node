import React from 'react';
import './Hero.css';
import header from '../../../assets/header.jpg'

export default function Hero() {
  return (
    <>
      <div class="hero">
        <span>
          <div className="hero-img">
            <img src={header} alt="Neighborhood Node Banner"/>
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
                  <form className="email-password" role="form">
                    <div className="sub-email-password">
                      <div className="email-input">
                        <div className="sub-email-input">
                          <div className="deep-sub-email-input">
                            <input className="actual-email-input" aria-disabled="false" aria-label="Email address" type="email" value="" />
                            <label className="email-input-label">Email address</label>
                          </div>
                        </div>

                      </div>

                    </div>
                  </form>
                </div>
              </div>

            </div>

          </div>
          <div className="hero-login-box">


          </div>

        </div>
      </div>
    </>
  );
}
