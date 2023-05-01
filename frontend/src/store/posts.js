import csrfFetch from "./csrf.js";

export const RECEIVE_POSTS = 'posts/RECEIVE_POSTS'
export const RECEIVE_POST = 'posts/RECEIVE_POST'
export const REMOVE_POST = 'posts/REMOVE_POST'

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

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

export const createPost = post => (dispatch) => (
  csrfFetch(`/api/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({post})
  })
    .then(response => response.json())
    .then(data => dispatch(receivePost(data)))
    .catch(error => console.error('something went wrong'))
)

export const updatePost = post => (dispatch) => (
  csrfFetch(`/api/posts/${post.id}`, {
    method: `PATCH`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => dispatch(receivePost(data)))
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


export default function postsReducer(state = {}, action) {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
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
