import React, { useState, useEffect } from 'react';
import SignupBar from './SignupBar/SignupBar'
import Hero from './Hero/Hero'
import About from './About/About'
import Footer from './Footer/Footer'
import './Splash.css';

export default function Splash() {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the user is using a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(navigator.userAgent);

    if (isMobile) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };


  return (
    <>
      <div className="splash-page-default-style">
        {showPopup && (
          <div className="mobile-popup-overlay">
            <div className="mobile-popup">
              <p>Please use a desktop device for the best experience. Mobile development is in progress.</p>
              <button className="mobile-close-button" onClick={handleClosePopup}>
                Close
              </button>
            </div>
          </div>
        )}
        <SignupBar />
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  );
}
