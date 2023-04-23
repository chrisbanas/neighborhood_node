import React from 'react';
import './SignupBar.css';

export default function SignupBar() {
  return (
    <>
      <div className="splash-signup-bar">
      <span class="splash-signup-side-nav-menu">
          <div class="side-nav-menu-icon" aria-expanded="false" aria-controls="id-8" aria-haspopup="dialog" tabindex="0" role="button"></div>
      </span>
      <button class="signup-bar-login-button" type="button">Log in</button>
      </div>
    </>
  );
}
