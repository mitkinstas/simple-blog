import { v4 } from 'uuid';

export const ADD_POST = 'posts/ADD_POST';
export const GET_POST = 'posts/GET_POST';
export const RESET_POST_INFO = 'posts/RESET_POST_INFO';

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                posts: [...state.posts, { ...action.post, id: v4() }]
            };
        case GET_POST:
            const id = action.id;
            const post = state.posts.find(data => {
                return data.id === id;
            });
            return {
                ...state,
                postInfo: post
            };

        case RESET_POST_INFO:
            return {
                ...state,
                postInfo: null
            };

        default:
            return state;
    }
};

export const addPost = post => ({
    type: ADD_POST,
    post
});

export const getPost = id => ({
    type: GET_POST,
    id: id
});

export const resetPostInfo = id => ({
    type: RESET_POST_INFO
});
