import { combineReducers, applyMiddleware, compose } from 'redux';
import { legacy_createStore as createStore} from 'redux' // Should update this to the new function
import thunk from 'redux-thunk';
import session from './session'
import postsReducer from './posts';

const rootReducer = combineReducers({
    session,
    posts: postsReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
