import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentLikes } from "../../../../../../../store/likes";
import { createLike, deleteLike } from "../../../../../../../store/likes";
import "./PostCommentsStats.css";

export default function PostCommentsStats({ comment }) {


  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const commentLikes = useSelector(getCommentLikes(comment))
  const sessionUserLike = commentLikes.find(like => sessionUser?.id === like.likerId) ? commentLikes.find(like => sessionUser?.id === like.likerId) : false

  // used to set the like button to red
  const [isLiked, setIsLiked] = useState(sessionUserLike ? true : false);


  // handles the like thunk action
const handleLikeClick = (e) => {
  e.preventDefault();
  const like = {
    liker: sessionUser,
    likeableId: comment.id,
    likeableType: "Comment"
  };
  if (isLiked) {
    dispatch(deleteLike({id: sessionUserLike.id, liker: sessionUser, likeableId: comment.id, likeableType: "Comment" }));
  } else {
    dispatch(createLike(like));
  }
  console.log("isLiked before update:", isLiked);
  console.log(commentLikes.length);
  setIsLiked(!isLiked);
  console.log("isLiked after update:", !isLiked);
  console.log(commentLikes.length);
};

  // share menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleShareClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <>

      {/* <!-- commentstats --> */}
      <div className="parent-news-feed-comments-stats-container">
        <div className="child-news-feed-comments-stats-container">
          <div className="grandchild-news-feed-comments-stats-container">
            {/* <!-- likes count--> */}
            <div className="parent-news-feed-comments-stats-count-container">
              <div className="child-news-feed-comments-stats-count-container">
                <p className="news-feed-live-comments-stats-count">
                  {commentLikes.length} Likes
                </p>
              </div>
            </div>
            {/* <!-- replies - likes - share --> */}
            <div className="news-feed-comments-comment-like-share-container">
              {/* like */}
              <div className="news-feed-comments-like-container">
                <button className="news-feed-comments-like-button">
                  <svg onClick={handleLikeClick} className="news-feed-comments-like-icon" width="24" height="24"
                    viewBox="0 0 24 24" alt="Like" role="img">
                    <path fill={isLiked ? 'red' : 'currentColor'} fillRule="evenodd"
                      d="M13.275 8.752a1.5 1.5 0 0 1-2.55 0C9.75 7.18 8.719 5.617 6.565 6.074 5.248 6.352 4 7.433 4 9.644c0 2.153 1.348 4.592 4.259 7.236A28.475 28.475 0 0 0 12 19.74a28.475 28.475 0 0 0 3.741-2.86C18.651 14.236 20 11.797 20 9.643c0-2.21-1.25-3.29-2.564-3.57-2.155-.456-3.187 1.106-4.16 2.68Zm-2.581-3.48C7.634 2.58 2 4.217 2 9.643c0 2.996 1.85 5.934 4.914 8.717 1.478 1.343 3.1 2.585 4.839 3.575a.5.5 0 0 0 .494 0c1.739-.99 3.361-2.232 4.84-3.575C20.148 15.577 22 12.64 22 9.643c0-5.426-5.634-7.062-8.694-4.371A5.287 5.287 0 0 0 12 7.04a5.287 5.287 0 0 0-1.306-1.77Z"
                      clipRule="evenodd"></path>
                  </svg>
                  <div className="news-feed-comments-like-button-title-container">
                    <div onClick={handleLikeClick} className="news-feed-comments-like-button-title">Like</div>
                  </div>
                </button>
              </div>
            </div>
            {/* reply */}
            {/* <div className="news-feed-comments-comment-like-share-container">
              <div className="news-feed-comments-like-container">
                <button className="news-feed-comments-like-button">
                  <svg className="news-feed-comments-like-icon" width="24" height="24"
                    fill="none" viewBox="0 0 24 24" alt="Reply" role="img">
                    <path fill="currentColor" fillRule="evenodd"
                      d="M2 10.031C2 5.596 5.574 2 10 2h4c4.427 0 8 3.596 8 8.031 0 4.435-3.573 8.031-8 8.031h-1.52a17.033 17.033 0 0 1-1.377 1.467c-.991.938-2.456 2.079-4.086 2.437a1.403 1.403 0 0 1-1.458-.565 1.55 1.55 0 0 1-.195-1.394c.28-.823.395-1.734.434-2.464.014-.257.018-.485.018-.672A8.017 8.017 0 0 1 2 10.031Zm5.798 6.178a7.02 7.02 0 0 1 .016.418c.005.252.004.606-.019 1.023-.03.573-.103 1.285-.266 2.024.775-.377 1.54-.974 2.202-1.598a15.066 15.066 0 0 0 1.448-1.586l.017-.022.003-.004a1 1 0 0 1 .801-.402h2c3.314 0 6-2.692 6-6.03C20 6.691 17.314 4 14 4h-4c-3.314 0-6 2.692-6 6.031 0 2.336 1.32 4.36 3.258 5.359.308.159.515.474.54.82Z"
                      clipRule="evenodd"></path>
                  </svg>
                  <div className="news-feed-comments-like-button-title-container">
                    <div className="news-feed-comments-like-button-title">{comment.numComments} Replies</div>
                  </div>
                </button>
              </div>
            </div> */}
            {/* share */}
            <div className="news-feed-comments-comment-like-share-container">
              <div className="news-feed-comments-like-container">
                <button className="news-feed-comments-like-button">
                  <svg onClick={handleShareClick} className="news-feed-comments-like-icon" width="24" height="24"
                    fill="none" viewBox="0 0 24 24" alt="Share" role="img">
                    <path fill="currentColor" fillRule="evenodd"
                      d="M11.617 2.076a1 1 0 0 1 1.09.217l9 9a1 1 0 0 1 0 1.414l-9 9A1 1 0 0 1 11 21v-4.436c-2.849.366-5.261 2.271-6.384 4.837a1 1 0 0 1-1.856-.06C2.338 20.182 2 18.86 2 17.5a9.959 9.959 0 0 1 9-9.951V3a1 1 0 0 1 .617-.924ZM13 5.414V8.5a1 1 0 0 1-1 1c-4.448 0-8 3.552-8 8 0 .31.023.625.066.94C5.905 16.067 8.776 14.5 12 14.5a1 1 0 0 1 1 1v3.086L19.586 12 13 5.414Z"
                      clipRule="evenodd"></path>
                  </svg>
                  <div className="news-feed-comments-like-button-title-container">
                    <div onClick={handleShareClick} className="news-feed-comments-like-button-title">Share</div>
                    {isMenuOpen && (
                      <div className="news-feed-comments-share-menu">
                        <button>
                          <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.neighborhoodnode.com/">
                            <img className="news-feed-social-share-company-logo" src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/9c885269569db3947bfe.svg" alt="facebook" />
                          </a>
                          <script async src="https://platform.twitter.com/widgets.js" ></script>
                        </button>
                        <button>
                          <a href="https://twitter.com/intent/tweet?button_hashtag=share&ref_src=twsrc%5Etfw">
                            <img className="news-feed-social-share-company-logo" src="https://www.vhv.rs/dpng/d/146-1461722_twitter-circle-twitter-logo-png-transparent-png.png" alt="twitter" />
                          </a>
                          <script async src="https://platform.twitter.com/widgets.js" ></script>
                        </button>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
