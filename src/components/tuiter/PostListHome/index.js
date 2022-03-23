import React from "react";
import { useSelector } from "react-redux";
import PostItem from "./PostItem.js";
// import postItems from "./posts.json"
import {useDispatch} from "react-redux";



const PostList = () => {

    const postItems = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
      };
    
    return (
        <>
        {postItems.map((item) => {
            return(
            <> 
            <i onClick={() =>
       deleteTuit(item)}
       className="fas fa-times fa-1x 
                  fa-pull-right"></i>   
            <div className="wd-postlist row mt-2">
                <PostItem post = {item} key = {item._id}/>
            </div>
            </>
                )
        })
        }
        </>
    
)};

export default PostList;
