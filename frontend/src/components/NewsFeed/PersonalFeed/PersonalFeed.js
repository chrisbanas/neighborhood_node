import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, fetchPosts } from '../../../store/posts';

import CreatePostBox from './CreatePostBox/CreatePostBox'
import Post from "./Post/Post";
import './PersonalFeed.css';


// import { useHistory } from "react-router-dom";
// import * as sessionActions from '../../../store/session';
// post reducer
// import { getPosts, fetchPosts } from '../store/posts';

// const { postId } = useParams();
// const post = useSelector(getPost(postId));


export default function PersonalFeed(props) {
  // const history = useHistory();

  //fetches the post data for filling
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  return (
    <>

      <div className="news-feed-scroll">

        <CreatePostBox />

        {/* <!-- postbox this is the full box with everything--> */}
        {posts.map(post => (

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
