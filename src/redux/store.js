import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './';
export const history = createHistory();

const initialState = {
    posts: JSON.parse(localStorage.getItem('blogPosts')) || { posts: [] }
};

const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
    middleware.push(logger);
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

store.subscribe(() => {
    const { posts } = store.getState();
    localStorage.setItem('blogPosts', JSON.stringify(posts));
});

export default store;
