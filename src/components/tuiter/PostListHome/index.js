import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PostItem from "./PostItem.js";
// import postItems from "./posts.json"
import {useDispatch} from "react-redux";
import { deleteTuit, findAllTuits } from "../actions/tuits-actions.js";

// import * as service from '../service/tuits-service.js';

const PostList = () => {

    const postItems = useSelector(state => state.posts);
    const dispatch = useDispatch();



    useEffect(() => findAllTuits(dispatch), [dispatch]);
    
    return (
        <>
        {postItems.map((item) => {
            return(
            <> 
            <i onClick={() =>
       deleteTuit(dispatch, item)}
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
