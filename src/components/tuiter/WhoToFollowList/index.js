import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.json";
import React from "react";

const WhoToFollowList = () => {
    return (
        <>
            <ul class="list-group">
            <a href="#" class="list-group-item">
                <span class="d-none d-lg-block bs-bold">Who to follow</span>
            </a>    
            {
            who.map((item) => {
            return( <WhoToFollowListItem who={item} /> );
        })
            }
    </ul>
    </>
)};

export default WhoToFollowList;