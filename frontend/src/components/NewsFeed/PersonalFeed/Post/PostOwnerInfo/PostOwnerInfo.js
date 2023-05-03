import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../../../../store/posts";
import './PostOwnerInfo.css';
import profile from '../../../../../assets/profile.png'

export default function PostOwnerInfo({ post }) {

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  // For the user info popup
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  // For the edit / delete dropdown
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleEditClick = () => {
    // TODO: Handle edit action
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    dispatch(deletePost(post.id))
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
                    className="news-feed-user-avatar-image" alt="user avatar" src={post.userPhoto ? post.userPhoto : profile} />
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
                  <img className="popup-news-feed-user-avatar-image" alt="user avatar" src={post.userPhoto ? post.userPhoto : profile} />
                  <div className="popup-news-feed-user-info-container">
                    <div className="popup-news-feed-post-user-name">
                      {post.authorFirstName}&nbsp;{post.authorLastName}
                    </div>
                    <div className="popup-news-feed-post-neighborhood-name">
                      {post.neighborhoodName}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <!-- Edit / delete dropdown --> */}
          {sessionUser && sessionUser.id === post.authorId && (
          <div className="news-feed-post-delete-edit-dropdown-container">
            <div className="sub-news-feed-post-delete-edit-dropdown-container" onClick={handleDropdownClick}>
              <svg className="news-feed-post-delete-edit-dropdown-icon" width="24" height="24" viewBox="0 0 24 24" role="img">
                <path fill="currentColor" d="M5.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
              </svg>
              {dropdownVisible && (
                <div className="news-feed-post-delete-edit-dropdown-menu-container">
                  <div className="news-feed-post-delete-edit-dropdown-menu">
                    <div className="news-feed-post-delete-edit-dropdown-item" onClick={handleEditClick}>
                      Edit Post
                    </div>
                    <div className="news-feed-post-delete-edit-dropdown-item" onClick={handleDeleteClick}>
                      Delete Post
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  );
}
