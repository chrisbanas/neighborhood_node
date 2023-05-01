import React from "react";
import LoginFormModal from "./CreatePostModal";
import './CreatePostBox.css';
import profile from '../../../../assets/profile.png'

export default function CreatePostBox() {

  return (
    <>
      <div>
        <div className="user-post-box-container">
          <button aria-live="off" className="sub-user-post-box-container">
            <span className="parent-news-feed-user-avatar">
              <div className="news-feed-user-avatar">
                <img className="news-feed-user-avatar-image" alt="user avatar" data-pin-nopin="true" src={profile} />
              </div>
            </span>
            <div className="parent-user-post-modal-container">
              <div className="child-user-post-modal-container">
                <span className="grandchild-user-post-modal-container">What's on your mind, neighbor? </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  )

}
