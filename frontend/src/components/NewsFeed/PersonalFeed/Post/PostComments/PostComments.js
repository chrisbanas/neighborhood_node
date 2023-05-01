import React, { useState } from "react";
import "./PostComments.css";

export default function PostComments() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div>
        <button className="sub-user-comment-box-container" onClick={handleButtonClick}>
          <span className="parent-news-feed-comment-user-avatar">
            <div className="news-feed-comment-user-avatar">
              <img className="news-feed-comment-user-avatar-image" alt="user avatar" src="https://us1-photo.nextdoor.com/user_photos/33/7d/337d37645b9f50c6c07e2b6f6fa73fe8.jpg?request_version=v2&output_type=jpg&sizing=linear&x_size=1&resize_type=resize" />
            </div>
          </span>
          <div className="parent-user-comment-modal-container">
            <div className="child-user-comment-modal-container">
              <span className="grandchild-user-comment-modal-container">
                Add a comment...
              </span>
            </div>
          </div>
        </button>
        {isExpanded && (
          <div className="comment-buttons-container">
            <div className="news-feed-post-comment-composer-action-bar-container">
              <div className="news-feed-post-comment-composer-action-bar-container-contents">
                <div className="news-feed-post-comment-add-photo-and-location-buttons-container">
                  <div className="news-feed-post-comment-add-photo-button-container">
                    <div className="child-news-feed-post-comment-add-photo-button-container">
                      <div className="grandchild-news-feed-post-comment-add-photo-button-container">
                        <button className="css-1yumpwt" type="button" aria-label="Add photo or video">
                          <span className="css-quama8">
                            <svg className="css-16vvbkk" width="24" height="24" fill="none" viewBox="0 0 24 24" role="img">
                              <path fill="currentColor" fill-rule="evenodd"
                                d="M12 8a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm-2.5 4.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
                                clip-rule="evenodd">
                              </path>
                              <path fill="currentColor" fill-rule="evenodd"
                                d="M9 3a1 1 0 0 0-.832.445L6.465 6H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-1.465l-1.703-2.555A1 1 0 0 0 15 3H9ZM7.832 7.555 9.535 5h4.93l1.703 2.555A1 1 0 0 0 17 8h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 0 .832-.445Z"
                                clip-rule="evenodd">
                              </path>
                            </svg>
                            <span className="css-fjx9q6">Add a photo or video</span>
                          </span>
                        </button>
                      </div>
                      {/* <label className="uploader-fileinput-label hidden">
                        <input className="uploader-fileinput" name="02CCD62E-8795-4EEA-B402-9759EA75AC30" type="file" multiple=""
                          accept="image/*, video/*" aria-label="Add a photo or video" />
                      </label> */}
                    </div>
                  </div>
                  <div className="css-6pxlcy">
                    <div className="add-geo-tag-button-wrapper css-1x07s3w">
                      <div className="css-qisic1">
                        <div className="css-x97tdo" tabindex="-1" aria-disabled="false" aria-expanded="false" aria-controls="id-299"
                          aria-haspopup="dialog" role="button">
                          <button className="css-1yumpwt" type="button" aria-label="Add location" data-testid="add-geo-tag-button"
                            tabindex="0">
                            <span className="css-quama8">
                              <svg className="css-16vvbkk" width="24" height="24" fill="none" viewBox="0 0 24 24" role="img">
                                <path fill="currentColor" d="M14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z">
                                </path>
                                <path fill="currentColor" fill-rule="evenodd"
                                  d="M12.65 21.76a1 1 0 0 1-1.301-.001c-.394-.338-.77-.697-1.141-1.06a34.237 34.237 0 0 1-2.48-2.688c-.902-1.095-1.823-2.374-2.522-3.723C4.511 12.948 4 11.472 4 10c0-4.452 3.548-8 8-8s8 3.548 8 8c0 1.472-.511 2.948-1.206 4.288-.7 1.35-1.62 2.628-2.522 3.723a34.235 34.235 0 0 1-2.48 2.689c-.37.362-.747.72-1.14 1.059h-.001ZM12 4c-3.348 0-6 2.652-6 6 0 1.028.364 2.177.981 3.368.614 1.182 1.443 2.341 2.29 3.371A32.263 32.263 0 0 0 12 19.65a32.268 32.268 0 0 0 2.728-2.909c.848-1.03 1.677-2.19 2.29-3.372.618-1.191.982-2.34.982-3.368 0-3.348-2.652-6-6-6Z"
                                  clip-rule="evenodd">
                                </path>
                              </svg>
                              <span className="css-fjx9q6">Add location</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="css-1rf2nsv">
                  <button className="comment-composer-submit css-wvbf7v" aria-disabled="true"
                    data-testid="inline-composer-reply-button">
                    <span className="css-quama8">
                      <span className="css-robf3z">Comment</span>
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
