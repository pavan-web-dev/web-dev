import postJson from './data/posts.json';

const postReducer = (state = postJson, action) =>{
    switch (action.type) {
        case 'create-tuit':
            const newTuit = {
                "avatar_location": "https://i.ibb.co/C0Rfsd7/kk.jpg",
                "userName": "Cute Koala",
                "handle": "cutek",
                "time": (new Date()).getHours() + 'h',
                // "title": "Missing Koala",
                "image": "https://i.ibb.co/v4rw91M/kk1.jpg",
                "post_title": action.tuit,
                "post_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "num_comment": (Math.floor(Math.random() * 1000)),
                "num_retweet": (Math.floor(Math.random() * 1000)),
                "num_likes": (Math.floor(Math.random() * 1000)),
                "_id":"quickId" + (Math.floor(Math.random() * 100000) + ''),
                "liked": false
            }
            return [newTuit, ...state];
        case 'delete-tuit':
            return state.filter(tuit => tuit._id !== action.tuit._id)
        case 'like-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                if(tuit.liked === true) {
                    tuit.liked = false;
                    tuit.num_likes--;
                  } else {
                    tuit.liked = true;
                    tuit.num_likes++;
                  }
                  return tuit;
                } 
                else {
                  return tuit;
                }
            })
        default:
            return(state);
    }
    
};

export default postReducer;