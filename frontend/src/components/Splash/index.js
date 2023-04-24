import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../NewsFeed/ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Splash.css';
import SignupBar from './SignupBar/SignupBar'
import Hero from './Hero/Hero'
import About from './About/About'
import Footer from './Footer/Footer'






export default function Splash() {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

        <ul>
        <li>
            <NavLink exact to="/">Home</NavLink>
            {sessionLinks}
        </li>
    </ul>

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
