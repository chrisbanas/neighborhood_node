import React, { useState } from "react";
import './PostOwnerInfo.css';

export default function PostOwnerInfo({ post }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* <!-- postowner --> */}
      <div className="parent-news-feed-post-user-info-container">
        <div className="child-news-feed-post-user-info-container">
          <div className="grandchild-news-feed-post-user-info-container">
            {/* <!-- user avatar --> */}
            <div className="post-owner-avatar-container" onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <span className="post-news-feed-owner-avatar" >
                <div className="post-news-feed-owner-avatar-image">
                  <img
                    className="news-feed-user-avatar-image" alt="user avatar" src={post.userPhoto} />
                </div>
              </span>
            </div>
            {/* <!-- user info --> */}
            <div className="news-feed-post-owner-name-and-neighborhood-container">
              <div className="news-feed-post-owner-name-container">
                <a className="news-feed-post-owner-name" href="/news_feed">
                  {post.authorFirstName}&nbsp;{post.authorLastName}
                </a>
              </div>
              <div className="news-feed-post-neighborhood-name-container">
                <a className="news-feed-post-neighborhood-name" href="/news_feed">
                  {post.neighborhoodName}
                </a>
              </div>
            </div>
            {/* <!-- popup --> */}
            {showPopup && (
              <div className="news-feed-post-user-profile-popup">
                <div className="sub-news-feed-post-user-profile-popup">
                  <img className="popup-news-feed-user-avatar-image" alt="user avatar" src={post.userPhoto} />
                  <div>
                    <div className="popup-news-feed-post-neighborhood-name">
                      {post.authorFirstName}&nbsp;{post.authorLastName}
                    </div>
                    <div>
                      {post.neighborhoodName}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
