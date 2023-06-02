import React, { useState, useEffect, useRef } from "react";
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



  // for the google maps
  const [latitude, setLatitude] = useState(post.latitude);
  const [longitude, setLongitude] = useState(post.longitude);
  const [showMap, setShowMap] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    if ((showMap || post.latitude || post.longitude) && window.google && mapRef.current) {
      const lat = post.latitude || 37.7749; // Default to San Francisco
      const lng = post.longitude || -122.4194;

      const newMap = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 8,
      });

      const marker = new window.google.maps.Marker({
        position: { lat, lng },
        map: newMap,
        draggable: true,
      });

      newMap.addListener('click', (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setLatitude(lat);
        setLongitude(lng);
        marker.setPosition(new window.google.maps.LatLng(lat, lng));
      });
    }
  }, [showMap, post]);

  const handleShowMap = () => {
    // if showMap is null (initial load), check if there are valid coordinates for the post
    if (showMap === null) {
      if (post.latitude && post.longitude && !isNaN(post.latitude) && !isNaN(post.longitude)) {
        setShowMap(true);
      } else {
        setShowMap(false);
      }
    }
    // if showMap is not null (after initial load), toggle its value
    else {
      setShowMap(prevShowMap => !prevShowMap);
    }
  };



  // Function to reset latitude and longitude
  const removeLocation = () => {
    setLatitude(null);
    setLongitude(null);
    setShowMap(false); // This will hide the map
  };


  // For photos
  const [photoFile, setPhotoFile] = useState(post.photoUrls[0]);
  const [postPhoto, setPostPhoto] = useState(post.photoUrls[0]);

  const handlePostFile = ({ currentTarget }) => {
    const file = currentTarget.files[0];
    setPhotoFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPostPhoto(reader.result)
    };
    reader.readAsDataURL(file);
  }

  const handleUpdatePost = (e) => {
    e.preventDefault();
    if (!body) {
      return; // if body is empty, do not submit the form
    }
    const formData = new FormData();

    formData.append('post[id]', postId)
    formData.append('post[body]', body)
    formData.append('post[authorId]', authorId)
    formData.append('post[neighborhoodId]', neighborhoodId)
    formData.append('post[latitude]', latitude)
    formData.append('post[longitude]', longitude)

    if ((post.photoUrls.length === 0 && photoFile === null) || (post.photoUrls[0] === '' && photoFile === null)) { }
    else if (photoFile !== null) {
      formData.append(`post[photo]`, photoFile);
    } else {
      formData.append(`post[photo]`, ''); // allows the user to remove the photo
    }

    toggleModal(); // call toggleModal first
    dispatch(updatePost(formData)); // then call handlePostSubmit
    setBody(""); // clear the textarea after submitting the form
    setPostPhoto(null) // clears out the photo
  }

  // this is for the photo preview in the post modal
  let preview = null;
  if (postPhoto) preview = <img className="post-user-uploaded-photo" src={postPhoto} alt="" />;

  // for the remove photo button
  const clearImage = () => {
    setPostPhoto(null);
    setPhotoFile(null);
  };

  // Delete Post

  const handleDeleteClick = (e) => {
    e.preventDefault();
    dispatch(deletePost(post.id))
  };

  // Modal for Edit Post

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    handleShowMap();
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
                      <button className="news-feed-post-modal-next-button" onClick={handleUpdatePost} disabled={!body}>
                        <span className="news-feed-post-modal-next-button-text">Edit</span>
                      </button>
                    </div>
                  </div>

                  {/* Body form */}
                  <form className="news-feed-post-modal-body-form" noValidate="">
                    <div className="news-feed-post-modal-body-form-container">
                      <div className="news-feed-post-modal-body-form-text-area-container">
                        <textarea className="news-feed-post-modal-body-form-text-area" placeholder={post.body} spellCheck="false" value={body} onChange={e => setBody(e.target.value)} required>
                          {post.body}</textarea>
                      </div>
                      <div className="news-feed-post-modal-body-form-location-container">
                        <div className="news-feed-post-modal-body-form-location-add-geo-tag-container">
                          {latitude && longitude &&
                            <button onClick={removeLocation}>Remove Location</button>
                          }
                          <div className="sub-news-feed-post-modal-body-form-location-add-geo-tag-container" tabIndex="-1" onClick={handleShowMap}>
                            <svg className="news-feed-post-modal-body-form-add-geo-tag-icon" width="20" height="20" viewBox="0 0 20 20" role="img">
                              <path fill="currentColor" fillRule="evenodd"
                                d="M3 7c0-3.87 3.13-7 7-7s7 3.13 7 7c0 5.25-7 13-7 13S3 12.25 3 7Zm7 3c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3Z">
                              </path>
                            </svg>
                            <span className="news-feed-post-modal-body-form-add-geo-tag-text">Add a location</span>
                          </div>
                          {(showMap) && (
                            <div ref={mapRef} style={{ height: "200px", width: "100%" }}></div>
                          )}
                        </div>
                      </div>
                    </div>
                    <br></br>
                    {postPhoto !== null && (
                      <button className="post-box-remove-photo-button" onClick={clearImage}>Remove Photo</button>
                    )}
                    {preview}
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
                          {/* user load photo */}
                          <input onChange={handlePostFile} className="uploader-fileinput"
                            name="13EA655A-BC56-40B6-8B41-49885FF9B443" type="file" multiple="" accept="image/*, video/*"
                          />
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
  );
}
