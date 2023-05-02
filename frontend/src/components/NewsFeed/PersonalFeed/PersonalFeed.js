import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, fetchPosts } from '../../../store/posts';
import CreatePostBox from './CreatePostBox/CreatePostBox'
import Post from "./Post/Post";
import './PersonalFeed.css';

export default function PersonalFeed(props) {

  // Grabs the current user from the state
  const sessionUser = useSelector((state) => state.session.user);

  // Fetches the post data for filling
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);

  // Filters the posts so that we only get the neighborhood associated with the current user
  const filteredPosts = posts.filter(post => post.neighborhoodId === sessionUser?.neighborhoodId);

  // Sorts the posts so that the newest ones show first
  const sortedPosts = filteredPosts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  return (
    <>

      <div className="news-feed-scroll">

        <CreatePostBox />

        {sortedPosts.map(post => (

          <div className="parent-news-feed-post-container" key={post.id}>
            <div className="news-feed-post-container">
              <div className="news-feed-post-media-container">

                <Post post={post} />

              </div>
            </div>
          </div>

        ))}


      </div>

    </>
  );

};
