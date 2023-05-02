import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./PostCommentsBox.css";
import profile from '../../../../../assets/profile.png'

export default function PostCommentsBox() {
  const [isExpanded, setIsExpanded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div>
        <button className="sub-user-comment-box-container" onClick={handleButtonClick}>
          <span className="parent-news-feed-comment-user-avatar">
            <div className="news-feed-comment-user-avatar">
            {sessionUser && (
              <img className="news-feed-comment-user-avatar-image" alt="user avatar" src={sessionUser.userPhoto ? sessionUser.userPhoto : profile} />
              )}
            </div>
          </span>
          <div className="parent-user-comment-modal-container">
            <div className="child-user-comment-modal-container">
              <input type="text" className="grandchild-user-comment-modal-container" placeholder="Add a comment..." />
            </div>
          </div>
        </button>
        {isExpanded && (
          <div className="comment-buttons-container">
            <div className="news-feed-post-comment-composer-action-bar-container">
              <div className="news-feed-post-comment-composer-action-bar-container-contents">
                <div className="news-feed-post-comment-add-photo-and-location-buttons-container">

                  {/* Photo */}
                  <div className="news-feed-post-comment-add-photo-button-container">
                    <button className="news-feed-post-comment-add-photo-button" >
                      <span className="news-feed-post-comment-add-photo-button-sub-container">
                        <svg className="news-feed-post-comment-add-photo-button-sub-container-svg" width="24" height="24" fill="none" viewBox="0 0 24 24" role="img">
                          <path fill="currentColor" fillRule="evenodd"
                            d="M12 8a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm-2.5 4.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
                            clipRule="evenodd">
                          </path>
                          <path fill="currentColor" fillRule="evenodd"
                            d="M9 3a1 1 0 0 0-.832.445L6.465 6H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-1.465l-1.703-2.555A1 1 0 0 0 15 3H9ZM7.832 7.555 9.535 5h4.93l1.703 2.555A1 1 0 0 0 17 8h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 0 .832-.445Z"
                            clipRule="evenodd">
                          </path>
                        </svg>
                        <span className="news-feed-post-comment-add-photo-button-text">Add a photo or video
                        </span>
                      </span>
                    </button>

                    {/* <label className="uploader-fileinput-label hidden">
                        <input className="uploader-fileinput" name="02CCD62E-8795-4EEA-B402-9759EA75AC30" type="file" multiple=""
                          accept="image/*, video/*" aria-label="Add a photo or video" />
                      </label> */}
                  </div>

                  {/* Location */}
                  <div className="news-feed-post-comment-add-location-button-container">
                    <button className="news-feed-post-comment-add-location-button">
                      <span className="news-feed-post-comment-add-location-button-sub-container">
                        <svg className="news-feed-post-comment-add-location-button-sub-container-svg" width="24" height="24" fill="none" viewBox="0 0 24 24" role="img">
                          <path fill="currentColor" d="M14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z">
                          </path>
                          <path fill="currentColor" fillRule="evenodd"
                            d="M12.65 21.76a1 1 0 0 1-1.301-.001c-.394-.338-.77-.697-1.141-1.06a34.237 34.237 0 0 1-2.48-2.688c-.902-1.095-1.823-2.374-2.522-3.723C4.511 12.948 4 11.472 4 10c0-4.452 3.548-8 8-8s8 3.548 8 8c0 1.472-.511 2.948-1.206 4.288-.7 1.35-1.62 2.628-2.522 3.723a34.235 34.235 0 0 1-2.48 2.689c-.37.362-.747.72-1.14 1.059h-.001ZM12 4c-3.348 0-6 2.652-6 6 0 1.028.364 2.177.981 3.368.614 1.182 1.443 2.341 2.29 3.371A32.263 32.263 0 0 0 12 19.65a32.268 32.268 0 0 0 2.728-2.909c.848-1.03 1.677-2.19 2.29-3.372.618-1.191.982-2.34.982-3.368 0-3.348-2.652-6-6-6Z"
                            clipRule="evenodd">
                          </path>
                        </svg>
                        <span className="news-feed-post-comment-add-location-button-text">Add location</span>
                      </span>
                    </button>
                  </div>

                </div>

                {/* Comment submit */}
                <div className="news-feed-post-comment-submit-button-container">
                  <button className="news-feed-post-comment-submit-button">
                    <span className="news-feed-post-comment-submit-button-text-container">
                      <span className="news-feed-post-comment-submit-button-text">Comment</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
