import PostSummaryItem from "./PostSummaryItem.js";
import React from "react";
import { useSelector } from "react-redux";

const PostSummaryList = () => {
    const exploreItems = useSelector(state => state.postssummary);
    return (
        <>
        {
            exploreItems.map((item) => {
            return(
            <div className="wd-post row p-2">
                <PostSummaryItem post={item} key={item._id}/>
            </div>
                )
            }       
        )}
        </>
    )}

export default PostSummaryList;
