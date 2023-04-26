/*
Export the following action constants and write the corresponding actions:

1. `RECEIVE_POSTS` (corresponding action should have a `posts` payload)
2. `RECEIVE_POST` (corresponding action should have a `post` payload)
3. `REMOVE_POST` (corresponding action should have a `postId` payload)
*/

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

/*
Export a `getPost` selector that takes in a `postId` and returns the specified
post from the store.

Export a `getPosts` selector that returns an array of all the posts in the
store.
*/

export function getPost(postId) {
    return function (state) {
        return state.posts ? state.posts[postId] : null
    }
}

export function getPosts(state) {
    return state.posts ? Object.values(state.posts) : []
}

/*
Export the following functions with the specified parameters:

1. `fetchPosts`
2. `fetchPost(postId)`
3. `createPost(post)`
4. `updatePost(post)`
5. `deletePost(postId)`

Each function should call `fetch` to perform the desired database operation and
dispatch the appropriate action upon a successful response. (You do not need to
do anything if the `fetch` response is unsuccessful.)
*/

export const fetchPosts = () => (dispatch) => (
    fetch(`/api/posts`)
        .then(response => response.json())
        .then(data => dispatch(receivePosts(data)))
        .catch(error => console.error('something went wrong'))
)

export const fetchPost = postId => (dispatch) => (
    fetch(`/api/posts/${postId}`)
        .then(response => response.json())
        .then(data => dispatch(receivePost(data)))
        .catch(error => console.error('something went wrong'))
)

export const createPost = post => (dispatch) => (
    fetch(`/api/posts`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(data => dispatch(receivePost(data)))
    .catch(error => console.error('something went wrong'))
)

export const updatePost = post => (dispatch) => (
    fetch(`/api/posts/${post.id}`, {
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
    fetch(`/api/posts/${postId}`,{
        method: 'DELETE'
    })
    .then(response => {
        if(response.ok) {
        dispatch(removePost(postId))
        }
    })
    .catch(error => console.error('something went wrong'))
)

/*
Export a `postsReducer` function as the default export. It should take in the
old state and an action. It should appropriately handle all post actions, as
defined in the test specs.
*/

export default function postsReducer( state = {}, action) {
    const newState = { ...state };
    switch(action.type){
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
