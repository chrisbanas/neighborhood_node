import csrfFetch from "./csrf.js";

export const RECEIVE_POSTS = 'posts/RECEIVE_POSTS'
export const RECEIVE_POST = 'posts/RECEIVE_POST'
export const REMOVE_POST = 'posts/REMOVE_POST'


// Action objects used in the reducer

// Includes comments and likes for comments in the payload. We use payload instead of comments because it includes more than just comments

export function receivePosts(payload) {
  return {
    type: RECEIVE_POSTS,
    payload
  }
}

// whats returnted -> {type: RECEIVE_POST, post: {id: 2, body: hello}}
export function receivePost(post) {
  return {
    type: RECEIVE_POST,
    post
  }
}

export function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId
  }
}

export function getPost(postId) {
  return function (state) {
    return state.posts ? state.posts[postId] : null
  }
}

export function getPosts(state) {
  return state.posts ? Object.values(state.posts) : []
}

// Thunk actions. They start at dispatch

export const fetchPosts = () => (dispatch) => (
  csrfFetch(`/api/posts`)
    .then(response => response.json())
    .then(data => dispatch(receivePosts(data)))
    .catch(error => console.error('something went wrong'))
)

export const fetchPost = postId => (dispatch) => (
  csrfFetch(`/api/posts/${postId}`)
    .then(response => response.json())
    .then(data => dispatch(receivePost(data)))
    .catch(error => console.error('something went wrong'))
)

// Mike and I changed this to handle photos. Instead of a sinle line return it is now a multi line with curlies.

export const createPost = post => (dispatch) => {
  let postPackage = post;
  if (!(post instanceof FormData)) {
    postPackage = JSON.stringify({ post })
  }
  csrfFetch(`/api/posts`, {
    method: 'POST',
    body: postPackage
  })
    .then(response => response.json())
    .then(data => {
      dispatch(receivePost(data));
      dispatch(fetchPosts()); // Dispatch a new action to fetch all posts need this or it won't auto update
    })
    .catch(error => console.error('something went wrong'))
}

// export const updatePost = post => (dispatch) => {
//   let postPackage = post;
//   if (!(post instanceof FormData)) {
//     postPackage = JSON.stringify({ post })
//   }

//   const postId = post instanceof FormData ? post.get('post[id]') : post.post.id;
//   console.log(postId);

//   csrfFetch(`/api/posts/${postId}`, {
//     method: `PATCH`,
//     body: postPackage
//   })
//     .then(response => response.json())
//     .then(data => {
//       dispatch(receivePost(data));
//       dispatch(fetchPosts());
//     })
//     .catch(error => console.error('Something went wrong:', error));
// }


export const updatePost = post => (dispatch) => (
  csrfFetch(`/api/posts/${post.id}`, {
    method: `PATCH`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => {
      dispatch(receivePost(data));
      dispatch(fetchPosts()); // Dispatch a new action to fetch all posts need this or it won't auto update
    })
    .catch(error => console.error('something went wrong'))
);

export const deletePost = postId => (dispatch) => (
  csrfFetch(`/api/posts/${postId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        dispatch(removePost(postId))
      }
    })
    .catch(error => console.error('something went wrong'))
)

// Reducer which is used in the store. Since receive posts is a payload we have to key into the payload to grab posts

export default function postsReducer(state = {}, action) {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.payload.posts
    case RECEIVE_POST:
      newState[action.post.id] = action.post
      return newState
    case REMOVE_POST:
      delete newState[action.postId]
      return newState
    default:
      return state
  }
}
