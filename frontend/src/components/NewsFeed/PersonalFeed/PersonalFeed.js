import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../../store/session';

import './PersonalFeed.css';

export default function PersonalFeed() {
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout())
    .then(move => history.push("/login")); //this is how we switch to the other page
  };


  return (
    <>

{/* Header bar */}
    <div className="container">
      <div className="logo">
        <a href="/news_feed/" className="news-feed-nav-bar-logo">
          <img src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/a05cac71997049f28dbc.svg" className="new-feed-neighborhood-node-logo" alt="Neighborhood Node logo"/>
        </a>
      </div>
      <div className="news-feed-search-container">
        <form className="news-feed-search-bar-form">
          <div className="news-feed-search-input-field-container">
            <input aria-label="Search Neighborhood Node" className="news-feed-search-input-field" placeholder="Search Neighborhood Node" autoComplete="off" value=""/>
          </div>
        </form>
      </div>
      <div className="logout">
        <button onClick={logout} className="profile-button">Log Out</button>
      </div>
    </div>

{/* Left side bar */}

<div class="container">
		<div class="index">
      indexbox
			{/* <!-- Content for the index section goes here --> */}
		</div>
		<div class="news-feed">
      news feed box
			{/* <!-- Content for the news feed section goes here --> */}
		</div>
		<div class="user-content">
      user box
			{/* <!-- Content for the user content section goes here --> */}
		</div>
	</div>





    </>
  );

};
