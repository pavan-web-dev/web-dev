import React from "react";
import PostItem from "./PostItem.js";
import postItems from "./posts.json"

const PostList = () => {

    return (
        <>
        {postItems.map((item) => {
            return(
            <div class="wd-postlist row mt-2">
                <PostItem post = {item} />
            </div>
                )
        })
        }
        </>
    
)};

export default PostList;
