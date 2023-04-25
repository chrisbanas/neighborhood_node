import React from 'react';
import './About.css';

export default function About() {


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div className="about-us-content-container">
        <div className="about-us-description-container">
          <div className="about-us-description-content-container"></div>
            <div className="about-us-headline">
              <div className="about-us-headline-text">
                Get the most out of your neighborhood with Neighborhood Node
              </div>
            </div>
            <div className="about-us-headline-description-container">
              <div className="about-us-headline-description">
                It's where communities come together to greet newcomers, exchange recommendations, and read the latest local news. Where neighbors support local businesses and get updates from public agencies. Where neighbors borrow tools and sell couches. It's how to get the most out of everything nearby. Welcome, neighbor.
              </div>
            </div>
        </div>
        <div className="three-icons-container">
          <div className="icon-container">
            <div className="individual-icon">
              <img className="icon" src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/9cf6d5f4f3fb2af32d4c.svg" alt="phone icon"/>
            </div>
            <div className="icon-title">Essential</div>
            <p className="icon-description">Relevant news and information from neighbors, businesses, and public agencies in real time.</p>
          </div>
          <div className="icon-container">
            <div className="individual-icon">
              <img className="icon" src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/eb0a86dc85880cbc8e00.svg" alt="gps icon"/>
            </div>
            <div className="icon-title">Local</div>
            <p className="icon-description">The only way to instantly connect to the people, businesses, and happenings near your home.</p>
          </div>
          <div className="icon-container">
            <div className="individual-icon">
              <img className="icon" src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/17683aa2a42615fca0d1.svg" alt="house icon"/>
            </div>
            <div className="icon-title">Trusted</div>
            <p className="icon-description">A secure environment where all neighbors are verified.</p>
          </div>
        </div>
        <div className="about-us-bottom-signup">
          <div className="about-us-bottom-signup-content">
            <div className="about-us-bottom-signup-content-header">
              Instantly connect with your neighborhood
            </div>
            <div className="about-us-bottom-signup-button-container">
              <div className="sub-about-us-bottom-signup-button-container">
                <button className="about-us-bottom-signup-button" type="button" onClick={scrollToTop}>Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};
