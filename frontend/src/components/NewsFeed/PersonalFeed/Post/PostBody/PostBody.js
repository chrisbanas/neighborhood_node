import { useState, useRef, useEffect } from 'react';
import PostMapWrapper from "./PostMap/PostMap";
import './PostBody.css';

export default function PostBody({ post }) {

  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const imgRef = useRef(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  const updateImageSize = () => {
    if (imgRef.current) {
      const modalWidth = modalRef.current.offsetWidth;
      const modalHeight = modalRef.current.offsetHeight;
      const imageWidth = imgRef.current.naturalWidth;
      const imageHeight = imgRef.current.naturalHeight;

      if (imageWidth > modalWidth || imageHeight > modalHeight) {
        const widthRatio = modalWidth / imageWidth;
        const heightRatio = modalHeight / imageHeight;
        const scaleFactor = Math.min(widthRatio, heightRatio);

        imgRef.current.style.width = `${scaleFactor * imageWidth}px`;
        imgRef.current.style.height = `${scaleFactor * imageHeight}px`;
      } else {
        imgRef.current.style.width = `${imageWidth}px`;
        imgRef.current.style.height = `${imageHeight}px`;
      }
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', updateImageSize);
      updateImageSize();
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', updateImageSize);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', updateImageSize);
    };
  }, [showModal]);

  return (
    <>
      <div className="news-feed-post-body">
        <p className="news-feed-post-content">{post.body}</p>
        {post.photoUrls && post.photoUrls[0] && (
          <img
            className="news-feed-post-img"
            src={post.photoUrls[0]}
            alt="post"
            onClick={toggleModal}
            ref={imgRef}
          />
        )}
        <br></br>
        {(post.latitude === null && post.longitude === null) || (post.latitude === 0 && post.longitude === 0) ? (
          ''
        ) : (
          <PostMapWrapper post={post} />
        )}
      </div>

      {showModal && (
        <div className="news-feed-post-body-modal" onClick={toggleModal} ref={modalRef}>
          <div className="news-feed-post-body-modal-content">
            <img
              className="news-feed-post-body-modal-img"
              src={post.photoUrls[0]}
              alt="post"
              ref={imgRef}
              onLoad={updateImageSize}
            />
          </div>
          <button className="news-feed-post-body-modal-close" onClick={toggleModal}>
            X
          </button>
        </div>
      )}
    </>
  );

}
