import csrfFetch from "./csrf.js";

export const RECEIVE_LIKES = 'likes/RECEIVE_LIKES'
export const RECEIVE_LIKE = 'likes/RECEIVE_LIKE'
export const REMOVE_LIKE = 'likes/REMOVE_LIKE'

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

export function getLikes(state) {
  return state.likes ? Object.values(state.likes) : []
}

// export const fetchLikes = () => (dispatch) => (
//   fetch(`/api/likes`)
//     .then(response => response.json())
//     .then(data => dispatch(receiveLikes(data)))
//     .catch(error => console.error('something went wrong'))
// )

// export const fetchLike = likeId => (dispatch) => (
//   fetch(`/api/likes/${likeId}`)
//     .then(response => response.json())
//     .then(data => dispatch(receiveLike(data)))
//     .catch(error => console.error('something went wrong'))
// )

// thunk action

export const createLike = like => (dispatch) => (
  csrfFetch(`/api/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(like)
  })
    .then(response => response.json())
    .then(data => dispatch(receiveLike(data)))
    .catch(error => console.error('something went wrong'))
)

// export const updateLike = like => (dispatch) => (
//   fetch(`/api/likes/${like.id}`, {
//     method: `PATCH`,
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(like)
//   })
//     .then(res => res.json())
//     .then(data => dispatch(receiveLike(data)))
//     .catch(error => console.error('something went wrong'))
// );

export const deleteLike = likeId => (dispatch) => (
  csrfFetch(`/api/likes/${likeId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        dispatch(removeLike(likeId))
      }
    })
    .catch(error => console.error('something went wrong'))
)


export default function likesReducer(state = {}, action) {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_LIKES:
      return action.likes //action.payload.likes
    case RECEIVE_LIKE:
      newState[action.like.id] = action.like
      return newState
    case REMOVE_LIKE:
      delete newState[action.likeId]
      return newState
    default:
      return state
  }
}
