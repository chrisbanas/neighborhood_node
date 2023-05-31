import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createPost } from "../../../store/posts";
import './FeedIndex.css';

import github from '../../../assets/github.png'
import linkedin from '../../../assets/linkedin.png'

export default function FeedIndex() {

  // Create Post

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [body, setBody] = useState("");
  const [authorId] = useState(sessionUser ? sessionUser.id : null);
  const [neighborhoodId] = useState(sessionUser ? sessionUser.neighborhoodId : null);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const post = {
      body: body,
      authorId: authorId,
      neighborhoodId: neighborhoodId
    };
    dispatch(createPost(post))
    setBody(""); // clear the textarea after submitting the form
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!body) {
      return; // if body is empty, do not submit the form
    }
    toggleModal(); // call toggleModal first
    handlePostSubmit(e); // then call handlePostSubmit
  }


  // Modal for Post

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };



  return (

    <>
      <div className="news-feed-index">
        <div className="news-feed-index-list">
          <li className="news-feed-index-list-item">
            <Link className="news-feed-index-list-item-container" to="/news_feed">
              <svg className="news-feed-index-list-item-icon">
                <path fill="currentColor" d="M16.669 4.257a1 1 0 0 0-1.338 0l-10 9A1 1 0 0 0 5 14v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h6v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V14a1 1 0 0 0-.331-.743l-10-9Z">
                </path>
              </svg>
              <span className="news-feed-index-list-item-title" data-testid="Home">Home</span>
            </Link>
          </li>
          {/* <li className="news-feed-index-list-item">
            <a className="news-feed-index-list-item-container" href="/news_feed">
              <svg className="news-feed-index-list-item-icon" role="img">
                <path fill="currentColor" fillRule="evenodd" d="M12.13 11.974a.2.2 0 0 0-.156.157l-1.915 9.575a.2.2 0 0 0 .235.235l9.575-1.915a.2.2 0 0 0 .157-.157l1.915-9.575a.2.2 0 0 0-.235-.235l-9.575 1.915ZM13.7 13.7l-1.15 5.75 5.75-1.15-4.6-4.6Z" clipRule="evenodd">
                </path>
                <path fill="currentColor" fillRule="evenodd" d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Zm0-2c5.523 0 10-4.477 10-10S21.523 6 16 6 6 10.477 6 16s4.477 10 10 10Z" clipRule="evenodd">
                </path>
              </svg>
              <span className="news-feed-index-list-item-title" data-testid="Discover">Discover</span>
            </a>
          </li>
          <li className="news-feed-index-list-item">
            <a className="news-feed-index-list-item-container" href="/news_feed">
              <svg className="news-feed-index-list-item-icon" role="img">
                <path fill="currentColor" fillRule="evenodd" d="m19.3 6.9 9 9c1.2 1.1 1.2 3.1 0 4.1l-8.2 8.2c-.6.6-1.4.9-2.1.9-.7 0-1.5-.3-2.1-.9l-7.021-7.021-2.03-1.912C6.283 18.702 6 17.995 6 17.147v-5.04c-.067-.057-.133-.107-.2-.157-.1-.075-.2-.15-.3-.25-1.8-1.9-2.05-4.81-.35-6.51 1.5-1.5 3.95-1.58 5.75-.28-.5.2-.9.49-1.3.89l-.4.4c-.9-.4-1.9-.3-2.6.4-.9.9-.8 2.5.2 3.6 1.3 1.2 3.1 1.9 4.6 2.3.6-.9 1.6-1.5 2.8-1.5 1.8 0 3.2 1.6 3.2 3.3 0 1.7-1.4 3.2-3.2 3.2-1.7 0-3.1-1.3-3.2-3-.9-.2-2-.6-3-1.1V17.2c0 .04.002.082.006.128.026.262.142.566.327.75l.024.027L17.2 26.9c.4.4 1 .4 1.4 0l8.2-8.2c.4-.4.4-1 0-1.4l-9-9c-.2-.2-.4-.3-.7-.3h-4.3c-.2 0-.5.1-.7.3l-2.2 2.2c-.6-.3-1.2-.7-1.7-1.1l2.6-2.5c.5-.6 1.3-.9 2.1-.9h4.3c.8 0 1.5.3 2.1.9ZM13.375 15a1.125 1.125 0 0 0 .719-1.99 1.25 1.25 0 1 1-.85 1.983c.043.004.087.007.131.007Z" clipRule="evenodd">
                </path>
              </svg>
              <span className="news-feed-index-list-item-title" data-testid="For Sale &amp; Free">For Sale &amp; Free
              </span>
            </a>
          </li>
          <li className="news-feed-index-list-item">
            <a className="news-feed-index-list-item-container" href="/news_feed">
              <svg className="news-feed-index-list-item-icon" viewBox="0 0 32 32" role="img">
                <path fill="currentColor" fillRule="evenodd" d="M16 3.5c-2.071 0-4 1.657-4 3.85v.004C9.167 8.774 7.5 11.68 7.5 15v3.197l-2.832 4.248A1 1 0 0 0 5.5 24H12c0 2.212 1.788 4 4 4 2.212 0 4-1.788 4-4h6.5a1 1 0 0 0 .832-1.555L24.5 18.197V15c0-3.32-1.667-6.225-4.5-7.646V7.35c0-2.193-1.929-3.85-4-3.85ZM18 24h-4c0 1.108.892 2 2 2s2-.892 2-2Zm6.631-2-1.963-2.945a1 1 0 0 1-.168-.555V15c0-2.825-1.491-5.118-3.872-6.072A1 1 0 0 1 18 8v-.65c0-.961-.902-1.85-2-1.85-1.098 0-2 .889-2 1.85V8a1 1 0 0 1-.628.928C10.992 9.882 9.5 12.175 9.5 15v3.5a1 1 0 0 1-.168.555L7.37 22H24.63Z" clipRule="evenodd"></path>
              </svg>
              <span className="news-feed-index-list-item-title" data-testid="Notifications">Notifications</span>
            </a>
          </li>
          <li className="news-feed-index-list-item">
            <a className="news-feed-index-list-item-container" href="/news_feed">
              <svg className="news-feed-index-list-item-icon" viewBox="0 0 32 32" role="img">
                <path fill="currentColor" d="M17.328 25.23C18.623 26.48 20.401 28 23 28a1 1 0 0 0 .896-1.443v-.001l-.009-.019a4.48 4.48 0 0 1-.181-.488 4.766 4.766 0 0 1-.175-.81c1.184-.881 2.444-2.027 3.455-3.37C28.126 20.358 29 18.525 29 16.5a8.37 8.37 0 0 0-1.071-4.15c.047.426.071.859.071 1.297 0 3.778-1.893 7.132-4.75 9.26-.441.377-.89.72-1.323 1.024a1 1 0 0 0-.427.819c0 .365.035.71.088 1.02-.67-.224-1.264-.6-1.832-1.056-.78.254-1.593.429-2.428.516Z">
                </path>
                <path fill="currentColor" fillRule="evenodd" d="M3 13.647A9.64 9.64 0 0 1 12.647 4h3.706A9.64 9.64 0 0 1 26 13.647a9.64 9.64 0 0 1-9.465 9.645C14.77 25.542 12.035 27 8.941 27a1 1 0 0 1-.895-1.447l.002-.002.007-.016.034-.07a12.128 12.128 0 0 0 .491-1.229c.193-.576.34-1.173.374-1.683A9.628 9.628 0 0 1 3 13.647Zm7.486 11.196a7.675 7.675 0 0 0 4.727-3.123 1 1 0 0 1 .819-.426h.32A7.64 7.64 0 0 0 24 13.647 7.64 7.64 0 0 0 16.353 6h-3.706A7.64 7.64 0 0 0 5 13.647a7.63 7.63 0 0 0 5.243 7.253 1 1 0 0 1 .676.804c.158 1.076-.15 2.29-.433 3.14Z" clipRule="evenodd">
                </path>
              </svg>
              <span className="news-feed-index-list-item-title" data-testid="Messages">Messages</span>
            </a>
          </li> */}
          <div className="news-feed-index-post-button-container">
            <button className="news-feed-index-post-button" onClick={toggleModal}>
              <span className="news-feed-index-post-button-content">
                <svg className="news-feed-index-post-button-symbol" viewBox="0 0 24 24" role="img">
                  <path fill="currentColor" d="M13 4a1 1 0 1 0-2 0v7H4a1 1 0 1 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4Z">
                  </path>
                </svg>Post
              </span>
            </button>
          </div>
        </div>



        {/* Index footer */}
        <div className="news-feed-index-footer-menue-container">
          <footer className="news-feed-index-footer" tabIndex="0" aria-label="Footer">
            {/* <ul className="news-feed-index-footer-ul">
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed" target="_blank">Help&nbsp;&bull;&nbsp;</a>
              </li>
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">Guidelines&nbsp;&bull;&nbsp;</a>
              </li>
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed" target="_blank">Legal&nbsp;&bull;&nbsp;</a>
              </li>
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">Privacy</a>
              </li>
            </ul>
            <ul className="news-feed-index-footer-ul">
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">About&nbsp;&bull;&nbsp;</a>
              </li>
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">Jobs&nbsp;&bull;&nbsp;</a>
              </li>
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">Press&nbsp;&bull;&nbsp;</a>
              </li>
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">Blog</a>
              </li>
            </ul>
            <ul className="news-feed-index-footer-ul">
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">Do Not Sell or Share My Personal Information&nbsp;&bull;&nbsp;
                </a>
              </li>
              <li>
                <a className="news-feed-index-footer-li" href="/news_feed">Limit the Use of My Sensitive Personal Information
                </a>
              </li>
            </ul> */}
            <div className="news-feed-index-copyright-container">
              <div className="news-feed-footer-copyright">© 2023 Neighborhood Node</div>
              <div className="linkedin-logo">
                <a href="https://www.linkedin.com/in/christopher-banas/" className="news-feed-nav-bar-linkedin-logo">
                  <img src={linkedin} className="new-feed-neighborhood-node-likedin-logo" alt="LinkedIn logo" />
                </a>
              </div>
              <div className="github-logo">
                <a href="https://github.com/chrisbanas/neighborhood_node" className="news-feed-nav-bar-github-logo">
                  <img src={github} className="new-feed-neighborhood-node-github-logo" alt="Github logo" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>


{/* Post Modal */}

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
                      <button className="news-feed-post-modal-next-button" onClick={handleCreatePost} disabled={!body}>
                        <span className="news-feed-post-modal-next-button-text">Post</span>
                      </button>
                    </div>
                  </div>

                  {/* Body form */}
                  <form className="news-feed-post-modal-body-form" noValidate="">
                    <div className="news-feed-post-modal-body-form-container">
                      <div className="news-feed-post-modal-body-form-text-area-container">
                        <textarea className="news-feed-post-modal-body-form-text-area" placeholder="What's on your mind, neighbor?" spellCheck="false" value={body} onChange={e => setBody(e.target.value)} required>
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

                      {/* Classifieds
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
                      </div> */}

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

                      {/* Event
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
                      </div> */}

                      {/* Poll
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
                      </div> */}

                      {/* Safety */}
                      {/* <div className="news-feed-post-modal-body-form-safety-container">
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
                      </div> */}

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
