import csrfFetch from "./csrf.js";
import { RECEIVE_POSTS } from "./posts.js"; // Used in the reducer with the posts index payload
import { RECEIVE_COMMENTS } from "./comments.js"; // Used in the reducer with the comments index payload

export const RECEIVE_LIKES = 'likes/RECEIVE_LIKES'
export const RECEIVE_LIKE = 'likes/RECEIVE_LIKE'
export const REMOVE_LIKE = 'likes/REMOVE_LIKE'

// Action objects used in the reducer

export function receiveLikes(likes) {
  return {
    type: RECEIVE_LIKES,
    likes
  }
}

export function receiveLike(like) {
  return {
    type: RECEIVE_LIKE,
    like
  }
}

export function removeLike(likeId) {
  return {
    type: REMOVE_LIKE,
    likeId
  }
}

export function getLike(likeId) {
  return function (state) {
    return state.likes ? state.likes[likeId] : null
  }
}

// Custom functions to grab just the likes for posts or comments to be used in the component

export function getPostLikes(post) {
  return function (state) {
    return state.likes ? Object.values(state.likes).filter(like => post.id === like.likeableId && like.likeableType === "Post") : []
  }
}

export function getCommentLikes(comment) {
  return function (state) {
    return state.likes ? Object.values(state.likes).filter(like => comment.id === like.likeableId && like.likeableType === "Comment") : []
  }
}

// Thunk Actions

export const createLike = like => (dispatch) => (
  csrfFetch(`/api/${like.likeableType.toLowerCase()}s/${like.likeableId}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({like})
  })
    .then(response => response.json())
    .then(data => {
      dispatch(receiveLike(data));
    })
    .catch(error => console.error('something went wrong'))
)

export const deleteLike = ({id, liker, likeableId, likeableType }) => (dispatch) => (
  csrfFetch(`/api/${likeableType.toLowerCase()}s/${likeableId}/unlike`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        dispatch(removeLike(id))
      }
    })
    .catch(error => console.error('something went wrong'))
)

// Reducer which is used in the store.

export default function likesReducer(state = {}, action) {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_LIKES:
      return action.likes
    case RECEIVE_LIKE:
      newState[action.like.id] = action.like
      return newState
    case REMOVE_LIKE:
      delete newState[action.likeId]
      return newState
    case RECEIVE_POSTS:
      return action.payload.likes // this is needed to grab the likes for the posts
    case RECEIVE_COMMENTS:
      return action.payload.likes // this is needed to grab the likes for the comments although the site works without it
    default:
      return state
  }
}
