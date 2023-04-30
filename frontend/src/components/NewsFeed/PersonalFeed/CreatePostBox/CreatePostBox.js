import React from "react";
import './CreatePostBox.css';

export default function CreatePostBox() {

  return (
    <>
      <div>
        <div className="user-post-box-container">
          <button aria-live="off" className="sub-user-post-box-container">
            <span className="parent-news-feed-user-avatar">
              <div className="news-feed-user-avatar">
                <img className="news-feed-user-avatar-image" alt="user avatar" data-pin-nopin="true" src="https://us1-photo.nextdoor.com/user_photos/33/7d/337d37645b9f50c6c07e2b6f6fa73fe8.jpg?request_version=v2&output_type=jpg&sizing=linear&x_size=1&resize_type=resize" />
              </div>
            </span>
            <div className="parent-user-post-modal-container">
              <div className="child-user-post-modal-container">
                <span className="grandchild-user-post-modal-container">What's on your mind, neighbor?</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  )

}