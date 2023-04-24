import React from 'react';
import './SignupBar.css';

export default function SignupBar() {
  return (
    <>
      <div className="splash-signup-bar">
        <span className="splash-signup-side-nav-menu">
            <div className="side-nav-menu-icon" aria-expanded="false" aria-controls="id-8" aria-haspopup="dialog" tabIndex="0" role="button"></div>
        </span>
        <a href="/login">
          <button className="signup-bar-login-button" type="button">Log in</button>
        </a>
      </div>
    </>
  );
}
