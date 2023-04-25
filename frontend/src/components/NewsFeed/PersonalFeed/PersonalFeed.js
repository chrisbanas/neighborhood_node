import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../../store/session';
import textLogo from '../../../assets/text_logo.png'
import houseIcon from '../../../assets/house_icon.jpg'

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
    <div className="news-feed-navbar-container">
      <div className="logo">
        <a href="/news_feed/" className="news-feed-nav-bar-logo">
          <img src={textLogo} className="new-feed-neighborhood-node-logo" alt="Neighborhood Node logo"/>
        </a>
      </div>
      <div className="news-feed-search-container">
        <form className="news-feed-search-bar-form">
          <div className="news-feed-search-input-field-container">
            <input aria-label="Search Neighborhood Node" className="news-feed-search-input-field" placeholder="Search Neighborhood Node" autoComplete="off"/>
          </div>
        </form>
      </div>
      <div className="logout">
        <button onClick={logout} className="profile-button">Log Out</button>
      </div>
    </div>

{/* Main section */}

  <div className="news-feed-main-container">
			{/* <!-- Content for the index section goes here --> */}
		<div className="news-feed-index">
      <div className="news-feed-index-list">
        <li className="news-feed-index-list-item">
          <a className="news-feed-index-list-item-container" href="/news_feed">
            <img src={houseIcon} className="news-feed-index-list-item-icon" alt="house icon"></img>
            <span className="news-feed-index-list-item-title" data-testid="Home">Home</span>
          </a>
        </li>
        <li className="news-feed-index-list-item">
          <a className="news-feed-index-list-item-container" href="/news_feed">
            <svg className="news-feed-index-list-item-icon" role="img">
              <path fill="currentColor" fillRule="evenodd" d="M12.13 11.974a.2.2 0 0 0-.156.157l-1.915 9.575a.2.2 0 0 0 .235.235l9.575-1.915a.2.2 0 0 0 .157-.157l1.915-9.575a.2.2 0 0 0-.235-.235l-9.575 1.915ZM13.7 13.7l-1.15 5.75 5.75-1.15-4.6-4.6Z" clipRule="evenodd">
              </path>
              <path fill="currentColor" fillRule="evenodd" d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Zm0-2c5.523 0 10-4.477 10-10S21.523 6 16 6 6 10.477 6 16s4.477 10 10 10Z" clipRule="evenodd">
              </path>
            </svg>
            <span className="news-feed-index-list-item-title" data-testid="Discover">Discover</span>
          </a>
        </li>
        <li className="news-feed-index-list-item">
          <a className="news-feed-index-list-item-container" href="/news_feed">
            <svg className="news-feed-index-list-item-icon" role="img">
              <path fill="currentColor" fillRule="evenodd" d="m19.3 6.9 9 9c1.2 1.1 1.2 3.1 0 4.1l-8.2 8.2c-.6.6-1.4.9-2.1.9-.7 0-1.5-.3-2.1-.9l-7.021-7.021-2.03-1.912C6.283 18.702 6 17.995 6 17.147v-5.04c-.067-.057-.133-.107-.2-.157-.1-.075-.2-.15-.3-.25-1.8-1.9-2.05-4.81-.35-6.51 1.5-1.5 3.95-1.58 5.75-.28-.5.2-.9.49-1.3.89l-.4.4c-.9-.4-1.9-.3-2.6.4-.9.9-.8 2.5.2 3.6 1.3 1.2 3.1 1.9 4.6 2.3.6-.9 1.6-1.5 2.8-1.5 1.8 0 3.2 1.6 3.2 3.3 0 1.7-1.4 3.2-3.2 3.2-1.7 0-3.1-1.3-3.2-3-.9-.2-2-.6-3-1.1V17.2c0 .04.002.082.006.128.026.262.142.566.327.75l.024.027L17.2 26.9c.4.4 1 .4 1.4 0l8.2-8.2c.4-.4.4-1 0-1.4l-9-9c-.2-.2-.4-.3-.7-.3h-4.3c-.2 0-.5.1-.7.3l-2.2 2.2c-.6-.3-1.2-.7-1.7-1.1l2.6-2.5c.5-.6 1.3-.9 2.1-.9h4.3c.8 0 1.5.3 2.1.9ZM13.375 15a1.125 1.125 0 0 0 .719-1.99 1.25 1.25 0 1 1-.85 1.983c.043.004.087.007.131.007Z" clipRule="evenodd">
              </path>
            </svg>
            <span className="news-feed-index-list-item-title" data-testid="For Sale &amp; Free">For Sale &amp; Free
            </span>
          </a>
        </li>
        <li className="news-feed-index-list-item">
          <a className="news-feed-index-list-item-container" href="/news_feed">
            <img src={houseIcon} className="news-feed-index-list-item-icon" alt="house icon"></img>
            <span className="news-feed-index-list-item-title" data-testid="Notifications">Notifications</span>
          </a>
        </li>
        <li className="news-feed-index-list-item">
          <a className="news-feed-index-list-item-container" href="/news_feed">
            <img src={houseIcon} className="news-feed-index-list-item-icon" alt="house icon"></img>
            <span className="news-feed-index-list-item-title" data-testid="Messages">Messages</span>
          </a>
        </li>
        <div className="news-feed-index-post-button-container">
          <button className="news-feed-index-post-button">
            <span className="news-feed-index-post-button-content">
              <svg className="news-feed-index-post-button-symbol" viewBox="0 0 24 24" role="img">
                <path fill="currentColor" d="M13 4a1 1 0 1 0-2 0v7H4a1 1 0 1 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4Z">
                </path>
              </svg>Post
            </span>
          </button>
        </div>
      </div>

      <div className="news-feed-index-footer-menue-container">
        <footer className="news-feed-index-footer" tabindex="0" aria-label="Footer">
          <ul className="news-feed-index-footer-ul">
            <li>
              <a className="news-feed-index-footer-li" href="/news_feed" target="_blank">Help&nbsp;&bull;&nbsp;</a>
            </li>
            <li>
              <a className="news-feed-index-footer-li" href="/news_feed">Guidelines&nbsp;&bull;&nbsp;</a>
            </li>
            <li>
              <a className="news-feed-index-footer-li" href="/news_feed" target="_blank">Legal&nbsp;&bull;&nbsp;</a>
            </li>
            <li>
              <a className="news-feed-index-footer-li" href="/news_feed">Privacy</a>
            </li>
          </ul>
          <ul className="news-feed-index-footer-ul">
            <li>
              <a className="news-feed-index-footer-li" href="/news_feed">About&nbsp;&bull;&nbsp;</a>
            </li>
            <li>
              <a className="news-feed-index-footer-li" href="/news_feed">Jobs&nbsp;&bull;&nbsp;</a>
            </li>
            <li>
              <a className="news-feed-index-footer-li" href="/news_feed">Press&nbsp;&bull;&nbsp;</a>
            </li>
            <li>
              <a className="news-feed-index-footer-li" href="/news_feed">Blog</a>
            </li>
          </ul>
          <ul className="news-feed-index-footer-ul">
            <li>
              <a className="news-feed-index-footer-li" href="/news_feed">Do Not Sell or Share My Personal Information&nbsp;&bull;&nbsp;
              </a>
            </li>
            <li>
              <a className="news-feed-index-footer-li" href="/news_feed">Limit the Use of My Sensitive Personal Information
              </a>
            </li>
          </ul>
            <div className="news-feed-footer-copyright">© 2023 Neighborhood Node</div>
        </footer>
      </div>












		</div>
    {/* <!-- Content for the news feed section goes here --> */}
		<div className="news-feed-scroll">
      news feed box
		</div>
			{/* <!-- Content for the user feed section goes here --> */}
		<div className="news-feed-user-content">
      <div className="parent-news-feed-create-event-container">
        <div className="child-news-feed-create-event-container">
          <h2 className="news-feed-create-event-container-title">Invite your neighbors to a party, food drive, or meetup</h2>
          <button className="news-feed-create-event-container-button">Create event</button>
        </div>
      </div>
      <div className="parent-news-feed-create-business-container">
        <div className="parent-news-feed-create-business-img-box">
          <div className="child-news-feed-create-business-img-box">
            <img src="https://d19rpgkrjeba2z.cloudfront.net/static/images/offers/blocks-image-open-sign-2.svg"className="news-feed-create-business-img" alt="Neighborhood Node creat a business page"></img>
          </div>
        </div>
        <div className="news-feed-create-business-title-container">
          <h2 className="news-feed-create-business-title">Own a local business?</h2>
          <p className="news-feed-create-business-description">Create a business page to connect with neighbors, post updates in the feed, and gain new customers.</p>
          <button className="news-feed-create-business-button">Create page</button>
        </div>
      </div>
      <div className="parent-news-feed-neighbors-reccomendations-container">
        <div className="child-news-feed-neighbors-reccomendations-container">
          <div className="grandchild-news-feed-neighbors-reccomendations-container">
            <div className="news-feed-neighbors-reccomendations-title-container">
              <h2 className="news-feed-neighbors-reccomendations-title">Neighbors You May Know</h2>
            </div>
          </div>
        </div>
      </div>

		</div>
	</div>





    </>
  );

};
