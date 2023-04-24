import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProfileButton from '../NewsFeed/ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './Splash.css';
import SignupBar from './SignupBar/SignupBar'
import Hero from './Hero/Hero'
import About from './About/About'
import Footer from './Footer/Footer'






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
