import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, updateComment } from "../../../../../../store/comments";
import PostCommentsStats from "./PostCommentsStats/PostCommentsStats";
import "./PostComments.css";
import profile from '../../../../../../assets/profile.png'

export default function PostComments({ comment }) {

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
  const commentId = comment.id
  const postId = comment.postId

  // Pre pops the comment with the previous body

  useEffect(() => {
    setBody(comment.body);
  }, [comment.body]);


  // Edit Comment

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = {
      id: commentId,
      body: body,
      authorId: authorId,
      postId: postId
    };
    dispatch(updateComment(comment))
    setBody(""); // clear the textarea after submitting the form
  };

  const handleEditComment = (e) => {
    e.preventDefault();
    if (!body) {
      return; // if body is empty, do not submit the form
    }
    toggleModal(); // call toggleModal first
    handleCommentSubmit(e); // then call handlePostSubmit
  }

  const handleDeleteClick = (e) => {
    e.preventDefault();
    dispatch(deleteComment(comment.id))
  };



  // Modal for Edit Post

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
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
                  className="news-feed-user-avatar-image" alt="user avatar" src={comment.userPhoto ? comment.userPhoto : profile} />
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
                <img className="popup-news-feed-comment-user-avatar-image" alt="user avatar" src={comment.userPhoto ? comment.userPhoto : profile} />
                <div className="popup-news-feed-comment-user-info-container">
                  <div className="popup-news-feed-comment-user-name">
                    {comment.authorFirstName}&nbsp;{comment.authorLastName}
                  </div>
                  <div className="popup-news-feed-comment-neighborhood-name">
                    {comment.neighborhoodName}
                  </div>
                </div>
              </div>
              <div className="popup-news-feed-comment-user-bio-container">
                <p className="popup-news-feed-comment-user-bio">{comment.authorBio}</p>
              </div>
            </div>
          )}
        </div>
        {/* <!-- Edit / delete dropdown --> */}
        {sessionUser && sessionUser.id === comment.authorId && (
          <div className="news-feed-comment-delete-edit-dropdown-container">
            <div className="sub-news-feed-comment-delete-edit-dropdown-container" onClick={handleDropdownClick}>
              <svg className="news-feed-comment-delete-edit-dropdown-icon" width="24" height="24" viewBox="0 0 24 24" role="img">
                <path fill="currentColor" d="M5.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
              </svg>
              {dropdownVisible && (
                <div className="news-feed-comment-delete-edit-dropdown-menu-container">
                  <div className="news-feed-comment-delete-edit-dropdown-menu">
                    <div className="news-feed-comment-delete-edit-dropdown-item" onClick={toggleModal}>
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
        )}
      </div>
      <p>{comment.body}</p>


      <PostCommentsStats comment={comment} />



      {/* Modal for edit comment*/}
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
                      <button className="news-feed-post-modal-next-button" onClick={handleEditComment} disabled={!body}>
                        <span className="news-feed-post-modal-next-button-text">Edit</span>
                      </button>
                    </div>
                  </div>

                  {/* Body form */}
                  <form className="news-feed-post-modal-body-form" noValidate="">
                    <div className="news-feed-post-modal-body-form-container">
                      <div className="news-feed-post-modal-body-form-text-area-container">
                        <textarea className="news-feed-post-modal-body-form-text-area" placeholder={comment.body} defaultValue={comment.body} spellCheck="false" value={body} onChange={e => setBody(e.target.value)} required>
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

                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>

        </div>
      )}



    </>

  )

}
