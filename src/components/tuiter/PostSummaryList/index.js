import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.json"
import React from "react";

const PostSummaryList = () => {

    return (
        <>
        {
            exploreItems.map((item) => {
            return(
            <div className="wd-post row p-2">
                <PostSummaryItem post={item} />
            </div>
                )
            }       
        )}
        </>
    )}

export default PostSummaryList;
