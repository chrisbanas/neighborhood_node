import csrfFetch from "./csrf.js";
import { fetchPosts } from "./posts.js"; //used in create update and delete otherwise the data would not render without refresh

export const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'comments/RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'comments/REMOVE_COMMENT'

// Action objects used in the reducer

// Includes posts and likes for comments and posts in the payload. We use payload instead of posts because it includes more than just posts

export function receiveComments(payload) {
  return {
    type: RECEIVE_COMMENTS,
    payload
  }
}

export function receiveComment(comment) {
  return {
    type: RECEIVE_COMMENT,
    comment
  }
}

export function removeComment(commentId) {
  return {
    type: REMOVE_COMMENT,
    commentId
  }
}

export function getComment(commentId) {
  return function (state) {
    return state.comments ? state.comments[commentId] : null
  }
}

export function getComments(state) {
  return state.comments ? Object.values(state.comments) : []
}

// Thunk Actions

export const fetchComments = () => (dispatch) => (
  csrfFetch(`/api/comments`)
    .then(response => response.json())
    .then(data => dispatch(receiveComments(data)))
    .catch(error => console.error('something went wrong'))
)

export const fetchComment = commentId => (dispatch) => (
  csrfFetch(`/api/comments/${commentId}`)
    .then(response => response.json())
    .then(data => dispatch(receiveComment(data)))
    .catch(error => console.error('something went wrong'))
)

export const createComment = comment => (dispatch) => (
  csrfFetch(`/api/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment })
  })
    .then(response => response.json())
    .then(data => {
      dispatch(receiveComment(data));
      dispatch(fetchPosts()) // Dispatch a new action to fetch all posts need this or it won't auto update
    })
    .catch(error => console.error('something went wrong'))
)

export const updateComment = comment => (dispatch) => (
  csrfFetch(`/api/comments/${comment.id}`, {
    method: `PATCH`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
    .then(response => response.json())
    .then(data => {
      dispatch(receiveComment(data));
      dispatch(fetchPosts()) // Dispatch a new action to fetch all posts need this or it won't auto update
    })
    .catch(error => console.error('something went wrong'))
);

export const deleteComment = commentId => (dispatch) => (
  csrfFetch(`/api/comments/${commentId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        dispatch(removeComment(commentId))
        dispatch(fetchPosts()) // Dispatch a new action to fetch all posts need this or it won't auto update
      }
    })
    .catch(error => console.error('something went wrong'))
)

// Reducer which is used in the store.

export default function commentsReducer(state = {}, action) {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.payload.comments
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment
      return newState
    case REMOVE_COMMENT:
      delete newState[action.commentId]
      return newState
    default:
      return state
  }
}
