import React from "react";
import PostMapWrapper from "./PostMap/PostMap";
import './PostBody.css';

export default function PostBody({post}) {

  return (

    <>
      <div className="news-feed-post-body">
        <p className="news-feed-post-content">
          {post.body}
        </p>
        {post.photoUrls && post.photoUrls[0] &&
          <img className="news-feed-post-img" src={post.photoUrls[0]} alt="post" />}
        {post.id === 1 ? <PostMapWrapper /> : ""}
      </div>
    </>

  )

}
