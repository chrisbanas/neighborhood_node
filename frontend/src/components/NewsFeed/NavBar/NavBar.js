import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../../store/session';
import './NavBar.css';

// image imports
import textLogo from '../../../assets/text_logo.png'
import profile from '../../../assets/profile.png'


export default function NavBar(user) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  // button for header

  // const openMenu = () => {
  //   if (showMenu) return;
  //   setShowMenu(true);
  // };

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout())
      .then(() => history.push("/login")); //this is how we switch to the other page
  };

  return (
    <>
      <div className="news-feed-navbar-container">
        <div className="logo">
          <a href="/news_feed/" className="news-feed-nav-bar-logo">
            <img src={textLogo} className="new-feed-neighborhood-node-logo" alt="Neighborhood Node logo" />
          </a>
        </div>
        <div className="news-feed-search-container">
          <form className="news-feed-search-bar-form">
            <div className="news-feed-search-input-field-container">
              <input className="news-feed-search-input-field" placeholder="Search Neighborhood Node" autoComplete="off" />
            </div>
          </form>
        </div>
        <span className="nav-parent-news-feed-user-avatar" onClick={logout}>
          <div className="nav-news-feed-user-avatar">
            {sessionUser && sessionUser.userPhoto ? (
              <img className="nav-news-feed-user-avatar-image" alt="user avatar" src={sessionUser.userPhoto} />
            ) : (
              <img className="nav-news-feed-user-avatar-image" alt="user avatar" src={profile} />
            )}
          </div>
        </span>

      </div>


    </>
  )

}
