import React, { useState } from "react";
import PostMapWrapper from "./PostMap/PostMap";
import './PostBody.css';

export default function PostBody({ post }) {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (

    <>
      <div className="news-feed-post-body">
        <p className="news-feed-post-content">
          {post.body}
        </p>
        {post.photoUrls && post.photoUrls[0] &&
          <img className="news-feed-post-img" src={post.photoUrls[0]} alt="post" onClick={toggleModal} />}
        <br></br>
        {((post.latitude === null && post.longitude === null) || (post.latitude === 0 && post.longitude === 0)) ? "" : <PostMapWrapper post={post} />}
      </div>

      {showModal && (
        <div className="news-feed-post-body-modal">
          <div className="news-feed-post-body-modal-content">
            <img className="news-feed-post-body-modal-img" src={post.photoUrls[0]} alt="post" />
          </div>
          <button className="news-feed-post-body-modal-close" onClick={toggleModal}>X</button>
        </div>
      )}
    </>

  )

}
