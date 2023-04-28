export const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'comments/RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'comments/REMOVE_COMMENT'

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
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

export const fetchComments = () => (dispatch) => (
  fetch(`/api/comments`)
    .then(response => response.json())
    .then(data => dispatch(receiveComments(data)))
    .catch(error => console.error('something went wrong'))
)

export const fetchComment = commentId => (dispatch) => (
  fetch(`/api/comments/${commentId}`)
    .then(response => response.json())
    .then(data => dispatch(receiveComment(data)))
    .catch(error => console.error('something went wrong'))
)

export const createComment = comment => (dispatch) => (
  fetch(`/api/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
    .then(response => response.json())
    .then(data => dispatch(receiveComment(data)))
    .catch(error => console.error('something went wrong'))
)

export const updateComment = comment => (dispatch) => (
  fetch(`/api/comments/${comment.id}`, {
    method: `PATCH`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(data => dispatch(receiveComment(data)))
    .catch(error => console.error('something went wrong'))
);

export const deleteComment = commentId => (dispatch) => (
  fetch(`/api/comments/${commentId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        dispatch(removeComment(commentId))
      }
    })
    .catch(error => console.error('something went wrong'))
)


export default function commentsReducer(state = {}, action) {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments
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
