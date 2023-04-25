import React from 'react';
import './Footer.css';

export default function Footer() {

  return (
      <>
        <div className="footer-container">
            <div className="sub-footer-container">
              <div className="sub-footer-container-style">
                <div className="index-container">
                  <p className="index-container-header">Neighborhood Node</p>
                  <div><a href="/" className="index-container-content">About</a></div>
                  <div><a href="/" className="index-container-content">News</a></div>
                  <div><a href="/" className="index-container-content">Media Assets</a></div>
                  <div><a href="/" className="index-container-content">Investor Relations</a></div>
                  <div><a href="/" className="index-container-content">Blog</a></div>
                  <div><a href="/" className="index-container-content">Careers</a></div>
                  <div><a href="/" className="index-container-content">Help</a></div>
                </div>
                <div className="index-container">
                    <p className="index-container-header">Neighbors</p>
                    <div><a href="/" className="index-container-content">Get Started</a></div>
                    <div><a href="/" className="index-container-content">Events</a></div>
                    <div><a href="/" className="index-container-content">Neighborhoods</a></div>
                    <div><a href="/" className="index-container-content">Guidelines</a></div>
                    <div><a href="/" className="index-container-content">Anti-Racism Resources</a></div>
                </div>
                <div className="index-container">
                    <p className="index-container-header">Business and Organizations</p>
                    <div><a href="/" className="index-container-content">Small</a></div>
                    <div><a href="/" className="index-container-content">Brands &amp; Agencies</a></div>
                    <div><a href="/" className="index-container-content">Public Agency</a></div>
                    <div><a href="/" className="index-container-content">Self-Service Ad Terms</a></div>
                </div>
                <div className="index-container">
                  <p className="index-container-header">Industries</p>
                  <div><a href="/" className="index-container-content">Home &amp; Garden</a></div>
                  <div><a href="/" className="index-container-content">Real Estate</a></div>
                  <div><a href="/" className="index-container-content">Professional Services</a></div>
                  <div><a href="/" className="index-container-content">Food &amp; Entertainment</a></div>
                  <div><a href="/" className="index-container-content">Shopping &amp; Retail</a></div>
                  <div><a href="/" className="index-container-content">Medical &amp; Dental</a></div>
                </div>
              </div>
              <div className="footer-disclaimers">
                <div><a href="/" className="individual-footer-disclaimer">Do Not Sell or Share My Personal Information</a></div>
                <div><a href="/" className="individual-footer-disclaimer">Limit the Use of My Sensitive Personal Information</a></div>
                <div><a href="/" className="individual-footer-disclaimer">Privacy</a></div>
                <div><a href="/" className="individual-footer-disclaimer">Legal &amp; Terms</a></div>
                <div><a href="/" className="individual-footer-disclaimer">Cookies</a></div>
              </div>
              <hr className="footer-separator" aria-orientation="horizontal"/>

              <div className="country-and-app">
                <div className="country-container" role="button">
                  <div>
                    <svg className="country-selector" width="20" height="20"role="img">
                      <path fill="currentColor" d="M4.75 7.252a.732.732 0 1 0-1.036 1.035l5.75 5.75a.732.732 0 0 0 1.035 0l5.787-5.787a.732.732 0 0 0-1.036-1.036l-5.269 5.27L4.75 7.252Z">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="app-container">Get the app:
                  <a href="/">
                    <img className="app-selector" alt="iOS download link" src="https://d19rpgkrjeba2z.cloudfront.net/static/images/signup/apple_logo.svg"/>
                  </a>
                  <a href="/">
                    <img className="app-selector" alt="Android download link" src="https://d19rpgkrjeba2z.cloudfront.net/static/images/signup/android_robot.svg"/>
                  </a>
                </div>
            </div>


              <hr className="footer-separator" aria-orientation="horizontal"/>
              <div className="copyright">
                Made by your neighbors in Santa Clara, CA. © Neighborhood Node 2023.
              </div>
            </div>
        </div>
      </>
  );

};
