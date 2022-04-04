import { CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT } from "../actions/tuits-actions.js";

// import postJson from './data/posts.json';

const postReducer = (state = [], action) =>{
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;

        case DELETE_TUIT:
            return state.filter(t => t._id !== action.tuit._id);

        case CREATE_TUIT:
            return [action.newTuit, ...state];

        case UPDATE_TUIT:
            return state.map(tu => tu._id === action.tuit._id ? action.tuit : tu);
            
        default:
            return(state);
    }
    
};

export default postReducer;