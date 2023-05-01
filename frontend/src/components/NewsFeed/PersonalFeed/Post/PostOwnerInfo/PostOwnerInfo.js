import React from "react";
import './PostOwnerInfo.css';

export default function PostOwnerInfo({ post }) {

  return (

    <>
      {/* <!-- postowner --> */}
      <div className="parent-news-feed-post-user-info-container">
        <div className="child-news-feed-post-user-info-container">
          <div className="grandchild-news-feed-post-user-info-container">
            {/* <!-- user avatar --> */}
            <div className="post-owner-avatar-container">
              <span className="post-news-feed-owner-avatar">
                <div className="post-news-feed-owner-avatar-image">
                  <img className="news-feed-user-avatar-image" alt="user avatar" data-pin-nopin="true" src={post.userPhoto} />
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


          </div>
        </div>
      </div>
    </>

  )

}
