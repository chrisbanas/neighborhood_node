import React from "react";
import './Post.css';
import PostOwnerInfo from "./PostOwnerInfo/PostOwnerInfo";
import PostBody from "./PostBody/PostBody";
import PostStats from "./PostStats/PostStats";
import PostCommentsBox from "./PostCommentsBox/PostCommentsBox";

export default function Post({post}) {

  return (

    <>
      <PostOwnerInfo post={post} />
      <PostBody post={post} />
      <PostStats post={post} />
      <PostCommentsBox post={post}/>
    </>

  )

}
