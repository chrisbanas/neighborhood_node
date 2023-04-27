import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../../store/session';
import './NavBar.css';

// image imports
import textLogo from '../../../assets/text_logo.png'
import github from '../../../assets/github.png'
import linkedin from '../../../assets/linkedin.png'


export default function NavBar(user) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  // const sessionUser = useSelector((state) => state.session.user);

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
              <input aria-label="Search Neighborhood Node" className="news-feed-search-input-field" placeholder="Search Neighborhood Node" autoComplete="off" />
            </div>
          </form>
        </div>

        <div className="linkedin-logo">
          <a href="https://www.linkedin.com/in/christopher-banas/" className="news-feed-nav-bar-linkedin-logo">
            <img src={linkedin} className="new-feed-neighborhood-node-likedin-logo" alt="LinkedIn logo" />
          </a>
        </div>

        <div className="github-logo">
          <a href="https://github.com/chrisbanas/neighborhood_node" className="news-feed-nav-bar-github-logo">
            <img src={github} className="new-feed-neighborhood-node-github-logo" alt="Github logo" />
          </a>
        </div>


        <span className="nav-parent-news-feed-user-avatar" onClick={logout}>
          <div className="nav-news-feed-user-avatar">
            <img className="nav-news-feed-user-avatar-image" alt="user avatar" data-pin-nopin="true" src="https://us1-photo.nextdoor.com/user_photos/33/7d/337d37645b9f50c6c07e2b6f6fa73fe8.jpg?request_version=v2&output_type=jpg&sizing=linear&x_size=1&resize_type=resize" />
          </div>
        </span>

      </div>


    </>
  )

}
