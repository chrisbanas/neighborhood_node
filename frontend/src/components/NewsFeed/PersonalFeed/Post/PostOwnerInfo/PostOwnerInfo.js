import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost, deletePost } from "../../../../../store/posts";
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


  const [body, setBody] = useState("");
  const [authorId] = useState(sessionUser ? sessionUser.id : null);
  const [neighborhoodId] = useState(sessionUser ? sessionUser.neighborhoodId : null);
  const postId = post.id

  // Pre pops the post with the previous body

  useEffect(() => {
    setBody(post.body);
  }, [post.body]);


  // Edit Post

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: postId,
      body: body,
      authorId: authorId,
      neighborhoodId: neighborhoodId
    };
    dispatch(updatePost(post))
    setBody(""); // clear the textarea after submitting the form
  };

  const handleEditPost = (e) => {
    e.preventDefault();
    if (!body) {
      return; // if body is empty, do not submit the form
    }
    toggleModal(); // call toggleModal first
    handlePostSubmit(e); // then call handlePostSubmit
  }


  // Delete Post

  const handleDeleteClick = (e) => {
    e.preventDefault();
    dispatch(deletePost(post.id))
  };



  // Modal for Edit Post

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
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
                <div className="popup-news-feed-post-user-bio-container">
                  <p className="popup-news-feed-post-user-bio">{post.authorBio}</p>
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
                    <div className="news-feed-post-delete-edit-dropdown-item" onClick={toggleModal}>
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



{/* Edit Post Modal */}
      {isModalVisible && (
        <div className="news-feed-parent-modal-container">

          <div className="news-feed-child-modal-container" tabIndex="0">
            <div className="news-feed-grandchild-modal-container">
              <span className="news-feed-great-grandchild-modal-container">
                <div className="news-feed-very-great-grandchild-modal-container">

                  {/* Header */}
                  <div className="news-feed-modal-close-submit-buttons-container">
                    <button className="news-feed-post-modal-close-button" onClick={toggleModal}>
                      <svg className="news-feed-post-modal-close-button-icon" viewBox="0 0 24 24"
                        role="img">
                        <path fill="currentColor" fillRule="evenodd"
                          d="M17.707 6.293a1 1 0 0 1 0 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 1.414-1.414L12 10.586l4.293-4.293a1 1 0 0 1 1.414 0Z"
                          clipRule="evenodd">
                        </path>
                      </svg>
                    </button>
                    <div className="news-feed-post-modal-next-button-container">
                      <button className="news-feed-post-modal-next-button" onClick={handleEditPost} disabled={!body}>
                        <span className="news-feed-post-modal-next-button-text">Edit</span>
                      </button>
                    </div>
                  </div>

                  {/* Body form */}
                  <form className="news-feed-post-modal-body-form" noValidate="">
                    <div className="news-feed-post-modal-body-form-container">
                      <div className="news-feed-post-modal-body-form-text-area-container">
                        <textarea className="news-feed-post-modal-body-form-text-area" placeholder={post.body} defaultValue={post.body} spellCheck="false" value={body} onChange={e => setBody(e.target.value)} required>
                        </textarea>
                      </div>
                      <div className="news-feed-post-modal-body-form-location-container">
                        <div className="news-feed-post-modal-body-form-location-add-geo-tag-container">
                          <div className="sub-news-feed-post-modal-body-form-location-add-geo-tag-container" tabIndex="-1">
                            <svg className="news-feed-post-modal-body-form-add-geo-tag-icon" width="20" height="20" viewBox="0 0 20 20" role="img">
                              <path fill="currentColor" fillRule="evenodd"
                                d="M3 7c0-3.87 3.13-7 7-7s7 3.13 7 7c0 5.25-7 13-7 13S3 12.25 3 7Zm7 3c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3Z">
                              </path>
                            </svg>
                            <span className="news-feed-post-modal-body-form-add-geo-tag-text">Add a location</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  {/* Additional buttons */}
                  <div className="news-feed-post-modal-body-form-additional-buttons-container">
                    <div className="sub-news-feed-post-modal-body-form-additional-buttons-container">

                      {/* Classifieds */}
                      <div className="news-feed-post-modal-body-form-classifieds-container">
                        <div className="news-feed-post-modal-body-form-classifieds-icon-container">
                          <svg className="news-feed-post-modal-body-form-classifieds-icon" width="24" height="24" fill="none"
                            viewBox="0 0 24 24" role="img">
                            <path fill="currentColor" fillRule="evenodd"
                              d="M7.941 2.995C6.51 1.767 4.34 1.586 2.963 2.963c-1.455 1.455-1.17 3.794.25 5.214.258.258.552.495.868.712-.053.224-.08.455-.08.69v2.843a3 3 0 0 0 .878 2.121l6.25 6.25a3 3 0 0 0 4.242 0l5.422-5.422a3 3 0 0 0 0-4.242l-6.25-6.25A3 3 0 0 0 12.422 4H9.579a3 3 0 0 0-2.122.879L6.044 6.292c.457.292 1.086.587 1.83.85l.11.038.887-.887A1 1 0 0 1 9.58 6h2.843a1 1 0 0 1 .707.293l6.25 6.25a1 1 0 0 1 0 1.414l-5.422 5.422a1 1 0 0 1-1.414 0l-6.25-6.25A1 1 0 0 1 6 12.422V9.903c.268.112.534.213.792.304.415.146.825.273 1.21.38a2.69 2.69 0 1 0 .835-1.847c-.42-.108-.894-.248-1.379-.419-1.147-.405-2.213-.94-2.83-1.558-.82-.82-.756-1.88-.25-2.386.456-.456 1.367-.553 2.143.038l1.42-1.42Zm2.75 8.385a.69.69 0 0 1-.619-.382 1 1 0 0 0 .926-.926.69.69 0 0 1-.308 1.308Z"
                              clipRule="evenodd">
                            </path>
                          </svg>
                        </div>
                        <span className="news-feed-post-modal-body-form-classifieds-text">Sell or give away an item
                        </span>
                      </div>

                      {/* Add Photos */}
                      <div className="news-feed-post-modal-body-form-add-photo-container">
                        <div className="sub-news-feed-post-modal-body-form-add-photo-container">
                          <div className="news-feed-post-modal-body-form-add-photo-icon-container">
                            <svg className="news-feed-post-modal-body-form-add-photo-icon" width="24" height="24"
                              fill="none" viewBox="0 0 24 24" role="img">
                              <path fill="currentColor" fillRule="evenodd"
                                d="M12 9.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
                                clipRule="evenodd">
                              </path>
                              <path fill="currentColor" fillRule="evenodd"
                                d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6Zm3-1a1 1 0 0 0-1 1v8.586l1.879-1.879a3 3 0 0 1 4.242 0l2.172 2.172a1 1 0 0 0 1.414 0l.172-.172a3 3 0 0 1 4.242 0L20 16.586V6a1 1 0 0 0-1-1H5Zm14.47 13.883-2.763-2.762a1 1 0 0 0-1.414 0l-.172.172a3 3 0 0 1-4.242 0L8.707 14.12a1 1 0 0 0-1.414 0L4 17.414V18a1 1 0 0 0 1 1h14c.17 0 .33-.042.47-.117Z"
                                clipRule="evenodd">
                              </path>
                            </svg>
                          </div>
                          <span className="news-feed-post-modal-body-form-add-photo-text">Add a photo or video</span>
                        </div>
                        <label className="uploader-fileinput-label hidden">
                          <input className="uploader-fileinput"
                            name="13EA655A-BC56-40B6-8B41-49885FF9B443" type="file" multiple="" accept="image/*, video/*"
                            aria-label="Add a photo or video" />
                        </label>
                      </div>

                      {/* Event */}
                      <div className="news-feed-post-modal-body-form-event-container">
                        <div className="sub-news-feed-post-modal-body-form-event-container">
                          <div className="sub-news-feed-post-modal-body-form-event-icon-container">
                            <svg className="sub-news-feed-post-modal-body-form-event-icon" width="24" height="24" fill="none" viewBox="0 0 24 24" role="img">
                              <path fill="currentColor"
                                d="M15.707 13.207a1 1 0 0 0-1.414-1.414L11 15.086l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z">
                              </path>
                              <path fill="currentColor" fillRule="evenodd"
                                d="M9 3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1V3a1 1 0 1 0-2 0v1H9V3ZM5 18v-8h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1ZM5 8h14V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1Z"
                                clipRule="evenodd">
                              </path>
                            </svg>
                          </div>
                          <span className="sub-news-feed-post-modal-body-form-event-text">Create an event
                          </span>
                        </div>
                      </div>

                      {/* Poll */}
                      <div className="news-feed-post-modal-body-form-poll-container">
                        <div className="sub-news-feed-post-modal-body-form-poll-container">
                          <div className="sub-news-feed-post-modal-body-form-poll-icon-container">
                            <svg className="sub-news-feed-post-modal-body-form-poll-icon" width="24" height="24" fill="none"
                              viewBox="0 0 24 24" role="img">
                              <path fill="currentColor" fillRule="evenodd"
                                d="M3 4.5A2.5 2.5 0 0 1 5.5 2h5A2.5 2.5 0 0 1 13 4.5v1A2.5 2.5 0 0 1 10.5 8h-5A2.5 2.5 0 0 1 3 5.5v-1ZM5.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5ZM3 11.5A2.5 2.5 0 0 1 5.5 9h13a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 12.5v-1Zm2.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-13ZM5.5 16A2.5 2.5 0 0 0 3 18.5v1A2.5 2.5 0 0 0 5.5 22h9a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5h-9ZM5 18.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1Z"
                                clipRule="evenodd">
                              </path>
                            </svg>
                          </div>
                          <span className="sub-news-feed-post-modal-body-form-poll-text">Poll your neighbors</span>
                        </div>
                      </div>

                      {/* Safety */}
                      <div className="news-feed-post-modal-body-form-safety-container">
                        <div className="sub-news-feed-post-modal-body-form-safety-container">
                          <div className="news-feed-post-modal-body-form-safety-icon-container">
                            <svg className="news-feed-post-modal-body-form-safety-icon" width="24" height="24" fill="none"
                              viewBox="0 0 24 24" role="img">
                              <path fill="currentColor" fillRule="evenodd"
                                d="M12 2C6.541 2 2 6.168 2 11.438V12a1 1 0 0 0 1.566.825c.63-.433 1.571-.95 2.578-.95.905 0 1.73.37 2.379.723a1 1 0 0 0 .935.01c.682-.352 1.587-.733 2.542-.733.955 0 1.86.38 2.542.733a1 1 0 0 0 .935-.01c.649-.353 1.474-.723 2.379-.723 1.009 0 1.963.52 2.571.945A1 1 0 0 0 22 12v-.563C22 6.168 17.459 2 12 2ZM9.263 4.445c-2.712.918-4.712 3.16-5.166 5.835a5.66 5.66 0 0 1 2.047-.405c.686 0 1.318.133 1.869.315.067-2.025.394-3.302.917-4.87.102-.307.213-.6.333-.875Zm.75 5.76c.063-1.763.345-2.844.814-4.253.261-.782.546-1.319.804-1.64a1.2 1.2 0 0 1 .295-.28.282.282 0 0 1 .072-.032h.004a.282.282 0 0 1 .072.032 1.2 1.2 0 0 1 .295.28c.258.321.543.858.804 1.64.47 1.409.75 2.49.814 4.254A6.495 6.495 0 0 0 12 9.875c-.723 0-1.398.141-1.987.33Zm5.974-.015c-.067-2.025-.394-3.302-.917-4.87a10.41 10.41 0 0 0-.334-.875c2.712.918 4.712 3.158 5.166 5.833a5.687 5.687 0 0 0-2.046-.403c-.686 0-1.318.133-1.869.315Z"
                                clipRule="evenodd">
                              </path>
                              <path fill="currentColor"
                                d="M12 13a1 1 0 0 1 1 1v4.5a3.5 3.5 0 1 1-7 0V18a1 1 0 1 1 2 0v.5a1.5 1.5 0 0 0 3 0V14a1 1 0 0 1 1-1Z">
                              </path>
                            </svg>
                          </div>
                          <span className="news-feed-post-modal-body-form-safety-text">Post about safety</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>





        </div>
      )}







    </>
  );
}
