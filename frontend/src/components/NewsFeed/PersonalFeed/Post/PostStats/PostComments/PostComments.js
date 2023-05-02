import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../../../../../store/posts";
import PostCommentsStats from "./PostCommentsStats/PostCommentsStats";
import "./PostComments.css";

export default function PostComments({ comment }) {

  const dispatch = useDispatch();

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
    dispatch(deletePost(comment.id))
  };


  return (

    <>


      <div className="child-news-feed-comment-user-info-container">
        <div className="grandchild-news-feed-comment-user-info-container">
          {/* <!-- user avatar --> */}
          <div className="comment-owner-avatar-container" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <span className="comment-news-feed-owner-avatar" >
              <div className="comment-news-feed-owner-avatar-image">
                <img
                  className="news-feed-user-avatar-image" alt="user avatar" src={comment.userPhoto} />
              </div>
            </span>
          </div>
          {/* <!-- user info --> */}
          <div className="news-feed-comment-owner-name-container">
            <a className="news-feed-comment-owner-name" href="/news_feed">
              {comment.authorFirstName}&nbsp;{comment.authorLastName}
            </a>
          </div>
          <div className="news-feed-comment-neighborhood-name-container">
            <a className="news-feed-comment-neighborhood-name" href="/news_feed">
              {comment.neighborhoodName}
            </a>
          </div>
          {/* <!-- popup --> */}
          {showPopup && (
            <div className="news-feed-comment-user-profile-popup">
              <div className="sub-news-feed-comment-user-profile-popup">
                <img className="popup-news-feed-user-avatar-image" alt="user avatar" src={comment.userPhoto} />
                <div>
                  <div className="popup-news-feed-comment-neighborhood-name">
                    {comment.authorFirstName}&nbsp;{comment.authorLastName}
                  </div>
                  <div>
                    {comment.neighborhoodName}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* <!-- Edit / delete dropdown --> */}
        <div className="news-feed-comment-delete-edit-dropdown-container">
          <div className="sub-news-feed-comment-delete-edit-dropdown-container" onClick={handleDropdownClick}>
            <svg className="news-feed-comment-delete-edit-dropdown-icon" width="24" height="24" viewBox="0 0 24 24" role="img">
              <path fill="currentColor" d="M5.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
            </svg>
            {dropdownVisible && (
              <div className="news-feed-comment-delete-edit-dropdown-menu-container">
                <div className="news-feed-comment-delete-edit-dropdown-menu">
                  <div className="news-feed-comment-delete-edit-dropdown-item" onClick={handleEditClick}>
                    Edit Comment
                  </div>
                  <div className="news-feed-comment-delete-edit-dropdown-item" onClick={handleDeleteClick}>
                    Delete Comment
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <PostCommentsStats comment={comment}/>

    </>

  )

}
