import React from 'react';
import SignupBar from './SignupBar/SignupBar'
import Hero from './Hero/Hero'
import About from './About/About'
import Footer from './Footer/Footer'
import './Splash.css';

export default function Splash() {

    return (
        <>
        <div className="splash-page-default-style">
            <SignupBar />
            <Hero />
            <About />
            <Footer />
        </div>
        </>
    );
}
