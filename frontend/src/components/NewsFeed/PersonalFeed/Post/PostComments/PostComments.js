import React from "react";
import './PostComments.css';

export default function PostComments() {

  return (

    <>
      <button aria-live="off" className="sub-user-comment-box-container">
        <span className="parent-news-feed-comment-user-avatar">
          <div className="news-feed-comment-user-avatar">
            <img className="news-feed-comment-user-avatar-image" alt="user avatar" data-pin-nopin="true" src="https://us1-photo.nextdoor.com/user_photos/33/7d/337d37645b9f50c6c07e2b6f6fa73fe8.jpg?request_version=v2&output_type=jpg&sizing=linear&x_size=1&resize_type=resize" />
          </div>
        </span>
        <div className="parent-user-comment-modal-container">
          <div className="child-user-comment-modal-container">
            <span className="grandchild-user-comment-modal-container">Add a comment...
            </span>
          </div>
        </div>
      </button>
    </>

  )
}
